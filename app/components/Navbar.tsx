import { Link } from "react-router";
import { Button } from "./Button";
import Michi from "./Mich";

export const Navbar = () => {
  return (
    <section>
      <nav className="flex h-20 justify-between items-center max-w-7xl mx-auto">
        <Michi />
        <div className="flex gap-6">
          <Tab title="Proyectos" />
          <Tab title="Recursos" />
          <Tab title="Saas" />
          <Tab title="Blog" />
        </div>
        <Button />
      </nav>
    </section>
  );
};

const Tab = ({ title }: { title: string }) => {
  return <div className="">{title}</div>;
};
