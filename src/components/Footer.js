import Link from "next/link";
import Layout from "./Layout";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="w-full border-t-2 dark:text-light px-20 dark:border-light border-solid border-dark font text-lg sm:text-base">
      <div className=" flex items-center py-4  gap-2 justify-between  lg:flex-col">
        <span className="">{new Date().getFullYear()}&copy; All rights reserved</span>
        <Link href="/">
          {" "}
          build by <span className="underline">Williams</span>
        </Link>
        <div className="flex items-center gap-2  ">
          <motion.a
            href="https"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.5 }}
            className=" mr-3 text-3xl"
          >
            <FaTwitter />
          </motion.a>
          <motion.a
            href="https"
            target={"_blank"}
            className=" mx-3  text-3xl"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.5 }}
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            href="https"
            target={"_blank"}
            className=" mx-3  text-3xl"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.5 }}
          >
            <FaFacebook />
          </motion.a>
          <motion.a
            href="https"
            target={"_blank"}
            className=" ml-3  text-3xl"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.5 }}
          >
            <FaLinkedinIn />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
