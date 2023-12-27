import Image from "next/image";
import generateRankings from "./generateRankings";

export default function Ranking({ values }: { values: number[] }) {
  return (
    <div className="ml-4">
      {generateRankings(values).map((element, index) => (
        <div key={element[0]} className="flex items-center gap-4">
          <Image width={50} height={50} src={`/visions/${element[0]}.png`} alt={element[0]} />
          <p className="mb-[-3px]">{element[0][0].toUpperCase() + element[0].slice(1)}</p>
        </div>
      ))}
    </div>
  )
}