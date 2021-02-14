import Link from "next/link";

const Navbar = () => {
	return (
		<nav>
			<div className="logo">
				<h1>Ninjalist</h1>
			</div>
			<Link href="/"><a>Home</a></Link>
			<Link href="/about"><a>About</a></Link>
			<Link href="/"><a>Ninja list</a></Link>
		</nav>
	);
};

export default Navbar;
