import Snippet, { SnippetInterface } from 'models/Snippet';
import { AppThunk } from 'store/types';
import { snippetsDb } from 'db/snippets';
import { sortById } from 'utils/utils';

import {
  LOAD_SNIPPETS,
  ADD_SNIPPET,
  UPDATE_SNIPPET,
  DELETE_SNIPPET,
  SET_CURRENT_SNIPPET,
  SnippetsActionTypes,
} from './types';

const loadSnippetsAction = (list: Snippet[], current: Snippet, lastId: number): SnippetsActionTypes => ({
  type: LOAD_SNIPPETS,
  list,
  current,
  lastId,
});

const addSnippetAction = (snippet: Snippet, list: Snippet[]): SnippetsActionTypes => ({
  type: ADD_SNIPPET,
  snippet,
  list,
});

const updateSnippetAction = (snippet: Snippet, list: Snippet[]): SnippetsActionTypes => ({
  type: UPDATE_SNIPPET,
  snippet,
  list,
});

const deleteSnippetAction = (current: Snippet, list: Snippet[]): SnippetsActionTypes => ({
  type: DELETE_SNIPPET,
  current,
  list,
});

export const setCurrentSnippet = (id: number): SnippetsActionTypes => ({
  type: SET_CURRENT_SNIPPET,
  id,
});

export const initSnippets = (): AppThunk<Promise<string>> => {
  return (dispatch): Promise<string> => {
    return new Promise((resolve, reject) => {
      try {
        snippetsDb.findAll((data: SnippetInterface[]) => {
          const snippets = data.sort(sortById).map((entry: SnippetInterface) => new Snippet({ ...entry }));
          const lastId = Math.max(...snippets.map((entry: Snippet) => entry.id)) | 0;

          dispatch(loadSnippetsAction(snippets, snippets[0], lastId));
          resolve(lastId.toString());
        });
      } catch (error) {
        reject(error);
      }
    });
  };
};

export const addSnippet = (): AppThunk => {
  return (dispatch, getState): void => {
    const {
      snippets: { lastId, list },
    } = getState();

    const newSnippet = new Snippet({ title: 'New', id: lastId + 1 });
    const updatedList = [...list, newSnippet].sort(sortById);

    snippetsDb.add(newSnippet);
    dispatch(addSnippetAction(newSnippet, updatedList));
  };
};

export const updateSnippet = (properties: { [key: string]: unknown }): AppThunk => {
  return (dispatch, getState): void => {
    const {
      snippets: { current, list },
    } = getState();

    if (!current) {
      return;
    }

    const toUpdateIndex = list.findIndex((element) => element.id === current.id);
    const updatedSnippet = new Snippet({ ...current, ...properties, lastUpdated: new Date().toISOString() });
    const updatedList = [...list];
    updatedList[toUpdateIndex] = updatedSnippet;

    snippetsDb.update(updatedSnippet);
    dispatch(updateSnippetAction(updatedSnippet, updatedList));
  };
};

export const deleteSnippet = (): AppThunk => {
  return (dispatch, getState): void => {
    const {
      snippets: { current, list },
    } = getState();

    if (!current) {
      return;
    }

    const updatedList = list.filter((element) => element.id !== current.id);

    snippetsDb.remove(current.id);
    dispatch(deleteSnippetAction(updatedList[0], updatedList));
  };
};
