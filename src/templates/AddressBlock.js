import React, { Component, PropTypes } from 'react';
import { Link } from 'gatsby-link'
import Map from '../components/Map'

/**
 * AddressBlock
 */
export default class AddressBlock extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const data = this.props

    console.log(data)

    return (
      <div className="content-box">
        <h3 className="content-box__header-tab">TOOTLE's PUMPKIN INN</h3>
        <div className="content-padding no-padding-top">
        <a target="_blank" href={`https://www.google.com/maps/place/117+E+Main+St,+Circleville,+OH+43113/data=!4m2!3m1!1s0x8847778735f7a741:0x152fcdbd872fa405?sa=X&ved=0ahUKEwjR54KCsOPaAhWBzIMKHUwuB8cQ8gEIKDAA`}>
          <div>
            <Map 
              isMarkerShown
              googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.GATSBY_GOOGLE_MAP_API}&v=3.exp&libraries=geometry,drawing,places`}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `200px`, marginTop: '20px' }} />}
              mapElement={<div style={{ height: `100%` }} />} 
             />
          </div>
        </a>
        <div className="c-address__street-address">
          <span>117 E Main St</span>
          <span>Circleville, OH 43113</span>
        </div>
        <div>
          <span style={ {display: 'block'} }>Hours:</span>
          <p>Monday-Saturday: 4pm-2:30am</p>
          <p>(614)299-4987</p>
        </div>
      </div>


      </div>
    );
  }
}

const query = graphql`
query {
  allContentfulContact {
    edges {
      node {
        hours {
          hours
        }
        phone
        email
      }
    }
  }
}
`
