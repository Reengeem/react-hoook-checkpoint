import { Button } from "antd";
import React, { useState, useMemo } from "react";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import CreateNewMovie from "./components/CreateNewMovie";
import { movies } from "../src/data";

function App() {
  // the hook declaration here with the state as movies====================================
  const [myMovies, setMyMovies] = useState(movies);
  const [random, setRandom] = useState(0);

  // memorizing of initial movie value=====================================================

  const memorizedMovies = useMemo(() => {
    return {
      myMemorizedMovies: myMovies,
    };
  }, [random]);

  return (
    <div>
      {/* the components to be displayed here================================================ */}
      <Navbar />
      <div className="max-w-4xl mx-auto flex flex-wrap justify-between py-10 ">
        <Filter
          setMyMovies={setMyMovies}
          myMovies={myMovies}
          memorizedMovies={memorizedMovies}
        />
        <CreateNewMovie
          setMyMovies={setMyMovies}
          memorizedMovies={memorizedMovies}
          setRandom={setRandom}
        />
      </div>
      {myMovies.lengh === 0 ? (
        <div className="text-center py-24 text-3xl">Search not found</div>
      ) : (
        <MovieList myMovies={myMovies} />
      )}
    </div>
  );
}

export default App;
