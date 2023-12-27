import Image from "next/image";
import generateRankings from "./generateRankings";
import { useEffect, useRef } from "react";

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

  return (
    <div>
      <div className="border">
        <div ref={resultsRef} className="p-8">
          <h2>My Vision:</h2>
          <div className="ml-4">
            {generateRankings(values).map((element, index) => (
              <div key={element[0]} className="flex items-center gap-4">
                <p className="mb-[-3px]">{index + 1}.</p>
                <Image width={40} height={40} src={`${process.env.RUN_MODE != "dev" ? "/genshin-visions" : ""}/visions/${element[0]}.png`} alt={element[0]} />
                <p className="mb-[-3px]">{element[0][0].toUpperCase() + element[0].slice(1)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <br />
      <div>
        <button
          className="bg-genshin-menu-bg px-6 py-3 rounded-full text-genshin-text"
          onClick={() => exportImageRef.current?.exportComponentAsJPEG(resultsRef)}
        ><p className="mb-[-3px]">Save Image</p></button>
      </div>
    </div>
  )
}