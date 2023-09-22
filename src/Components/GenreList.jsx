import React, { useState, useEffect } from "react";
import GlobalApi from "../Services/GlobalApi";

const GenreList = ({ genresId, change }) => {
	const [genreList, setGenreList] = useState([]);
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		getGeneraList();
	}, []);

	const getGeneraList = () => {
		GlobalApi.getGenreList.then(resp => {
			// console.log("genresList", resp.data.results);
			setGenreList(resp.data.results);
		});
	};
	return (
		<div className="">
			<h2 className="text-[30px] font-bold dark:text-white">Genre</h2>
			{genreList.map((item, index) => (
				<div
					onClick={() => {
						setActiveIndex(index);
						// console.log(item.id);
						genresId(item.id);
						change(item.name);
					}}
					key={item.id}
					className={` flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-300  dark:hover:bg-gray-600 group  ${
						activeIndex === index ? "bg-gray-300 dark:bg-gray-600" : null
					} `}
				>
					<img
						src={item.image_background}
						alt=""
						className={`w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105 transition-all ease-in-out duration-300 ${
							activeIndex === index ? "scale-105" : null
						}`}
					/>
					<h3
						className={`dark:text-white text-[18px] group-hover:font-bold ease-in-out duration-300 ${
							activeIndex === index ? "font-bold" : null
						}`}
					>
						{item.name}
					</h3>
				</div>
			))}
		</div>
	);
};

export default GenreList;
