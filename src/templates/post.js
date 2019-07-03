import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

import { Layout } from '../components'
import { Spacer as Space, Box, Text, Flex, Image } from '../components/base'

//Props are coming from that query at the bottom
const Post = props => {
  const exported = props.data.mdx.exports
  const post = props.data.mdx.frontmatter
  const code = props.data.mdx.code.body
  return (
    <Layout>
      <Content>
        <Logo>
          <img
            src="https://uploads-ssl.webflow.com/5c2fa00d1b7e002e1d79fd0a/5c48fa81d3db1325e666c447_novvum%20logo%20black.png"
            height="50px"
          />
          <Text>Contract Security Certificate</Text>
          <Space width={10} />
        </Logo>
        <Space height={48} />
        <Header>
          <Text color="#05167D">{post.date} - Novvum Verified</Text>
          <Text fontSize={24} marginTop={3} marginBottom={3}>
            {post.company} Contracts
          </Text>
          <Text fontSize={14} marginTop={2}>
            This smart contract audit was prepared by Novvum, the protocol for
            securing smart contracts.
          </Text>
        </Header>
        <Space height={64} />
        <ExecutiveSummary>
          <Title fontSize={24} style={{ textDecoration: 'underline' }}>
            Executive Summary
          </Title>
          <Space height={20} />
          <Flex>
            <Box width="100%">
              <Flex flexDirection="column">
                {Object.keys(post)
                  .filter(post => {
                    return (
                      post.valueOf() !== 'title' &&
                      post.valueOf() !== 'company' &&
                      post.valueOf() !== 'date'
                    )
                  })
                  .map((v, k) => {
                    if (v === 'auditors') {
                      return (
                        <Flex key={k} p={2}>
                          <Title width={200}>
                            {v[0].toUpperCase() + v.slice(1)}
                          </Title>
                          <Text>
                            {post[v].map((v, k) => {
                              return <Text key={k}>{v}</Text>
                            })}
                          </Text>
                        </Flex>
                      )
                    }
                    if (v === 'methods') {
                      return (
                        <Flex key={k} p={2}>
                          <Title width={200}>
                            {v[0].toUpperCase() + v.slice(1)}
                          </Title>
                          <Text>
                            {post[v].map((v, k) => {
                              return <Text key={k}>{v}</Text>
                            })}
                          </Text>
                        </Flex>
                      )
                    }
                    if (v === 'specification') {
                      return (
                        <Flex key={k} p={2}>
                          <Title width={200}>
                            {v[0].toUpperCase() + v.slice(1)}
                          </Title>
                          <Text>
                            {post[v].map((val, i) => {
                              return (
                                <Link key={i} to={val}>
                                  Contract - {v} <br />
                                </Link>
                              )
                            })}
                          </Text>
                        </Flex>
                      )
                    }
                    return (
                      <Flex key={k} p={2}>
                        <Title width={200}>
                          {v[0].toUpperCase() + v.slice(1)}
                        </Title>
                        <Text> {post[v]}</Text>
                      </Flex>
                    )
                  })}
                <Space width={40} />
                <Box>answer</Box>
              </Flex>
            </Box>
            <Box backgroundColor="b" width="100%">
              <Title>{exported.overall.title}</Title>
              <Text p={20}>{exported.overall.description}</Text>
              <Image
                src="https://i.ibb.co/7kqPFpF/Screen-Shot-2019-07-02-at-1-52-36-PM.png"
                width="100%"
              />
            </Box>
          </Flex>
          <MDXRenderer>{code}</MDXRenderer>
        </ExecutiveSummary>
      </Content>
    </Layout>
  )
}

export default Post

const Content = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 10px;
`

const Logo = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;
`
const Title = styled(Text)`
  color: #05167d;
`

const ExecutiveSummary = styled(Flex)`
  flex-direction: column;
  align-items: left;
`

const Header = styled(Box)`
  width: 50%;
  border: 0.5px solid blue;
  outline-color: blue;
  outline-style: double;
  padding: 20px;
`

//Frontmatter is a keyword so it doesn't fall under "exports" (?)
export const postQuery = graphql`
  query postBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      code {
        body
      }
      excerpt
      frontmatter {
        title
        type
        date
        company
        auditors
        timeline
        languages
        methods
        specification
        sourceCodeRepo
        sourceCodeCommit
      }
      exports {
        overall {
          title
          description
        }
      }
      timeToRead
    }
  }
`
