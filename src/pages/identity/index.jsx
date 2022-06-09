import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import axios from "axios";

function PostIndex() {
    
  const [posts, setPosts] = useState([]);

  useEffect(() => {
      fectData();
  }, []);

  const fectData = async () => {
      const response = await axios.get('https://6a06-116-206-28-17.ngrok.io/api/identity');
      const data = await response.data.data;
      setPosts(data);
  }

return (
  posts.map((post, index) => (
    <p key={ post.id }>
        <p>{ index + 1 }</p>
        <p>{ post.name }</p>
        <p>{ post.about }</p>
    </p>
))
);

}