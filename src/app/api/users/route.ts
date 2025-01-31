/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch users" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      jobTitle,
      companyName,
      hrEmail,
      hrMobile,
      currentStatus,
      description,
    } = body;

    if (
      !jobTitle ||
      !companyName ||
      !hrMobile ||
      !hrEmail ||
      !currentStatus ||
      !description
    ) {
      return NextResponse.json(
        { message: "Please provide all the required fields" },
        { status: 400 }
      );
    }

    const user = await prisma.user.create({
      data: body,
    });
    if (!user) {
      return NextResponse.json(
        { message: "Error During creating user" },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        { message: "User created successfully" },
        { status: 201 }
      );
    }
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { success: false, message: "Failed to create user" },
      { status: 500 }
    );
  }
}
