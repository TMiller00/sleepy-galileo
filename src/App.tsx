import React, { useContext } from 'react'
import Form, { Context, ContextType } from './Form'
import { Box, Grommet, Heading } from 'grommet'
import theme from './theme'

const ListTracks: React.FC = () => {
  const context = (useContext(Context) as ContextType)
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

const Header = (props: any) => (
   <Box
     tag='header'
     direction='row'
     align='center'
     justify='between'
     background='blue'
     pad={{ left: 'medium', right: 'small', vertical: 'small' }}
     style={{ zIndex: '1' }}
     {...props}
   />
)
const App: React.FC = () => {
  return (
    <Grommet theme={theme} full>
      <Form>
        <Header>
          <Heading level={3} color='white' margin='none'>
            Sleepy Galileo
          </Heading>
        </Header>
        <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
          <Box flex align='center' justify='center'>
            <InsertTrack/>
            <ListTracks/>
          </Box>
        </Box>
      </Form>
    </Grommet>
  )
}

export default App
