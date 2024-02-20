export type JsonObject = { [key: string]: any };

export type Coin = {
	symbol: string;
	name: string;
	decimals: number;
}

export type AirDropData = {
	id: number;
	title: string;
	logo: string;
	start: string;
	end: string;
	amount: number;
	value: number;
	platform: number;
	description: string;
	claimURL: string;
	asset: Coin;
}