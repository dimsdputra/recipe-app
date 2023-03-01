import { React, useEffect, useState } from "react";
import { getHealthyList } from "../utils/api";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

const Healthy = () => {
  const [healthy, setHealthy] = useState([]);

  useEffect(() => {
    const check = localStorage.getItem("healthy");

    if (check) {
      setHealthy(JSON.parse(check));
    } else {
      getHealthyList().then((recipes) => {
        localStorage.setItem("healthy", JSON.stringify(recipes));
        setHealthy(recipes);
        // console.log(recipes);
      });
    }
    // getHealthyList()
  }, []);
  return (
    <div>
      <h3 className="font-bold text-2xl font-Nunito">Healthiness Foods</h3>
      <div className="mx-0 my-6">
        <Splide
          options={{
            perPage: 4,
            arrows: true,
            pagination: true,
            drag: "free",
            gap: 30,
            breakpoints: {
              1024: {
                perPage: 4,
              },
              768: {
                perPage: 3,
                gap: 20,
              },
              512: {
                perPage: 2,
                gap: 20,
              },
            },
          }}
        >
          {healthy.map((recipes) => {
            return (
              <SplideSlide key={recipes.id}>
                <Link to={"/recipe/" + recipes.id}>
                  <div className="group/item min-h-[12rem] rounded-lg overflow-hidden relative">
                    <p className="absolute z-10 left-1/2 bottom-0 transform translate-x-[-50%] translate-y-0 text-white w-[95%] text-center h-[40%] flex justify-center items-center font-Nunito font-normal text-sm">
                      {recipes.title}
                    </p>
                    <img
                      className="rounded-lg absolute left-0 w-full h-full object-cover"
                      src={recipes.image}
                      alt={recipes.title}
                    />
                    <div className="z-[3] absolute rounded-lg w-full h-full bg-gradient-to-b from-transparent to-black opacity-75 group-hover/item:opacity-90"></div>
                  </div>
                </Link>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
};

export default Healthy;
