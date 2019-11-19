import RxDB, { RxCollection, RxDatabase } from 'rxdb'
import songSchema, { SongType } from './Schema'

RxDB.plugin(require('pouchdb-adapter-idb'))

export type SongCollection = RxCollection<SongType, {}>

export type DatabaseCollections = {
  songs: SongCollection
}

export type DatabaseType = RxDatabase<DatabaseCollections>

const collections = [
  {
    name: 'songs',
    schema: songSchema
  }
]

const buildSpotifyUrl = (id: string) => {
  return JSON.stringify(`<iframe src='//open.spotify.com/embed/track/${id}' width="300" height="80" frameBorder="0" allow="encrypted-media">`)
}

class Database {
  private databasePromise: Promise<DatabaseType> | null

  constructor() {
    this.databasePromise = null
  }

  get() {
    const create = async () => {
      const db: DatabaseType = await RxDB.create<DatabaseCollections>({
        name: 'songsdb',
        adapter: 'idb'
      })

      await Promise.all(collections.map(collection => db.collection(collection)))

      db.collections.songs.preInsert((document: SongType) => {
        const regex = /https:\/\/open\.spotify\.com\/track\/([A-Za-z0-9]+){1}/
        const { url } = document

        if (regex.test(url)) {
          const id = regex.exec(url)

          if (id && id[1]) {
            const temp = id && id[1]
            document.url = buildSpotifyUrl(temp)
          } else {
            throw new Error('Invalid URL')
          }
        }

      }, true)

      return db
    }

    if (!this.databasePromise) {
      this.databasePromise = create()
    }

    return this.databasePromise
  }
}

export default Database

