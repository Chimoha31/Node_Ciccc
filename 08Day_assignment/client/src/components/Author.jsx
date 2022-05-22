import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Author = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const navigate = useNavigate();

  const submitHandle = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/v1/authors", {
        name,
        email,
        contact
      })
      .then((response) => {
        alert(response.data.message);
        console.log(response);
      })
      .catch((error) => {
        alert(error.message);
      });
      // navigate('/books');
  };



  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-mono mb-5">Resister Author</h1>
      <form
        onSubmit={submitHandle}
        className="flex flex-col justify-evenly items-center border border-gray-300 w-2/4 h-2/4 rounded"
      >
        {/* Author Name */}
        <label className="block w-4/6">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Name
          </span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Your name"
          />
        </label>
        {/* Author Email */}
        <label className="block w-4/6">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Email
          </span>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="email"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="you@example.com"
          />
        </label>
        {/* Author contact */}
        <label className="block w-4/6">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Contact#
          </span>
          <input
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            type="text"
            name="contact"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="123-456-7890"
          />
        </label>

        <button
          className="bg-blue-400 text-white mt-3 w-4/6 py-1 rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Author;
