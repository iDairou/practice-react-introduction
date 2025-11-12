import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector("#root"));

const styles = {
	background:
		"linear-gradient(to left, #008080 0%, #FFFFFF 25%, #05C1FF 50%, #FFFFFF 75%, #005757 100%)",
	fontSize: "2rem",
	fontWeight: "bold",
	textAlign: "center",
};
const text = "Moja pierwsza strona w React";

class HeaderCl extends React.Component {
	render() {
		return <header style={styles}>{text}</header>;
	}
}

const HeaderFn = () => <header style={styles}>{text}</header>;

root.render(
	<>
		<HeaderCl />
		<HeaderFn />
	</>
);
