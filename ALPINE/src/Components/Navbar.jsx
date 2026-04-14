import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
	const navigate = useNavigate();
	const [sign, setSign] = useState("Login");
	const [showSignUp, setShowSignUp] = useState(true);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navItems = [
		{ to: "/AboutUs", label: "Our Story" },
		{ to: "/Products", label: "Plants" },
		{ to: "/OurServices", label: "Services" },
		{ to: "/Faq", label: "FAQ" },
		{ to: "/Contact", label: "Contact" },
	];

	useEffect(() => {
		const loggedIn = localStorage.getItem("logged");
		if (loggedIn) {
			setSign("Logout");
			setShowSignUp(false);
		} else {
			setSign("Login");
			setShowSignUp(true);
		}
	}, []);

	const handleSign = (e) => {
		e.preventDefault();
		if (sign === "Logout") {
			localStorage.removeItem("logged");
			setIsMenuOpen(false);
			window.location.reload();
			setSign("Login");
			setShowSignUp(true);
		} else {
			setIsMenuOpen(false);
			navigate("/Login");
		}
	};

	return (
		<div className="site-header">
			<header className="header">
				<Link to="/" className="nav__logo">
					<span className="nav__logo-badge">
						<i className="ri-plant-line" />
					</span>
					<span>Alpine</span>
				</Link>
				<nav className="nav__desktop" aria-label="Primary">
					<ul className="nav">
						{navItems.map((item) => (
							<li key={item.to}>
								<Link to={item.to} className="navbar-link" data-nav-link>
									{item.label}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				<div className="nav__actions">
					<button
						type="button"
						className="nav__menu-button"
						aria-label="Toggle menu"
						aria-expanded={isMenuOpen}
						onClick={() => setIsMenuOpen((open) => !open)}
					>
						<i className={isMenuOpen ? "ri-close-line" : "ri-menu-line"} />
					</button>

					{showSignUp && (
						<Link to="/SignUp" className="nav__button nav__button--ghost nav__signup" data-nav-link>
							Sign Up
						</Link>
					)}

						<Link to="/Login" className="nav__button" data-nav-link onClick={(e) => {handleSign(e)}}>
						{sign}
					</Link>

					<Link to="/Cart" className="nav__cart" id="nav-toggle" aria-label="Cart">
						<i className="ri-shopping-cart-line"></i>
					</Link>
				</div>
			</header>

			{isMenuOpen && (
				<div className="nav__mobile-panel">
					<nav aria-label="Mobile primary">
						<ul className="nav__mobile-list">
							{navItems.map((item) => (
								<li key={item.to}>
									<Link to={item.to} className="nav__mobile-link" onClick={() => setIsMenuOpen(false)}>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</nav>

					<div className="nav__mobile-actions">
						{showSignUp && (
							<Link to="/SignUp" className="nav__button nav__button--ghost" onClick={() => setIsMenuOpen(false)}>
								Sign Up
							</Link>
						)}
						<Link to="/Cart" className="nav__button nav__button--ghost" onClick={() => setIsMenuOpen(false)}>
							Cart
						</Link>
					</div>
				</div>
			)}
		</div>
	);
};

export default Navbar;
