import React, { useContext } from 'react'
import { Context, ContextType } from '../Form'
import { Box, Button } from 'grommet'
import { Close } from 'grommet-icons'

type Props = {
  key: number
  item: any
}

//<iframe src="https://open.spotify.com/embed/track/6K8zRwaiHUv93In5P0TPwT" width="300" height="80" frameBorder="0" allowTransparency={true} allow="encrypted-media"/>

const Track: React.FC<Props> = (props) => {
  const context = (useContext(Context) as ContextType)
  const { onClick } = context
  const { item } = props

  return (
    <Box direction='row' align='center'>
      <Button
        margin={{ right: 'small' }}
        icon={<Close/>}
        onClick={() => onClick(item.url)}
      />
        { item.url }
    </Box>
  )
}

export default Track
