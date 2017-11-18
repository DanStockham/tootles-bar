import React from 'react'
import PropTypes from 'prop-types'
import { Media } from 'reactstrap'


const Event = (props) => {
  return (
    <div className="events__eventcard">
      <Media>
          <Media left href="#">
            <Media object style={ { paddingRight: 10 } } src="http://via.placeholder.com/64x64" alt="event image" />
          </Media>
          <Media body>
            <Media heading style={ { margin: 0 } }>
              {props.bandName}
            </Media>
              <span style={{display: 'block'}}>Date: {props.eventDate}</span>
              <span style={{display: 'block'}}>Cover price: ${props.coverPrice}</span>
          </Media>
        </Media>
      </div>
  )
}

export default Event
