import type { Route } from "./+types/home";
import { Navbar } from "~/components/Navbar";
import { ScrollHorizontal } from "~/components/ScrollHorizontal";
import { Button } from "~/components/Button";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
  useSpring,
  AnimatePresence,
} from "motion/react";
import { useRef, useState, type ReactNode } from "react";
import { delay, MotionValue } from "motion";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const MiniCard = ({ id }: { id: string }) => {
  return (
    <motion.div layoutId={id} className="w-[80px] h-32 rounded-xl">
      <img
        className="w-full h-28"
        src="https://www.brendago.design/images/projects/flink.png"
      />
      <span>01</span>
    </motion.div>
  );
};

export default function Home() {
  const target = useRef(null);
  const { scrollYProgress } = useScroll({
    target,
    offset: ["start center", "end end"],
  });
  const [show, setShow] = useState(false);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setShow(latest > 0 ? true : false);
  });

  return (
    <section>
      <Navbar />
      <section className="max-w-5xl mx-auto h-[70vh] ">
        <div className="flex items-center justify-between h-full ">
          <h1 className="text-6xl font-title w-[60%] leading-snug">
            Hello, I'm Brenda. I'm a Product Designer based in México.
          </h1>
          <div className="w-[40%] flex justify-center">
            <img className="ml-32" src="/emoji.png" alt="emoji de brenda" />
          </div>
        </div>
      </section>
      <AnimatePresence>
        <section key={12} className="flex gap-6 justify-center my-10 h-[128px]">
          {!show && (
            <>
              <MiniCard id="uno" />
              <MiniCard id="dos" />
              <MiniCard id="tres" />
            </>
          )}
        </section>
        <section
          key={233}
          className="bg-[url(/cover.svg)] bg-center object-contain min-h-screen "
          ref={target}
        >
          {show && <ScrollHorizontal />}
        </section>
      </AnimatePresence>
      <About text="I am Product & UX Designer that studied economics. I started my tech career as frontend developer to eventually become a Product Designer. I’ve been working on web and mobile applications for more than 9 years, and I absolutely love what I do. I focus on designing complex and functional products that help user and business reach their goals. I really enjoy create experiences that users find useful and easy to understand. If you want to know more about me, know more about what I’m working on, or talk about working together, feel free to email me." />

      <Skills
        titles={["UX design", "UI design", "Research", "Web development"]}
      />
      <Footer />
    </section>
  );
}

export const Footer = () => {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center ">
      <div className="text-center text-2xl ">
        <p className="text-graylight mb-6 font-light">
          The best ideas start as conversations
        </p>
        <h3 className="text-9xl text-white font-title">Let's talk!</h3>{" "}
        <Button className="mt-16" label="Email me" />
        <div className="text-white/20 flex gap-4 justify-center mt-16">
          <AiFillInstagram />
          <FaGithub />
          <FaLinkedinIn />
          <FaYoutube />
        </div>
      </div>
    </section>
  );
};

const About = ({ text }: { text: string }) => {
  const words = text.split(" ");
  const target = useRef(null);
  const { scrollYProgress } = useScroll({
    target,
    offset: ["start center", "end end"],
  });
  return (
    <section
      ref={target}
      className="min-h-[150vh] bg-white flex items-center justify-center"
    >
      <div className="max-w-7xl mx-auto text-5xl leading-snug text-black text-center flex flex-wrap gap-x-2">
        {words.map((word, i) => (
          <Word
            range={[0, (1 / words.length) * (i === 0 ? 1 : i)]}
            scrollYProgress={scrollYProgress}
            key={i}
          >
            {word}
          </Word>
        ))}
        <Photos />
      </div>
    </section>
  );
};

