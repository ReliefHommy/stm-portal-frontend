
import MainNavbar from "../../components/hompage/MainNavbar"
import WellnessMasonryGrid,{ MasonryItem } from "../../components/wellness/WellnessMasonryGrid"


const items: MasonryItem[] = [
  { id: 1, src: '/b1.png', title: 'Som Tam Essentials', subtitle: 'Papaya • Fish sauce • Lime' },
  { id: 2, src: '/b2.png', title: 'Shrimp Fried Rice', subtitle: 'Street food classic' },
  { id: 3, src: '/b3.png', title: 'Thai Herbs Board', subtitle: 'Holy basil • Galangal • Lime leaves' },
  { id: 4, src: '/b1.png', title: 'Roti & Curry', subtitle: 'Southern style' },
  { id: 5, src: '/b1.png', title: 'Mango Sticky Rice', subtitle: 'Summer dessert' },
  { id: 6, src: '/b1.png', title: 'Tom Yum Kit', subtitle: 'Spicy & sour set' },
  // add more…
]

export default function FoodPage() {
  return (
    
    <section className="px-4 md:px-8 lg:px-12 py-8">
       <MainNavbar />
 
             <br />
      <header className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">Food Marketplace</h1>
        <p className="text-gray-600">Authentic culture of Thai culinary — ingredients, recipes, kits.</p>
      </header>


      <WellnessMasonryGrid items={items} />
    </section>
  )
}