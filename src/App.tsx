import React from 'react';
import Database from './Database'
import Schema from './Schema'
import './App.css';

const App: React.FC = () => {
  const test = async () => {
    const db = await Database()
    const collections = await db.collection({ name: 'songs', schema: Schema })

    collections.insert({ url: 'google.com' })
    collections.find().exec().then(documents => console.dir(documents));
  }

  test()

  return (
    <div className="App">
    </div>
  )
}

export default App;
