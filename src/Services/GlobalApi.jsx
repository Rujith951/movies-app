import axios from "axios";

const key = "1ab2dec7728e431dbb6b74997e443f40";

const axiosCreate = axios.create({
	baseURL: "https://api.rawg.io/api",
});

const getGenreList = axiosCreate.get("/genres?key=" + key);
const getAllGames = axiosCreate.get("/games?key=" + key);
const getGameListByGenreId = id =>
	axiosCreate.get("/games?key=" + key + "&genres=" + id);

export default { getGenreList, getAllGames, getGameListByGenreId };
