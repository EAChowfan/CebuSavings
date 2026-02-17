import { Header } from './components/Header.tsx'
import { Carousel } from './components/carousel';
import { Footer } from './components/Footer';
import './css/index.css'


const slides = [
  { image: '/src/assets/cebu1.jpg', alt: 'Slide 1' }, 
  { image: '/src/assets/cebu2.jpg', alt: 'Slide 2' },
  { image: '/src/assets/cebu3.jpg', alt: 'Slide 3' },
];

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="pt-32 flex-grow">
        {/* Hero Section */}
        <div className="flex items-center justify-between px-16 py-20 bg-white">
          <div className="flex-1 max-w-xl">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Your Financial Application</h1>
            <p className="text-lg text-gray-600 mb-8">We know how frustrating Applications are when they're not local</p>
            <div className="flex gap-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded">
                Get Quote Now
              </button>
              <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-50 font-bold py-3 px-8 rounded">
                Learn More
              </button>
            </div>
          </div>
          
          {/* Carousel */}
          <div className="flex-1 ml-8">
            <div className="w-full">
              <Carousel>
                {slides.map((slide) => (
                  <img src={slide.image} alt={slide.alt} className="w-full h-256 object-cover rounded-lg" />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default App
