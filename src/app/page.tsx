import { redirect } from "next/navigation";
import { getSneakers } from "lib/fetchSneakers";

export default async function Home() {
  const data = await getSneakers();
  if (!data || data.length === 0) {
    redirect("/create");
  }
  redirect("/main");
}
