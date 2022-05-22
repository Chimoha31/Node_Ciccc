import React from "react";
import { Fragment } from "react";

const BookList = () => {
  return (
    <Fragment>
      <div className="m-5 text-4xl font-mono">
        <h1 className="text-center">BookList</h1>
      </div>
      <div className="w-full flex flex-wrap justify-center">
        <div className="flex flex-col justify-evenly items-center w-80 border flex-wrap  px-4">
          <ul className="flex flex-col justify-evenly items-center">
            <li>
              <h1>Book Title</h1>
            </li>
            <li>
              <img
                src="https://shimirubon.jp/static/book_images/book_large/31309196.JPG"
                alt="book"
                className="w-36"
              />
            </li>
            <li>
              <p>
                Description. Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Sequi placeat qui perferendis velit dolor cupiditate
                dolores est laboriosam ipsum, porro repudiandae ullam laborum,
                quisquam numquam voluptatum quo quae temporibus commodi.
              </p>
            </li>
          </ul>

          <div className="flex justify-evenly items-center">
            <p>Author Name</p>
            <p>2022.05.11</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BookList;
