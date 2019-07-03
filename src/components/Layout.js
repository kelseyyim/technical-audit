import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Image, Flex, Box } from '../components/base'
import SEO from './seo'

const Border = styled.div`
  background-color: blue;
  height: 10px;
  width: 100%;
`
const Wrapper = styled.div`
  padding-right: 50px;
  padding-left: 50px;
`
const Banner = styled(Flex)`
  height: 200px;
  z-index: -1;
  margin-left: 70%;
  position: absolute;
`
const Meat = styled.div`
  z-index: 0;
`
const Layout = ({ children, customSEO }) => {
  return (
    <>
      <Border />
      <Wrapper>
        <Banner height={200}>
          <Image src={'https://i.ibb.co/v1mMNpK/Banner.png'} width={80} />
        </Banner>
        <Meat>
          {!customSEO && <SEO />}
          {children}
        </Meat>
      </Wrapper>
      <Border />
    </>
  )
}

export default Layout

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  customSEO: PropTypes.bool,
}

Layout.defaultProps = {
  customSEO: false,
}
