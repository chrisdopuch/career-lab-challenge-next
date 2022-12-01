import './App.css';

import { searchArtworks } from '../utils/api';
import { SearchForm } from './SearchForm';
import { Footer } from './Footer';
import { useState } from 'react';

export function App() {
	const [results, setResults] = useState([]);
	const [hasSearched, setHasSearched] = useState(false);
	function onSearchSubmit(query) {
		// Search for the users's query.
		searchArtworks(query).then(({ data }) => {
			console.log(data);
			setResults(data);
			setHasSearched(true);
		});
	}

	return (
		<div className="App">
			<h1>TCL Career Lab Art Finder</h1>
			<SearchForm onSearchSubmit={onSearchSubmit} />
			{results.length ? (
				<ol>
					{results.map(({ title, artist_title }) => {
						return (
							<li>
								Title: {title}
								<br />
								Artist: {artist_title}
							</li>
						);
					})}
				</ol>
			) : null}
			{hasSearched && results.length === 0 ? <p>No results found</p> : null}
			<Footer />
		</div>
	);
}
