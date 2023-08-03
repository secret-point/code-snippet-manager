import Datastore from 'nedb';

import { dbFactory, dbAdd, dbUpdate, dbRemove, dbFind } from './db';

import { DB_APP } from './constants';

let db: Datastore;

const loadDatabase = (path: string): void => {
  if (!db) {
    db = dbFactory(DB_APP, path);
  }
};

const add = (objArray: unknown | unknown[]): void => {
  dbAdd(db, objArray);
};

const update = (obj: { id: number }): void => {
  dbUpdate(db, obj);
};

const remove = (id: number): void => {
  dbRemove(db, id);
};

const find = (id: number): void => {
  dbFind(db, id);
};

export const appDb = {
  loadDatabase,
  add,
  update,
  remove,
  find,
};
