import { IpcRenderer } from 'electron';
import { Action } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { EditorState } from './editor/types';
import { SnippetsState } from './snippets/types';
import { UIState } from './ui/types';

export interface RootState {
  ui: UIState;
  editor: EditorState;
  snippets: SnippetsState;
}

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, IpcRenderer, Action<string>>;

export type AppDispatch = ThunkDispatch<RootState, IpcRenderer, Action<string>>;
