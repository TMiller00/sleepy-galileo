import React, { useContext } from 'react'
import { Context, ContextType } from '../Form'
import { Box, Button } from 'grommet'
import { Close } from 'grommet-icons'
import parse from 'html-react-parser'
import { RxDocument } from 'rxdb'

export type Item = RxDocument & {
  url: string
}
type Props = {
  key: number
  item: Item
}

const Track: React.FC<Props> = (props) => {
  const context = (useContext(Context) as ContextType)
  const { onClick } = context
  const { item } = props

  return (
    <Box direction='row' align='center'>
      <Button
        margin={{ right: 'small' }}
        icon={<Close/>}
        onClick={() => onClick(item.url)}
      />
        { parse(JSON.parse(item.url)) }
    </Box>
  )
}

export default Track
