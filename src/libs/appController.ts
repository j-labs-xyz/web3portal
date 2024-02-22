import data from "../../public/data/data.json";
import networks from "../../public/data/networks.json";

export const appController: {
	data?: any;
	init: () => void;
	getData: () => Record<string, any>;
} = {
	init: function () {
		// 
	},

	getData: async function () {
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
};