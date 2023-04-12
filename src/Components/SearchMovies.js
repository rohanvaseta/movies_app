import React from "react";

const SearchMovies = (props) => {
  return (
    <div>
      {props.searchData.length > 0 ? (
        <div className="bg-rose-200">
          <div className="ml-4 mr-4 uppercase font-black text-purple-900 text-lg border-b-2 border-black ">
            <span>SEARCHED RESULTS</span>
          </div>
          <div class="relative grid grid-flow-col gap-5 overflow-x-scroll no-scrollbar">
            {props.searchData.map((val) => {
              return (
                <div className="w-72 h-108 flex flex-wrap justify-center items-center hover:bg-gray-400 rounded-md">
                  <img
                    className="inline w-64 h-68 m-2"
                    src={`https://image.tmdb.org/t/p/w500/${val.poster_path}`}
                    alt="Sorry No Poster Available"
                  />
                  <h3 className="m-1">{val.title}</h3>
                  <h3 className="m-1">{val.name}</h3>
                  <button onClick={() => props.addFavoriteMovie(val)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="red"
                      class="bi bi-heart-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                      />
                    </svg>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SearchMovies;
