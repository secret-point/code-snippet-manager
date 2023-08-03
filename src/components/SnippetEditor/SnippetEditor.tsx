import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showGutter } from 'store/editor/actions';
import { updateSnippet } from 'store/snippets/actions';
import { RootState } from 'store/types';
import DescriptionEditor from './DescriptionEditor/DescriptionEditor';
import Editor from './Editor/Editor';
import EditorHeader from './EditorHeader/EditorHeader';
import styles from './SnippetEditor.module.scss';
import StatusBar from './StatusBar/StatusBar';

const SnippetEditor: React.FC = () => {
  const dispatch = useDispatch();
  const { current: snippet } = useSelector((state: RootState) => state.snippets);
  const { gutter } = useSelector((state: RootState) => state.editor);
  const tags = snippet ? snippet.tags : '';

  const handleTitleChange = useCallback(
    (value: string): void => {
      dispatch(updateSnippet({ title: value }));
    },
    [dispatch],
  );

  const handleOnTagChange = useCallback(
    (tag: string, remove: boolean): void => {
      const tagElements = tags.split(',');

      let updated = tagElements;
      if (remove) {
        tagElements.splice(
          tagElements.findIndex((element) => element === tag),
          1,
        );
        updated = tagElements;
      } else {
        updated.push(tag);
      }

      dispatch(updateSnippet({ tags: updated.join(',') }));
    },
    [dispatch, tags],
  );

  const handleOnLanguageChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>): void => {
      dispatch(updateSnippet({ language: event.currentTarget.value }));
    },
    [dispatch],
  );

  const handleShowGutter = useCallback((): void => {
    dispatch(showGutter());
  }, [dispatch]);

  const handleOnChange = useCallback(
    (value: string): void => {
      dispatch(updateSnippet({ content: value }));
    },
    [dispatch],
  );

  const handleOnDescriptionChange = useCallback(
    (value: string): void => {
      dispatch(updateSnippet({ description: value }));
    },
    [dispatch],
  );

  return (
    <div className={styles.container}>
      <EditorHeader snippetId={snippet?.id} snippetTitle={snippet?.title} onTitleChange={handleTitleChange} />

      <Editor
        snippetId={snippet?.id}
        snippetContent={snippet?.content}
        snippetLanguage={snippet?.language}
        gutter={gutter}
        onChange={handleOnChange}
      />
      <DescriptionEditor
        snippetId={snippet?.id}
        description={snippet?.description}
        onChange={handleOnDescriptionChange}
      />
      <StatusBar
        snippetLanguage={snippet?.language}
        snippetTags={snippet?.tags}
        snippetSource={snippet?.source}
        onShowGutter={handleShowGutter}
        onTagChange={handleOnTagChange}
        onLanguageChange={handleOnLanguageChange}
      />
    </div>
  );
};

export default SnippetEditor;
