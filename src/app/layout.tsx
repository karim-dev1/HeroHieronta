import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HeroHieronta — urheiluhierontaa Espoossa",
  description:
    "Yksilöllistä urheiluhierontaa ja lihashuoltoa Espoossa. Tukea palautumiseen, liikkuvuuteen ja aktiiviseen arkeen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fi">
      <body>{children}</body>
    </html>
  );
}
