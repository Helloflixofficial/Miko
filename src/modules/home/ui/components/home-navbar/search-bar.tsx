import { SearchIcon } from "lucide-react";

const Searchbar = () => {
  return (
    <>
      <form className="flex w-full max-w-[400px]">
        <div className="relative w-full top-3 ">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-5 py-1.5 pr-1 rounded-l-full border focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="px-5 h-9 py-2.5 mt-3 bg-gray-100 border border-l-0 rounded-r-full hover:outline-none focus:bg-[#B9B28A] disabled:opacity-50  disabled:cursor-not-allowed"
        >
          <SearchIcon className="size-5 " />
        </button>
      </form>
    </>
  );
};

export default Searchbar;
