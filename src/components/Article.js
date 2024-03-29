import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Post = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: 3.5rem;
  margin-bottom: 3.5rem;
`

const Title = styled.h2`
  position: relative;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  margin-bottom: 0.75rem;
`

const Initiale = styled.span`
  position: absolute;
  font-size: 7rem;
  transform: translate(-50%, -50%);
  opacity: 0.08;
  user-select: none;
  z-index: -1;
`

const Excerpt = styled.p`
  grid-column: -1 / 1;
  margin-top: 1rem;
  margin-bottom: 1rem;
`

const Article = props => {
  console.log(props)
  const firstChar = props.title.charAt(0)

  return (
    <Post>
      <Title>
        <Initiale>{props.firstChar}</Initiale>
        <Link to={props.slug}>{props.title}</Link>
      </Title>
      <p>{props.date}</p>
      <Excerpt>{props.excerpt}</Excerpt>
    </Post>
  )
}

export default Article
