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
    const justDraggedRef = React.useRef(false);
    const [dragDeltaTurns, setDragDeltaTurns] = React.useState(0);
    const sceneRef = React.useRef<HTMLDivElement | null>(null);
    const [measuredCardWidth, setMeasuredCardWidth] = React.useState<number | null>(null);
    const [hoverPos, setHoverPos] = React.useState<{ x: number; y: number } | null>(null);
    const [hoveringActiveCard, setHoveringActiveCard] = React.useState(false);

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
      if (sceneRef.current) {
        const rect = sceneRef.current.getBoundingClientRect();
        setHoverPos({ x: event.clientX - rect.left, y: event.clientY - rect.top });
      }
      const target = event.target as HTMLElement;
      setHoveringActiveCard(target.hasAttribute("data-carousel-card") && Boolean(target.dataset.href));
      if (!dragState.current) return;
      const dx = event.clientX - dragState.current.startX;
      if (Math.abs(dx) > 3) dragState.current.rotated = true;
      setDragDeltaTurns(dx / (cardWidthPx * 3));
    };

    const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
      if (!dragState.current) return;
      const dx = event.clientX - dragState.current.startX;
      const stepsMoved = Math.round(-dx / (cardWidthPx * 0.6));
      justDraggedRef.current = dragState.current.rotated;
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
          "relative w-full h-full min-h-[500px] grid place-items-center overflow-hidden touch-pan-y",
          className
        )}
        style={{
          ...customStyle,
          perspective: `${radiusPx * 2.4}px`,
          maskImage: "linear-gradient(90deg, transparent, #000 20% 80%, transparent)",
          WebkitMaskImage: "linear-gradient(90deg, transparent, #000 20% 80%, transparent)",
          cursor: hoveringActiveCard ? "none" : "grab",
        } as React.CSSProperties}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onPointerLeave={() => setHoveringActiveCard(false)}
        {...props}
      >
        <div
          className={cn("pointer-events-none grid place-items-center [transform-style:preserve-3d]", containerClassName)}
          style={{
            ...customStyle,
            transform: `rotateY(${rotationTurns}turn)`,
            transition: dragState.current ? "none" : TRANSITION,
          }}
        >
          {images.map((img, i) => {
            const isActive = i === activeIndex;

            const handleClick = () => {
              if (justDraggedRef.current) {
                justDraggedRef.current = false;
                return;
              }
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
                data-href={isActive ? img.href : undefined}
                src={img.src}
                alt={img.alt || `Carousel image ${i}`}
                draggable={false}
                onClick={handleClick}
                className={cn(
                  "pointer-events-auto [grid-area:1/1] object-cover rounded-2xl [backface-visibility:hidden] select-none",
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
        {hoveringActiveCard && hoverPos && (
          <div
            className="pointer-events-none absolute z-50 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-[#d6b36a] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-black shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
            style={{ left: hoverPos.x, top: hoverPos.y }}
          >
            Click to visit
          </div>
        )}
      </div>
    );
  }
);

CylinderCarousel.displayName = "CylinderCarousel";
