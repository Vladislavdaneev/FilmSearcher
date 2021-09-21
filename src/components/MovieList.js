import React from 'react';
import '../CSSstyles/MovieList.css'
const MovieList = (props) => {
	return (
		<>	
			
			<div className="MovieListBar">
			{props.movies.map((movie, index) => (
				<div className='movie'>
					<h2 className="movieHeader">{movie.Title} ({movie.Year})</h2>
					<img src={movie.Poster} alt='movie'></img>
				</div>
			))}
			</div>
		</>
	);
};

export default MovieList;