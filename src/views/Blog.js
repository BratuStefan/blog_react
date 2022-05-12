import { useParams } from "react-router-dom";

function Blog() {
	const params = useParams();
	return (
		<div>
			<h1>Pagina Blog - {params.blogid}</h1>
		</div>
	);
}

export default Blog;
