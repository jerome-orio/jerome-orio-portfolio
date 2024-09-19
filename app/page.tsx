import Link from "next/link";
import AddButton from "./components/AddButton";

export default function Home() {
  return (
    <main>
      Welcome
      <Link  href="/users">Users</Link>
      <AddButton />
    </main>
  );
}
