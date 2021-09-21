import React from 'react';

const SearchInput = (props) => {
	return (
			<input
				className='Input'
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder='Type to search...'
			></input>
		
	);
};

export default SearchInput;