// app/api/contact/route.ts

import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Retrieve your custom email sending endpoint from the environment variables
    const send_email_url = process.env.SEND_EMAIL_URL;
    if (!send_email_url) {
      throw new Error("SEND_EMAIL_URL is not defined in environment variables.");
    }

    // Forward the request to your custom API endpoint (hosted on AWS)
    const response = await axios.post(
      send_email_url,
      { name, email, message },
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    // Check if the email was sent successfully
    if (response.status === 200) {
      return NextResponse.json({ success: true }, { status: 200 });
    } else {
      console.error("Error response from email API:", response.data);
      return NextResponse.json(
        { error: "Error sending email" },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Error sending email" },
      { status: 500 }
    );
  }
}
