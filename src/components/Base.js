import styled from 'styled-components'
import {
  space,
  color,
  width,
  height,
  flex,
  order,
  alignSelf,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  fontSize,
  fontFamily,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
  borders,
  borderColor,
  borderRadius,
  buttonStyle,
  boxShadow,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  opacity,
  variant,
} from 'styled-system'

export const Spacer = styled.div`
    ${width}
    ${height}
    ${space}
`

export const Box = styled('div')(
  {
    boxSizing: 'border-box',
  },
  space,
  width,
  fontSize,
  color,
  flex,
  order,
  alignSelf
)

export const Flex = styled(Box)(
  {
    display: 'flex',
  },
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent
)

export const Text = styled(Box)(
  fontFamily,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing
)

export const Heading = styled(Text)

Heading.defaultProps = {
  as: 'h2',
  m: 0,
  fontSize: 4,
}

export const Link = styled(Box)

Link.defaultProps = {
  as: 'a',
}

export const Button = styled(Box)(
  {
    appearance: 'none',
    display: 'inline-block',
    textAlign: 'center',
    lineHeight: 'inherit',
    textDecoration: 'none',
  },
  fontWeight,
  borders,
  borderColor,
  borderRadius,
  buttonStyle
)

Button.defaultProps = {
  as: 'button',
  fontSize: 'inherit',
  borderRadius: 1,
  fontWeight: 2,
  m: 0,
  px: 3,
  py: 2,
  color: 'white',
  bg: 'primary',
  border: 1,
}

export const Image = styled(Box)(
  {
    maxWidth: '100%',
    height: 'auto',
  },
  height,
  borderRadius
)

Image.defaultProps = {
  as: 'img',
  m: 0,
}

const cards = variant({ key: 'cards' })

export const Card = styled(Box)(
  borders,
  borderColor,
  borderRadius,
  boxShadow,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  opacity,
  cards
)

Card.defaultProps = {
  boxShadow: 'large',
}
