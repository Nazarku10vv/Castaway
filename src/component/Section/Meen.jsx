import React from 'react'
import img7 from '../../img/7.png'
import img8 from '../../img/8.png'

const Meen = () => {
	return (
		<div>
			<section id='meen'>
				<div className='container'>
					<div className='meen'>
						<div className='meen-text'>
							<img src={img8} alt='' />
							<h6>Meet your host</h6>
							<h3>Jacob Paulaner</h3>
							<p>
								Jacob has a background in audio engineering, and has <br /> been
								podcasting since the early days. <br />
								<br />
								He’s here to help you level up your game by sharing <br />{' '}
								everything he’s learned along the way.
							</p>
						</div>
						<img src={img7} alt='' />
					</div>
				</div>
			</section>
		</div>
	)
}

export default Meen
