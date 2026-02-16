import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const data = await req.json();

  await resend.emails.send({
    from: "AI Coaching <onboarding@resend.dev>",
    to: "jefinno73@gmail.com",
    subject: "New AI Coaching Application",
    html: `
      <h2>New AI Coaching Application</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>City:</strong> ${data.city}</p>
      <hr />
      <p><strong>Who they are:</strong><br/>${data.whoYouAre}</p>
      <p><strong>Primary Goal:</strong> ${data.primaryGoal}</p>
      <p><strong>Current Situation:</strong><br/>${data.currentSituation}</p>
      <p><strong>Biggest Blocker:</strong><br/>${data.biggestBlocker}</p>
      <p><strong>Workflow Requested:</strong><br/>${data.workflow}</p>
      <p><strong>Readiness:</strong> ${data.readinessLevel}</p>
      <p><strong>Time Commitment:</strong> ${data.timeCommitment}</p>
      <p><strong>Budget:</strong> ${data.budgetMindset}</p>
      <p><strong>Why Now:</strong><br/>${data.whyNow}</p>
      <p><strong>Success Definition:</strong><br/>${data.successLooksLike}</p>
    `,
  });

  return NextResponse.json({ success: true });
}
