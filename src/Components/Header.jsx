import React, { useContext, useEffect, useState } from "react";
import logo from "./../assets/images/logo1.png";
import { HiOutlineMagnifyingGlass, HiMoon, HiSun } from "react-icons/hi2";
import { ThemeContext } from "../Context/ThemeContext";

const Header = () => {
	// const [toggle, setToggle] = useState(false);
	const { theme, setTheme } = useContext(ThemeContext);

	useEffect(() => {
		console.log("Theme", theme);
	}, []);

	return (
		<div className="flex p-3 items-center ">
			<img src={logo} width={60} height={60} />
			<div className="flex bg-slate-200 p-2 w-full mx-5 rounded-full items-center">
				<HiOutlineMagnifyingGlass />
				<input
					type="text"
					className="outline-none px-2 bg-transparent"
					placeholder="Search"
				/>
			</div>
			<div>
				{theme == "dark" ? (
					<HiSun
						className="text-[35px] bg-slate-300 text-white  p-1 rounded-full cursor-pointer"
						onClick={() => {
							setTheme("light");
							localStorage.setItem("theme", "light");
						}}
					/>
				) : (
					<HiMoon
						className="text-[35px] bg-slate-300 text-black p-1 rounded-full cursor-pointer"
						onClick={() => {
							setTheme("dark");
							localStorage.setItem("theme", "dark");
						}}
					/>
				)}
			</div>
		</div>
	);
};

export default Header;
