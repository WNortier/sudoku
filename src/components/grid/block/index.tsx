import React, { FC } from 'react'

import { BlockContainer } from './styles'

interface IProps {
  colIndex: number
  rowIndex: number
}

const Block: FC<IProps> = ({ colIndex, rowIndex }) => {
  return <BlockContainer data-cy={`block-${rowIndex}-${colIndex}`} />
}

export default Block
