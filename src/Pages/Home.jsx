import React, { useEffect, useState } from "react";
import GenereList from "../Components/GenreList";
import GlobalApi from "../Services/GlobalApi";
import Banner from "../Components/Banner";
import TrendingGames from "../Components/TrendingGames";
import GamesByGenresId from "../Components/GamesByGenresId";

const Home = () => {
	useEffect(() => {
		getAllGamesList();
		getGameListByGenresId(4);
	}, []);

	const [allGameList, setAllGameList] = useState([]);
	const [gameListByGenres, setgameListByGenres] = useState([]);
	const [changedName, setChangedName] = useState("Action");
	// console.log("allgamelist", allGameList);
	// console.log("gameliastbygenres", gameListByGenres);
	// console.log(changedName);

	const getAllGamesList = () => {
		GlobalApi.getAllGames.then(resp => {
			// console.log(resp.data.results);
			setAllGameList(resp.data.results);
		});
	};

	const getGameListByGenresId = id => {
		// console.log("GenresID", id);
		GlobalApi.getGameListByGenreId(id).then(resp => {
			// console.log("Game list by genre id", resp.data.results);
			setgameListByGenres(resp.data.results);
		});
	};

	const genresId = id => {
		getGameListByGenresId(id);
		// console.log("genresfuncid", id);
	};

	const change = name => {
		// console.log("listname", name);
		setChangedName(name);
	};

	return (
		<div className="grid grid-cols-4 px-5 ">
			<div className=" h-full hidden md:block ">
				<GenereList genresId={genresId} change={change} />
			</div>
			<div className=" col-span-4 md:col-span-3">
				{allGameList.length > 0 && gameListByGenres.length > 0 ? (
					<div>
						<Banner gameBanner={allGameList[0]} />{" "}
						<TrendingGames gameList={allGameList} />
						<GamesByGenresId
							gameList={gameListByGenres}
							newName={changedName}
						/>
					</div>
				) : null}
			</div>
		</div>
	);
};

export default Home;
