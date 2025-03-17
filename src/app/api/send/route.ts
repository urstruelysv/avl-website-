import { EmailTemplate } from "../../components/email-template.tsx";
import { Resend } from "resend";
import { NextResponse } from "next/server";
import { ContactFormValues } from "@/lib/schema";

const resend = new Resend(process.env.RESEND_API_KEY);

// Remove any default export and use named exports instead
export async function POST(request: Request) {
  try {
    // Parse the request body
    const data: ContactFormValues = await request.json();

    // Validate inputs
    if (!data.email || !data.firstName) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Send email
    const result = await resend.emails.send({
      from: "Aethos Company <ceo@aethoscompany.in>", // Verified sender
      to: ["hello@aethoscompany.in"], // Update with your actual email
      subject: `New Contact Form Submission from ${data.firstName}`,
      react: EmailTemplate({
        firstName: data.firstName,
        email: data.email,
        companyName: data.companyName,
        message: data.message,
      }),
      replyTo: data.email,
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
