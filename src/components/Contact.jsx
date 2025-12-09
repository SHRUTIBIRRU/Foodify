import React from "react";

const Contact = () => {
  return (
    <div className=" w-4/12 mx-auto mt-20 text-center">
      <h1 className="font-bold text-2xl ">Contact</h1>
      <form className="mt-2 flex flex-col justify-center gap-2">
        <input
          type="text"
          name="name"
          placeholder="name"
          className="m-2 p-2 border-2 border-green-300 rounded-lg"
        />
        <input
          name="message"
          className="m-2 p-2 border-2 border-green-300 rounded-lg"
        />
        <button className="m-2 p-2 bg-gray-200 rounded-lg">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
