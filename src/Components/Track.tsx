import React, { useContext, useEffect, useState } from 'react'
import { Context, ContextType } from '../Form'
import { Box, Button } from 'grommet'
import { Close } from 'grommet-icons'
import parse from 'html-react-parser'

type Props = {
  key: number
  item: any
}

      //<iframe
        //src={`https://open.spotify.com/embed/track/${item.url}`}
        //width="300"
        //height="80"
        //frameBorder="0"
        //allow="encrypted-media"/>
const Track: React.FC<Props> = (props) => {
  const [track, setTrack] = useState('')
  const context = (useContext(Context) as ContextType)
  const { onClick } = context
  const { item } = props

  useEffect(() => {
    setTrack(JSON.parse(item.url))
  }, [track])

  return (
    <Box direction='row' align='center'>
      <Button
        margin={{ right: 'small' }}
        icon={<Close/>}
        onClick={() => onClick(item.url)}
      />
        { parse(track) }
    </Box>
  )
}

export default Track
