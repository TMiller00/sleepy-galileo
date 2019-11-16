import RxDB, { RxCollection, RxDatabase } from 'rxdb'
import songSchema, { SongType } from './Schema'

RxDB.plugin(require('pouchdb-adapter-idb'))

export type SongCollection = RxCollection<SongType, {}>

export type DatabaseCollections = {
  songs: SongCollection
}

export type DatabaseType = RxDatabase<DatabaseCollections>

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

