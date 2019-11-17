import React, { useContext } from 'react'
import { Context, ContextType } from '../Form'
import { Form, FormField, Button, TextInput } from 'grommet'

const InsertTrack: React.FC = () => {
  const context = useContext(Context) as ContextType
  const { onSubmit } = context

  return (
    <Form onSubmit={onSubmit}>
      <FormField name='url' label='Url'>
        <TextInput placeholder='type here' />
      </FormField>
      <Button type='submit' primary label='Add'/>
    </Form>
  )
}

export default InsertTrack


