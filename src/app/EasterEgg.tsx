"use client"

import { useEffect, useState } from "react";

function EasterEgg() {
  const [render, setRender] = useState(false);
  const [today, setToday] = useState(new Date())
  useEffect(() => {
    const today = new Date()
    const date = today.toLocaleDateString("en-GB", {
      month: "2-digit", day: "2-digit"
    })
    if (date == "07/01") {
      setRender(true)
    }
  }, [])
  return ( <>
    <div className="my-4 text-neutral-400">
      <p>{render ? "Happy Birthday!" : ""}</p>
    </div>
  </> );
}

export default EasterEgg;