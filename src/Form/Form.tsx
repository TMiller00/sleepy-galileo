import React, { useState, useEffect, useRef, SyntheticEvent } from 'react'
import { RxDocument } from 'rxdb'
import Database from '../Database'

export type ContextType = {
  data: RxDocument[],
  onSubmit: (event: SyntheticEvent) => void,
  onClick: (value: string) => void
}

export const Context = React.createContext({})

type Value = {
  track: string
}
type Submit = {
  value: Value
  target: HTMLFormElement
}

const Form: React.FC = (props) => {
  const { children } = props
  const [data, setData] = useState()
  let database = useRef(new Database())

  useEffect(() => {
    const fetchData = async () => {
      const db = await database.current.get()
      db.songs.find().sort({ createdAt: 1 }).$.subscribe((songs: any[]) => {
        console.log(songs)
        if (!songs) { return }
        setData(songs)
      })
    }

    fetchData()
  }, [])

  const onSubmit = async (props: Submit) => {
    const db = await database.current.get()
    db.songs.insert({ url: props.value.track, createdAt: Date.now() })
    props.target.reset()
  }

  const onClick = async (value: string) => {
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
