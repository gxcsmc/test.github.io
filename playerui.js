import React, { useState } from 'react'

import PropTypes from 'prop-types'

import Playerui1 from './playerui1'
import './playerui.css'

const Playerui = (props) => {
  const [active, setActive] = useState(true)
  return (
    <div className="playerui-container">
      <img
        alt={props.imageAlt}
        src="https://visage.surgeplay.com/full/832/builtdoor.png"
        className="playerui-image"
      />
      <span className="playerui-text">{props.tier}</span>
      <span className="playerui-text1">{props.ign}</span>
      <Playerui1></Playerui1>
    </div>
  )
}

Playerui.defaultProps = {
  imageAlt: 'image',
  tier: 'High Tier 3',
  ign: 'builtdoor',
}

Playerui.propTypes = {
  imageAlt: PropTypes.string,
  tier: PropTypes.string,
  ign: PropTypes.string,
}

export default Playerui
