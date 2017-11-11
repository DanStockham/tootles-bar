import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Navigation from '../components/Navigation'
import SocialMedia from '../components/SocialMedia'
import NextEvent from '../components/NextEvent'
import mockData from '../api/mockEventData'

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/index.scss'
import '../styles/layout.scss'

console.log(mockData);

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
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
    </Helmet>
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    <SocialMedia />
    <NextEvent />
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
