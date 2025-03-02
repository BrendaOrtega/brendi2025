import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Navbar } from "~/components/Navbar";
import { ScrollHorizontal } from "~/components/ScrollHorizontal";
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

export default function Saas() {
  return (
    <section className="bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto pt-40">
        <div className=" flex justify-center gap-4">
          <h2 className="text-7xl font-title text-center  ">
            Take a look at my own
          </h2>{" "}
          <img className="w-44  -right-0 top-0" src="/cartel.svg" />
        </div>
        <ScrollGallery />
      </div>

      <Footer />
    </section>
  );
}
