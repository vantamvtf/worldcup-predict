import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "World Cup 2026 Prediction League",
  description: "Mockup dashboard cho ứng dụng dự đoán World Cup 2026"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
