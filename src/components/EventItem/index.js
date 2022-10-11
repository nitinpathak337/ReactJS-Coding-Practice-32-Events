// Write your code here
import './index.css'

const Event = props => {
  const {eventDetails, changeEvent} = props
  const {id, imageUrl, name, location} = eventDetails

  const onChangeEvent = () => {
    changeEvent(id)
  }

  return (
    <li className="list-item">
      <button type="button" className="event-button" onClick={onChangeEvent}>
        <img src={imageUrl} alt="event" className="image" />
      </button>
      <p className="event-heading">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default Event
