//app/layout.tsx


import FooterSociety from './components/hompage/FooterSociety';
import MainNavbar from './components/hompage/MainNavbar';
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
      <body className="flex flex-col min-h-screen">
          <MainNavbar />
     
       <main className="flex-grow">
{children}
</main>
<FooterSociety />
        </body>
    </html>
  );
}
  
