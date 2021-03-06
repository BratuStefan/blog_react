import { Container, Row, Col, Button } from "reactstrap";
import "./Home.css";
import { useState, useEffect } from "react";
import Post from "../components/Home/Post";
import Footer from "../common/Footer";

function Home() {
	const counterSize = 6;
	const [posts, setPosts] = useState(null);
	const [postCounter, setPostCounter] = useState(counterSize);
	const getPosts = async () => {
		const responseData = await fetch(
			"https://jsonplaceholder.typicode.com/posts"
		);
		const apiPosts = await responseData.json();
		setPosts(apiPosts);
	};

	useEffect(() => {
		getPosts();
	}, []);

	return (
		<>
			<Container>
				<Row>
					<div
						style={{
							width: "100%",
						}}>
						<img
							src='https://images.unsplash.com/photo-1546074177-ffdda98d214f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80'
							alt='blog_background_image'
							className='cover_image'
						/>
					</div>
				</Row>
				<Row>
					{posts ? (
						<>
							{posts.slice(0, postCounter).map((post, index) => {
								return <Post post={post} key={"post_" + index} />;
							})}
						</>
					) : (
						<div>Loading...</div>
					)}
				</Row>
				<Row>
					<Button
						outline
						className='mx-auto mb-4'
						style={{ width: "200px" }}
						onClick={() => setPostCounter(postCounter + counterSize)}>
						Show more!
					</Button>
				</Row>
			</Container>
			<Footer />
		</>
	);
}

export default Home;
// pagini - impartim numarul de produse la cate pagini avem
// counter * pagina + counter
// remove form local storage
