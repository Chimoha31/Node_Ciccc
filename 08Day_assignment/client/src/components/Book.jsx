import axios from 'axios';
import React, { useState } from 'react';

const Book = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/v1/students", {
        title,
        description,
        image
      })
      .then((response) => {
        alert(response.data.message);
        console.log(response);
      })
      .catch((error) => {
        alert(error.message);
      });
  }


  return (
    <div className="h-screen flex flex-col justify-center items-center">
    <h1 className="text-4xl font-mono mb-5">Resister Book</h1>
    <form onSubmit={submitHandler} className="flex flex-col justify-evenly items-center border border-gray-300 w-2/4 h-2/4 rounded">
      {/* Author Name */}
      <label className="block w-4/6">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          Title
        </span>
        <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        name="title"
        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
        placeholder="Book Title"
        />
      </label>
      {/* Author Email */}
      <label className="block w-4/6">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          Description
        </span>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          name="description"
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="Content of a book"
          />
      </label>
      {/* Author contact */}
      <label className="block w-4/6">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          Image
        </span>
        <input
          onChange={(e) => setImage(e.target.value)}
          value={image}
          type="file"
          name="image"
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
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
  )
}

export default Book
