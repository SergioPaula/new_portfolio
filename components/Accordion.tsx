"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

export default function Accordion({
  items,
  defaultOpen = -1,
}: {
  items: AccordionItem[];
  defaultOpen?: number;
}) {
  const [open, setOpen] = useState<number>(defaultOpen);

  return (
    <div>
      {items.map((item, i) => (
        <div key={i} style={{ borderBottom: "1px solid #e5e5e5" }}>
          <button
            onClick={() => setOpen(open === i ? -1 : i)}
            aria-expanded={open === i}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: "var(--space-sm)",
              padding: "1.25rem 0",
              background: "none",
              border: "none",
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-micro)",
                color: "var(--gray-400)",
                minWidth: "2rem",
                fontWeight: 500,
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <span
              style={{
                flex: 1,
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: 800,
                fontStretch: "condensed",
                textTransform: "uppercase" as const,
                letterSpacing: "-0.01em",
                fontSize: "var(--text-h4)",
                color: "var(--gray-900)",
              }}
            >
              {item.title}
            </span>
            <motion.span
              animate={{ rotate: open === i ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              style={{ display: "flex", flexShrink: 0 }}
            >
              <ChevronDown size={20} color="var(--gray-900)" />
            </motion.span>
          </button>

          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                style={{ overflow: "hidden" }}
              >
                <div
                  style={{
                    paddingBottom: "1.25rem",
                    paddingLeft: "var(--space-xl)",
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-small)",
                    color: "var(--gray-600)",
                    lineHeight: 1.7,
                  }}
                >
                  {item.content}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
