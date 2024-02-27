import React from "react";
import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {

    const data= useLoaderData();
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/SaiCharanReddyPuligari")
//       .then((res) => res.json()) //converting the string to JSON
//       .then((data) => {
//         setData(data);
//         // console.log(data);
//       });
//   }, []);
  return (
    <div className="text-center text-white bg-gray-800 p-4 text-3xl">
      Github: {data.followers}
      <img
        className="rounded-full p-4"
        src={data.avatar_url}
        alt=""
        width={300}
      />
    </div>
  );
}

export default Github;


//allows you to fetch the data without useEffect.
//Infact, even if we hover on the specified route, it starts the fetching and stores as cache, and displays on request

export const getGithubInfoLoader = async()=>{
    const response = await fetch("https://api.github.com/users/SaiCharanReddyPuligari")
    return response.json()
}