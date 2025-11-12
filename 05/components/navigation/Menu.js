import React from "react";
import MenuItem from "../../../03/components/navigation/MenuItem";

const Menu = (props) => {
	const { arr } = props;
	return (
		<ul>
			{arr.map((item, index) => (
				<MenuItem key={index} {...item} />
			))}
		</ul>
	);
};

export default Menu;
