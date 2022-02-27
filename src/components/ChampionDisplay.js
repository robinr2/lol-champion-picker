const ChampionDisplay = ({ champions }) => {
  return (
    <div className="champion-display">
      {champions.map((champion) => <div className="champion-display-icon" key={champion.id}>{champion.name}</div>)}
    </div>
  )
}

export default ChampionDisplay