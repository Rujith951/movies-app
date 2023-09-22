import React, { useEffect } from "react";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import { useState } from "react";
import { ThemeContext } from "./Context/ThemeContext";

const App = () => {
	const [theme, setTheme] = useState("dark");

	useEffect(() => {
		setTheme(
			localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
		);
	}, []);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<div
				className={`  ${theme} ${
					theme == "dark" ? "bg-black" : null
				} h-[100vh] overflow-y-scroll no-scrollbar `}
			>
				<Header />
				<Home />
			</div>
		</ThemeContext.Provider>
	);
};

export default App;
