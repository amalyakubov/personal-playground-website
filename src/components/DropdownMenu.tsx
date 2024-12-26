import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const DropdownMenu = ({ className, ...props }: { className?: string }) => {
  return (
    <div
      {...props}
      className={`p-9 bg-slate-200 dark:text-black mt-9 rounded-2xl rounded-b-none pb-4 drop-shadow-xl ${className || ""}`}
    >
      <ul>
        <DropDownListItem title="Contact me:" content={<a href="https://github.com/amalyakubov">Git Hub</a>} />
      </ul>
    </div>
  );
};
const DropDownListItem = ({ content, title }: { content: React.ReactNode; title: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <li onClick={handleClick} className="text-2xl font-bolder bg-slate-200 cursor-pointer mb-2">
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
