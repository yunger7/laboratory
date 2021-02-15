import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div>
			<h1 className={styles.title}>Homepage</h1>
			<p className={styles.text}>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
				possimus excepturi pariatur nemo consequatur veniam provident hic
				eveniet expedita nesciunt, recusandae, velit illo maiores quam ipsum
				sapiente modi est sunt.
			</p>
			<p className={styles.text}>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
				possimus excepturi pariatur nemo consequatur veniam provident hic
				eveniet expedita nesciunt, recusandae, velit illo maiores quam ipsum
				sapiente modi est sunt.
			</p>
      <Link href="/ninjas"><a className={styles.btn}>See Ninja Listing</a></Link>
		</div>
	);
}
