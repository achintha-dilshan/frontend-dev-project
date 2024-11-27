import logo from "../assets/logo.svg";

export const Footer = () => {
  return (
    <footer className="bg-primary mt-auto">
      <div className="max-w-screen-2xl mx-auto px-10 py-10 xl:px-20">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
          <div className="mb-[60px] lg:mb-0 md:col-span-2">
            <div className="max-w-[413px]">
              <div className="mb-5">
                <a href="/">
                  <img src={logo} alt="logo" className="h-9 -mt-[11px]" />
                </a>
              </div>
              <p className="font-lato text-white leading-tight">
                Your goal is our target. Not anything in between. We use online
                marketing platforms and tools to achieve single objective - your
                business results.
              </p>
            </div>
          </div>

          {/* our technologies */}
          <div className="mb-10 md:mb-0">
            <h5 className="text-white font-semibold text-[21px] mb-3">
              Our Technologies
            </h5>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white text-sm font-medium capitalize"
                >
                  ReactJS
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-sm font-medium capitalize"
                >
                  Gatsby
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-sm font-medium capitalize"
                >
                  NextJS
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-sm font-medium capitalize"
                >
                  NodeJS
                </a>
              </li>
            </ul>
          </div>

          {/* our services */}
          <div>
            <h5 className="text-white font-semibold text-[21px] mb-3">
              Our Services
            </h5>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white text-sm font-medium capitalize"
                >
                  Social Media Marketing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-sm font-medium capitalize"
                >
                  Web &amp; Mobile App Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-sm font-medium capitalize"
                >
                  Data &amp; Analytics
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-screen-sm mx-auto pt-2 pb-5 border-t border-white">
        <div className="flex items-center justify-center divide-x divide-white">
          <a href="#" className="text-white text-sm font-medium px-4">
            Privacy Policy
          </a>
          <a href="#" className="text-white text-sm font-medium px-4">
            Terms &amp; Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};
