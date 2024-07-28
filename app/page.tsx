import { ModeToggle } from "@/components/ModeToggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-end justify-between p-4">
      <div className="flex">
        <ModeToggle />
      </div>
    </main>
  );
}
