import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailList } from "../utils/api";
import { motion } from "framer-motion";

const Recipe = () => {
  const params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("summary");

  useEffect(() => {
    getDetailList(params.id).then((id) => {
      setDetails(id);
    });
    // getDetailList(params.id)
  }, [params.id]);

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-12"
    >
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h4 className="font-bold font-Nunito text-lg mb-4">{details.title}</h4>
        <img
          src={details.image}
          alt={details.image}
          className="w-full rounded-xl object-cover"
        />
      </motion.div>
      <div>
        <div>
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-4 w-full mb-4"
          >
            <button
              onClick={() => setActiveTab("summary")}
              className={
                activeTab === "summary"
                  ? "bg-gradient-to-r from-yellow-500 to-yellow-700 p-2 text-white font-Nunito font-bold text-xs xs:text-sm md:text-base"
                  : "bg-gradient-to-br from-[#acacac] to-[#878585] p-2 text-white font-Nunito font-normal  text-xs xs:text-sm md:text-base"
              }
            >
              Summary
            </button>
            <button
              onClick={() => setActiveTab("ingridients")}
              className={
                activeTab === "ingridients"
                  ? "bg-gradient-to-r from-yellow-500 to-yellow-700 p-2 text-white font-Nunito font-bold  text-xs xs:text-sm md:text-base"
                  : "bg-gradient-to-br from-[#acacac] to-[#878585] p-2 text-white font-Nunito font-normal  text-xs xs:text-sm md:text-base"
              }
            >
              Instructions & Ingridients
            </button>
          </motion.div>
          {activeTab === "summary" && (
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-normal font-Nunito text-justify text-xs xs:text-sm md:text-base"
            >
              <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
            </motion.div>
          )}
          {activeTab === "ingridients" && (
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="font-Nunito"
            >
              <div className="mb-4">
                <h5 className="font-bold text-base">Ingridients</h5>
                <ul className="text-xs xs:text-sm md:text-base">
                  {details.extendedIngredients.map((item) => {
                    return <li key={item.id}>{item.original}</li>;
                  })}
                </ul>
              </div>
              <div>
                <h5 className="font-bold text-base">Instructions</h5>
                <p
                  className="text-xs xs:text-sm md:text-base"
                  dangerouslySetInnerHTML={{ __html: details.instructions }}
                ></p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Recipe;
