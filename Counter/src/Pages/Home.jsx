import React, { useState, useEffect } from "react";

export default function Home() {
  let [count1, setCount1] = useState(0);

  return (

    <div>
      <center>
        <h1 className=" text-5xl">Home</h1>
        <hr />
        <h2>{count1}</h2>
        <button
          className="bg-black text-white rounded-xl px-4 py-2 "
          onClick={() => setCount1(count1 + 1)}
        >
          count1
        </button>

        
      </center>
    </div>
  );
}
