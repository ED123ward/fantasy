import React from 'react'
import styled from '@emotion/styled'
import { Box } from '@mui/material'
import { BoxProps } from '@mui/system'

interface Props extends BoxProps {
  url: string
  alt?: string
}
const Img = styled('img')`
  width: 100%;
`

const ImageContainer: React.FC<Props> = ({ url, alt = 'image', ...props }) => {
  return (
    <Box {...props}>
      <Img src={url} alt={alt} />
    </Box>
  )
}

export default ImageContainer
