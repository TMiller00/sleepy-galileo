import React, { useContext } from 'react'
import { Context, ContextType } from '../Form'
import { Box, Form, FormField, Button, TextInput } from 'grommet'
import { Add } from 'grommet-icons'

const InsertTrack: React.FC = () => {
  const context = useContext(Context) as ContextType
  const { onSubmit } = context

  return (
    <Form onSubmit={onSubmit}>
      <Box direction='row' margin={{ bottom: 'small' }} align='center'>
        <FormField name='track' label='Url' placeholder='Enter a url'/>
        <Button
          type='submit'
          icon={<Add/>}
        />
      </Box>
    </Form>
  )
}

export default InsertTrack


