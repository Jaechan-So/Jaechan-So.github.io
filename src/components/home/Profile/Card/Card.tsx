import React from 'react';

import * as styles from './styles.css';

type Props = {
  children: React.ReactNode;
};

const Card = ({ children }: Props) => (
  <article className={styles.cardContainerStyle}>{children}</article>
);

export default Card;
