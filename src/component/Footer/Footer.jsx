import React from 'react'
import img1 from '../../img/1.png'
import img10 from '../../img/10.png'
import img11 from '../../img/11.png'

const Footer = () => {
	return (
		<div>
			<footer id='footer'>
				<div className='container'>
					<div className='footer'>
						<div className='footer-1'>
							<img src={img1} alt='' />
							<img src={img11} alt='' />
						</div>
						<div className='footer-1'>
							<h5>Home</h5>
							<h5>About</h5>
							<h5>Episodes</h5>
							<h5>Contact</h5>
						</div>
						<div className='footer-1'>
							<h5>Style Guide</h5>
							<h5>Instructions</h5>
							<h5>Changelog</h5>
							<h5>Credit</h5>
							<h5>Powered by Webflow</h5>
							<h5>Licenses</h5>
						</div>
						<div className='footer-1'>
							<img src={img10} alt='' />
						</div>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default Footer
