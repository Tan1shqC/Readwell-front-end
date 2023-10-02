import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About, Cart, Home, Item, Layout, Login, Register, RequireAuth, SearchResult, User } from './components/export';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* public routes */}
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route element={<Layout />}>
					<Route path="/" element={<Home />} />
					<Route path="/search" element={<SearchResult />} />
					<Route path="/item/:itemId" element={<Item />} />
					<Route path="/about" element={<About />} />
				</Route>

				{/* protected routes */}
				<Route element={<RequireAuth />}>
					<Route element={<Layout />}>
						<Route path="/cart" element={<Cart />} />
						<Route path="/user" element={<User />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
