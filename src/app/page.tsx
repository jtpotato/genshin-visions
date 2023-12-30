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
        <p className="max-w-[40rem] text-white">This page uses Cloudflare Analytics. We're really curious about how many views this site gets, and Cloudflare Analytics promises that they are privacy-first. It would mean a lot to us if you could make sure that your content blocker is off — we don't serve ads either.</p>
      </main>
      <div className={styles.pageBackground} style={{ backgroundImage: `url('${process.env.RUN_MODE != "dev" ? "/genshin-visions" : ""}/images/Liyue.webp')` }}>

      </div>
    </div>

  )
}
