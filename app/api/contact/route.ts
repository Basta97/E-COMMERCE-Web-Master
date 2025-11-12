// app/api/contact/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const { Name, Email, Phone, Message, AccessToken } = body;

        const res = await fetch(
            "https://e-commarce-website-eight.vercel.app/api/v1/contact-us/add-ContactUs",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${AccessToken}`,
                },
                body: JSON.stringify({ Name, Email, Phone, Message }),
            }
        );

        const data = await res.json();

        if (!res.ok) {
            return NextResponse.json(
                { message: data.message || "Error sending message" },
                { status: res.status }
            );
        }

        return NextResponse.json(data);
    } catch (err) {
        console.error(err);
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}
