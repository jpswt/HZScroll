import React from 'react';
import { data } from './Data';

function App() {
	const sliderLeft = () => {
		let slider = document.getElementById('slider');
		slider.scrollLeft = slider.sliderLeft - 500;
	};

	const sliderRight = () => {
		let slider = document.getElementById('slider');
		slider.scrollLeft = slider.sliderLeft - 500;
	};

	return (
		<>
			<img
				className="w-full h-[500px] object-cover"
				src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80"
				alt=""
			/>
			<div className="relative flex items-center">
				<div
					id="slider"
					className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth"
				>
					{data.map((item) => (
						<img
							className="w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
							src={item.img}
							alt="/"
						/>
					))}
				</div>
			</div>
			;
		</>
	);
}

export default App;
