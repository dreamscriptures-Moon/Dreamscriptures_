const variants = {
  spiritual: {
    label: "Spiritual Insight",
    icon: "🕊",
    className: "border-[#D8C7A0] bg-[#FFFDF8]",
  },

  practical: {
    label: "Practical Insight",
    icon: "💡",
    className: "border-[#D4DCE8] bg-[#F7FAFD]",
  },

  consider: {
    label: "Things to Consider",
    icon: "⚠️",
    className: "border-[#E2C7A7] bg-[#FFF8F1]",
  },

  reflection: {
    label: "Reflection",
    icon: "💭",
    className: "border-[#DAD1C6] bg-[#FCFCFC]",
  },

  connection: {
    label: "Interesting Connection",
    icon: "✨",
    className: "border-[#CDBF99] bg-[#FAF8F1]",
  },

  cultural: {
    label: "Cultural Perspective",
    icon: "🌍",
    className: "border-[#D7D9E8] bg-[#F8F9FD]",
  },
};

export default function DreamCallout({
  variant = "reflection",
  title,
  children,
}) {
  const config = variants[variant] || variants.reflection;

  return (
    <aside
      className={`my-10 rounded-2xl border border-l-4 px-6 py-6 shadow-sm ${config.className}`}
      aria-label={title || config.label}
    >
      <div className="flex items-start gap-4">
        <div
          aria-hidden="true"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#EAE6E1] bg-white text-lg shadow-sm"
        >
          {config.icon}
        </div>

        <div className="flex-1">
          <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8A8175]">
            {title || config.label}
          </h4>

          <div className="mt-3 space-y-3 text-[15px] leading-7 text-[#4F4942] md:text-base">
            {children}
          </div>
        </div>
      </div>
    </aside>
  );
}