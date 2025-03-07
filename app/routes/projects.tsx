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
          <img className="w-52 mt-3 " src="/cartel3.svg" />
        </div>
        <div className="flex justify-betcenter gap-20 flex-wrap mt-40 ">
          {" "}
          <div className="mt-16">
            <MotionContainer
              id="uno"
              img="/easybits.png"
              tags={["Cocina", "Porgramación", "Comedia"]}
              title="EasyBits"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab ipsa
                  odio velit praesentium?"
            />
          </div>
          <MotionContainer
            link="/flink"
            id="dos"
            img="/flink.png"
            // className="bg-[#B097E3]"
            className="bg-[#0CCCB3]"
            tags={["Product Design", "Fintech"]}
            title="Flink"
            description="Democratizing access to stock market investments in Mexico"
            imageClassName="top-0 -left-14 group-hover:scale-110 "
          />
          <div className="mt-16">
            <MotionContainer
              link="/token"
              img="/token.png"
              className="bg-[#45C893]"
              tags={["UX Design", "Fintech"]}
              title="Constructoken"
              description="Offering financial solutions and construction options for self-produced housing"
              imageClassName="-right-0 top-0 group-hover:scale-110"
            />
          </div>
          <MotionContainer
            link="/covalto"
            img="/covalto.svg"
            tags={["Product Design", "Fintech"]}
            title="Covalto"
            description="The Financial solution to manage expenses for Business"
            imageClassName="w-[60%] top-54 left-[20%] right-0 bottom-0 group-hover:scale-80 "
          />
          <div className="mt-16">
            <MotionContainer
              link="/personal"
              img="/reform.png"
              className="bg-[#B097E3]"
              tags={["UI Design", "AI", "Marketplace"]}
              title="Reform AI"
              description="Renovate your spaces using artificial intelligence and buy the furniture and services that you need in one place"
              imageClassName="-right-0 top-32 scale-120 group-hover:scale-110"
            />
          </div>
          <MotionContainer
            link="/personal"
            img="/personal.png"
            className="bg-[#F2B590]"
            tags={["Cocina", "Porgramación", "Comedia"]}
            title="Santander"
            description="Web & Mobile App to access to financial services including payments, transfers and management"
            imageClassName="-right-0 -top-48 group-hover:scale-110"
          />
          <div className="mt-16">
            <MotionContainer
              theme="dark"
              className="bg-[#0E0E10]"
              link="/ui"
              img="/ui-fx.png"
              tags={["Design", "Development", "E-learning"]}
              title="UI Course"
              imageClassName="-right-0 top-20 group-hover:-translate-x-16"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab ipsa
                  odio velit praesentium?"
            />
          </div>
          <MotionContainer
            className="bg-[#F1ABA5]"
            link="/ui"
            img="/play.png"
            tags={["Cocina", "Porgramación", "Comedia"]}
            title="LastPlay"
            imageClassName="-right-16 top-20 group-hover:-translate-x-14 scale-120"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab ipsa
                  odio velit praesentium?"
          />
          <div className="mt-16">
            <MotionContainer
              link="/ui"
              img="/pros.png"
              className="bg-[#A3BC73]"
              tags={["Cocina", "Porgramación", "Comedia"]}
              title="English for Professionals"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab ipsa
                  odio velit praesentium?"
              imageClassName="-right-16 top-20 group-hover:-translate-x-16 group-hover:translate-y-6 "
            />
          </div>
          <MotionContainer
            className="bg-[#F85387]"
            tags={["Cocina", "Porgramación", "Comedia"]}
            title="Potentiia"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab ipsa
                  odio velit praesentium?"
          />
          <div className="mt-16">
            <MotionContainer
              tags={["Cocina", "Porgramación", "Comedia"]}
              title="Laboratorios Azteca"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab ipsa
                  odio velit praesentium?"
            />
          </div>
          <MotionContainer
            className="bg-[#F85387]"
            tags={["Cocina", "Porgramación", "Comedia"]}
            title="Deník"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab ipsa
                  odio velit praesentium?"
          />
          <div className="mt-16">
            <MotionContainer
              tags={["Cocina", "Porgramación", "Comedia"]}
              title="Propiedades"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab ipsa
                  odio velit praesentium?"
            />
          </div>
          <MotionContainer
            className="bg-[#F85387]"
            tags={["Cocina", "Porgramación", "Comedia"]}
            title="Fixter.org"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab ipsa
                  odio velit praesentium?"
          />
          <div className="mt-16">
            <MotionContainer
              tags={["Cocina", "Porgramación", "Comedia"]}
              title="EasyBits"
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
