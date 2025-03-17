import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  email?: string;
  companyName?: string;
  message?: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  email = "",
  companyName = "",
  message = "",
}) => (
  <div
    style={{
      fontFamily: "Arial, sans-serif",
      maxWidth: "600px",
      margin: "0 auto",
    }}
  >
    <div
      style={{ background: "#f8f8f8", padding: "20px", borderRadius: "5px" }}
    >
      <h1
        style={{
          color: "#333",
          borderBottom: "1px solid #ddd",
          paddingBottom: "10px",
        }}
      >
        New Contact Form Submission
      </h1>

      <div style={{ padding: "20px 0" }}>
        <p style={{ margin: "5px 0" }}>
          <strong>Name:</strong> {firstName}
        </p>
        {email && (
          <p style={{ margin: "5px 0" }}>
            <strong>Email:</strong> {email}
          </p>
        )}
        {companyName && (
          <p style={{ margin: "5px 0" }}>
            <strong>Company:</strong> {companyName}
          </p>
        )}
      </div>

      {message && (
        <div
          style={{
            background: "white",
            padding: "15px",
            borderRadius: "5px",
            marginTop: "10px",
          }}
        >
          <h2 style={{ color: "#444", fontSize: "18px", marginTop: "0" }}>
            Message:
          </h2>
          <p style={{ whiteSpace: "pre-wrap", lineHeight: "1.5" }}>{message}</p>
        </div>
      )}

      <div
        style={{
          marginTop: "20px",
          padding: "15px 0",
          borderTop: "1px solid #ddd",
          fontSize: "14px",
          color: "#666",
        }}
      >
        <p>This is an automated email from your website contact form.</p>
        <p>© {new Date().getFullYear()} Aeos Labs. All rights reserved.</p>
      </div>
    </div>
  </div>
);
