import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Blog from "./views/Blog";
import Wishlist from "./views/Wishlist";
import Navbar from "./common/Navbar";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<div style={{ marginTop: "90px" }}>
					<Routes>
						<Route path='/' element={<Home />}></Route>
						<Route path='/blog/:blogid' element={<Blog />}></Route>
						<Route path='/wishlist' element={<Wishlist />}></Route>
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
// doua punce la routa reprezinta o informatie unica
// footer-ul trebuie sa il punem pe toate
// ultima componeta din fiecare pagina trebie sa fie footer
// container normal e standard
// search, categories componente separeate
// produs componenta comuna
// remove form local storage si pupa aia sters din state local
// dont forget loading and links fro the project
