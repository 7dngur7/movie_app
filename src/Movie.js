import React from "react";
import PropTypes from "prop-types";
import { findAllByTitle } from "@testing-library/react";

function Movie({id, year, title, summary, poster, genres}) {
    return (
      <div class="movie">
        <img src={poster} alt={title} title={title} />
        <div class="movie__data">
          <h3 class="movie__title">{title}</h3>
          <h5 class="movie__year">{year}</h5>
          <p class="movie__summary">{summary}</p>
        </div>
      </div>
    );
  }

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    year : PropTypes.number.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;