import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Navbar } from "~/components/Navbar";
import { ScrollHorizontal, Tag } from "~/components/ScrollHorizontal";
import { Button } from "~/components/Button";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaStar, FaYoutube } from "react-icons/fa6";
import { Footer } from "./home";
import { ScrollGallery } from "~/components/ScrollGallery";
import { InfiniteMovingCards } from "~/components/InfiniteMoving";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
const books = [
  {
    title: "Inicial",
    image: "https://potentiia.com/static/media/bancomer.1c4137f1.png",
  },
  {
    title: "Inicial",
    image: "https://potentiia.com/static/media/bancomer.1c4137f1.png",
  },
  {
    title: "Inicial",
    image: "https://potentiia.com/static/media/bancomer.1c4137f1.png",
  },
  {
    title: "Inicial",
    image: "https://potentiia.com/static/media/bancomer.1c4137f1.png",
  },
  {
    title: "Inicial",
    image: "https://potentiia.com/static/media/bancomer.1c4137f1.png",
  },
  {
    title: "Inicial",
    image: "https://potentiia.com/static/media/bancomer.1c4137f1.png",
  },
  {
    title: "Inicial",
    image: "https://potentiia.com/static/media/bancomer.1c4137f1.png",
  },
  {
    title: "Inicial",
    image: "https://potentiia.com/static/media/bancomer.1c4137f1.png",
  },
  {
    title: "Inicial",
    image: "https://potentiia.com/static/media/bancomer.1c4137f1.png",
  },
];
export default function Resources() {
  return (
    <section className="bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto py-40">
        <div className=" flex justify-center gap-4">
          <h2 className="text-7xl font-title text-center  ">
            Discover an interesting
          </h2>
          <img className="w-32 -mt-8 " src="/cartel2.svg" />
        </div>
      </div>
      <div>
        <h2 className="text-4xl font-title text-left max-w-7xl mx-auto mb-12  ">
          Books
        </h2>
        <InfiniteMovingCards items={books} direction="left" speed="normal" />
      </div>
      <div className="mt-20">
        <h2 className="text-4xl font-title text-left max-w-7xl mx-auto mb-12  ">
          Blogs & Docs
        </h2>
        <InfiniteMovingCards items={books} direction="left" speed="normal" />
      </div>
      <div className="mt-20">
        <h2 className="text-4xl font-title text-left max-w-7xl mx-auto mb-12  ">
          Cursos
        </h2>
        <InfiniteMovingCards items={books} direction="left" speed="normal" />
      </div>

      {/* <div className="grid grid-cols-7 gap-10 mb-20">
        <BookCard />
        <BookCard />
        <BookCard />
      </div> */}
      <Footer />
    </section>
  );
}

const BookCard = () => {
  return (
    <div className="grid-cols-1 group">
      <div className="bg-gray-100 p-0 rounded-4xl relative">
        <img className="rounded-2xl" src="https://i.imgur.com/RMWa8ov.jpg" />
        <div className="bg-black absolute w-full h-[75%] opacity-0 group-hover:opacity-100 top-28 rounded-2xl -rotate-6 p-6">
          <div className="text-amber-300 flex">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p className="text-graylight text-sm mt-3">
            Apende a transimitir información de forma visual (técnicas de
            dibujo, estructiras, etc).
          </p>
        </div>
      </div>
      <h3 className="text-lg font-title text-center mt-3">Visual Thinking</h3>
    </div>
  );
};
