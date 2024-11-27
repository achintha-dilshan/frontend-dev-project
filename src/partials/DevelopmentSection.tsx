import developmentImgLg from "../assets/development-lg.png";
import developmentImgMd from "../assets/development-md.png";
import developmentImgSm from "../assets/development-sm.png";
import { Button } from "../components/Button";

export const DevelopmentSection = () => {
  return (
    <section className="max-w-screen-xl mx-auto w-full md:my-10 my-[30px] lg:px-20 md:px-10 px-5">
      <div className="flex items-center md:flex-row flex-col">
        {/* image box */}
        <div className="shrink-0 md:p-0 pt-0 p-5">
          <picture>
            <source media="(max-width: 768px)" srcSet={developmentImgSm} />
            <source media="(max-width: 1024px)" srcSet={developmentImgMd} />
            <img
              src={developmentImgLg}
              alt="Web &amp; Mobile Development"
              loading="lazy"
            />
          </picture>
        </div>

        {/* content */}
        <div>
          <div className="lg:w-[82%] w-full ml-auto md:p-5 md:pr-0 p-0 md:text-left text-center">
            <h2 className="text-primary font-poppins text-[27px] tracking-[0.4px] leading-[33px] font-semibold">
              Web &amp; Mobile App Development
            </h2>
            <p className="leading-[19.36px] text-base my-5">
              Your web and mobile Apps are pieces of the puzzle to grow your
              business. We use frameworks which tailor content and engagement
              methods to respond to different intents shown by your potential
              customers who interact with your business online.
            </p>
            <Button>Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
