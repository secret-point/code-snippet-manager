import { Button, ButtonGroup, InputGroup } from '@blueprintjs/core';
import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { addSnippet } from 'store/snippets/actions';
import { AppDispatch } from 'store/types';
import styles from './SnippetListHeader.module.scss';

type SnippetListHeaderProps = {
  query: string;
  onSearchChange: (value: string) => void;
};

const SnippetListHeader: React.FC<SnippetListHeaderProps> = ({ query, onSearchChange }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleAddSnippet = (): void => {
    dispatch(addSnippet());
  };

  const handleSearchOnChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>): void => {
    onSearchChange(value);
  };

  const handleClearSearch = (): void => {
    onSearchChange('');
  };

  const renderClearSearchButton = (): React.ReactElement | undefined => {
    if (query) {
      return <Button icon="cross" minimal={true} onClick={handleClearSearch} />;
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <ButtonGroup minimal={true}>
          <Button icon="add-to-artifact" onClick={handleAddSnippet} />
        </ButtonGroup>
      </div>

      <div className={styles.searchContainer}>
        <InputGroup
          leftIcon="search"
          placeholder="Search..."
          rightElement={renderClearSearchButton()}
          fill={true}
          value={query}
          onChange={handleSearchOnChange}
        />
      </div>
    </div>
  );
};

export default memo(SnippetListHeader);
