import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Orizzon | GI97678",
  description:
    "Apartamento mobiliado para locação no Orizzon, em Ilhéus: 105 m², 3 quartos, 2 suítes e vista para o mar.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
