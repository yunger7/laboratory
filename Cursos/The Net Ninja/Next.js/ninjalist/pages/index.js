import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div>
			<h1>Homepage</h1>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
				possimus excepturi pariatur nemo consequatur veniam provident hic
				eveniet expedita nesciunt, recusandae, velit illo maiores quam ipsum
				sapiente modi est sunt.
			</p>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
				possimus excepturi pariatur nemo consequatur veniam provident hic
				eveniet expedita nesciunt, recusandae, velit illo maiores quam ipsum
				sapiente modi est sunt.
			</p>
      <Link href="/ninjas"><a>See Ninja Listing</a></Link>
		</div>
	);
}
