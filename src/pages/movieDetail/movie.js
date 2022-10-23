import React, { useEffect, useState } from 'react';
import './movie.css';
import { useParams } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const Movie = () => {
	const [movieDetail, setMovieDetail] = useState();
	const { id } = useParams();

	useEffect(() => {
		const getData = async () => {
			const response = await fetch(
				`https://api.themoviedb.org/3/movie/${id}?api_key=9a6ff01198478abcfd9684db0c7b073c`
			);
			const data = await response.json();
			setMovieDetail(data);
		};
		getData();
		window.scrollTo(0, 0);
	}, [id]);

	if (movieDetail) {
		return (
			<section className='movie'>
				<div className='container'>
					<div className='movie__intro'>
						<img
							className='movie__backdrop'
							src={`https://image.tmdb.org/t/p/original${movieDetail.backdrop_path}`}
							alt=''
						/>
					</div>
					<div className='movie__detail'>
						<div className='movie__detailLeft'>
							<div className='movie__posterBox'>
								<img
									className='movie__poster'
									src={`https://image.tmdb.org/t/p/original${movieDetail.poster_path}`}
									alt='movie-poster'
								/>
							</div>
						</div>
						<div className='movie__detailRight'>
							<div className='movie__detailRightTop'>
								<div className='movie__name'>{movieDetail.original_title}</div>
								<div className='movie__tagline'>{movieDetail.tagline}</div>
								<div className='movie__rating'>
									{movieDetail.vote_average}
									<i className='fas fa-star' />
									<span className='movie__voteCount'>
										{`(${movieDetail.vote_count}) votes`}
									</span>
								</div>
								<div className='movie__runtime'>
									{`${movieDetail.runtime} mins`}
								</div>
								<div className='movie__releaseDate'>
									{`Release date: ${movieDetail.release_date}`}
								</div>
								<div className='movie__genres'>
									{movieDetail.genres.map((genre, index) => (
										<React.Fragment key={index}>
											<span className='movie__genre'>{genre.name}</span>
										</React.Fragment>
									))}
								</div>
							</div>
							<div className='movie__detailRightBottom'>
								<div className='synopsisText'>Synopsis</div>
								<div>{movieDetail.overview}</div>
							</div>
						</div>
					</div>
					<div className='movie__links'>
						<div className='movie__heading'>Useful Links</div>

						<a href={movieDetail.homepage} target='_blank' rel='noreferrer'>
							<p>
								<span className='movie__homeButton movie__Button'>
									Homepage <i className='newTab fas fa-external-link-alt'></i>
								</span>
							</p>
						</a>

						<a
							href={`https://www.imdb.com/title/${movieDetail.imdb_id}`}
							target='_blank'
							rel='noreferrer'
						>
							<p>
								<span className='movie__imdbButton movie__Button'>
									IMDb<i className='newTab fas fa-external-link-alt'></i>
								</span>
							</p>
						</a>
					</div>
					<div className='movie__heading'>Production companies</div>
					<div className='movie__production'>
						{movieDetail.production_companies.map((company, index) => (
							<React.Fragment key={index}>
								<span className='productionCompanyImage'>
									<img
										className='movie__productionComapany'
										src={`https://image.tmdb.org/t/p/original${company.logo_path}`}
										alt='movie-production-company'
									/>
									<span>{company.name}</span>
								</span>
							</React.Fragment>
						))}
					</div>
				</div>
			</section>
		);
	} else {
		return (
			<SkeletonTheme color='#202020' highlightColor='#444'>
				<Skeleton height={300} duration={2} />
			</SkeletonTheme>
		);
	}
};

export default Movie;
