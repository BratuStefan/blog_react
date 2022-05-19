import { useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { useState, useEffect } from "react";
import "./Blog.css";
import Footer from "../common/Footer";

function Blog() {
	const params = useParams();
	const [post, setPost] = useState(null);
	const [user, setUserId] = useState(null);

	const getBlog = async (blogid) => {
		const responseData = await fetch(
			"https://jsonplaceholder.typicode.com/posts/" + blogid
		);
		const apiPost = await responseData.json();
		setPost(apiPost);
	};

	useEffect(() => {
		if (params && params.blogid) {
			getBlog(params.blogid);
		}
	}, [params]);

	const getUser = async (userId) => {
		const responseData = await fetch(
			"https://jsonplaceholder.typicode.com/posts/" + userId
		);
		const apiUser = await responseData.json();
		setUserId(apiUser);
	};

	useEffect(() => {
		if (post && post.userId) {
			getUser(post.userId);
		}
	}, [post]);

	return (
		<>
			<Container className='mb-4'>
				{post && user ? (
					<>
						<Row>
							<img
								src={`https://picsum.photos/seed/${post.id}/1000`}
								className='post_cover'
							/>
						</Row>
						<Row>
							<h1>{post.title}</h1>
							<h3 style={{ minHeight: "500px" }}>{post.body}</h3>
							<button className='mt-4 mb-4'>Add to wishlist</button>
						</Row>
						<Row>
							<div className='author_containermt-4'>
								<img
									src={`https://robohash.org/${user.id}.png?set=set4`}
									alt=''
								/>
								<div className='mt-4'>
									<h4>{user.name}</h4>
									<h4>{user.email}</h4>
									<h4>{user.website}</h4>
									<h4>{user.phone}</h4>
								</div>
							</div>
						</Row>
					</>
				) : (
					<div>Loading...</div>
				)}
			</Container>
			<Footer />
		</>
	);
}

export default Blog;
// use params se uita in paginile dinamice si converteste datele intr-o variaila
//
