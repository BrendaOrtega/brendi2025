import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useEffect, useRef, type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export const ScrollHorizontal = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
  });

  return (
    <section className="h-[700vh]" ref={ref}>
      <div className="sticky bg-transparent top-0 w-full overflow-hidden ">
        <motion.div
          style={{ x }}
          className="w-max flex h-screen gap-20 mt-24 pr-[50vw]"
        >
          <div className="w-[340px]  ml-48">
            <h3 className="text-4xl md:text-5xl text-white font-bold mt-20">
              Cómo empezamos
            </h3>
            <p className="text-lg md:text-xl text-iron font-divght mt-12">
              Han pasado 84 años ya desde que Fixter nació en Pachuca de Soto,
              Hidalgo. 👉🏻
            </p>{" "}
          </div>
          <MotionContainer />
          <MotionContainer />
          <MotionContainer />
          <MotionContainer />
          <MotionContainer />
          <MotionContainer />
        </motion.div>
      </div>
    </section>
  );
};

const MotionContainer = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  //   const isMobile = () => {
  //     if (!window) {
  //       return;
  //     }
  //     if (window.matchMedia("(max-width: 768px)").matches) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   };

  return (
    <motion.div
      whileInView={{ filter: "blur(0px)", opacity: 1 }}
      initial={{ filter: "blur(9px)", opacity: 0 }}
      //   viewport={{ amount: isMobile() ? "some" : "all", once: true }}
      className={twMerge(" pt-0 ")}
    >
      <div
        className={twMerge(
          " w-[560px] h-[842px] rounded-[40px] overflow-hidden",
          className
        )}
      >
        <img
          className="w-full h-full object-cover"
          src="https://www.brendago.design/images/projects/flink.png"
        />
      </div>
    </motion.div>
  );
};
