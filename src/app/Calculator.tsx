"use client"

import { useState } from "react";
import GenshinSlider from "./GenshinSlider";
import Ranking from "./Ranking";

export default function Calculator() {
  const [stability, setStability] = useState(0)
  const [internalConflict, setInternalConflict] = useState(0)
  const [sacrifice, setSacrifice] = useState(0)
  const [energy, setEnergy] = useState(0)
  const [loss, setLoss] = useState(0)
  const [skill, setSkill] = useState(0)
  const [introvert, setIntrovert] = useState(0)
  const [extrovert, setExtrovert] = useState(0)
  const [selfDriven, setSelfDriven] = useState(0)
  const [thinking, setThinking] = useState(0)
  const [feeling, setFeeling] = useState(0)
  const [protective, setProtective] = useState(0)

  return (
    <div className="flex flex-row gap-16 my-8">
      <div className="flex flex-col gap-4 flex-1 min-w-96">
        <GenshinSlider label="Mental Stability" setValue={setStability} />
        <GenshinSlider label="Internal Conflict" setValue={setInternalConflict} />
        <GenshinSlider label="Sacrifice" setValue={setSacrifice} />
        <GenshinSlider label="Energy" setValue={setEnergy} />
        <GenshinSlider label="Loss" setValue={setLoss} />
        <GenshinSlider label="Skill" setValue={setSkill} />
        <GenshinSlider label="Introvertedness" setValue={setIntrovert} />
        <GenshinSlider label="Extrovertedness" setValue={setExtrovert} />
        <GenshinSlider label="Self Motivation" setValue={setSelfDriven} />
        <GenshinSlider label="Thinking" setValue={setThinking} />
        <GenshinSlider label="Feeling" setValue={setFeeling} />
        <GenshinSlider label="Protectiveness" setValue={setProtective} />
      </div>
      <div className="min-w-64 flex-1">
        <Ranking values={[stability, internalConflict, sacrifice, energy, loss, skill, introvert, extrovert, selfDriven, thinking, feeling, protective]} />
      </div>
    </div>
  )
}