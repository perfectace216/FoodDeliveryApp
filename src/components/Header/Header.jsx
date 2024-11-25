import React from 'react';
import './Header.css';
const Header = () => {
	return (
		<div className="header">
			<div className="header-contents">
				<h2>Order Your Favourite food here</h2>
				<p>
					Explore a vibrant menu showcasing an array of thoughtfully crafted
					dishes, each prepared with premium ingredients to deliver
					unforgettable flavors.
				</p>
				<button>View Menu</button>
			</div>
		</div>
	);
};

export default Header;
