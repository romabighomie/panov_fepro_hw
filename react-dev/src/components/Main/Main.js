import './main.css';
import Nav from "../Nav/Nav";

function Main() {
	return(
		<main className='main'>
			<Nav />
			
			<div className="main__wrapper">
				<div className="main__item">
					Lorem ipsum dolor sit amet.
				</div>
				<div className="main__item">
					Lorem ipsum dolor sit amet.
				</div>
				<div className="main__item">
					Lorem ipsum dolor sit amet.
				</div>
			</div>
		</main>
	);
}

export default Main;