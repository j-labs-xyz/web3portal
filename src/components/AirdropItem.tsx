"use client"

import { AirDropData, JsonObject } from "@/libs/types";
import styles from "./AirdropItem.module.css";
import Image from "next/image";
import React from "react";

export const AirdropItem = ({ airdrop, networks }: {
	airdrop: AirDropData;
	networks: object
}) => {
	const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		e.preventDefault();
		window.location.href = "/airdrop/" + airdrop.id;
	};

	return <div className={styles.airdropItemContainer}>
		<div
			className={styles.AirdropItemLayout}
			onClick={handleClick}>
			<Image
				width={64}
				height={64}
				alt={airdrop.title}
				src={airdrop.logo}
				className="circleImage" />

			<div
				className="flex-column-align-left"
				style={{ width: "100%" }}>
				<div className="flex-row-space-between">
					<div className="flex-row-align-left-baseline">
						<h3>{airdrop.title}</h3>

						<span>({airdrop.asset.symbol})</span>
					</div>

					<Image
						width={16}
						height={16}
						alt="network logo"
						src={(networks as JsonObject)[String(airdrop.platform)].logo} />
				</div>

				<div className="flex-row-align-left">
					<div>{new Date(airdrop.start).toLocaleDateString()}</div>
					<div>-</div>
					<div>{new Date(airdrop.end).toLocaleDateString()}</div>
				</div>

				<div className="flex-row-align-left">
					<div className="label">amount:</div>
					<div>{airdrop.amount}&nbsp;{airdrop.asset.symbol}(${airdrop.value})</div>
				</div>
			</div>
		</div>
	</div>
};