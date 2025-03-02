import type { Route } from "./+types/home";
import { Navbar } from "~/components/Navbar";
import { Footer } from "./home";
import { MotionContainer } from "~/components/ScrollHorizontal";

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
          <h2 className="text-7xl font-title text-center  ">
            Take a look at my{" "}
          </h2>
          <img className="w-44 mt-3 " src="/cartel3.svg" />
        </div>
        <div className="flex justify-betcenter gap-20 flex-wrap mt-40 ">
          {" "}
          <MotionContainer
            className="bg-[#F85387]"
            tags={["Cocina", "Porgramación", "Comedia"]}
            title="Flink"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab ipsa
                  odio velit praesentium?"
          />
          <div className="mt-16">
            <MotionContainer
              tags={["Cocina", "Porgramación", "Comedia"]}
              title="Constructoken"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab ipsa
                  odio velit praesentium?"
            />{" "}
          </div>
          <MotionContainer
            className="bg-[#F85387]"
            tags={["Cocina", "Porgramación", "Comedia"]}
            title="E4pros"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab ipsa
                  odio velit praesentium?"
          />
          <div className="mt-16">
            <MotionContainer
              tags={["Cocina", "Porgramación", "Comedia"]}
              title="Covalto"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab ipsa
                  odio velit praesentium?"
            />
          </div>
          <MotionContainer
            className="bg-[#F85387]"
            tags={["Cocina", "Porgramación", "Comedia"]}
            title="Santander"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab ipsa
                  odio velit praesentium?"
          />
          <div className="mt-16">
            <MotionContainer
              tags={["Cocina", "Porgramación", "Comedia"]}
              title="UI Course"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab ipsa
                  odio velit praesentium?"
            />
          </div>
          <MotionContainer
            className="bg-[#F85387]"
            tags={["Cocina", "Porgramación", "Comedia"]}
            title="LastPlay"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab ipsa
                  odio velit praesentium?"
          />
          <div className="mt-16">
            <MotionContainer
              tags={["Cocina", "Porgramación", "Comedia"]}
              title="Reform AI"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab ipsa
                  odio velit praesentium?"
            />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
