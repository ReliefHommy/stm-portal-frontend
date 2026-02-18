//app/layout.tsx



import CookieNotice from '@/components/CookieNotice';
import './globals.css'


export const metadata = {
  metadataBase: new URL("https://www.somtammarket.com"),
   alternates: {
    canonical: "/",
  },
  
  
  title: 'STM Marketplace | Somtam Society: Thai Culture & Events in Europe',
  description: 'STM Marketplace for Thai culture - A Marketplacplace for food, games, wellness, and events across Europe. Join Somtam Society to connect with the Thai community!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {





 return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
    
     
       <main className="flex-grow">
{children}
</main>
  <CookieNotice />
        </body>
    </html>
  );
}
  
