import Image from "next/image";
import styles from "./TitleBar.module.css";
import Link from "next/link";

export default function TitleBar() {
	return <div className="flex-row-space-between">
		<Link
			href="/"
			className="flex-row-align-center">
			<Image
				src="/images/logo192.png"
				alt="logo"
				height={32}
				width={32} />

			<h1>Web3 Portal</h1>
		</Link>

		<div>
			<Link href="/">Airdrops</Link>
		</div>
	</div>
};