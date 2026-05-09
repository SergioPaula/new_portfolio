interface ImagePlaceholderProps {
  label: string;
  aspect?: string;
}

export default function ImagePlaceholder({
  label,
  aspect = "16/9",
}: ImagePlaceholderProps) {
  const [wStr, hStr] = aspect.split("/");
  const w = parseFloat(wStr);
  const h = parseFloat(hStr);
  const paddingBottom = `${((h / w) * 100).toFixed(4)}%`;

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        paddingBottom,
        background: "#f0f0f0",
        borderRadius: 16,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.75rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: "#a3a3a3",
          }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}
