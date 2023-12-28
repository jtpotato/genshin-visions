import descriptions from "./elementDescriptions.json"

export default function generateDescriptions(elements: string[]) {
  let description: string[] = []
  for (let i = 0; i < 7; i++) {
    // @ts-expect-error
    let elementDescription = descriptions[elements[i]][i]

    if (description.includes(elementDescription)) continue

    description.push(elementDescription)
  }
  return description.join(", ")
}