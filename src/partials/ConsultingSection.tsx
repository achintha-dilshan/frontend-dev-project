import consultingImgLg from "../assets/consulting-lg.png";
import consultingImgMd from "../assets/consulting-md.png";
import consultingImgSm from "../assets/consulting-sm.png";
import { Button } from "../components/Button";

export const ConsultingSection = () => {
  return (
    <section className="max-w-screen-xl mx-auto w-full md:my-10 my-[30px] lg:px-20 md:px-10 px-5">
      <div className="flex items-center md:flex-row flex-col-reverse">
        {/* content */}
        <div>
          <div className="lg:w-[82%] w-full mr-auto md:p-5 md:pl-0 p-0 md:text-left text-center">
            <h2 className="text-primary font-poppins text-[27px] tracking-[0.4px] leading-[33px] font-semibold">
              Digital Strategy Consulting
            </h2>
            <p className="leading-[19.36px] text-base my-5">
              Your digital strategy should complement the overall marketing
              strategy of the company. In online marketing, each component will
              never work in isolation and every business needs a different mix.
              We provide a clear concept and strategic overview to find the most
              efficient model for your business.
            </p>
            <Button>Learn More</Button>
          </div>
        </div>

        {/* image box */}
        <div className="shrink-0 md:p-0 pt-0 p-5">
          <picture>
            <source media="(max-width: 768px)" srcSet={consultingImgSm} />
            <source media="(max-width: 1024px)" srcSet={consultingImgMd} />
            <img
              src={consultingImgLg}
              alt="Digital Strategy Consulting"
              loading="lazy"
            />
          </picture>
        </div>
      </div>
    </section>
  );
};
