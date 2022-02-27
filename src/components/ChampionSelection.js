import { useState } from 'react'

import ChampionOption from "./ChampionOption"
import AddChampion from "./AddChampion"

const ChampionSelection = ({ champions, addSelectedChampion }) => {
  const [selectedChampion, setSelectedChampion] = useState(null)

  return (
    <div className="champion-selection">
      <div className="champion-options">
        {champions.map((champion) => <ChampionOption key={champion.id} champion={champion} onClick={() => setSelectedChampion(champion)} active={selectedChampion?.id === champion.id} />)}
      </div>
      <AddChampion onClick={() => {
        addSelectedChampion(selectedChampion) 
        setSelectedChampion(null)
      }} disabled={selectedChampion === null} />
    </div>
  )
}

export default ChampionSelection