const Photos = () => {
  return (
    <div className="flex ">
      <div className="w-20 bg-white h-24 rounded p-2 shadow border-black/20 -rotate-6">
        <img
          className="w-full h-14 rounded "
          src="https://scontent.fmex5-1.fna.fbcdn.net/v/t39.30808-6/468665523_8696026667159311_3395242937681563323_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=142&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=1CQbCxk6kO4Q7kNvgFI7GEq&_nc_oc=AdhU3m_4AKkYELzp8QAutx4WCzkRdxFsVCieAY9z9LLiyKuKeLiYdiXjvXWsaTWDseo&_nc_zt=23&_nc_ht=scontent.fmex5-1.fna&_nc_gid=Ad2-xcpaJ__M9P9l8EM067m&oh=00_AYCsE6gQ5v6FijOa_RbGpIb20ogc5M1crjyUPxYxhVQzSw&oe=67C96A94"
        />
      </div>
      <div className="w-20  bg-white h-24 rounded p-2 shadow border-black/20 rotate-6 -ml-2 z-10">
        <img
          className="w-full h-14 rounded "
          src="https://scontent.fmex5-1.fna.fbcdn.net/v/t39.30808-6/468665523_8696026667159311_3395242937681563323_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=1CQbCxk6kO4Q7kNvgFI7GEq&_nc_oc=AdhU3m_4AKkYELzp8QAutx4WCzkRdxFsVCieAY9z9LLiyKuKeLiYdiXjvXWsaTWDseo&_nc_zt=23&_nc_ht=scontent.fmex5-1.fna&_nc_gid=Ad2-xcpaJ__M9P9l8EM067m&oh=00_AYCsE6gQ5v6FijOa_RbGpIb20ogc5M1crjyUPxYxhVQzSw&oe=67C96A94"
        />
      </div>
    </div>
  );
};

const Word = ({
  children,
  scrollYProgress,
  range,
}: {
  range: number[];
  children: ReactNode;
  scrollYProgress: MotionValue<number>;
}) => {
  const spring = useSpring(scrollYProgress, { bounce: 0 });
  const opacity = useTransform(spring, range, [0.1, 1]);
  const filter = useTransform(spring, range, ["blur(10px)", "blur(0px)"]);
  const y = useTransform(spring, range, [50, 0]);
  const skewX = useTransform(spring, range, [20, 0]);
  const scale = useTransform(spring, range, [1.1, 1]);
  return (
    <motion.span
      className=""
      style={{
        opacity,
        // filter,
        // y,
        skewX,
        scale,
      }}
    >
      {children}
    </motion.span>
  );
};

const Skills = ({ titles }: { titles: string[] }) => {
  const target = useRef(null);
  const { scrollYProgress } = useScroll({
    target,
    offset: ["start start", "end end"],
  });
  return (
    <section ref={target} className="h-[400vh] bg-pink-400">
      <div className="sticky top-0 bg-black h-screen text-white">
        <div className="grid place-content-center h-full">
          <img
            className="aspect-square w-40 mx-auto mb-20"
            src="/flink-bg.png"
          />
          <Rotators scrollYProgress={scrollYProgress} titles={titles} />
        </div>
      </div>
    </section>
  );
};

const Rotators = ({
  titles,
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
  titles: string[];
}) => {
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);
  return (
    <motion.main
      style={{ perspective: 1000, transformStyle: "preserve-3d", y }}
      className="flex flex-col relative  items-center h-full justify-center text-7xl font-extrabold gap-10 "
    >
      {titles.map((title, i) => (
        <Rotator
          key={i}
          range={[(1 / titles.length) * i, (1 / titles.length) * (i + 1)]}
          scrollYProgress={scrollYProgress}
        >
          {title}
        </Rotator>
      ))}
    </motion.main>
  );
};

const Rotator = ({
  children,
  scrollYProgress,
  range,
}: {
  range: number[];
  scrollYProgress: MotionValue<number>;
  children: ReactNode;
}) => {
  const rotateX = useTransform(scrollYProgress, range, [0, 60]);
  const opacity = useTransform(scrollYProgress, range, [1, 0]);
  const scale = useTransform(scrollYProgress, range, [1, 0.8]);
  return (
    <motion.h2
      className="tracking-wide uppercase"
      style={{ rotateX, opacity, scale }}
    >
      {children}
    </motion.h2>
  );
};
