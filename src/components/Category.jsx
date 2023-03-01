import React from "react";
import main from "../assets/course.png";
import breakfast from "../assets/breakfast.png";
import drink from "../assets/drink.png";
import salad from "../assets/salad.png";
import sweets from "../assets/sweets.png";
import { NavLink } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Category = () => {
  const activeLink =
    "flex flex-col justify-center items-center rounded-full no-underline w-[6rem] h-[6rem] cursor-pointer scale-75 bg-gradient-to-r from-yellow-500 to-yellow-700";
  const notActiveLink =
    "flex flex-col justify-center items-center rounded-full no-underline w-[6rem] h-[6rem] cursor-pointer scale-75 bg-gradient-to-br from-[#acacac] to-[#878585]";

  return (
    <div className="my-[2rem] mx-0">
      <Splide
        className="flex justify-center w-full"
        options={{
          perPage: 5,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: 0,
          breakpoints: {
            324: {
              perPage: 2,
              pagination: true
            },
            400: {
              perPage: 3,
              pagination: true
            },
            540: {
              perPage: 4,
              pagination: true
            },
          },
        }}
      >
        <SplideSlide>
          <NavLink
            to={"cuisine/breakfast"}
            className={({ isActive }) =>
              isActive ? activeLink : notActiveLink
            }
          >
            <img src={breakfast} alt="breakfast" className="w-8" />
            <h4 className="text-sm font-Nunito font-bold text-white">
              Breakfast
            </h4>
          </NavLink>
        </SplideSlide>
        <SplideSlide>
          <NavLink
            to={"cuisine/main_course"}
            className={({ isActive }) =>
              isActive ? activeLink : notActiveLink
            }
          >
            <img src={main} alt="main_course" className="w-8" />
            <h4 className="text-sm text-center font-Nunito font-bold text-white">
              Main Course
            </h4>
          </NavLink>
        </SplideSlide>
        <SplideSlide>
          <NavLink
            to={"cuisine/dessert"}
            className={({ isActive }) =>
              isActive ? activeLink : notActiveLink
            }
          >
            <img src={sweets} alt="sweets" className="w-8" />
            <h4 className="text-sm font-Nunito font-bold text-white">
              Dessert
            </h4>
          </NavLink>
        </SplideSlide>
        <SplideSlide>
          <NavLink
            to={"cuisine/drink"}
            className={({ isActive }) =>
              isActive ? activeLink : notActiveLink
            }
          >
            <img src={drink} alt="drink" className="w-8" />
            <h4 className="text-sm font-Nunito font-bold text-white">Drink</h4>
          </NavLink>
        </SplideSlide>
        <SplideSlide>
          <NavLink
            to={"cuisine/salad"}
            className={({ isActive }) =>
              isActive ? activeLink : notActiveLink
            }
          >
            <img src={salad} alt="salad" className="w-8" />
            <h4 className="text-sm font-Nunito font-bold text-white">Salad</h4>
          </NavLink>
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Category;
