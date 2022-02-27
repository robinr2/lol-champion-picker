
const ChampionOption = ({ champion, onClick, active }) => {

  return (
    <div className={`champion-option ${active ? 'active' : ''}`} onClick={onClick}>
      <div>{champion.name}</div>
      <div>{champion.lane}</div>
    </div>
  )
}

export default ChampionOption