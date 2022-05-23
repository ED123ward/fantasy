import React from 'react'

interface Props {
    children: React.ReactNode
}

const Section: React.FC<Props> = ({children}) => {
  return (
      <div>{children}</div>
  )
}

export default Section