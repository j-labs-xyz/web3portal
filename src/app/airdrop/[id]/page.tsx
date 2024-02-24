import { TextButton } from "@/components/TextButton";
import { appController } from "@/libs/appController";
import { AirDropData } from "@/libs/types";
import { Footer } from "@/views/Footer";
import TitleBar from "@/views/TitleBar";
import Image from "next/image";
import styles from "./page.module.css";
import { formatCurrency, formatTokenAmount } from "@/libs/utils";

export default async function Page({ params }: {
	params: { id: string };
}) {
	const data = await appController.getData();
	const airdrop: AirDropData | undefined = data.airdrops.find((item: AirDropData) => (item.id === parseInt(params.id)));

	return <main className="main">
		<TitleBar />

		<div className="mainView">
			<TextButton text="< back" />

			{airdrop && <>
				<h1 style={{ textAlign: "center" }}>{airdrop.title}</h1>

				<div
					className="articleView">
					<div className={styles.infoBox}>
						<div className="flex-column-align-left">
							<Image
								width={64}
								height={64}
								alt={airdrop.title}
								src={airdrop.logo}
								className="circleImage" />

							{airdrop.asset && <>
								<div className="flex-row-align-left">
									<div className="label">token:</div>
									<div>{airdrop.asset.symbol}</div>
								</div>
							</>}

							{airdrop.amount && <div className="flex-row-align-left">
								<div className="label">amount:</div>
								<div>{formatTokenAmount(airdrop.amount)}</div>
							</div>}

							{airdrop.value && <div className="flex-row-align-left">
								<div className="label">value:</div>
								<div>{formatCurrency(airdrop.value)}</div>
							</div>}

							{airdrop.start && airdrop.end && <div className="flex-row-align-left">
								<div>{new Date(airdrop.start).toLocaleDateString()}</div>
								<div>-</div>
								<div>{new Date(airdrop.end).toLocaleDateString()}</div>
							</div>}
						</div>

						<a
							className="linkButton"
							target="_blank"
							href={airdrop.claimURL}
							style={{
								width: "calc(100% - 4rem)",
								textAlign: "center"
							}}>claim</a>
					</div>

					<article dangerouslySetInnerHTML={{ __html: airdrop.description }} />
				</div>
			</>}
		</div>

		<p>&nbsp;</p>
		<p>&nbsp;</p>

		<Footer />
	</main>
};