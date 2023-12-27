"use client"

import { useRef } from "react"
import styles from "./genshinSlider.module.css"

export default function GenshinSlider({ label, setValue }: { label: String, setValue: any }) {
  const inputRef = useRef<HTMLInputElement>(null)
  function updateValue() {
    setValue(inputRef.current?.valueAsNumber)
  }

  return (
    <div className={"bg-genshin-menu-bg text-genshin-text p-4 px-6 rounded-full flex gap-4"}>
      <p className="mb-[-3px] flex-1">{ label }</p>
      <input type="range" defaultValue={0} min={0} max={5} step={0.01}
      className={"max-w-48 w-1/2 " + styles.genshinSlider}
      ref={inputRef} onChange={updateValue} />
    </div>
  )
}