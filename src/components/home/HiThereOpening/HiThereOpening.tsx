import { HiThereMotion } from './HiThereMotion';
import * as styles from './styles.css';

const HiThereOpening = () => (
  <div className={styles.hiThereAnimationContainerStyle}>
    <div className={styles.contentsContainerStyle}>
      <HiThereMotion />
      <div className={styles.emojiContainerStyle}>👋</div>
    </div>
  </div>
);

export default HiThereOpening;
