import './App.css';

import { searchArtworks } from '../utils/api';
import { SearchForm } from './SearchForm';
import { ImageDetailsPane } from './ImageDetailsPane';
import { Footer } from './Footer';
import { useState } from 'react';
import { useEffect } from 'react';

export function App() {
	const [results, setResults] = useState([]);
	const [hasSearched, setHasSearched] = useState(false);
	const [hash, setHash] = useState(window.location.hash);
	function onSearchSubmit(query) {
		// Search for the users's query.
		searchArtworks(query).then(({ data }) => {
			console.log(data);
			setResults(data);
			setHasSearched(true);
		});
	}

	useEffect(() => {
		window.addEventListener('hashchange', () => {
			const { hash } = window.location;
			setHash(hash);
		});
	}, []);

	return (
		<div className="App">
			<h1>TCL Career Lab Art Finder</h1>
			<SearchForm onSearchSubmit={onSearchSubmit} />
			{results.length && !hash ? (
				<>
					Results:
					<ol>
						{results.map(({ image_id, title, artist_title }) => {
							return (
								<li key={image_id}>
									Title: {title}
									<br />
									Artist: {artist_title}
									<br />
									<a href={`#${image_id}`}>details</a>
								</li>
							);
						})}
					</ol>
				</>
			) : null}
			{hasSearched && results.length === 0 && !hash ? (
				<p>No results found</p>
			) : null}
			{hash && <ImageDetailsPane></ImageDetailsPane>}
			<Footer />
		</div>
	);
}
