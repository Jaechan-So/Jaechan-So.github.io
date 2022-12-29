import { HiThereOpening } from './HiThereOpening';
import * as styles from './styles.css';
import usePhase from './usePhase';

const Home = () => {
  const phase = usePhase();

  return (
    <div
      className={styles.rootContainerStyle}
      style={{
        height: phase === 'hi-there' ? '100vh' : '100%',
      }}
    >
      <HiThereOpening />
      {phase === 'show-profiles' ? (
        <div className={styles.profileContainerStyle} />
      ) : null}
    </div>
  );
};

export default Home;
