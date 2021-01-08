import React from "react";
import PropTypes from "prop-types";
import { findAllByTitle } from "@testing-library/react";

function Movie({id, year, title, summary, poster}){
    return <h1>{title}</h1>;
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    year : PropTypes.number.isRequired
}

export default Movie;