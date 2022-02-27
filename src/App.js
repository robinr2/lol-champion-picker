import { useState } from 'react'

import ChampionSelection from './components/ChampionSelection'
import ChampionDisplay from './components/ChampionDisplay'

function App() {
  const [champions, setChampions] = useState([
    {
      id: 1,
      name: 'Garen',
      lane: 'top'
    },
    {
      id: 2,
      name: 'Darius',
      lane: 'top'
    },
    {
      id: 3,
      name: 'Elise',
      lane: 'jungle'
    },
    {
      id: 4,
      name: 'Shyvana',
      lane: 'jungle'
    },
    {
      id: 5,
      name: 'Orianna',
      lane: 'mid'
    },
    {
      id: 6,
      name: 'Syndra',
      lane: 'mid'
    },
    {
      id: 7,
      name: 'Ashe',
      lane: 'adc'
    },
    {
      id: 8,
      name: 'Caitlyn',
      lane: 'adc'
    },
    {
      id: 9,
      name: 'Braum',
      lane: 'sup'
    },
    {
      id: 10,
      name: 'Blitzcrank',
      lane: 'sup'
    }
  ])
  const [selectedChampions, setSelectedChampions] = useState([])

  const addSelectedChampion = (selectedChampion) => {
    if (selectedChampions.length > 4) {
      console.log('You already have 5 champions.')
      return
    }

    if (selectedChampion === null) {
      console.log('You didn\'t select a champion.')
      return
    }

    setSelectedChampions([ ...selectedChampions, selectedChampion ])
    setChampions(champions.filter((champion) => champion.id !== selectedChampion.id && champion.lane !== selectedChampion.lane))
  }

  return (
    <div className="champion-container">
      <ChampionDisplay champions={selectedChampions} />
      <ChampionSelection champions={champions} addSelectedChampion={addSelectedChampion} />
      {/* <ChampionDisplay champions={players[1]['champions']} /> */}
    </div>
  )
}

export default App
