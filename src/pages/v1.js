import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import { Layout, Article, SectionTitle } from '../components'

const Content = styled.div`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 3rem 6rem;
  overflow: hidden;
`

const Wrapper = styled.div`
  padding: 50px;
`

const Hero = styled.div`
  grid-column: 2;
  padding: 3rem 2rem 6rem 2rem;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
`

const VOnePage = ({
  data: {
    allMdx: { edges: data },
  },
}) => {
  const posts = data.map(p => p.node)
  return (
    <Layout>
      <Wrapper>
        <Content>
          <SectionTitle>Different Companies</SectionTitle>
          {posts.map(post => (
            <Article
              title={post.frontmatter.title}
              date={post.frontmatter.date}
              excerpt={post.excerpt}
              timeToRead={post.timeToRead}
              slug={post.fields.slug}
              key={post.fields.slug}
            />
          ))}
        </Content>
      </Wrapper>
    </Layout>
  )
}

export const IndexQuery = graphql`
  query IndexQuery {
    allMdx {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
          excerpt(pruneLength: 200)
          timeToRead
        }
      }
    }
  }
`

export default VOnePage
