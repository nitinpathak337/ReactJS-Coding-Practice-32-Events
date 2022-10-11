// Write your code here
import './index.css'

const registrationStatusConstant = {
  initial: 'INITIAL',
  yetToRegister: 'YET_TO_REGISTER',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
  registered: 'REGISTERED',
}

const ActiveEventRegistrationDetails = props => {
  const {registration} = props

  const getInitial = () => (
    <div className="bg-registration">
      <p className="heading-registration">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  const getYetToRegister = () => (
    <div className="bg-registration">
      <div className="details-container">
        <img
          className="yet-to-register-image"
          src="https://assets.ccbp.in/frontend/react-js/events-register-img.png "
          alt="yet to register"
        />
        <p className="para">
          A live performance brings so much to your relationship with
          dance.Seeing dance live can often make you fall totally in love with
          this beautiful art form.
        </p>
        <button type="button" className="register-button">
          Register Here
        </button>
      </div>
    </div>
  )

  const getRegistrationsClosed = () => (
    <div className="bg-registration">
      <div className="details-container">
        <img
          className="yet-to-register-image"
          src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
          alt="registrations closed"
        />
        <h1 className="closed-heading">Registrations Are Closed Now!</h1>
        <p className="para">
          Stay Tuned. We will reopen the registrations soon!
        </p>
      </div>
    </div>
  )

  const getRegistered = () => (
    <div className="bg-registration">
      <div className="details-container">
        <img
          className="tick"
          alt="registered"
          src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        />
        <h1 className="closed-heading">
          You have already registered for the event
        </h1>
      </div>
    </div>
  )

  switch (registration) {
    case registrationStatusConstant.initial:
      return getInitial()
    case registrationStatusConstant.yetToRegister:
      return getYetToRegister()
    case registrationStatusConstant.registrationsClosed:
      return getRegistrationsClosed()
    case registrationStatusConstant.registered:
      return getRegistered()
    default:
      return null
  }

  // </div>

  /* ) */
}

export default ActiveEventRegistrationDetails
