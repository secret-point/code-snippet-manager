import Datastore from 'nedb';

import { dbFactory, dbAdd, dbUpdate, dbRemove, dbRemoveQuery, dbFindAll, dbUpdateAll } from './db';
import { DB_SNIPPETS } from './constants';
import { SnippetInterface } from 'models/Snippet';

let db: Datastore;

const loadDatabase = (path: string): void => {
  if (!db) {
    db = dbFactory(DB_SNIPPETS, path);
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

const findAll = (callback: (items: SnippetInterface[]) => void): void => {
  dbFindAll(db, callback);
};

const updateAll = (changes: unknown): void => {
  dbUpdateAll(db, changes);
};

const removeQuery = (query: unknown): void => {
  dbRemoveQuery(db, query);
};

export const snippetsDb = {
  loadDatabase,
  add,
  update,
  remove,
  removeQuery,
  findAll,
  updateAll,
};
