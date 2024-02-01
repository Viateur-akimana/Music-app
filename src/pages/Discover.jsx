// import React from "react";
import { genres } from '../assets/constants';

const Discover = () => {
  const genresTitle = 'Pop';
  return (
    <div className="flex flex-col">
      <div className="w-full justify-between items-center sm:flex-row  flex-col m-20">
        <h2 className="font-bold text-white text-3xl text-left justify-center">
          Discover {genresTitle}
        </h2>
        <select
          onChange={() => {}}
          value=""
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none mx-10 mt-3"
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>
      <div className='flex flex-wrap sm:justify-start justify-center gap-8'></div>
    </div>
  );
};

export default Discover;
