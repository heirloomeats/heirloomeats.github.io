"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<>
			<h2>An error occured!</h2>
			<p>{error.mesage}</p>
			<button
				onClick={
					// Attempt to recover by trying to re-render the segment
					() => reset()
				}
			>
				Try again
			</button>
		</>
	);
}
