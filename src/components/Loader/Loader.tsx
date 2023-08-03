import { Spinner, SpinnerSize } from '@blueprintjs/core';

import styles from './Loader.module.scss';

const Loader: React.FC = () => (
  <div className={styles.container}>
    {/* @ts-expect-error Server Component */}
    <Spinner className={styles.spinner} size={SpinnerSize.LARGE} />
  </div>
);

export default Loader;
