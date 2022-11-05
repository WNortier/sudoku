import React, { FC, Children } from 'react'
import { GRID } from 'typings'
import { createGrid } from 'utils'

import Block from './block'
import { Container, Row } from './styles'


const Grid: FC = () => {
  // Other stuff on the way

  const grid = createGrid()

  return (
    <Container data-cy="grid-container">
      {Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <Row data-cy="grid-row-container">
            {Children.toArray(
              [...Array(9)].map((_, colIndex) => (
                <Block colIndex={colIndex} rowIndex={rowIndex} />
              ))
            )}
          </Row>
        ))
      )}
    </Container>
  )
}

export default Grid
