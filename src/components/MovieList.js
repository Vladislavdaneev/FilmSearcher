import React from 'react';
import '../CSSstyles/MovieList.css'
const MovieList = (props) => {
	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='movie'>
					<span className="movieHeader">{movie.Title}</span>
					<img src={movie.Poster} alt='movie'></img>
				</div>
			))}
		</>
	);
};

export default MovieList;