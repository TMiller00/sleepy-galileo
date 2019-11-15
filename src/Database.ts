import RxDB, { RxCollection, RxDatabase } from 'rxdb'
import songSchema, { SongType } from './Schema'

RxDB.plugin(require('pouchdb-adapter-idb'))
//RxDB.plugin(require('pouchdb-adapter-http'))

type SongCollection = RxCollection<SongType>

type DatabaseCollections = {
  songs: SongCollection
}

type Database = RxDatabase<DatabaseCollections>

const collections = {
  name: 'songs',
  schema: songSchema,
  methods: {},
  sync: true
}

const create = async () => {
  const db: Database = await RxDB.create<DatabaseCollections>({
    name: 'songsdb',
    adapter: 'idb'
  })

  db.collection(collections)

  console.dir(db)
  return db
}

const Database = () => create()

export default Database

