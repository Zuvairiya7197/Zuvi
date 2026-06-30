"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface CarouselImage {
  src: string;
  alt?: string;
}

export interface CylinderCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  images: CarouselImage[];
  /** Currently centered slide index. Rotation snaps so this card faces forward. */
  activeIndex: number;
  /** Called when the user drags/taps to a different slide. */
  onActiveIndexChange?: (index: number) => void;
  containerClassName?: string;
  cardClassName?: string;
  cardWidth?: number; // in pixels
}

const TRANSITION = "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)";

export const CylinderCarousel = React.forwardRef<HTMLDivElement, CylinderCarouselProps>(
  (
    {
      images,
      activeIndex,
      onActiveIndexChange,
      className,
      containerClassName,
      cardClassName,
      cardWidth = 250,
      ...props
    },
    ref
  ) => {
    const n = images.length;
    const dragState = React.useRef<{ startX: number; rotated: boolean } | null>(null);
    const [dragDeltaTurns, setDragDeltaTurns] = React.useState(0);

    const customStyle = {
      "--n": n,
      "--w": `${cardWidth}px`,
      "--ba": `calc(1turn / var(--n))`,
    } as React.CSSProperties;

    const baseTurns = n > 0 ? -activeIndex / n : 0;
    const rotationTurns = baseTurns + dragDeltaTurns;

    const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
      (event.target as HTMLElement).setPointerCapture(event.pointerId);
      dragState.current = { startX: event.clientX, rotated: false };
    };

    const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
      if (!dragState.current) return;
      const dx = event.clientX - dragState.current.startX;
      if (Math.abs(dx) > 3) dragState.current.rotated = true;
      setDragDeltaTurns(dx / (cardWidth * 3));
    };

    const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
      if (!dragState.current) return;
      const dx = event.clientX - dragState.current.startX;
      const stepsMoved = Math.round(-dx / (cardWidth * 0.6));
      setDragDeltaTurns(0);
      dragState.current = null;
      if (stepsMoved !== 0 && onActiveIndexChange && n > 0) {
        const next = ((activeIndex + stepsMoved) % n + n) % n;
        onActiveIndexChange(next);
      }
    };

    return (
      <div
        ref={ref}
        className={cn(
          "w-full h-full min-h-[500px] grid place-items-center overflow-hidden touch-pan-y",
          className
        )}
        style={{
          perspective: "35em",
          maskImage: "linear-gradient(90deg, transparent, #000 20% 80%, transparent)",
          WebkitMaskImage: "linear-gradient(90deg, transparent, #000 20% 80%, transparent)",
          cursor: "grab",
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        {...props}
      >
        <div
          className={cn("grid place-items-center [transform-style:preserve-3d]", containerClassName)}
          style={{
            ...customStyle,
            transform: `rotateY(${rotationTurns}turn)`,
            transition: dragState.current ? "none" : TRANSITION,
          }}
        >
          {images.map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt={img.alt || `Carousel image ${i}`}
              draggable={false}
              onClick={() => onActiveIndexChange?.(i)}
              className={cn(
                "[grid-area:1/1] object-cover rounded-2xl [backface-visibility:hidden] cursor-pointer select-none",
                i === activeIndex ? "ring-2 ring-[#d6b36a]/80" : "ring-1 ring-white/10",
                cardClassName
              )}
              style={{
                width: "var(--w)",
                aspectRatio: "7/10",
                "--i": i,
                transform:
                  "rotateY(calc(var(--i) * var(--ba))) translateZ(calc(-1 * (0.5 * var(--w) + 0.5em) / tan(0.5 * var(--ba))))",
              } as React.CSSProperties}
            />
          ))}
        </div>
      </div>
    );
  }
);

CylinderCarousel.displayName = "CylinderCarousel";
