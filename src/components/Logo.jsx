// src/components/Logo.jsx
import logoImg from "../assets/NLC.png";

export default function Logo({
  size = 180,
  showName = true,
  name = "NORDICLINK CONSULTING",
  nameLetterSpacing = "0.12em",
  nameMaxWidth = 360,
  nameWhiteSpace = "nowrap",
}) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 14,
        minWidth: 0,
      }}
    >
      {/* ✅ LOGO IMAGE */}
      <img
        src={logoImg}
        alt="NordicLink Consulting Logo"
        style={{
          width: size,
          height: "180px",
          objectFit: "contain",
          flexShrink: 0,
        }}
      />

      {/* ✅ COMPANY NAME (optional) */}
      {showName && (
        <div style={{ minWidth: 0 }}>
          <div
            style={{
              color: "#BFE6FF",
              fontSize: 14,
              letterSpacing: nameLetterSpacing,
              textTransform: "uppercase",
              maxWidth: nameMaxWidth,
              whiteSpace: nameWhiteSpace,
              overflow: "hidden",
              textOverflow: "ellipsis",
              fontWeight: 700,
            }}
          >
            {name}
          </div>
        </div>
      )}
    </div>
  );
}
