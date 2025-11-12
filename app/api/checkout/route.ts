import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const token = req.headers.get("authorization")?.split(" ")[1];

    if (!token) {
      return NextResponse.json(
        { message: "AccessToken missing" },
        { status: 401 }
      );
    }

    const body = await req.json();
    const {
      Contact,
      Delivery,
      FirstName,
      LastName,
      Address,
      Apartment,
      PostCode,
      City,
      paymentMethod,
      userId,
    } = body;

    const order = await fetch(
      "https://e-commarce-website-eight.vercel.app/api/v1/order/create-order",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          userId,
          Contact,
          Delivery,
          FirstName,
          LastName,
          Address,
          Apartment,
          PostCode,
          City,
          paymentMethod,
        }),
      }
    ).then((res) => res.json());

    return NextResponse.json({
      message: order.message || "Order placed successfully",
      data: order.data,
    });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Server error";
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
