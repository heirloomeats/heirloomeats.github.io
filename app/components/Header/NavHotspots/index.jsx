"use client";

import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavHotspots = () => {
	const pathname = usePathname();
	const activeLink = styles.active;

	return (
		<div className={styles.NavHotspots}>
			<ul className={styles.wrapper}>
				<li className={styles.hotspot}>
					<Link
						href={"/meal-plan"}
						className={`${pathname === "/meal-plan" ? activeLink : ""}`}
					>
						Meal Plan
					</Link>
				</li>
				<li className={styles.hotspot}>
					<Link
						href={"/menu"}
						className={`${pathname === "/menu" ? activeLink : ""}`}
					>
						Menu
					</Link>
				</li>
				<li className={styles.hotspot}>
					<Link
						href={"/grocery-list"}
						className={`${pathname === "/grocery-list" ? activeLink : ""}`}
					>
						Grocery List
					</Link>
				</li>
			</ul>
		</div>
	);
};

NavHotspots.propTypes = {
	children: PropTypes.node,
};

export default NavHotspots;

/*

<NavHotspots>
    <More_Content />
</NavHotspots>;

*/
