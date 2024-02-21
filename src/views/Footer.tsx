import Image from "next/image";
import styles from "./Footer.module.css";
import { Wave } from "@/components/Wave";

export const Footer = () => {
	return <div className={styles.footerLayout}>
		<div className="waveContainer">
			<div className="waveBox">
				<Wave />
			</div>
		</div>

		<p>&nbsp;</p>

		<div className="flex-row-align-left">
			<Image
				src="/images/logo.png"
				alt="logo"
				height={16}
				width={16} />

			<div className="sign">Web3 Portal</div>
		</div>
	</div>
};