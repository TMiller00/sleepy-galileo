import React, { useContext } from 'react'
import { Context, ContextType } from '../Form'
import { Box, Button, Form, FormField } from 'grommet'
import { Add } from 'grommet-icons'

const InsertTrack: React.FC = () => {
  const context = useContext(Context) as ContextType
  const { onSubmit } = context

  return (
    <Form onSubmit={onSubmit}>
      <Box direction='row' margin={{ bottom: 'small' }} align='center'>
        <FormField name='track' label='Track' placeholder='Enter a Spotify URL'/>
        <Button
          type='submit'
          icon={<Add/>}
        />
      </Box>
    </Form>
  )
}

export default InsertTrack
