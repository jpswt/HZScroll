import React from 'react';
import { data } from './Data';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

function App() {
	const sliderLeft = () => {
		let slider = document.getElementById('slider');
		slider.scrollLeft = slider.scrollLeft - 500;
	};

	const sliderRight = () => {
		let slider = document.getElementById('slider');
		slider.scrollLeft = slider.scrollLeft + 500;
	};

	return (
		<>
			{/* <img
				className="w-full h-[500px] object-cover"
				src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80"
				alt=""
			/> */}
			<div className="relative flex items-center">
				<MdChevronLeft size={40} onClick={sliderLeft} />
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
				<MdChevronRight size={40} onClick={sliderRight} />
			</div>
			;
		</>
	);
}

export default App;
