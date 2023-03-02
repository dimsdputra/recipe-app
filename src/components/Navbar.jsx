import React from "react";
import { Link } from "react-router-dom";
import Category from "./Category";
import Search from "./Search";
import { GiKnifeFork } from "react-icons/gi";

const Navbar = () => {
  return (
    <div>
      <div className="mb-8">
        <Link
          to={"/"}
          className="flex justify-start items-center text-xl font-Satisfy font-normal"
        >
          <GiKnifeFork /> <p className="ml-2">Recipes</p>
        </Link>
      </div>
      <Search />
      <Category />
    </div>
  );
};

export default Navbar;
