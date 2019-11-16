import React, { useContext } from 'react';
import Form, { Context, ContextType } from './Form'
import './App.css';

const TrackList: React.FC = () => {
  const context = useContext(Context) as ContextType
  const { data } = context

  return (
    <>
      { data && data.map((c: any, i: number) => <p key={i}>{ c.url }</p>) }
    </>
  )
}

const App: React.FC = () => {
  return (
    <Form>
      <TrackList/>
    </Form>
  )
}

export default App;
