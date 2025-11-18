"use client";

import { useEffect, useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

interface VisitorLocation {
  lat: number;
  lon: number;
  timestamp: number;
}

export default function VisitorMap() {
  const [visitors, setVisitors] = useState<VisitorLocation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Track current visitor
    fetch("/api/track-location", { method: "POST" })
      .catch((err) => console.error("Failed to track location:", err));

    // Load existing visitors
    fetch("/api/visitors")
      .then((res) => res.json())
      .then((data) => {
        setVisitors(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load visitors:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="w-full h-96 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
        <p className="text-gray-600 dark:text-gray-400">Loading map...</p>
      </div>
    );
  }

  return (
    <div className="w-full bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
      <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
        <p>Total visitors: {visitors.length}</p>
        {visitors.length === 0 && (
          <p className="text-xs mt-1 italic">No visitors tracked yet. Tracking will start after deployment.</p>
        )}
      </div>
      
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 150,
        }}
        className="w-full h-auto"
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#e5e7eb"
                stroke="#9ca3af"
                strokeWidth={0.5}
                style={{
                  default: { outline: "none" },
                  hover: { outline: "none", fill: "#d1d5db" },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>
        
        {visitors.map((visitor, index) => (
          <Marker key={index} coordinates={[visitor.lon, visitor.lat]}>
            <circle
              r={3}
              fill="#ef4444"
              stroke="#ffffff"
              strokeWidth={1}
              opacity={0.8}
            />
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
}

