import { HiThereOpening } from './HiThereOpening';
import { Profile } from './Profile';
import * as styles from './styles.css';
import usePhase from './usePhase';

const Home = () => {
  const phase = usePhase();

  return (
    <div className={styles.rootContainerStyle}>
      <div className={styles.hiThereAnimationContainerStyle}>
        <div className={styles.contentsContainerStyle}>
          <HiThereOpening />
          <div className={styles.emojiContainerStyle}>👋</div>
        </div>
      </div>
      {phase === 'show-profiles' ? (
        <div className={styles.profileContainerStyle}>
          <Profile />
        </div>
      ) : null}
    </div>
  );
};

export default Home;
