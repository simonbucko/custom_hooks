import React, { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const Tag = () => {
  const [gif, setGif] = useState("");
  const [tag, setTag] = useState("dogs");

  const fetchGif = async (tag) => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const { data } = await axios.get(url);
    const imageSrc = data.data.images.downsized_large.url;
    console.log(data);
    console.log(imageSrc);
    setGif(imageSrc);
  };

  useEffect(() => {
    fetchGif(tag);
  }, [tag]);

  const handleCLick = () => {
    fetchGif(tag);
  };

  return (
    <div className="container">
      <h1>Random {tag} GIF</h1>
      <img src={gif} alt="Random gif" width="500" />
      <input type="text" value={tag} onChange={(e) => setTag(e.target.value)} />
      <button onClick={handleCLick}>Click for NEW GIF</button>
    </div>
  );
};

export default Tag;
