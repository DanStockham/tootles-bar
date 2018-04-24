import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import lobsterFont from "typeface-lobster"

import Navigation from '../components/Navigation'
import SocialMedia from '../components/SocialMedia'
import NextEvent from '../components/NextEvent'
import AddressBlock from '../components/AddressBlock'
import Footer from '../components/Footer'
import mockData from '../api/mockEventData'

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/index.scss'
import '../styles/layout.scss'


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
          Tootle's
        </Link>
      </h1>
    </div>
  <Navigation />
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <div className="c-background-image"></div>
    <div className="c-background-overlay"></div>
    <div className="wrapper">
      <Header />
      <div className="c-layout">
        <Helmet
          title="Tootle's Pumpkin Inn"
          // meta={[
          //   { name: 'description', content: 'Sample' },
          //   { name: 'keywords', content: 'sample, something' },
          // ]}
          // >
          // <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
        // </Helmet>

        <div className="c-layout__content">
          <div className="c-layout__main">
            {children()}
          </div>
          <div className="c-layout__aside">
            <SocialMedia />
            <NextEvent />
            <AddressBlock/>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
