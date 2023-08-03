import Datastore from 'nedb';

const dbFactory = (name: string, path: string): Datastore => {
  const filename = `${process.env.NODE_ENV === 'development' ? '.' : path}/data/${name}.db`;
  const db = new Datastore({
    filename,
    autoload: true,
  });

  db.ensureIndex({ fieldName: 'id', unique: true });

  return db;
};

const dbAdd = (db: Datastore, objArray: unknown | unknown[]): void => {
  db.insert(objArray, (err) => {
    if (err) throw new Error(err.message);
  });
};

const dbUpdate = (db: Datastore, obj: { id: number }): void => {
  db.update({ id: obj.id }, { ...obj }, {}, (err) => {
    if (err) throw new Error(err.message);
  });
};

const dbUpdateAll = (db: Datastore, changes: unknown): void => {
  db.update({}, { $set: changes }, { multi: true }, (err) => {
    if (err) throw new Error(err.message);
  });
};

const dbRemove = (db: Datastore, id: number): void => {
  db.remove({ id }, (err) => {
    if (err) throw new Error(err.message);
  });
};

const dbRemoveQuery = (db: Datastore, query: unknown): void => {
  db.remove(query, { multi: true }, (err) => {
    if (err) throw new Error(err.message);
  });
};

const dbFind = (db: Datastore, id: number): void => {
  db.find({ id: id }, {}, (err) => {
    if (err) throw new Error(err.message);
  });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const dbFindAll = (db: Datastore, callback: (items: any) => void): void => {
  db.find({}, {}, (err, items) => {
    if (err) throw new Error(err.message);
    callback(items);
  });
};

export { dbFactory, dbAdd, dbUpdate, dbRemove, dbRemoveQuery, dbFind, dbFindAll, dbUpdateAll };
