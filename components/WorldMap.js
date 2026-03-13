import { memo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Dubai head office coordinates
const HQ = [55.27, 25.2];

function WorldMap({ offices, activeCountry, onCountryChange }) {
  const activeOffice = offices[activeCountry];
  const highlightedCodes = new Set(
    activeOffice?.countryCodes || []
  );

  // All country codes for KDU offices
  const allOfficeCodes = new Set(
    offices.flatMap((o) => o.countryCodes)
  );

  return (
    <div className="bg-primary/[0.03] rounded-2xl border border-gray-200 overflow-hidden">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 150,
          center: [55, 20],
        }}
        width={800}
        height={450}
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const isHighlighted = highlightedCodes.has(geo.id);
              const hasOffice = allOfficeCodes.has(geo.id);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => {
                    const idx = offices.findIndex((o) =>
                      o.countryCodes.includes(geo.id)
                    );
                    if (idx !== -1) onCountryChange(idx);
                  }}
                  style={{
                    default: {
                      fill: isHighlighted
                        ? "#3379B5"
                        : hasOffice
                        ? "#a8cce4"
                        : "#e2e8f0",
                      stroke: "#fff",
                      strokeWidth: 0.5,
                      outline: "none",
                      cursor: hasOffice ? "pointer" : "default",
                      transition: "fill 0.3s ease",
                    },
                    hover: {
                      fill: isHighlighted
                        ? "#2a6a9e"
                        : hasOffice
                        ? "#7ab4d6"
                        : "#d1d9e2",
                      stroke: "#fff",
                      strokeWidth: 0.5,
                      outline: "none",
                      cursor: hasOffice ? "pointer" : "default",
                    },
                    pressed: {
                      fill: isHighlighted ? "#1f5a8a" : "#e2e8f0",
                      stroke: "#fff",
                      strokeWidth: 0.5,
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>

        {/* Connection lines from HQ to other offices */}
        {offices.map((office, i) => {
          if (i === 0) return null; // Skip HQ itself
          return (
            <Line
              key={office.country}
              from={HQ}
              to={office.coordinates}
              stroke={activeCountry === i ? "#3379B5" : "#3379B5"}
              strokeWidth={activeCountry === i ? 1.5 : 0.5}
              strokeOpacity={activeCountry === i ? 0.6 : 0.15}
              strokeLinecap="round"
              strokeDasharray="4 4"
            />
          );
        })}

        {/* Office markers */}
        {offices.map((office, i) => {
          const isActive = activeCountry === i;
          return (
            <Marker
              key={office.country}
              coordinates={office.coordinates}
              onClick={() => onCountryChange(i)}
            >
              {/* Pulse ring for active */}
              {isActive && (
                <circle
                  r={12}
                  fill="#3379B5"
                  opacity={0.2}
                  className="animate-ping"
                />
              )}
              {/* Outer ring */}
              <circle
                r={isActive ? 7 : 5}
                fill={isActive ? "#3379B5" : "#1A3E72"}
                stroke="#fff"
                strokeWidth={2}
                style={{
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              />
              {/* Inner dot */}
              <circle
                r={isActive ? 3 : 2}
                fill="#fff"
                style={{ cursor: "pointer" }}
              />
              {/* Label */}
              <text
                textAnchor="middle"
                y={isActive ? -14 : -12}
                style={{
                  fontFamily: "system-ui, sans-serif",
                  fontSize: isActive ? 10 : 8,
                  fontWeight: isActive ? 700 : 600,
                  fill: isActive ? "#3379B5" : "#1A3E72",
                  cursor: "pointer",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  paintOrder: "stroke",
                  stroke: "#fff",
                  strokeWidth: 3,
                  strokeLinejoin: "round",
                }}
              >
                {office.country}
              </text>
            </Marker>
          );
        })}
      </ComposableMap>
    </div>
  );
}

export default memo(WorldMap);
