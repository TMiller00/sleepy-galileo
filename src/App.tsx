import React from 'react'
import Form from './Form'
import { InsertTrack, ListTracks } from './Components'
import { Box, Grommet, Heading } from 'grommet'
import theme from './theme'

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

const App: React.FC = () => (
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

export default App
