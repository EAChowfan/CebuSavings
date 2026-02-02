import type { ReactNode } from "react";

type CarouselProps = { children: ReactNode };

export function Carousel({children: slides}: CarouselProps) {
    return(
        <div>
            <div>
                {slides}
            </div>
        </div>
    )
} 