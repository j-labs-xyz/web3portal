"use client"

import Image from "next/image";
import styles from "./TitleBar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TitleBar() {
	const pathname = usePathname();

	return <div className={styles.titleBarLayout}>
		<Link
			href="/"
			className="flex-row-align-center">
			<Image
				src="/images/logo.png"
				alt="logo"
				height={32}
				width={32} />

			<h1>Web3 Portal</h1>
		</Link>

		<div className={styles.menu}>
			<Link
				className={pathname === "/" ? "menuItemActived" : "menuItem"}
				href="/">airdrops</Link>

			<Link
				className="menuItem"
				target="_blank"
				href="https://www.prodigitalfund.com/portfolio">portfolio</Link>

			<Link
				className="menuItem"
				target="_blank"
				href="https://www.prodigitalfund.com/accelerator">accelerator</Link>

			<Link
				className="menuItem"
				target="_blank"
				href="https://www.prodigitalfund.com/team">team</Link>

			<Link
				className="menuItem"
				target="_blank"
				href="https://www.prodigitalfund.com/research">news</Link>

			<Link
				className="menuItem"
				target="_blank"
				href="https://www.prodigitalfund.com/contact">contact</Link>
		</div>
	</div>
};