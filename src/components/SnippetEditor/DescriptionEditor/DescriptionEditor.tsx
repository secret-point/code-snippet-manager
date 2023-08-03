import React, { memo } from 'react';
import { TextArea } from '@blueprintjs/core';
import styles from './DescriptionEditor.module.scss';

type DescriptionEditorProps = {
  snippetId?: number;
  description?: string;
  onChange: (value: string) => void;
};

const DescriptionEditor: React.FC<DescriptionEditorProps> = ({ onChange, description, snippetId }) => {
  return (
    <TextArea
      className={styles.description}
      large={true}
      style={{ width: '100%' }}
      placeholder="Add your description..."
      readOnly={!snippetId}
      value={description || ''}
      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => onChange(e.target.value)}
    />
  );
};

export default memo(DescriptionEditor);
