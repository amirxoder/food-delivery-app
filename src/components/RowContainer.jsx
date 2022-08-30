import React, { useEffect } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";

const RowContainer = ({ flag, data }) => {
  // useEffect(() => {
  //   console.log(data);
  // }, []);
  return (
    <div
      className={`w-full max-w-[1440px] my-12 flex items-center gap-4 overflow-x-hidden ${
        flag ? "overflow-x-scroll" : "overflow-x-hidden"
      } `}
    >
      {data &&
        data.map((item) => (
          <div
            key={item.id}
            className="w-300 h-[14rem] duration-200 transition-all hover:drop-shadow-md drop-shadow-sm hover:bg-slate-100  md:w-340 h-atuo my-12 backdrop-blur-lg bg-gray-100 
       rounded-lg p-2 "
          >
            <div
              className="w-full  flex items-center justify-between h-[5em]
        "
            >
              <motion.img
                whileHover={{
                  scale: 1.2,
                }}
                className="w-40 -mt-8"
                src={item.imageUrl}
                alt=""
              />
              <motion.div
                whileTap={{
                  scale: 0.75,
                }}
                className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md"
              >
                <MdShoppingBasket className="text-white" />
              </motion.div>
            </div>
            <div className="w-full flex-col flex items-end justify-end mt-8">
              <p className="text-textColor font-semibold md:text-lg text-base">
                {item.title}
              </p>
              <p className="mt-1 text-sm text-gray-500 ">
                {item.calories} Calories
              </p>
              <div className="flex items-center gap-8">
                <p className="text-lg text-textHeading font-semibold">
                  <span className="text-sm text-red-500">$ </span>
                  {item.price}
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RowContainer;
