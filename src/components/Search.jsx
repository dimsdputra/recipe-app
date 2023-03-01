import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Search = () => {
    const [input, setInput] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/search/' + input)
        setInput('')
        // console.log(input)
    }

  return (
    <div className="mx-0 sm:mx-12 lg:mx-32">
      <form className="relative w-full" onSubmit={handleSubmit}>
        <div>
          <FaSearch className="absolute top-1/2 left-4 translate-x-full -translate-y-1/2 text-white"/>
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            name="input"
            value={input}
            placeholder="Search the recipe"
            className="w-full bg-gradient-to-br from-[#acacac] to-[#878585] border-none font-Nunito font-normal text-sm text-white py-4 px-14 rounded-xl outline-none placeholder:text-slate-100 placeholder:font-Nunito"
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
