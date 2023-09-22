import React, { useEffect } from "react";

const Banner = ({ gameBanner }) => {
	useEffect(() => {}, []);

	return (
		<div className="relative">
			<div className="absolute bottom-0 p-5 w-full bg-gradient-to-t from-slate-900 to-transparent">
				<h2 className="text-[24px] text-white font-bold">{gameBanner.name}</h2>
				<button className="bg-blue-700 text-white px-2 p-1 rounded-lg outline-none">
					Get Now
				</button>
			</div>
			<img
				src={gameBanner.background_image}
				alt=""
				className="md:h-[320px] w-full object-cover rounded-lg"
			/>
		</div>
	);
};

export default Banner;
