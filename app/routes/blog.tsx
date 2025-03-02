import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Navbar } from "~/components/Navbar";
import { ScrollHorizontal, Tag } from "~/components/ScrollHorizontal";
import { Button } from "~/components/Button";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { Footer } from "./home";
import { ScrollGallery } from "~/components/ScrollGallery";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Blog() {
  return (
    <section className="bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto py-40">
        <div className=" flex justify-center gap-4">
          <h2 className="text-7xl font-title text-center  ">Find some</h2>
          <img className="w-32 -mt-6 " src="/cartel1.svg" />
          <h2 className="text-7xl font-title text-center  ">tips</h2>
        </div>
        <div className="grid grid-cols-3 gap-x-12 gap-y-20 mt-32">
          <BlogCard tags={["🎨 UI", "🧙🏻 UX"]} />
          <BlogCard tags={["🎨 UI", "🧙🏻 UX"]} />
          <BlogCard tags={["🎨 UI", "🧙🏻 UX"]} />
          <BlogCard tags={["🎨 UI", "🧙🏻 UX"]} />
          <BlogCard tags={["🎨 UI", "🧙🏻 UX"]} />
          <BlogCard tags={["🎨 UI", "🧙🏻 UX"]} />
        </div>
      </div>
      <Footer />
    </section>
  );
}

const BlogCard = ({ tags }: { tags: string[] }) => {
  return (
    <div
      className="bg-[url(/flink-bg.png)] relative bg-center rounded-4xl overflow-hidden col-span-1 h-[380px] outline-solid
outline-black/5 flex items-end justify-center  group "
    >
      <img
        className="absolute w-full h-full object-cover group-hover:scale-110 delay-150 transition-all "
        src="/flink-bg.png"
      />
      <div className="rounded-2xl bg-white h-[40%] w-full group-hover:h-[45%] transition-all relative px-6 pt-4">
        <span className="text-xs text-graylight/70">hace 3 meses</span>
        <h3 className="text-xl font-title">
          Retícula 8pt: ¿Qué es y por qué utilizarla?
        </h3>
        <div className="absolute bottom-6 flex gap-3 text-graylight">
          {tags.map((tag, index) => (
            <Tag key={index} label={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};
