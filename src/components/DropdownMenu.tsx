import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const DropdownMenu = ({ className, ...props }) => {
  return (
    <div
      {...props}
      className={`p-9 bg-slate-200 mt-9 rounded-2xl pb-4 drop-shadow-xl ${className || ""}`}
    >
      <ul>
        <DropDownListItem
          title="Tallinn"
          content="Tallinn is the capital of Estonia"
        />
        <DropDownListItem
          title="Stockholm"
          content="Stockholm is the capital of Sweden"
        />
        <DropDownListItem
          title="Copenhagen"
          content="Copenhagen is the capital of Denmark"
        />
      </ul>
    </div>
  );
};

const DropDownListItem = ({
  content,
  title,
}: {
  content: string;
  title: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <li
        onClick={handleClick}
        className="text-2xl font-bolder bg-slate-200 cursor-pointer mb-2"
      >
        {title}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <p className="text-xl text-gray-600 pt-2 pb-6">{content}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </li>
    </div>
  );
};

export { DropdownMenu };
