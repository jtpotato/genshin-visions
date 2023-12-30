import Image from "next/image";
import generateRankings from "./generateRankings";
import { useEffect, useRef } from "react";
import styles from "./ranking.module.css"
import generateDescriptions from "./generateDescriptions";

export default function Ranking({ values }: { values: number[] }) {
  const resultsRef = useRef<HTMLDivElement>(null)

  const exportImageRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window !== undefined) {
      import('react-component-export-image').then(
        module => (exportImageRef.current = module)
      )
    }
  }, [])

  const rankings = generateRankings(values)
  const elements = rankings.map((element) => element[0])

  return (
    <div>
      <div className="border">
        <div ref={resultsRef} className={"p-8 flex gap-4 " + styles.resultsPane}>
          <div className="flex-1">
            <h2 className="min-w-fit">Your Vision:</h2>
            <div className="ml-4 min-w-fit">
              {rankings.map((element, index) => (
                <div key={element[0]} className="flex items-center gap-4">
                  <p className="mb-[-3px]">{index + 1}.</p>
                  <img width={40} height={40} src={`${process.env.RUN_MODE != "dev" ? "/genshin-visions" : ""}/visions/${element[0]}.png.webp`} alt={element[0]} />
                  <p className="mb-[-3px] min-w-fit">{element[0][0].toUpperCase() + element[0].slice(1)}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <h2>Your traits:</h2>
            <p>{generateDescriptions(elements)}</p>
          </div>
        </div>
      </div>
      <br />
      <div>
        <button
          className="bg-genshin-menu-bg px-6 py-3 rounded-full text-genshin-text"
          onClick={() => exportImageRef.current?.exportComponentAsJPEG(resultsRef, { html2CanvasOptions: { allowTaint: true, useCORS: true, backgroundColor: "black" } })}
        ><p className="mb-[-3px]">Save Image</p></button>
      </div>
    </div>
  )
}