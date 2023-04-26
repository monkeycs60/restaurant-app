import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import clsx from 'clsx';
import useCookies from 'react-cookie/cjs/useCookies';
const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	const navigate = useNavigate();
	const [cookies, setCookie] = useCookies(['token']);
	const logout = () => {
		setCookie('token', '');
		window.localStorage.removeItem('userID');
		navigate('/auth');
		window.location.reload();
	};
	return (
		<nav
			className={clsx(
				'relative flex h-12 items-center justify-end bg-orange-600',
			)}
		>
			<button
				onClick={toggleMenu}
				className={clsx(
					'mr-4 text-lg font-bold text-gray-900',
					'focus:outline-none',
					'lg:hidden',
					'dark:text-white',
				)}
			>
				<MdOutlineRestaurantMenu size={30} />
			</button>
			<div className={clsx('mr-12 hidden space-x-8 lg:flex')}>
				<Link
					to='/'
					className={clsx(
						'rounded px-2 py-1 text-lg font-bold text-gray-900',
						'hover:bg-gray-200',
						'dark:text-white, dark:hover:bg-gray-700',
					)}
				>
					Home
				</Link>
				<Link
					to='/create-recipes'
					className={clsx(
						'rounded px-2 py-1 text-lg font-bold text-gray-900',
						'hover:bg-gray-200',
						'dark:text-white dark:hover:bg-gray-700',
					)}
				>
					Create Recipes
				</Link>
				<Link
					to='/saved-recipes'
					className={clsx(
						'rounded px-2 py-1 text-lg font-bold text-gray-900',
						'hover:bg-gray-200',
						'dark:text-white dark:hover:bg-gray-700',
					)}
				>
					Saved Recipes
				</Link>
				{!cookies.token ? (
					<Link
						to='/auth'
						className={clsx(
							'rounded px-2 py-1 text-lg font-bold text-gray-900',
							'hover:bg-gray-200',
							'dark:text-white dark:hover:bg-gray-700',
						)}
					>
						Login / Register
					</Link>
				) : (
					<button
						onClick={logout}
						className={clsx(
							'rounded bg-gray-200 px-2 py-1 text-lg font-bold text-gray-900',
							'hover:bg-gray-200',
							'dark:text-white dark:hover:bg-gray-700',
						)}
					>
						Logout
					</button>
				)}
			</div>
			{menuOpen && (
				<div
					className={clsx(
						'z-3 absolute right-2 top-full mt-2 space-y-2 rounded-md bg-white p-2 shadow-md',
						'dark:bg-gray-800',
					)}
				>
					<Link
						to='/'
						onClick={toggleMenu}
						className={clsx(
							'block rounded px-2 py-1 text-lg font-bold text-gray-900',
							'hover:bg-gray-200',
							'dark:text-white dark:hover:bg-gray-700',
						)}
					>
						Home
					</Link>
					<Link
						to='/auth'
						onClick={toggleMenu}
						className={clsx(
							'block rounded px-2 py-1 text-lg font-bold text-gray-900',
							'hover:bg-gray-200',
							'dark:text-white dark:hover:bg-gray-700',
						)}
					>
						Login / Register
					</Link>
					<Link
						to='/create-recipes'
						onClick={toggleMenu}
						className={clsx(
							'block rounded px-2 py-1 text-lg font-bold text-gray-900',
							'hover:bg-gray-200',
							'dark:text-white dark:hover:bg-gray-700',
						)}
					>
						Create Recipes
					</Link>
					<Link
						to='/saved-recipes'
						onClick={toggleMenu}
						className={clsx(
							'block rounded px-2 py-1 text-lg font-bold text-gray-900',
							'hover:bg-gray-200',
							'dark:text-white dark:hover:bg-gray-700',
						)}
					>
						Saved Recipes
					</Link>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
