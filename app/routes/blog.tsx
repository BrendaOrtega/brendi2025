import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Navbar } from "~/components/Navbar";
import { ScrollHorizontal, Tag } from "~/components/ScrollHorizontal";
import { Button } from "~/components/Button";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { Footer } from "./home";
import { ScrollGallery } from "~/components/ScrollGallery";
import getBasicMetaTags from "~/utils/getBasicMetatags";

export const meta = () =>
  getBasicMetaTags({
    title: "Blog",
    description: "Find some design & dev tips",
  });

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
    <div className=" relative bg-center rounded-4xl overflow-hidden  col-span-1 h-[480px] cursor-pointer  flex items-end justify-center  group ">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl group-hover:scale-110 transition-all"
        src="/flink-bg.png"
      />
      <div className="bg-[url(/surface.png)] w-full h-full flex items-end pl-4 pb-4 -ml-[1px] mt-[1px] bg-no-repeat z-20 ">
        <div>
          <h3 className="text-xl font-title w-[80%] mb-3 group-hover:underline decoration-brand transition-all ">
            Retícula 8pt: ¿Qué es y por qué utilizarla?
          </h3>
          <div className=" flex gap-3 text-graylight">
            {tags.map((tag, index) => (
              <Tag key={index} label={tag} />
            ))}
          </div>{" "}
        </div>
      </div>
    </div>
  );
};
