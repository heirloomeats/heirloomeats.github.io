import React from "react";
// import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import SkipToMain from "./SkipToMain";
import NavHotspots from "./NavHotspots";
import NavFull from "./NavFull";

const Header = () => {
	return (
		<header className={styles.Header}>
			<SkipToMain />
			{/* Full Nave to primary pages & settings, options, etc */}
			<NavFull />
			{/* Nav hotspots to primary app pages */}
			<NavHotspots />
		</header>
	);
};

// Header.defaultProps = {
// 	id: "string id needed",
// };

// Header.propTypes = {
// 	children: PropTypes.node,
// };

export default Header;

/*

<Header>
    <More_Content />
</Header>;

*/
