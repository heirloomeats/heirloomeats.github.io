import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const NavFull = ({ children }) => {
	return (
		<nav className={styles.NavFull}>
			<div className={styles.NavPrimary}>
				<ul>
					<li>Nav Primary 1</li>
				</ul>
			</div>
			<div className="NavSecondary">
				<ul>
					<li>Nav Secondary 1</li>
				</ul>
			</div>
		</nav>
	);
};

NavFull.defaultProps = {
	id: "string id needed",
};

NavFull.propTypes = {
	children: PropTypes.node,
};

export default NavFull;

/*

<NavFull>
    <More_Content />
</NavFull>;

*/
