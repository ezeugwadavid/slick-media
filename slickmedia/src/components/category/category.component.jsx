import React, { useState } from "react";
import { CategoryContainer } from "./category.styles";
import axios from "axios";
import ErrorImage from "../../assets/error-illustration.webp";

const Category = () => {
  const defaultField = {
    title: "",
  };

  const [movieObject, setMovieObject] = useState({
    title: "",
    category: "",
    poster: "",
  });

  const [credentials, setCredentials] = useState(defaultField);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`https://www.omdbapi.com/?t=${credentials.title}&apikey='yourkey'`)
      .then(function (response) {
        if (response.data.Response === "False") {
          setError(true);
        }

        setMovieObject({
          ...movieObject,
          title: response.data.Title,
          category: response.data.Genre,
          poster: response.data.Poster,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <CategoryContainer>
      <div className="search-container">
        <div className="label">Search</div>
        <input
          className="input"
          name="title"
          onChange={handleChange}
          type="text"
        />
        <button className="btn" onClick={(e) => handleSubmit(e)}>
          Submit
        </button>
      </div>
      {movieObject.title !== "" ? (
        <div className="grid-container">
          <div className="category-name">
            {movieObject.category !== undefined ? movieObject.category : ""}
          </div>
          <div className="movie-container">
            <div className="movie-box">
              <div className="movie-title">
                {movieObject.title !== undefined ? movieObject.title : ""}
              </div>
              <img
                className="movie-pic"
                src={
                  movieObject.poster !== undefined
                    ? movieObject.poster
                    : ErrorImage
                }
                alt=""
              />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </CategoryContainer>
  );
};

export default Category;
