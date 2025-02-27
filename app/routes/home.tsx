import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Navbar } from "~/components/Navbar";
import { ScrollHorizontal } from "~/components/ScrollHorizontal";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <section>
      <Navbar />
      <section className="max-w-5xl mx-auto h-[70vh]">
        <div className="flex items-center justify-between h-full ">
          <h1 className="text-5xl font-bold w-[50%] leading-snug">
            Hello, I'm Brenda. I'm a Product Designer based in México.
          </h1>
          <div className="w-[50%] flex justify-center">
            <img className="ml-32" src="/emoji.png" alt="emoji de brenda" />
          </div>
        </div>
      </section>
      <section className="flex gap-6 justify-center mt-10">
        <MiniCard />
        <MiniCard />
        <MiniCard />
      </section>
      <section className="bg-yellow-500 ">
        <ScrollHorizontal />
      </section>
      <About />
      <Skills />
      <section className="min-h-screen bg-purple-400 ">Let's talk!</section>
    </section>
  );
}

const About = () => {
  return (
    <section className="min-h-screen bg-green-400 flex items-center justify-center ">
      <p className="max-w-7xl mx-auto text-4xl leading-snug text-center">
        I’m Brenda, I am Product & UX Designer based on Mexico. I studied
        economics before start my tech career as frontend developer to
        eventually become a Product Designer. So, I’ve been working on web and
        mobile applications for more than 8 years, and I absolutely love what I
        do. I focus on designing complex and functional products that help user
        and business reach their goals. I really enjoy create experiences that
        users find useful and easy to understand. If you want to know more about
        me, know more about what I’m working on, or talk about working together,
        feel free to email me.
      </p>
    </section>
  );
};

const Skills = () => {
  return (
    <section className="min-h-screen bg-pink-400 flex items-center justify-center ">
      <div className="text-7xl font-semibold text-center flex flex-col gap-12">
        <h2>Ux design</h2>
        <h2>UI design</h2>
        <h2>Web Development</h2>
        <h2>Web Development</h2>
      </div>
    </section>
  );
};

const MiniCard = () => {
  return (
    <div className="w-[80px] h-32 rounded-xl">
      <img
        className="w-full h-28"
        src="https://www.brendago.design/images/projects/flink.png"
      />
      <span>01</span>
    </div>
  );
};
