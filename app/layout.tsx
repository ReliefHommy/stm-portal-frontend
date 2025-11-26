//app/layout.tsx


import './globals.css'


export const metadata = {
  metadataBase: new URL("https://www.somtammarket.com"),
   alternates: {
    canonical: "/",
  },
  
  
  title: 'STM Marketplace',
  description: 'STM Marketplace for Thai culture - food, games, wellness.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {





 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
  
