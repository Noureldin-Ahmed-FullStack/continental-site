"use client";
import { useState } from "react";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
// import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "../../lib/utils/cn";
import { useThemeStore } from "../../context/ThemeContext";
import { Link } from "react-router-dom";
import { Checkbox } from "@mui/material";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0) {
        setVisible(false);
      } else {
        if (direction === 1 || direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  const { ToggleTheme,theme } = useThemeStore();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "fixed top-10 items-center flex justify-around z-50 w-full",
          className
        )}
      >
        <div className="relative">
        </div>
        <div className="max-w-fit flex inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4">
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              to={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 items-center font-bold flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="text-sm">{navItem.name}</span>
            </Link>
          ))}
          <button onClick={ToggleTheme} className="border text-sm font-medium relative border-white/[0.2] text-white px-4 py-2 rounded-full">
            <span>Login</span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
          </button>
        </div>
        <div onClick={ToggleTheme} className="absolute right-10 w-9 h-9 z-0 hidden sm:flex items-center justify-center">
          <Checkbox
            aria-label="Darkmode"
            checked={theme=='dark'}
            icon={<WbSunnyIcon className="text-zinc-200 dark:text-white  h-5"/>}
            checkedIcon={<DarkModeIcon className="text-gray-900 dark:text-white "/>}
          />
        </div>

      </motion.div>
    </AnimatePresence>
  );
};
