import React from 'react';

const Book = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
    <h1 className="text-4xl font-mono mb-5">Resister Book</h1>
    <form className="flex flex-col justify-evenly items-center border border-gray-300 w-2/4 h-2/4 rounded">
      {/* Author Name */}
      <label className="block w-4/6">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          Title
        </span>
        <input
          type="text"
          name="title"
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="Your name"
        />
      </label>
      {/* Author Email */}
      <label className="block w-4/6">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          Description
        </span>
        <input
          type="text"
          name="description"
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="you@example.com"
        />
      </label>
      {/* Author contact */}
      <label className="block w-4/6">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          Image
        </span>
        <input
          type="file"
          name="image"
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
  )
}

export default Book
