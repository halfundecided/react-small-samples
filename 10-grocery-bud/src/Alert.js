import React, { useEffect } from 'react';

const Alert = ({ type, msg, removeAlert, list }) => {
	// we write this useEffect here because i want it to run when Alert component renders
	useEffect(() => {
		const timeout = setTimeout(() => {
			removeAlert();
		}, 3000);

		return () => clearTimeout(timeout);
	}, [list]); // to re-run whenever list got changed
	return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
