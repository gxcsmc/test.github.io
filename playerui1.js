import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './playerui1.css'

const Playerui1 = (props) => {
  const [active, setActive] = useState(true)
  return (
    <div className="playerui1-container">
      <img
        alt={props.imageAlt}
        src="https://visage.surgeplay.com/full/832/builtdoor.png"
        className="playerui1-image"
      />
      <span className="playerui1-text">{props.tier}</span>
      <span className="playerui1-text1">{props.ign}</span>
    </div>
  )
}

Playerui1.defaultProps = {
  ign: 'builtdoor',
  imageAlt: 'image',
  tier: 'High Tier 3',
}

Playerui1.propTypes = {
  ign: PropTypes.string,
  imageAlt: PropTypes.string,
  tier: PropTypes.string,
}

export default Playerui1
