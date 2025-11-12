import React from "react";
import { createRoot } from "react-dom/client";
import MenuItem from "./components/navigation/MenuItem";

const root = createRoot(document.querySelector("#root"));

const menuItem = {
	url: "/contact",
	text: "Contact",
};

root.render(
	<nav>
		<ul>
			<MenuItem {...menuItem} />
		</ul>
	</nav>
);
