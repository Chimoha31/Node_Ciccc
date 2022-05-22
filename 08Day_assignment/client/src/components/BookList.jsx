import axios from "axios";
import React, { useEffect, useState } from "react";
import { Fragment } from "react";

const BookList = () => {
  const [authorData, setAuthorData] = useState([]);
  // const [bookData, setBookData] = useState([]);

  const refreshHandle = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:5000/api/v1/authors")
      .then((res) => {
        console.log(res.message);
        setAuthorData(res.data.data);
        console.log(authorData);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {}, [authorData]);

  return (
    <Fragment>
      <button onClick={refreshHandle}>Refresh</button>
      <div className="m-5 text-4xl font-mono">
        <h1 className="text-center">BookList</h1>
      </div>
      <div className="w-full flex flex-wrap justify-center">
        {authorData.map((data) => (
          <div
            className="flex flex-col justify-evenly items-center w-80 border flex-wrap  px-4"
            key={data._id}
          >
            <ul className="flex flex-col justify-evenly items-center">
              <li>
                <h1>Namenamename</h1>
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
                  Description. Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Sequi placeat qui perferendis velit dolor
                  cupiditate dolores est laboriosam ipsum, porro repudiandae
                  ullam laborum, quisquam numquam voluptatum quo quae temporibus
                  commodi.
                </p>
              </li>
            </ul>

            <div className="flex justify-evenly items-center">
              <p>Author Name</p>
              <p>2022.05.11</p>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default BookList;
