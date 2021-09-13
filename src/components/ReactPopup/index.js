import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import './index.css'

const ReactPopup = () => (
  <Popup
    trigger={
      <button type="button" className="button">
        Rules
      </button>
    }
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close} type="button">
          <RiCloseLine />
        </button>
        <div className="content">
          <img
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
            className="rules-image"
          />
        </div>
      </div>
    )}
  </Popup>
)
export default ReactPopup
