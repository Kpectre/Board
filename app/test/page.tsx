"use client";
import React from "react";

function page() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <button
        className="w-23 h-23 bg-blue-500 text-white"
        onClick={(e) => {
          e.preventDefault();
          fetch("http://localhost:3000/api/posts", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: "hi",
              content: "kairi",
            }),
          });
        }}
      >
        送信
      </button>
    </div>
  );
}

export default page;
