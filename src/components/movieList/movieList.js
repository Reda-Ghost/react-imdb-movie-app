import React, { useEffect, useState } from 'react';
import './movieList.css';
import { useParams } from 'react-router-dom';
import Cards from '../card/card';

const MovieList = () => {
	const [movieList, setMovieList] = useState([]);
	const { type } = useParams();

	useEffect(() => {
		getData();
	}, [type]);

	const getData = async () => {
		const response = await fetch(
			`https://api.themoviedb.org/3/movie/${
				type ? type : 'popular'
			}?api_key=9a6ff01198478abcfd9684db0c7b073c`
		);
		const data = await response.json();
		setMovieList(data.results);
	};

	return (
		<section className='movie__list'>
			<div className='container'>
				<h2 className='list__title'>
					{(type ? type : 'POPULAR').toUpperCase()}
				</h2>
				<div className='list__cards'>
					{movieList.map((movie, index) => (
						<Cards key={index} {...movie} />
					))}
				</div>
			</div>
		</section>
	);
};

export default MovieList;
