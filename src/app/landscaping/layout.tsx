import type { ReactNode } from "react";
import type { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#08130d",
};

type LandscapingLayoutProps = {
  children: ReactNode;
};

export default function LandscapingLayout({ children }: LandscapingLayoutProps) {
  return (
    <>
      <style>{`
        body {
          background:
            radial-gradient(circle at top, rgba(74, 222, 128, 0.18), transparent 22%),
            radial-gradient(circle at 20% 26%, rgba(163, 230, 53, 0.14), transparent 26%),
            linear-gradient(180deg, #07110a 0%, #0b1a11 42%, #07110a 100%) !important;
          color: #f3f8ef !important;
        }

        html[data-theme="light"] body {
          background:
            radial-gradient(circle at top, rgba(34, 197, 94, 0.1), transparent 24%),
            radial-gradient(circle at 18% 22%, rgba(163, 230, 53, 0.08), transparent 28%),
            linear-gradient(180deg, #f2fbf1 0%, #e8f7e8 46%, #dff0df 100%) !important;
          color: #0b1a11 !important;
          filter: none !important;
        }

        html[data-theme="light"] img,
        html[data-theme="light"] video,
        html[data-theme="light"] canvas,
        html[data-theme="light"] svg {
          filter: none !important;
        }

        ::selection {
          background: rgba(74, 222, 128, 0.35);
          color: #07110a;
        }

        ::-webkit-scrollbar-track {
          background: #07110a;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #22c55e, #84cc16);
          border-radius: 999px;
        }
      `}</style>
      {children}
    </>
  );
}
