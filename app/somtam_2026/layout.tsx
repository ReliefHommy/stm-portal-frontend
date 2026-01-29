

export const metadata = {
  title: "Somtam 2026",
  description: "Somtam Society — EU events, temples, markets, music & community.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
