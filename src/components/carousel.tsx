import { useState, type ReactNode } from "react";
import {ChevronLeft, ChevronRight} from "react-feather";

type CarouselProps = { 
  children: ReactNode;
  currentSlide?: number;
};

export function Carousel({children: slides, currentSlide = 0}: CarouselProps) {
    // Ensure slides is always an array
    const slidesArray = Array.isArray(slides) ? slides : [slides];
    const [curr, setCurr] = useState(0);
    const prev = () => setCurr((curr) => (curr === 0 ? slidesArray.length - 1 : curr - 1));
    const next = () => setCurr((curr) => (curr === slidesArray.length - 1 ? 0 : curr + 1));

    return(
        <div className="relative w-full overflow-hidden">
            <div className="flex w-full" style={{transform: `translateX(-${curr * 100}%)`}}>
                {slidesArray.map((slide, idx) => (
                    <div key={idx} className="flex-shrink-0 w-full">
                        {slide}
                    </div>
                ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-between px-4">
                <button onClick ={prev} className = "px-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
                    <ChevronLeft size={40}/>
                </button>
                <button onClick = {next} className = "px-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
                    <ChevronRight size={40}/>
                </button>
            </div>

            <div className="absolute bottom-4 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                    {slidesArray.map((_, i) => (
                        <div key={i} className={`transition-all w-3 h-3 bg-white rounded-full ${curr === i ? "p-2" : "bg-opacity-50"}`}/>
                    ))}
                </div>

            </div>
        </div>
    )
}  