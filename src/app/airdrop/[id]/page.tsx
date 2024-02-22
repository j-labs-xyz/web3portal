import { TextButton } from "@/components/TextButton";
import { appController } from "@/libs/appController";
import { AirDropData } from "@/libs/types";
import { Footer } from "@/views/Footer";
import TitleBar from "@/views/TitleBar";
import Image from "next/image";
import { redirect } from "next/navigation";
import data from "../../../../public/data/data.json";
import networks from "../../../../public/data/networks.json";

function getData() {
	// const res = await fetch("http://localhost:3000/data/data.json", {
	//   cache: "no-cache"
	//   // cache: "force-cache",
	//   // next: { revalidate: 3600 }
	// });

	// const networks = await fetch("http://localhost:3000/data/networks.json", {
	//   cache: "no-cache"
	// });

	// return {
	//   airdrops: await res.json(),
	//   networks: await networks.json()
	// };
	return {
		airdrops: data,
		networks: networks
	};
}

export default function Page({ params }: {
	params: { id: string };
}) {
	const data = getData();
	const airdrop: AirDropData | undefined = data.airdrops.find((item: AirDropData) => (item.id === parseInt(params.id)));

	return <main className="main">
		<TitleBar />

		<div className="mainView">
			<TextButton text="< back" />

			{airdrop && <>
				<h2>{airdrop.title}</h2>

				<div
					className="articleView">
					<div className="flex-column-align-left">
						<Image
							width={64}
							height={64}
							alt={airdrop.title}
							src={airdrop.logo}
							className="circleImage" />

						<div className="flex-row-align-left">
							<div className="label">token:</div>
							<div>{airdrop.asset.symbol}</div>
						</div>

						<div className="flex-row-align-left">
							<div className="label">amount:</div>
							<div>{airdrop.amount}&nbsp;{airdrop.asset.symbol}(${airdrop.value})</div>
						</div>

						<div className="flex-row-align-left">
							<div>{new Date(airdrop.start).toLocaleDateString()}</div>
							<div>-</div>
							<div>{new Date(airdrop.end).toLocaleDateString()}</div>
						</div>
					</div>

					<article>{airdrop.description}</article>
				</div>
			</>}
		</div>

		<Footer />
	</main>
};