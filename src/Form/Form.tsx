import React, { useState, useEffect } from 'react'
import Database from '../Database'
import Schema from '../Schema'

export type ContextType = {
  data: any
}

export const Context = React.createContext({})

const Form: React.FC = (props) => {
  const [data, setData] = useState()
  const { children } = props

  useEffect(() => {
    const getDatabase = async () => {
      const db = await Database()
      const collections = await db.collection({ name: 'songs', schema: Schema })
      return collections.find().exec().then((documents: any[]) => setData(documents))
    }

    getDatabase()
  }, [])

  return (
    <Context.Provider value={{ data }}>
      { children }
    </Context.Provider>
  )
}

export default Form
