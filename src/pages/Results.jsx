import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getSearchList } from "../utils/api";
import { motion } from "framer-motion";

const Results = () => {
  const [searcRecipe, setSearchRecipe] = useState([]);
  let params = useParams();

  useEffect(() => {
    getSearchList(params.search).then((q) => {
      setSearchRecipe(q);
    });
  }, [params.search]);
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 xs:gap-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {searcRecipe.map((item) => {
        return (
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            key={item.id}
            className="shadow-lg hover:shadow-2xl border rounded-xl p-2 flex flex-col justify-between"
          >
            <div>
              <img
                className="w-full object-cover rounded-xl border shadow-sm"
                src={item.image}
                alt={item.image}
              />
              <h4 className="text-start text-sm font-Nunito font-bold pt-2">
                {item.title}
              </h4>
            </div>
            <Link to={"/recipe/" + item.id} className="w-full">
              <div className="rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-700 w-full p-2 text-center mt-2 hover:bg-gradient-to-l hover:from-yellow-600 hover:to-yellow-800">
                <button className="text-center font-Nunito font-semibold text-white">
                  Recipe
                </button>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Results;
