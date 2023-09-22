import React, { useEffect } from "react";

const GamesByGenresId = ({ gameList, newName }) => {
	useEffect(() => {
		// console.log("Gamelist", gameList);
	}, []);

	return (
		<div className="">
			<h2 className="font-bold text-[30px] dark:text-white mt-5">
				{newName} Games
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 ">
				{gameList.map(item => (
					<div
						key={item.id}
						className="bg-[#76a8f75e] p-3 rounded-lg pb-12 h-full hover:scale-110 transition-all  ease-in-out cursor-pointer "
					>
						<img
							src={item.background_image}
							alt=""
							className="w-full h-[80%] rounded-xl object-cover"
						/>
						<h2 className="text-[20px] dark:text-white font-bold ">
							{item.name}
							<span className="bg-green-100 rounded-sm p-1 ml-2 text-[10px] text-green-700 font-medium">
								{item.metacritic}
							</span>
						</h2>
						<h2 className="flex items-center gap-x-2 text-gray-500 dark:text-gray-300">
							<div className="flex items-center">
								<img
									src="https://cdn-icons-png.flaticon.com/128/7656/7656139.png"
									alt=""
									className="h-4 w-"
								/>
								{item.rating}
							</div>
							<div className="flex items-center">
								<img
									src="https://cdn-icons-png.flaticon.com/128/2462/2462719.png"
									alt=""
									className="h-4 w-4 "
								/>
								{item.reviews_count}
							</div>
							<div className="flex items-center">
								<img
									src="https://cdn-icons-png.flaticon.com/128/599/599502.png"
									alt=""
									className="w-4 h-4"
								/>
								{item.suggestions_count}
							</div>
						</h2>
					</div>
				))}
			</div>
		</div>
	);
};

export default GamesByGenresId;
