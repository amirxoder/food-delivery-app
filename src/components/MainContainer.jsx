import React from "react";
import { HomeContainer, RowContainer } from "./";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useStateValue } from "./../context/StateProvider";

const MainContainer = () => {
  const [{ foodItems }, dispatch] = useStateValue();

  return (
    <div className="flex w-full h-auto flex-col items-center justify-center overflow-x-hidden">
      <HomeContainer />
      <section className="w-full  my-10 ">
        <div className="w-full flex items-center justify-between">
          <p
            className="text-2xl font-semibold capitalize text-headingColor relative
           before:absolute before:rounded-lg before:content before:w-200 before:h-1 before:bottom-0 before:left-0 before:bg-orange-400
          transition-all ease-in-out"
          >
            Our fresh & healthy fruits
          </p>
          <div className="items-center hidden md:flex gap-3">
            <motion.div
              whileTap={{
                scale: 0.75,
              }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
            >
              <MdChevronLeft className="text-lg text-white" />
            </motion.div>
            <motion.div
              whileTap={{
                scale: 0.75,
              }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
            >
              <MdChevronRight className="text-lg text-white" />
            </motion.div>
          </div>
        </div>

        <RowContainer
          flag={true}
          data={foodItems?.filter((n) => n.category === "fruits")}
        />
      </section>
    </div>
  );
};

export default MainContainer;
