import React from "react";

const Activities = () => {
  return (
    <div className="max-w-[1140px] m-auto w-full md:flex mt-[-75px]">
      <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white font-bold text-2xl">
          Resort
        </h3>
        <img className="w-full h-full object-cover relative border-4 border-white shadow-xl shadow-gray-400 rounded-md"
          src="https://images.unsplash.com/photo-1500930287596-c1ecaa373bb2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHJlc29ydCUyMGhvdGVsfGVufDB8fDB8fHww"
          alt=""
        />
      </div>
      <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%] text-white font-bold text-2xl">
          Cruies
        </h3>
        <img  className="w-full h-full object-cover relative border-4 border-white shadow-xl shadow-gray-400 rounded-md"
          src="https://images.unsplash.com/photo-1599640842225-85d111c60e6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3J1aXNlJTIwc2hpcHxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
      </div>
      <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%] text-white font-bold text-2xl">
          Scuba Diving
        </h3>
        <img className="w-full h-full object-cover relative border-4 border-white shadow-xl shadow-gray-400 rounded-md"
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRpdmluZyUyMGZyb20lMjBhaXJ8ZW58MHx8MHx8fDA%3DD"
          alt=""
        />
      </div>
    </div>
  );
};

export default Activities;
