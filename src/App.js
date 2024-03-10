import './App.css'
import Footer from './component/Footer/Footer'
import Header from './component/Header/Header'
import About from './component/Section/About'
import Ball from './component/Section/Ball'
import Main from './component/Section/Main'
import Meen from './component/Section/Meen'
import Subscribe from './component/Section/Subscribe'

function App() {
	return (
		<div className='App'>
			<Header />
			<Main />
			<About />
			<Meen />
			<Subscribe />
			<Ball />
			<Footer />
		</div>
	)
}

export default App
