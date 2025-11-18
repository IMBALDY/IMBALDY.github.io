import { NextResponse } from "next/server";

// In-memory storage for development
// In production, replace with Vercel KV or another database
let visitors: Array<{ lat: number; lon: number; timestamp: number }> = [];

export async function GET() {
  try {
    // Return actual visitor data (empty array if no visitors yet)
    return NextResponse.json(visitors);
  } catch (error) {
    console.error("Error fetching visitors:", error);
    return NextResponse.json({ error: "Failed to fetch visitors" }, { status: 500 });
  }
}

// Endpoint to manually add visitors (for testing)
export async function POST(request: Request) {
  try {
    const body = await request.json();
    visitors.push(body);
    return NextResponse.json({ message: "Visitor added", data: body });
  } catch (error) {
    console.error("Error adding visitor:", error);
    return NextResponse.json({ error: "Failed to add visitor" }, { status: 500 });
  }
}

