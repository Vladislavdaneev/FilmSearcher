import React,  {useState } from 'react'
import '../CSSstyles/TopBar.css'
import { faSearch} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchInput from './SearchInput';
import MovieList from './MovieList.js'
function TopBar(){
    const [movies, setMovies] = useState([ 
    ]);
    const [searchValue, setSearchValue] = useState('');
    const getMovieRequest = async(searchValue) => {
        let url =`http://www.omdbapi.com/?s=${searchValue}&apikey=ef11e698`
        const response = await fetch(url);
        const responseJson = await response.json();
        if (responseJson.Search) {
            setMovies(responseJson.Search);
        }
    }
    function submitHandler (event){
        event.preventDefault()
        getMovieRequest(searchValue)
        console.log(movies)
    }
    
    return (
        <div>
            <div className="Searchbar">
                <h1 className="Moto">Search your movie.</h1>
                
                <form onSubmit={submitHandler}>
                    <SearchInput searchValue={searchValue} setSearchValue={setSearchValue}/>
                    <button className="InputButton" type="submit" >
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>
                
            </div>
            <div className='MovieList'>
                        <MovieList movies={movies}/>
                </div>
        </div>
            
    )
}
export default TopBar