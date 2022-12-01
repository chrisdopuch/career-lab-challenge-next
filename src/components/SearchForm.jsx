import './SearchForm.css';

import { useState } from 'react';

export function SearchForm({ onSearchSubmit }) {
	const [query, setQuery] = useState('');

	function handleInputChange(evt) {
		setQuery(evt.target.value);
	}

	function handleButton() {
		onSearchSubmit(query);
	}

	return (
		<form className="Form" role="search">
			<label className="label" htmlFor="search-field">
				Search for some art
			</label>
			<input
				className="input"
				id="search-field"
				inputMode="search"
				name="query"
				type="text"
				value={query}
				onChange={handleInputChange}
			/>
			<button className="button" type="button" onClick={handleButton}>
				Search
			</button>
		</form>
	);
}
