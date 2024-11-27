import plus from "../assets/plus-icon.svg";
import minus from "../assets/minus-icon.svg";
import { useEffect, useRef, useState } from "react";

type AccordionItemProps = {
  title: string;
  content: string;
  open?: boolean;
};

export const AccordionItem = ({
  title,
  content,
  open = false,
}: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(open);
  const [contentHeight, setContentHeight] = useState<number>(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [open]);

  useEffect(() => {
    const updateContentHeight = () => {
      if (contentRef.current) {
        setContentHeight(isOpen ? contentRef.current.scrollHeight : 0);
      }
    };

    const observer = new ResizeObserver(updateContentHeight);
    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [isOpen]);

  return (
    <div className="p-6 rounded-[7px] bg-[#FAF8FF]">
      {/* accordion title */}
      <button
        type="button"
        className="w-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-start justify-between gap-10">
          <span
            className={`font-medium leading-7 md:text-[22px] text-xl text-left transition-colors ${isOpen ? "text-primary" : "text-black"}`}
          >
            {title}
          </span>
          <span
            className={`size-[14px] shrink-0 inline-block ${isOpen ? "mt-3" : "mt-1.5"}`}
          >
            <img src={isOpen ? minus : plus} role="presentation" />
          </span>
        </div>
      </button>

      {/* accordion content */}
      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentHeight}px` : "0px",
        }}
        className={`overflow-hidden h-fit transition-maxHeight duration-300 ease-in-out ${isOpen && "mt-6"}`}
      >
        <p className="md:text-lg text-base leading-[30px] text-[#4b4869]">
          {content}
        </p>
      </div>
    </div>
  );
};
