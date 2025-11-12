import React from "react";
import MenuItem from "../../../03/components/navigation/MenuItem";
import PropTypes from "prop-types";
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
Menu.propTypes = {
	arr: PropTypes.arrayOf(
		PropTypes.shape({
			text: PropTypes.string.isRequired,
			url: PropTypes.string.isRequired,
		})
	).isRequired,
};

export default Menu;
