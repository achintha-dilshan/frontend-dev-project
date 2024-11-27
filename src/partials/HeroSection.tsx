import heroImgLg from "../assets/hero-img-lg.png";
import heroImgMd from "../assets/hero-img-md.png";
import heroImgSm from "../assets/hero-img-sm.png";
import { Button } from "../components/Button";

export const HeroSection = () => {
  return (
    <section className="w-full relative">
      <picture>
        <source media="(max-width: 768px)" srcSet={heroImgSm} />
        <source media="(max-width: 1024px)" srcSet={heroImgMd} />
        <img src={heroImgLg} alt="Hero Image" className="w-full" />
      </picture>

      {/* content box */}
      <div className="lg:absolute lg:left-20 lg:bottom-10">
        <div className="bg-gradient-to-r from-greenbg-2 to-analogous-2 pt-6 pb-8 px-10 lg:w-[630px] w-full">
          <h1 className="md:text-5xl text-4xl -tracking-tight font-bold text-white mb-5">
            We crush your competitors, goals, and sales records - without the
            B.S.
          </h1>
          <Button>Get free consultation</Button>
        </div>
      </div>
    </section>
  );
};
