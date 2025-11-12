import React from "react";
import Menu from "./Menu";

const Nav = () => {
	return (
		<nav>
			<Menu
				arr={[
					{ text: "home", url: "/home" },
					{ text: "contact", url: "/contact" },
				]}
			/>
		</nav>
	);
};
export default Nav;
