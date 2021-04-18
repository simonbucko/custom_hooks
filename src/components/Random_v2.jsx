import React from "react";
import useGif from "./useGif";

const Random = () => {
  const { gif, fetchGif } = useGif(tag);

  return (
    <div className="container">
      <h1>Random GIF</h1>
      <img src={gif} alt="Random gif" width="500" />
      <button onClick={fetchGif}>Click for NEW GIF</button>
    </div>
  );
};

export default Random;
