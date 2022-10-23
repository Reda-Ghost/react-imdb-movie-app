import { useEffect, useRef } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/home';
import MovieList from './components/movieList/movieList';
import Movie from './pages/movieDetail/movie';
import Footer from './components/footer/Footer';

function App() {
	const scrollUpRef = useRef();

	const toggleScrollUpButton = () => {
		window.scrollY > 600
			? scrollUpRef.current.classList.add('show')
			: scrollUpRef.current.classList.remove('show');
	};

	useEffect(() => {
		window.addEventListener('scroll', toggleScrollUpButton);
		return () => window.removeEventListener('scroll', toggleScrollUpButton);
	});

	return (
		<div className='App'>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='movie/:id' element={<Movie />}></Route>
					<Route path='movies/:type' element={<MovieList />}></Route>
					<Route path='/*' element={<h1>Error Page</h1>}></Route>
				</Routes>
				{/* ===== SCROLLUP BUTTON ===== */}
				<a href='#' className='scroll__up' id='scroll-up' ref={scrollUpRef}>
					<i class='far fa-arrow-up'></i>
				</a>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
