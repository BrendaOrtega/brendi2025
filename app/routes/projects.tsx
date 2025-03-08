import type { Route } from "./+types/home";
import { Navbar } from "~/components/Navbar";
import { Footer } from "./home";
import { MotionContainer } from "~/components/ScrollHorizontal";
import getBasicMetaTags from "~/utils/getBasicMetatags";

export const meta = () =>
  getBasicMetaTags({
    title: "Projects",
    description: "Take a look at my projects",
  });

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
          <MotionContainer
            className="bg-[#B097E3]"
            id="uno"
            link="/easybits"
            img="/easybits.png"
            tags={["Product Design", "Webapp", "Frontend", "Saas"]}
            title="EasyBits"
            description="Unlocking online payments for creatives and digital content professionals"
            imageClassName="top-40 -right-28 group-hover:-right-20 transition-all "
          />
          <div className="mt-16">
            <MotionContainer
              link="/flink"
              id="dos"
              img="/flink.png"
              // className="bg-[#B097E3]"
              className="bg-[#0CCCB3]"
              tags={["Product Design", "App", "Fintech"]}
              title="Flink"
              description="Democratizing access to stock market investments in Mexico"
              imageClassName="top-0 -left-14 group-hover:scale-110 "
            />
          </div>
          <MotionContainer
            link="/denik"
            img="/denik.png"
            className="bg-[#FFD25C]"
            id="tres"
            tags={["Product Design", "Frontend", "Webapp", "Saas"]}
            title="Deník"
            description="The agenda to manage appointments, payments and reminders for entrepreneurs and small businesses"
            imageClassName="top-20 scale-80 group-hover:scale-90 group-hover:translate-y-10"
          />
          <div className="mt-16">
            <MotionContainer
              link="/token"
              img="/token.png"
              className="bg-[#45C893]"
              tags={["UX Design", "App", "Fintech"]}
              title="Constructoken"
              description="Offering financial solutions and construction options for self-produced housing"
              imageClassName="-right-0 top-0 group-hover:scale-110"
            />
          </div>
          <MotionContainer
            link="/covalto"
            img="/covalto.svg"
            tags={["Product Design", "App", "Fintech"]}
            title="Covalto"
            description="The Financial solution to manage expenses for Business"
            imageClassName="w-[60%] top-54 left-[20%] right-0 bottom-0 group-hover:scale-80 "
          />
          <div className="mt-16">
            <MotionContainer
              link="/reform"
              img="/reform.png"
              className="bg-[#B097E3]"
              tags={["UI Design", "Prototyping", "App", "AI"]}
              title="Reform AI"
              description="Renovate your spaces using artificial intelligence and buy the furniture and services that you need in one place"
              imageClassName="-right-0 top-32 scale-120 group-hover:scale-110"
            />
          </div>
          <MotionContainer
            link="/personal"
            img="/personal.png"
            className="bg-[#F2B590]"
            tags={["Product Design", "App", "Webapp", "Banking"]}
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
              tags={["Design", "Webapp", "Frontend", "E-learning"]}
              title="UI Course"
              imageClassName="-right-0 top-20 group-hover:-translate-x-16"
              description="A complete course to learn UI Design from the principles to practice"
            />
          </div>
          <MotionContainer
            className="bg-[#F1ABA5]"
            link="/lastplay"
            img="/play.png"
            tags={["UI Design", "App", "Sports"]}
            title="LastPlay"
            imageClassName="-right-16 top-20 group-hover:-translate-x-14 scale-120"
            description="The management application to organize and manage sports tournaments"
          />
          <div className="mt-16">
            <MotionContainer
              link="/e4pros"
              img="/pros.png"
              className="bg-[#A3BC73]"
              tags={["UX Design", "Website", "UI Design", "E-learning"]}
              title="English for Professionals"
              description="English courses for all levels, business and tourism orientation or personalized courses"
              imageClassName="-right-16 top-20 group-hover:-translate-x-16 group-hover:translate-y-6 transition-all"
            />
          </div>
          <MotionContainer
            className="bg-[#E9786E]"
            link="/propiedades"
            img="/projects/inmuebles.png"
            tags={["Product Design", "Prototyping", "Webapp"]}
            title="Propiedades"
            description="Facilitating the process of buying and selling real estate properties for clients and sellers"
            imageClassName="left-0 right-0 -top-10 scale-75 transition-all rounded-xl"
          />
          <div className="mt-16">
            <MotionContainer
              link="/fixter"
              img="/projects/org.png"
              className="bg-[#85DDCB]"
              tags={["Product Design", "Frontend", "Website", "Services"]}
              title="Fixter.org"
              description="Showing the b2b services we offer and our selected projects catalogue "
              imageClassName="left-0 right-0 top-28 -rotate-6 scale-80 group-hover:rotate-6 group-hover:scale-75 transition-all"
            />
          </div>
          <MotionContainer
            className="bg-[#F85387]"
            img="/projects/potentiia.png"
            link="/potentia"
            tags={["UX/UI Design", "Website", "Frontend"]}
            title="Potentiia"
            description="Helping people to get their goals through sport and business coaching programs "
            imageClassName="m-[20%] w-[60%] top-48 "
          />
          <div className="mt-16">
            <MotionContainer
              link="/azteca"
              img="/projects/azteca.png"
              className="bg-[#93E6EB]"
              tags={["UX/UI Design", "E-commerce", "Health"]}
              title="Laboratorios Azteca"
              description="Digitizing access to clinical studies through e-commerce "
              imageClassName="right-0 left-0 top-10 scale-80 "
            />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
