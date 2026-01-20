// src/components/Logo.jsx
export default function Logo({
  // Box sizing
  size = 80,
  boxBg = "#BFE6FF",
  radius = 0, // ✅ square
  borderWidth = 3,

  // ✅ neon border color
  borderColor = "#BFE6FF",

  // ✅ neon glow control (optional)
  glow = true,

  // NLC text
  text = "NLC",
  textColor = "#031c52",
  weight = 1200,
  letterSpacing = "0.08em",


  // ✅ NOW fully controllable
  fontSize = 24,

  // font family
  fontFamily = "ui-serif, Georgia, Adamina, Times, serif",

  // Company name
  showName = true,
  name = "NORDICLINK CONSULTING",
  nameColor = "#0B387C",
  nameSize = 24,
  nameWeight = 700,
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
      {/* ✅ LOGO BOX */}
      <div
        style={{
          width: size,
          height: size,
          background: boxBg,
          borderRadius: radius,
          display: "grid",
          placeItems: "center",
          border: `${borderWidth}px solid ${borderColor}`,

          // ✅ neon glow around border
          boxShadow: glow
            ? `0 0 10px #BFE6FF, 0 0 24px #BFE6FF`
            : "none",

          flexShrink: 0,
        }}
      >
        <span
          style={{
            color: textColor,
            fontWeight: weight,
            fontSize: fontSize, // ✅ controlled manually
            letterSpacing,
            fontFamily,
            lineHeight: 1,
            transform: "translateY(1px)",
            textAlign: "center",
          }}
        >
          {text}
        </span>
      </div>

      {/* ✅ COMPANY NAME */}
      {showName && (
        <div style={{ minWidth: 0 }}>
          <div
            style={{
              color: "#BFE6FF",
              fontSize: 14,
              fontWeight: "0.40em",
              letterSpacing: nameLetterSpacing,
              fontFamily,
              textTransform: "uppercase",
              maxWidth: nameMaxWidth,
              whiteSpace: nameWhiteSpace,
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {name}
          </div>
        </div>
      )}
    </div>
  );
}
