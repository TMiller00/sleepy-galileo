import React, { useState, useEffect, useRef, SyntheticEvent } from 'react'
import { RxDocument } from 'rxdb'
import Database from '../Database'
import Schema from '../Schema'

export type ContextType = {
  data: RxDocument[],
  onSubmit: (event: SyntheticEvent) => void,
  onClick: (value: string) => void
}

export const Context = React.createContext({})

const Form: React.FC = (props) => {
  const { children } = props
  const [data, setData] = useState()
  let database = useRef(new Database())

  useEffect(() => {
    const fetchData = async () => {
      const db = await database.current.get()
      await db.collection({ name: 'songs', schema: Schema })
      db.songs.find().$.subscribe((songs: any) => {
        if (!songs) { return }
        setData(songs)
      })
    }

    fetchData()
  }, [])

  const onSubmit = async ({ value, target }: any) => {
    const db = await database.current.get()
    db.songs.insert({ url: value.track })
    target.reset()
  }

  const onClick = async (value: any) => {
    const db = await database.current.get()
    const query = db.songs.find({ url: { $eq: value }})
    await query.remove()
  }

  return (
    <Context.Provider value={{ data, onSubmit, onClick }}>
      { children }
    </Context.Provider>
  )
}

export default Form
