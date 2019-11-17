import React, { useState, useEffect, useRef } from 'react'
import { RxDocument } from 'rxdb'
import Database from '../Database'
import Schema from '../Schema'

export type ContextType = {
  data: RxDocument[],
  onSubmit: () => void,
  onClick: (url: string) => void
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

  const onSubmit = async () => {
    let number = Math.floor(Math.random() * 10000)
    const db = await database.current.get()
    db.songs.insert({ url: `lucky-number-${number}` })
  }

  const onClick = async (url: string) => {
    const db = await database.current.get()
    const query = db.songs.find({ url: { $eq: url }})
    await query.remove()
  }

  return (
    <Context.Provider value={{ data, onSubmit, onClick }}>
      { children }
    </Context.Provider>
  )
}

export default Form
