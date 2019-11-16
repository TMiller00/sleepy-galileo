import RxDB, { RxCollection, RxDatabase } from 'rxdb'
import songSchema, { SongType } from './Schema'

RxDB.plugin(require('pouchdb-adapter-idb'))

type SongCollection = RxCollection<SongType, {}>

type DatabaseCollections = {
  songs: SongCollection
}

type DatabaseType = RxDatabase<DatabaseCollections>


class Database {
  databasePromise: any

  constructor() {
    this.databasePromise = null
  }

  get() {
    const create = async () => {
      const db: DatabaseType = await RxDB.create<DatabaseCollections>({
        name: 'songsdb',
        adapter: 'idb'
      })

      db.waitForLeadership().then(() => {
        document.title = '♛'
      })

      db.collection({
        name: 'songs',
        schema: songSchema,
        methods: {}
      })

      return db
    }

    if (!this.databasePromise) {
      this.databasePromise = create()
    }

    return this.databasePromise
  }
}

export default Database

