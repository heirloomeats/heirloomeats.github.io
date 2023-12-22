import React from "react";
// import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const SkipToMain = () => {
	return (
		<a href="#main" className={styles.SkipToMain}>
			Skip to Main
		</a>
	);
};

// SkipToMain.defaultProps = {
// 	id: "string id needed",
// };

// SkipToMain.propTypes = {
// 	children: PropTypes.node,
// };

export default SkipToMain;

/*

<SkipToMain_Name>
    <More_Content />
</SkipToMain_Name>;

*/
