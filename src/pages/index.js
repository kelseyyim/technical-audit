import React from 'react'
import { graphql, Link } from 'gatsby'
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

const BlogIndex = ({
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

          {posts.map((post, key) => (
            <div key={key}>
              <Link style={{ boxShadow: `none` }} to={post.fields.slug} />
              <Article
                title={post.frontmatter.title}
                excerpt={post.excerpt}
                timeToRead={post.timeToRead}
                slug={post.fields.slug}
                key={post.fields.slug}
              />
            </div>
          ))}
        </Content>
      </Wrapper>
    </Layout>
  )
}

export const MainQuery = graphql`
  query MainQuery {
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

export default BlogIndex
