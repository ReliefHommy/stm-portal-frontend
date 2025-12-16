import Footer from "./components/hompage/Footer"
import Hero from "./components/hompage/Hero"

import MainNavbar from "./components/hompage/MainNavbar"



export default async function HomePage() {


  return (
    <main className="min-h-screen flex flex-col bg-white">
      <MainNavbar />
      <Hero />
     
  
      
      <Footer />
    </main>
  )
}
