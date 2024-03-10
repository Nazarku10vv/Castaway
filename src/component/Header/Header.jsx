import React from 'react'
import img1 from '../../img/1.png'

const Header = () => {
	return (
		<div>
			<header id='header'>
				<div className='container'>
					<div className='header'>
						<img src={img1} alt='' />
						<div className='header-navs'>
							<h3>Home</h3>
							<h3>Episodes</h3>
							<h3>About</h3>
							<h3>Contact</h3>
						</div>
					</div>
				</div>
			</header>
		</div>
	)
}

export default Header
