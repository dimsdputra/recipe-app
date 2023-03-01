import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { getCuisineList } from "../utils/api";

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  useEffect(() => {
    const check = localStorage.getItem(params.type);

    if (check) {
      setCuisine(JSON.parse(check));
    } else {
      getCuisineList(params.type).then((recipes) => {
        localStorage.setItem(params.type, JSON.stringify(recipes));
        setCuisine(recipes);
        // console.log(recipes);
      });
    }
    // getCuisineList(params.type)
  }, [params.type]);
  return (
    <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 xs:gap-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
      {cuisine.map((item) => {
        return (
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            key={item.id}
            className="shadow-lg border rounded-xl p-2 flex flex-col justify-between hover:shadow-2xl"
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

export default Cuisine;
