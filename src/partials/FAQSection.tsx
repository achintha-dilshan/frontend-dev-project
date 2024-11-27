import { AccordionItem } from "../components/AccordionItem";

export const FAQSection = () => {
  const accordionItems = [
    {
      title: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
      content:
        "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
      content:
        "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?",
      content:
        "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
    },
  ];

  return (
    <div className="max-w-screen-lg mx-auto w-full md:mb-20 md:mt-10 mb-[60px] mt-[30px] lg:px-20 md:px-10 px-5">
      <h2 className="text-primary font-poppins text-[27px] tracking-[0.4px] leading-[33px] font-semibold text-center mb-7">
        Frequently asked questions
      </h2>
      <ul className="space-y-4">
        {accordionItems.map((item, index) => {
          if (index == 0) {
            return (
              <li>
                <AccordionItem
                  key={index}
                  title={item.title}
                  content={item.content}
                  open={true}
                />
              </li>
            );
          } else {
            return (
              <li>
                <AccordionItem
                  key={index}
                  title={item.title}
                  content={item.content}
                />
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};
