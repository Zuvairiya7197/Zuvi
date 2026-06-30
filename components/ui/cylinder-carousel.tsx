"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface CarouselImage {
  src: string;
  alt?: string;
  /** When set, clicking the centered/active card opens this URL in a new tab. */
  href?: string;
}

export interface CylinderCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  images: CarouselImage[];
  /** Currently centered slide index. Rotation snaps so this card faces forward. */
  activeIndex: number;
  /** Called when the user drags/taps to a different slide. */
  onActiveIndexChange?: (index: number) => void;
  containerClassName?: string;
  cardClassName?: string;
  /** Card width in pixels, or any valid CSS width value (e.g. a clamp() string for responsive sizing). */
  cardWidth?: number | string;
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
      cardWidth = 380,
      ...props
    },
    ref
  ) => {
    const n = images.length;
    const dragState = React.useRef<{ startX: number; rotated: boolean } | null>(null);
    const [dragDeltaTurns, setDragDeltaTurns] = React.useState(0);
    const sceneRef = React.useRef<HTMLDivElement | null>(null);
    const [measuredCardWidth, setMeasuredCardWidth] = React.useState<number | null>(null);

    const cardWidthCss = typeof cardWidth === "number" ? `${cardWidth}px` : cardWidth;
    const cardWidthFallback = typeof cardWidth === "number" ? cardWidth : 380;
    const cardWidthPx = measuredCardWidth ?? cardWidthFallback;
    const radiusPx = n > 0 ? 0.5 * cardWidthPx / Math.tan(Math.PI / n) : cardWidthPx;

    React.useEffect(() => {
      const probe = sceneRef.current?.querySelector<HTMLElement>("[data-carousel-card]");
      if (!probe || typeof ResizeObserver === "undefined") return;
      const observer = new ResizeObserver((entries) => {
        const width = entries[0]?.contentRect.width;
        if (width) setMeasuredCardWidth(width);
      });
      observer.observe(probe);
      return () => observer.disconnect();
    }, [cardWidth]);

    const customStyle = {
      "--n": n,
      "--w": cardWidthCss,
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
      setDragDeltaTurns(dx / (cardWidthPx * 3));
    };

    const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
      if (!dragState.current) return;
      const dx = event.clientX - dragState.current.startX;
      const stepsMoved = Math.round(-dx / (cardWidthPx * 0.6));
      setDragDeltaTurns(0);
      dragState.current = null;
      if (stepsMoved !== 0 && onActiveIndexChange && n > 0) {
        const next = ((activeIndex + stepsMoved) % n + n) % n;
        onActiveIndexChange(next);
      }
    };

    const setRefs = React.useCallback(
      (node: HTMLDivElement | null) => {
        sceneRef.current = node;
        if (typeof ref === "function") ref(node);
        else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
      },
      [ref]
    );

    return (
      <div
        ref={setRefs}
        className={cn(
          "w-full h-full min-h-[500px] grid place-items-center overflow-hidden touch-pan-y",
          className
        )}
        style={{
          ...customStyle,
          perspective: `${radiusPx * 2.4}px`,
          maskImage: "linear-gradient(90deg, transparent, #000 20% 80%, transparent)",
          WebkitMaskImage: "linear-gradient(90deg, transparent, #000 20% 80%, transparent)",
          cursor: "grab",
        } as React.CSSProperties}
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
          {images.map((img, i) => {
            const isActive = i === activeIndex;

            const handleClick = () => {
              if (isActive && img.href) {
                window.open(img.href, "_blank", "noopener,noreferrer");
                return;
              }
              onActiveIndexChange?.(i);
            };

            return (
              <img
                key={i}
                data-carousel-card={isActive ? "" : undefined}
                src={img.src}
                alt={img.alt || `Carousel image ${i}`}
                draggable={false}
                onClick={handleClick}
                className={cn(
                  "[grid-area:1/1] object-cover rounded-2xl [backface-visibility:hidden] select-none",
                  isActive && img.href ? "cursor-alias" : "cursor-pointer",
                  isActive ? "ring-2 ring-[#d6b36a]/80" : "ring-1 ring-white/10",
                  cardClassName
                )}
                style={{
                  width: "var(--w)",
                  aspectRatio: "7/10",
                  "--i": i,
                  transform: `rotateY(calc(var(--i) * var(--ba))) translateZ(calc(-1 * (0.5 * var(--w) + 0.5em) / tan(0.5 * var(--ba))))`,
                } as React.CSSProperties}
              />
            );
          })}
        </div>
      </div>
    );
  }
);

CylinderCarousel.displayName = "CylinderCarousel";
