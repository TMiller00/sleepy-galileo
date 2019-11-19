import { RxJsonSchema } from 'rxdb'

export type SongType = {
  url: string,
  createdAt: number
}

const songSchema: RxJsonSchema<SongType> = {
  'title': 'song schema',
  'description': 'describes a song',
  'version': 0,
  'type': 'object',
  'properties': {
    'url': {
      'type': 'string',
      'primary': true
    },
    'createdAt': {
      'type': 'number',
      'index': true
    }
  },
  'required': ['url']
}

export default songSchema
