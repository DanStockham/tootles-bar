import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { Media } from 'reactstrap'
import Img from 'gatsby-image'


const Event = (props) => {
  const convertDate = new Date(props.showDate)
  const date = convertDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  const time = convertDate.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'})

  return (
    <div className="events__eventcard">
      <Media>
          <Media left href={props.slug}>
            {/* <Link to={props.slug} > */}
              <Media object style={ { paddingRight: 10 } } src={props.image ? props.image.sizes.src : "http://via.placeholder.com/120x100"} alt={`${props.showName}`} />
              {/* <Img resolutions={props.image.sizes} /> */}
            {/* </Link> */}
          </Media>
          <Media body>
            <Media heading style={ { margin: 0 } }>
              {props.showName}
            </Media>
              <span style={{display: 'block'}}>Date: {`${date}, ${time}`}</span>
              <span style={{display: 'block'}}>Cover price: {props.coverPrice ? `$${props.coverPrice.toFixed(2)}`: 'Free'}</span>
          </Media>
        </Media>
      </div>
  )
}

export default Event
