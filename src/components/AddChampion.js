const AddChampion = ({ onClick, disabled }) => {
  return (
    <button className="champion-select-button" onClick={onClick} disabled={disabled}>Add Champion</button>
  )
}

export default AddChampion