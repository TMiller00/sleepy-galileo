import RxDB, { RxCollection, RxDatabase } from 'rxdb'
import songSchema, { SongType } from './Schema'

RxDB.plugin(require('pouchdb-adapter-idb'))

type SongCollection = RxCollection<SongType>

type DatabaseCollections = {
  songs: SongCollection
}

type DatabaseType = RxDatabase<DatabaseCollections>

const collections = {
  name: 'songs',
  schema: songSchema,
  methods: {},
  sync: true
}

const create = async () => {
  const db: DatabaseType = await RxDB.create<DatabaseCollections>({
    name: 'songsdb',
    adapter: 'idb'
  })

  db.collection(collections)

  return db
}

let databasePromise: any = null

const Database = () => {
  if (!databasePromise) {
    databasePromise = create()
  }

  return databasePromise
}

export default Database

