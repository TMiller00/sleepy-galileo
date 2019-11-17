import React, { useContext } from 'react'
import { Context, ContextType } from '../Form'
import Track from './Track'
import { List } from 'grommet'

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
