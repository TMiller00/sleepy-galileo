import React, { useContext } from 'react'
import { Context, ContextType } from '../Form'
import { Box, List, Button } from 'grommet'
import { Close } from 'grommet-icons'

type Props = {
  key: number
  item: any
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
        { item.url }
    </Box>
  )
}
const ListTracks: React.FC = () => {
  const context = (useContext(Context) as ContextType)
  const { data } = context

  return (
    <List
      primaryKey='url'
      data={data}
      children={(item: any, index: number) => (<Track key={index} item={item}/>)}
    />
  )
}

export default ListTracks
