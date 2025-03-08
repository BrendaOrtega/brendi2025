import { Navbar } from "~/components/Navbar";

export default function Saas() {
  return (
    <section className="bg-white min-h-screen relative overflow-hidden">
      <Navbar />
      <Form />
      <img className="w-14 absolute -bottom-3 right-28" src="/Cat2.gif" />
    </section>
  );
}

const Form = () => {
  return (
    <section className="max-w-2xl  mx-auto pt-32  ">
      <div>
        <div className="flex flex-col items-center gap-6 px-4 mb-10 text-center">
          <h3 className="text-5xl font-title">Let's work together</h3>
          <p className="text-xl  ">
            Feel free to send me an email, or use the form below to ask me any
            questions about my work.
          </p>
        </div>
        <iframe
          frameBorder="0"
          id="formmy-iframe"
          title="formmy"
          width="100%"
          height="560"
          src="https://www.formmy.app/embed/67cb72a4195dc4d556cb7654"
          style={{ margin: "0 auto", display: "block" }}
        ></iframe>{" "}
      </div>
    </section>
  );
};
