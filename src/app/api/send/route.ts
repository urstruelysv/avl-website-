import { EmailTemplate } from "../../components/email-template.tsx";
import { Resend } from "resend";
import { NextResponse } from "next/server";
import { ContactFormValues } from "@/lib/schema";
import * as React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Parse the request body
    const data: ContactFormValues = await request.json();

    // Validate required inputs
    if (!data.email || !data.firstName) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

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
