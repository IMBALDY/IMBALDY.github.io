import { NextRequest, NextResponse } from "next/server";

// In-memory storage for development
// In production, replace with Vercel KV or another database
let visitors: Array<{ lat: number; lon: number; timestamp: number }> = [];

export async function POST(request: NextRequest) {
  try {
    // Get IP address
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0] : "127.0.0.1";
    
    // Skip localhost
    if (ip === "127.0.0.1" || ip === "::1") {
      return NextResponse.json({ message: "Localhost not tracked" });
    }

    // Get geolocation from IP
    // Using ipapi.co free service (rate limited to 1000 requests/day)
    const geoResponse = await fetch(`https://ipapi.co/${ip}/json/`, {
      headers: {
        "User-Agent": "academic-homepage/1.0",
      },
    });

    if (!geoResponse.ok) {
      console.error("Failed to get geolocation");
      return NextResponse.json({ message: "Geolocation failed" }, { status: 500 });
    }

    const geoData = await geoResponse.json();
    
    if (geoData.latitude && geoData.longitude) {
      const visitorData = {
        lat: geoData.latitude,
        lon: geoData.longitude,
        timestamp: Date.now(),
      };

      // Add to in-memory storage
      visitors.push(visitorData);

      // Keep only last 1000 visitors
      if (visitors.length > 1000) {
        visitors = visitors.slice(-1000);
      }

      return NextResponse.json({ 
        message: "Location tracked",
        location: visitorData 
      });
    }

    return NextResponse.json({ message: "No location data" });
  } catch (error) {
    console.error("Error tracking location:", error);
    return NextResponse.json(
      { error: "Failed to track location" },
      { status: 500 }
    );
  }
}

