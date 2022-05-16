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
// use params se uita in paginile dinamice si converteste datele intr-o variaila
