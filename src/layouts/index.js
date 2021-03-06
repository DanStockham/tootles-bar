import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import lobsterFont from "typeface-lobster"

// import Navigation from '../components/Navigation'
import SocialMedia from '../components/SocialMedia'
import NextEvent from '../components/NextEvent'
import AddressBlock from '../pages/AddressBlock'
import Footer from '../components/Footer'
import Logo from '../components/Logo'

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/styles.min.css';


const Header = () => (
  <div
    className="header"
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 className="header__logo">
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
         <Logo/>
        </Link>
      </h1>
    </div>
  {/* <Navigation /> */}
  </div>
)

const TemplateWrapper = ({data, children}) => {
  const nextShow = data.allContentfulShow.edges[0];
  return (
    <div>
      <div className="c-background-image"></div>
      <div className="c-background-overlay"></div>
      <div className="wrapper">
        <Header />
        <div className="c-layout">
          <Helmet
            title="Tootle's Pumpkin Inn"
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
            >
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <link rel="stylesheet" href="style.css"/>
          </Helmet>

          <div className="c-layout__content">
            <div className="c-layout__main">
              {children()}
            </div>
            <div className="c-layout__aside">
              <SocialMedia />
              <NextEvent nextShow={nextShow}/>
              <AddressBlock/>
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper


export const nextEventQuery = graphql`
  query nextEventQuery {
    allContentfulShow (
      limit: 1
      sort: { fields: [date], order:DESC }
    ) {
      edges {
        node {
          name
          date
          slug
          coverPrice
          image {
          file {
            url
          }
          }
        }
      }
    }
  }
`


