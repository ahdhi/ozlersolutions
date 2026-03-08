import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request) {
  if (!process.env.RESEND_API_KEY || !process.env.HR_EMAIL || !process.env.FROM_EMAIL) {
    return NextResponse.json(
      { error: 'Server email configuration is missing. Please contact support.' },
      { status: 500 }
    );
  }

  try {
    const formData = await request.formData();

    const fullName = formData.get('fullName');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const position = formData.get('position') || 'General Application';
    const linkedin = formData.get('linkedin') || 'Not provided';
    const message = formData.get('message') || 'Not provided';
    const resume = formData.get('resume');

    if (!fullName || !email || !phone || !resume) {
      return NextResponse.json({ error: 'Please complete all required fields.' }, { status: 400 });
    }

    const isFile = typeof resume === 'object' && typeof resume.arrayBuffer === 'function';
    if (!isFile) {
      return NextResponse.json({ error: 'Resume file is missing or invalid.' }, { status: 400 });
    }

    const MAX_BYTES = 10 * 1024 * 1024; // 10MB
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];

    if (typeof resume.size === 'number' && resume.size > MAX_BYTES) {
      return NextResponse.json({ error: 'Resume must be 10MB or smaller.' }, { status: 400 });
    }

    if (resume.type && !allowedTypes.includes(resume.type)) {
      return NextResponse.json({ error: 'Only PDF or Word documents are accepted.' }, { status: 400 });
    }

    const buffer = Buffer.from(await resume.arrayBuffer());

    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: process.env.HR_EMAIL,
      replyTo: email,
      subject: `New application: ${position} — ${fullName}`,
      text: [
        `Name: ${fullName}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Position: ${position}`,
        `LinkedIn: ${linkedin}`,
        '',
        'Message:',
        message,
      ].join('\n'),
      attachments: [
        {
          filename: resume.name || 'resume',
          content: buffer,
        },
      ],
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Application submission failed:', error);
    return NextResponse.json({ error: 'Unable to submit application right now.' }, { status: 500 });
  }
}
