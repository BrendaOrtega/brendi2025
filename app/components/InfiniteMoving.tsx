import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { cn } from "~/utils/cn";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  items: {
    title: string;
    image: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      setStart(true);
    }
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  w-full overflow-hidden ",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0  py-4 w-max  flex-nowrap items-center gap-10",
          start && "animate-scrolling"
          //   pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, i) => (
          <div className="w-[220px] group pb-10" key={i}>
            <div className="bg-gray-100 p-0 rounded-4xl relative">
              <img
                className="rounded-2xl"
                src="https://i.imgur.com/RMWa8ov.jpg"
              />
              <div className="bg-black absolute w-full h-fit opacity-0 group-hover:opacity-100 -bottom-10 rounded-2xl -rotate-6 p-6">
                <div className="text-amber-300 flex">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className="text-white text-sm mt-3">
                  Apende a transimitir información de forma visual (técnicas de
                  dibujo, estructiras, etc).
                </p>
              </div>
            </div>
            <h3 className="text-lg font-title text-center mt-3">
              Visual Thinking
            </h3>
          </div>
        ))}
      </ul>
    </div>
  );
};
