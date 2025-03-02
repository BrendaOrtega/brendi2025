import { Link } from "react-router";
import { Button } from "./Button";
import Michi from "./Mich";

export const Navbar = () => {
  return (
    <section>
      <nav className="flex h-20 justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className=" relative">
          {" "}
          <Michi />
          <div className="absolute h-16 left-0  pl-20 top-0 flex items-center">
            Brenda
          </div>
        </Link>

        <div className="flex gap-6">
          <Tab link="/projects" title="Proyectos" />
          <Tab link="/saas" title="Saas" />
          <Tab link="/resources" title="Recursos" />
          <Tab link="/blog" title="Blog" />
        </div>
        <Button />
      </nav>
    </section>
  );
};

const Tab = ({ title, link }: { title: string; link: string }) => {
  return (
    <Link to={link}>
      <button className="">{title}</button>
    </Link>
  );
};
