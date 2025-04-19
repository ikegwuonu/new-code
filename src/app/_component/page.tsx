import Ads from "@/components/ui/Ads";
import EditorPick from "./EditorPick";
import Trending from "./Trending";
import NewlyAdded from "./NewlyAdded";
import Listen from "./Listen";
import NeverStop from "./NeverStop";
import Partners from "./Partners";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className=" pt-[21px] pb-[51px] app-container ">
        <Ads
          width={1176}
          height={206}
          image={"/Ads1.png"}
          className="max-w-[1176px] mx-auto"
        />
      </div>
      <EditorPick />
      <Trending />
      <NewlyAdded />
      <Listen />
      <NeverStop />
      <Partners />
    </main>
  );
}
