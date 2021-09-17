import React from 'react'
import '../CSSstyles/TopBar.css'
import { faSearch} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function TopBar(){
    return (
        <div>
            <h1 className="Moto">Search your movie.</h1>
            <form>
                <input className="Input"type={'text'} placeholder="Что хотите найти?">
                </input>
                <button className="InputButton" type="submit">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </form>
        </div>
    )
}
export default TopBar