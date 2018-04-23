import React, { Component } from 'react'
import Link from 'gatsby-link'

export default class EventDetail extends Component {
  render() {
    const data = this.props.data.contentfulShow;
    const convertDate = new Date(data.date)

    return (
      <div className="content-box">
        <div className="event-detail" >
          {data.image ? <img className="event-detail-image" src={data.image.file.url} alt=""/> : null }
          <div className="event-detail__content">
            <h2 className="event-detail-name">{data.name.toUpperCase()}</h2>
            <h3 className="event-detail-date">{`${convertDate.toLocaleDateString({ weekday: 'short', month:'short', day:'numeric'}).toUpperCase()} ${convertDate.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}`}</h3>
            <h3 className="event-detail-coverprice" >{!data.coverPrice ? `No Cover` : `$${data.coverPrice.toFixed(2)}`}</h3>
            <div dangerouslySetInnerHTML={{__html: data.description.childMarkdownRemark.html}} />
            <Link to='/'>Back to Upcoming Events</Link>
          </div>
        </div>
      </div>
    )
  }
}

export const eventDetailQuery = graphql`
  query eventDetailQuery($slug: String!) {
      contentfulShow (slug: {eq: $slug}) {
        slug
        name
        date
        coverPrice
        description {
          id
          childMarkdownRemark {
            id
            html
          }
        }
        image {
          file {
            url
          }
        }
    }
  }

`
