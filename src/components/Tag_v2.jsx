import React, { useState } from "react";
import useGif from "./useGif";

const Tag = () => {
  const [tag, setTag] = useState("dogs");
  const { gif, fetchGif } = useGif(tag);

  return (
    <div className="container">
      <h1>Random {tag} GIF</h1>
      <img src={gif} alt="Random gif" width="500" />
      <input type="text" value={tag} onChange={(e) => setTag(e.target.value)} />
      <button onClick={() => fetchGif(tag)}>Click for NEW GIF</button>
    </div>
  );
};

export default Tag;
