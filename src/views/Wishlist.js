import { useState, useEffect } from "react";
import "./Wishlist.css";
import { Container, Row, Col, Button } from "reactstrap";

function Wishlist() {
	const [posts, setPosts] = useState([]);

	const onDelete = (id) => {
		const filtredArray = posts.filter((post) => {
			return post.id !== id;
		});
		setPosts(filtredArray);
		localStorage.setItem("postList", JSON.stringify(filtredArray));
	};

	useEffect(() => {
		const postListStorage = localStorage.getItem("postList");
		if (postListStorage) {
			const postArray = JSON.parse(postListStorage);
			setPosts(postArray);
		}
	}, []);

	return (
		<Container>
			<Row>
				{posts.map((post) => {
					return (
						<div className='table_row' key={"post_" + post.id}>
							<h3>{post.title}</h3>{" "}
							<Button
								color='danger'
								onClick={() => {
									onDelete(post.id);
								}}>
								Sterge
							</Button>
						</div>
					);
				})}
			</Row>
		</Container>
	);
}

export default Wishlist;
// webAPI's sunt un set de functii predefinite in browser
