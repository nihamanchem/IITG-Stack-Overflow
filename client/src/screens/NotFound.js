import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NotFound = () => {
	const location = useLocation();
	return (
		<div className="h-screen w-full bg-no-repeat bg-cover pt-20">
			<p className="text-white text-lg" style={{color:"black"}}> 404! Page not found</p>
		</div>
	);
};

export default NotFound;
