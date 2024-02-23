"use client"

import { AirDropData, JsonObject } from "@/libs/types";
import styles from "./AirdropItem.module.css";
import Image from "next/image";
import React from "react";
import { formatCurrency, formatTokenAmount } from "@/libs/utils";

export const AirdropItem = ({ airdrop, networks }: {
	airdrop: AirDropData;
	networks: object;
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
						<h1>{airdrop.title}</h1>

						{airdrop.asset && <span>({airdrop.asset.symbol})</span>}
					</div>

					{airdrop.featured && <div style={{ fontSize: "xx-larger" }}>✰</div>}
				</div>

				{airdrop.platform && <div className="flex-row-align-left">
					<div className="label">platform:&nbsp;{(networks as JsonObject)[String(airdrop.platform)].name}</div>

					<Image
						width={0}
						height={0}
						sizes="12px"
						style={{
							height: '12px',
							width: 'auto'
						}}
						alt="network logo"
						src={(networks as JsonObject)[String(airdrop.platform)].logo} />
				</div>}

				{airdrop.start && airdrop.end && <div className="flex-row-align-left">
					<div>{new Date(airdrop.start).toLocaleDateString()}</div>
					<div>-</div>
					<div>{new Date(airdrop.end).toLocaleDateString()}</div>
				</div>}

				{airdrop.amount && <div className="flex-row-align-left">
					<div className="label">token:</div>
					<div>{formatTokenAmount(airdrop.amount)}</div>
				</div>}

				{airdrop.value && <div className="flex-row-align-left">
					<div className="label">value:</div>
					<div>{formatCurrency(airdrop.value)}</div>
				</div>}
			</div>
		</div>
	</div>
};