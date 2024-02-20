import Image from "next/image";
import styles from "./page.module.css";
import TitleBar from "@/views/TitleBar";
import { AirDropData, JsonObject } from "@/libs/types";
import { AirdropItem } from "@/components/AirdropItem";
import { Footer } from "@/views/Footer";
import data from "../../public/data/data.json";
import networks from "../../public/data/networks.json";

async function getData() {
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

export default async function Home() {
  const data = await getData();

  return (
    <main className={styles.main}>
      <TitleBar />

      <div className={styles.mainView}>
        <h2>Latest Airdrops</h2>

        {data?.airdrops?.length > 0 && <div className="grid-3-Columns">
          {data?.airdrops.map((item: JsonObject) => {
            return <AirdropItem
              key={item.id}
              airdrop={item as AirDropData}
              networks={data?.networks} />
          })}
        </div>}
      </div>

      <Footer />
    </main>
  );
}
