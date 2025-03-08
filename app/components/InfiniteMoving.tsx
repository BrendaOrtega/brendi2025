import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { cn } from "~/utils/cn";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
  type,
}: {
  type?: string;
  items: {
    title: string;
    image: string;
    description: string;
    rank?: number;
    size?: string;
    link?: string;
    variant?: string;
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
      className={cn("scroller relative z-20  w-full  ", className)}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0  py-4 w-max  flex-nowrap items-start gap-10",
          start && "animate-scrolling",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {type === "doc" ? (
          <>
            {items.map((item, i) => (
              <div
                className="w-[220px] group pb-10 flex flex-col items-center "
                key={i}
              >
                <div className=" p-0 rounded-4xl w-[200px] relative ">
                  <img
                    className={cn(
                      "absolute hidden group-hover:block scale-50 -top-[72px] -right-14 ",
                      {
                        "-top-6 right-0": item.variant === "blog",
                      }
                    )}
                    src="/loader2.gif"
                  />
                  <img
                    className={cn(
                      "  object-center w-[200px] mx-auto h-[260px] rounded-4xl object-cover border-black/10 border ",
                      {
                        "object-contain w-40 border-transparent":
                          item.variant === "blog",
                      }
                    )}
                    src={item.image}
                  />
                </div>
                <h3 className="text-lg font-title text-center mt-3">
                  {item.title}
                </h3>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <button className="bg-gray-200 h-8 rounded-full text-sm px-3 mx-auto mt-3 cursor-pointer group-hover:-translate-y-1 transition-all">
                    Ver más
                  </button>
                </a>
              </div>
            ))}
          </>
        ) : (
          <>
            {items.map((item, i) => (
              <div className="w-[220px] group pb-0 cursor-pointer  " key={i}>
                <div className=" p-0 rounded-4xl relative  ">
                  <img
                    className="absolute hidden group-hover:block -top-20 -right-20 "
                    src="/loader.gif"
                  />
                  <img
                    className="rounded-2xl border object-left border-black/10 w-[200px] mx-auto h-[260px] object-cover"
                    src={item.image}
                  />
                  <div
                    className={cn(
                      "bg-black absolute w-full h-20 min-h-20  group-hover:min-h-[160px] opacity-0 group-hover:opacity-100 -bottom-10 rounded-2xl -rotate-6 py-6 px-4 transition-all overflow-hidden",
                      { "group-hover:min-h-[220px]": item.size === "large" },
                      { "group-hover:min-h-[180px]": item.size === "medium" },
                      {
                        "group-hover:min-h-[240px]": item.size === "extralarge",
                      }
                    )}
                  >
                    <div className="text-amber-300 flex items-center">
                      {item.rank > 4.5 ? (
                        <>
                          <Points />
                          <Points />
                          <Points />
                          <Points />
                          <Points />
                        </>
                      ) : (
                        <>
                          <Points />
                          <Points />
                          <Points />
                          <Points />
                        </>
                      )}
                    </div>
                    <p className="text-white text-sm mt-3">
                      {item.description}
                    </p>
                  </div>
                </div>
                <h3 className="text-lg font-title text-center mt-3">
                  {item.title}
                </h3>
              </div>
            ))}
          </>
        )}
      </ul>
    </div>
  );
};

const Points = () => <img src="/yarn.webp" className="w-6" />;
