import Calculator from "./Calculator";

export default function Home() {
  return (
    <main className="p-4">
      <h1>Genshin Vision Calculator</h1>
      <p className="text-genshin-text">by jtpotato</p>
      <br />
      <p className="max-w-[40rem] text-genshin-text">It's like a personality test but with really poorly written documentation. It's up to you to figure out what each number is for :)</p>
      <Calculator />
    </main>
  )
}