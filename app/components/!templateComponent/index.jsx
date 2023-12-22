/**
 * @typedef {Object} Props
 * @property {Node} children A node to be passed to the component
 * @property {Object} data A data object to be consumed by the component
 * @property {Object} config A config object for component instance init
 * @property {Function} cb A callback function to be used by the component
 */

/**
 * Default Component template
 * @param {Props} props
 * @example
 * <Component
 * 	data={}
 * 	config={}
 * 	cb={}
 * />
 * 	{children}
 * </Component>
 */

import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const Component = ({ children, data, config, cb }) => {
  return <div className={styles.Component}>{children}</div>;
};

Component.propTypes = {
  children: PropTypes.node,
  data: PropTypes.object,
  config: PropTypes.object,
  cb: PropTypes.func,
};

export default Component;
