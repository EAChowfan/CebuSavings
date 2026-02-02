import { Header } from './components/Header.tsx'
import { Carousel } from './components/carousel';
import './css/index.css'

const slides = [
  { image: '/src/assets/cebu1.jpg', alt: 'Slide 1' }, 
  { image: '/src/assets/cebu2.jpg', alt: 'Slide 2' },
  { image: '/src/assets/cebu3.jpg', alt: 'Slide 3' },
];


function App() {
  return (
    <>
    <Header />
    <div className="items-center justify-center flex h-screen">
      <h1 className="text-3xl font-bold">Your Financial Application</h1>
      <div className="max-w-lg">
        <Carousel>
          {slides.map((slides) =>(
            <img src={slides.image} />
          ))} 
        </Carousel>
      </div>
    </div>
    </>
  )
}

export default App
