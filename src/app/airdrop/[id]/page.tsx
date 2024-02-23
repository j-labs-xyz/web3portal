import { TextButton } from "@/components/TextButton";
import { appController } from "@/libs/appController";
import { AirDropData } from "@/libs/types";
import { Footer } from "@/views/Footer";
import TitleBar from "@/views/TitleBar";
import Image from "next/image";

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
				<h1>{airdrop.title}</h1>

				<div
					className="articleView">
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

							<div className="flex-row-align-left">
								<div className="label">amount:</div>
								<div>{airdrop.amount}&nbsp;{airdrop.asset.symbol}(${airdrop.value})</div>
							</div>
						</>}

						{airdrop.start && airdrop.end && <div className="flex-row-align-left">
							<div>{new Date(airdrop.start).toLocaleDateString()}</div>
							<div>-</div>
							<div>{new Date(airdrop.end).toLocaleDateString()}</div>
						</div>}

						<p>&nbsp;</p>

						<a
							className="linkButton"
							target="_blank"
							href={airdrop.claimURL}>claim</a>
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