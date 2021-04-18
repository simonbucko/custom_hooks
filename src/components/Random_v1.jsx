import React, { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const Random = () => {
  const [gif, setGif] = useState("");

  const fetchGif = async () => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const { data } = await axios.get(url);
    const imageSrc = data.data.images.downsized_large.url;
    console.log(data);
    console.log(imageSrc);
    setGif(imageSrc);
  };

  useEffect(() => {
    fetchGif();
  }, []);

  const handleCLick = () => {
    fetchGif();
  };

  return (
    <div className="container">
      <h1>Random GIF</h1>
      <img src={gif} alt="Random gif" width="500" />
      <button onClick={handleCLick}>Click for NEW GIF</button>
    </div>
  );
};

export default Random;
