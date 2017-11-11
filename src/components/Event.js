import React from 'react'
import PropTypes from 'prop-types'
import { Media } from 'reactstrap'


const Event = (props) => {
  return (
    <div>
      <Media>
          <Media left href="#">
            <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
          </Media>
          <Media body>
            <Media heading>
              {props.bandName}
            </Media>
              <p>Cover price: ${props.coverPrice}</p>
          </Media>
        </Media>
      </div>
  )
}

export default Event
