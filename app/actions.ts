// app/actions.ts
"use server";

import { Resend } from 'resend';

// Assuming you are using the same .env.local setup as Maha Strategies
const resend = new Resend(process.env.RESEND_API_KEY);

export async function joinNetworkAction(prevState: any, formData: FormData) {
  const email = formData.get("email") as string;

  if (!email) {
    return { error: "No return vector provided." };
  }

  try {
    await resend.emails.send({
      from: "Acme <onboarding@resend.dev>", // Change to a verified domain later
      to: "mayone@mahastrategies.com",
      subject: `[NEW NODE ADDED] Structural Countermeasures Network`,
      text: `
NEW NETWORK JOIN REQUEST
-------------------------
A new user has requested to join the network and receive intelligence updates.

RETURN VECTOR (EMAIL): ${email}
      `,
    });

    return { success: true, error: null };
  } catch (error) {
    console.error("Network join failed:", error);
    return { success: false, error: "Anomaly detected. Transmission failed." };
  }
}