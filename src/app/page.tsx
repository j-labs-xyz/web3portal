import styles from "./page.module.css";
import TitleBar from "@/views/TitleBar";
import { AirDropData, JsonObject } from "@/libs/types";
import { AirdropItem } from "@/components/AirdropItem";
import { Footer } from "@/views/Footer";
import { appController } from "@/libs/appController";

export default async function Home() {
  const data = await appController.getData();

  return (
    <main className="main">
      <TitleBar />

      <div className="mainView">
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
