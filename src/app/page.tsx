import Calculator from "./Calculator";
import styles from "./page.module.css"

export default function Home() {
  return (
    <div className={styles.pageParent}>
      <main className="p-4 text-white md:p-8 md:pt-16">
        <h1>Genshin Vision Calculator</h1>
        <p className="text-white">by jtpotato</p>
        <br />
        <p className="max-w-[40rem] text-neutral-400">It's like a personality test but with really poorly written documentation. It's up to you to figure out what each number is for :)</p>
        <Calculator />
      </main>
      <div className={styles.pageBackground} style={{ backgroundImage: "url('/images/Liyue.webp')" }}>

      </div>
    </div>

  )
}
