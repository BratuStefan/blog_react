import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
	return (
		<div className='container_navbar'>
			<div>
				<Link to='/'>
					<img
						src='https://i0.wp.com/www.namecheap.com/blog/wp-content/uploads/2016/11/Blog_RGB_Color_Digital_General_Logo_Large-1.jpg?quality=100'
						alt='logo_img'
						className='styled_logo'
					/>
				</Link>
			</div>
			<div>
				<Link className='links' to='/'>
					Home
				</Link>
				<Link className='links' to='/wishlist'>
					Wishlist
				</Link>
			</div>
		</div>
	);
}

export default Navbar;
