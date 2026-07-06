import HomeClient from "@/components/HomeClient";
import { getSession } from "../lib/getSession";
import { redirect } from "next/navigation";

export default async function Home() {
  const session=await getSession()
  if (!session || !session?.user) {
    return <HomeClient email="" />;
  }
  
  return (
    <>
      <HomeClient email={session.user?.email!}/>
    </>
  );
}
