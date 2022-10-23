import React, { useState } from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<header className='header'>
			<div className='container'>
				<nav className='nav__menu'>
					<Link to='/' className='nav__logo'>
						<img
							className='nav__icon'
							src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png'
							alt='nav-logo-icon'
						/>
					</Link>
					<ul className={showMenu ? 'nav__links active' : 'nav__links'}>
						<i
							className='nav__close fal fa-times'
							onClick={() => setShowMenu(false)}
						></i>
						<li>
							<NavLink to='/movies/popular' onClick={() => setShowMenu(false)}>
								<span>Popular</span>
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/movies/top_rated'
								onClick={() => setShowMenu(false)}
							>
								<span>Top Rated</span>
							</NavLink>
						</li>
						<li>
							<NavLink to='/movies/upcoming' onClick={() => setShowMenu(false)}>
								<span>Upcoming</span>
							</NavLink>
						</li>
					</ul>
					<i
						className='nav__toggler fal fa-bars'
						onClick={() => setShowMenu(true)}
					></i>
				</nav>
			</div>
		</header>
	);
};

export default Header;
