import React from "react";
const MenuItem = (props) => {
	const { text, url } = props;
	return (
		<li>
			<a href={url}>
				{text}
			</a>
		</li>
	);
};
export default MenuItem;
