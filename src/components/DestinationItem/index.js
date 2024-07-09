const DestinationItem = props => {
  const {destinationsList} = props
  const {id, name, imgUrl} = destinationsList

  return (
    <li>
      <img src={imgUrl} className="img" />
      <p>name</p>
    </li>
  )
}

export default DestinationItem
