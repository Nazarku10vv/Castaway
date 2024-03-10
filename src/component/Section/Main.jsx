import React from 'react'
import img2 from '../../img/2.png'
import img3 from '../../img/3.png'

const Main = () => {
	return (
		<div>
			<section id='main'>
				<div className='container'>
					<div className='main'>
						<img src={img2} alt='' />
						<div className='main-text'>
							<h2>
								Take your <br /> podcast to the <br />
								next level
							</h2>
							<h6>Listen on</h6>

							<img src={img3} alt='' />
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Main
