import './index.css'

const DestinationItem = props => {
  const {item} = props
  const {name, imgUrl} = item

  return (
    <li>
      <img src={imgUrl} className="img" alt={name} />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItem
