import { EmailTemplate } from "../../components/email-template.tsx";
import { Resend } from "resend";
import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/schema";
import * as React from "react";


export async function POST(request: Request) {
  try {
    let payload: unknown;
    try {
      payload = await request.json();
    } catch {
      return NextResponse.json({ error: "Please send a valid contact form." }, { status: 400 });
    }

    // Quietly accept bot submissions before checking credentials or contacting email delivery.
    if (payload && typeof payload === "object" && "website" in payload && payload.website) {
      return NextResponse.json({ success: true });
    }

    const parsed = contactFormSchema.safeParse(payload);
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message || "Please check the required fields." },
        { status: 400 }
      );
    }
    const data = parsed.data;

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: "Email delivery is unavailable. Please email hello@aethoscompany.in." }, { status: 503 });
    }
    const resend = new Resend(process.env.RESEND_API_KEY);
    // Send email using production values
    const result = await resend.emails.send({
      from: "Aethos Company <ceo@aethoscompany.in>", // Verified sender
      to: ["hello@aethoscompany.in"], // Production recipient
      subject: `New Contact Form Submission from ${data.firstName}`,
      react: React.createElement(EmailTemplate, {
        firstName: data.firstName,
        email: data.email,
        companyName: data.companyName,
        message: data.message,
      }),
      replyTo: data.email, // Allows replies to go to the sender of the form
    });

    if (result.error) {
      console.error("Resend API error:", result.error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data: result.data });
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
