/**
 * @typedef {Object} Props
 * @property {Node} children A node to be passed to the Canvas
 * @property {Object} data A data object to be consumed by the Canvas
 * @property {Object} config A config object for Canvas instance init
 * @property {Function} cb A callback function to be used by the Canvas
 */

/**
 * Canvas template
 * @param {Props} props
 * @example
 * <Canvas
 * 	data={{
 * 		id: "idStr"
 * 	}}
 * 	config={{}}
 * 	cb={}
 * />
 * 	{children}
 * </Canvas>
 */
"use client";
import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const Canvas = ({ children, data: { id }, config, cb }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    context.fillStyle = "green";
    context.fillRect(10, 10, 150, 100);
  }, []);

  return (
    <canvas id={id} className={styles.Canvas} ref={canvasRef}>
      {children}
    </canvas>
  );
};

Canvas.propTypes = {
  children: PropTypes.node,
  data: PropTypes.object,
  config: PropTypes.object,
  cb: PropTypes.func,
};

export default Canvas;
