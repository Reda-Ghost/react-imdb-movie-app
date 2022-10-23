import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';

import MovieList from '../../components/movieList/movieList';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './home.css';

const Home = () => {
	const [popularMovies, setPopularMovies] = useState([]);

	useEffect(() => {
		fetch(
			'https://api.themoviedb.org/3/movie/popular?api_key=9a6ff01198478abcfd9684db0c7b073c&language=en-US'
		)
			.then((res) => res.json())
			.then((data) => setPopularMovies(data.results));
	}, []);

	return (
		<>
			<div className='poster'>
				<Carousel
					showThumbs={false}
					autoPlay={true}
					transitionTime={5}
					infiniteLoop={true}
					autoFocus={true}
					useKeyboardArrows={true}
					showStatus={false}
				>
					{popularMovies.map((movie) => {
						const {
							id,
							backdrop_path,
							original_title,
							release_date,
							vote_average,
							overview,
						} = movie;
						return (
							<Link
								style={{ textDecoration: 'none', color: 'white' }}
								to={`/movie/${id}`}
							>
								<div className='posterImage'>
									<img
										src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
										alt='poster'
									/>
								</div>
								<div className='posterImage__overlay'>
									<div className='posterImage__title'>{original_title}</div>
									<div className='posterImage__runtime'>
										{release_date}
										<span className='posterImage__rating'>
											{vote_average}
											<i className='fas fa-star' />
										</span>
									</div>
									<div className='posterImage__description'>{overview}</div>
								</div>
							</Link>
						);
					})}
				</Carousel>

				<MovieList />

				
			</div>
		</>
	);
};

export default Home;
