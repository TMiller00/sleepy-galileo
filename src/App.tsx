import React, { useContext } from 'react';
import Form, { Context, ContextType } from './Form'
import './App.css';

const ListTracks: React.FC = () => {
  const context = useContext(Context) as ContextType
  const { data } = context

  return (
    <ul>
      { data && data.map((c: any) => (<li key={c.url}>{ c.url }</li>)) }
    </ul>
  )
}

const InsertTrack: React.FC = () => {
  const context = useContext(Context) as ContextType
  const { onSubmit } = context

  return (
    <form onSubmit={onSubmit}>
      <input type='text' placeholder='Enter a track url' />
      <button type='submit'>Add a track</button>
    </form>
  )
}

const App: React.FC = () => {
  return (
    <Form>
      <InsertTrack/>
      <ListTracks/>
    </Form>
  )
}

export default App;
