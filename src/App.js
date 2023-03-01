import Category from "./components/Category";
import Pages from "./pages/Pages";
import { BrowserRouter, Link } from "react-router-dom";
import Search from "./components/Search";
import { GiKnifeFork } from "react-icons/gi";

function App() {
  return (
    <div className="mx-12 my-8 xs:mx-16 sm:mx-20 md:mx-24 lg:mx-28 xl:mx-32">
      <BrowserRouter>
        <div className="mb-8">
          <Link to={"/"} className="flex justify-start items-center text-xl font-Satisfy font-normal">
            <GiKnifeFork /> <p className="ml-2">Recipes</p>
          </Link>
        </div>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
