import Image from "next/image";
import styles from "./Footer.module.css";
import { Wave } from "@/components/Wave";

export const Footer = () => {
	return <div className={styles.footerLayout}>
		<div className="flex-row-align-left">
			<Image
				src="/images/logo.webp"
				alt="logo"
				height={30}
				width={126} />
		</div>
	</div>
};