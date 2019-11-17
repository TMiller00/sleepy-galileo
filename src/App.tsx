import React, { useContext } from 'react'
import Form, { Context, ContextType } from './Form'
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

//<iframe src="https://open.spotify.com/embed/track/6K8zRwaiHUv93In5P0TPwT" width="300" height="80" frameBorder="0" allowTransparency={true} allow="encrypted-media"/>

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
