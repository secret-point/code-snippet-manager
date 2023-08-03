import classNames from 'classnames';
import { getColorTags } from 'models/Snippet';
import { memo } from 'react';
import { formatDate } from 'utils/utils';
import styles from './SnippetListElement.module.scss';

const cx = classNames.bind(styles);

type SnippetListElementProps = {
  snippetId: number;
  snippetTags: string;
  snippetTitle: string;
  currentlySelectedId: number | null;
  lastUpdated: string;
  onChangeSnippet: (id: number) => void;
  onContextMenu: (id: number) => void;
};

const SnippetListElement: React.FC<SnippetListElementProps> = ({
  snippetId,
  snippetTags,
  snippetTitle,
  lastUpdated,
  currentlySelectedId,
  onChangeSnippet,
  onContextMenu,
}) => {
  const handleClick = (): void => {
    if (currentlySelectedId !== snippetId) {
      onChangeSnippet(snippetId);
    }
  };

  const handleContextMenu = (): void => {
    handleClick();
    onContextMenu(snippetId);
  };

  const renderTags = (): React.ReactElement[] | null => {
    if (!snippetTags) {
      return null;
    }

    const MAX_TAG_COUNT = 3;
    const tags = getColorTags(snippetTags);
    const recent = tags.slice(Math.max(tags.length - MAX_TAG_COUNT, 0));

    return recent.map((tag, index) => {
      return <div key={index} style={{ background: `${tag}`, top: `${6 + 8 * index}px` }} className={styles.tag} />;
    });
  };

  const listElementClass = cx({
    [styles.root]: true,
    active: currentlySelectedId === snippetId,
    'bp3-text-muted': currentlySelectedId !== snippetId,
  });

  return (
    <div key={snippetId} className={listElementClass} onClick={handleClick} onContextMenu={handleContextMenu}>
      <div className={styles.content}>
        <div className={styles.title}>
          <span className="bp3-text-overflow-ellipsis">{snippetTitle}</span>
          <span className="bp3-text-overflow-ellipsis">{formatDate(lastUpdated)}</span>
        </div>
        {renderTags()}
      </div>
    </div>
  );
};

export default memo(SnippetListElement);
