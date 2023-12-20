// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="left">
				<span className="logo">
					<Link to="/">LifeOfN</Link>
				</span>
			</div>
			<div className="right">
				<Link to="/new" className="link">
					Add a new Entry
				</Link>
				<Link to="/find" className="link">
					Find a date
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
