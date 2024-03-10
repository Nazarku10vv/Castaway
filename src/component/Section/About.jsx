import React from 'react'
import img4 from '../../img/4.png'
import img5 from '../../img/5.png'
import img6 from '../../img/6.png'

const About = () => {
	return (
		<div>
			<section id='about'>
				<div className='container'>
					<div className='about'>
						<div className='about-main'>
							<h2>Latest episodes</h2>
							<button>View all episodes</button>
						</div>
						<div className='about-blocks'>
							<div className='about-block'>
								<img src={img4} alt='' />
								<div className='about-block-text'>
									<h6>Gear</h6>
									<h5>Episode 3</h5>
									<h3>
										Should you get <br /> outboard audio gear?
									</h3>
									<p>
										Is hardware really worth it when it comes to podcasting? The
										answer is...it <br /> depends. Here’s our reasons on why you
										might want to consider picking <br /> something up.
									</p>
									<button>View Episode Details</button>
								</div>
							</div>

							<div className='about-block'>
								<img src={img5} alt='' />
								<div className='about-block-text'>
									<h6 style={{ width: '120px' }}>Tips & Tricks</h6>
									<h5>Episode 2</h5>
									<h3>
										Mic tricks to take <br />
										you to the next level{' '}
									</h3>
									<p>
										Stop rolling with those default settings on your mic. These
										small tweaks will <br /> take you from sounding good to
										great.
									</p>
									<button>View Episode Details</button>
								</div>
							</div>
							<div className='about-block'>
								<img src={img6} alt='' />
								<div className='about-block-text'>
									<h6>Gear</h6>
									<h5>Episode 1</h5>
									<h3>
										The best microphone <br /> under $200{' '}
									</h3>
									<p>
										With so many microphones on the market, how are you supposed
										to know <br /> what’s the best? Take a look at our top
										picks.
									</p>
									<button>View Episode Details</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default About
