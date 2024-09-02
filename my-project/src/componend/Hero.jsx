import { HERO_CONTENT } from "../constants";

function Hero() {
  return (
    <section className=" select-none   mx-8 my-5 boder-b-2 ">
      <div className="flex flex-col items-center my-20">
        <h1 className="  text-4xl mb-5  lg:text-[10rem] p-1 uppercase font-bold">
          {HERO_CONTENT.title}
        </h1>

        <p className="lg:mt-6   text-center text-sm mb-4 font-medium tracking-tighter">
          {HERO_CONTENT.subtitle}
        </p>

        {/* hero img */}
        <img
          src={HERO_CONTENT.image}
          className="w-full h-[65vh] object-cover rounded-2xl   "
          alt="Hero"
        />
      </div>
    </section>
  );
}

export default Hero;
