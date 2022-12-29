import { HiThereOpening } from './HiThereOpening';
import * as styles from './styles.css';
import { UnderConstruction } from './UnderConstruction';
import usePhase from './usePhase';

const Home = () => {
  const phase = usePhase();

  return (
    <div
      className={styles.rootContainerStyle}
      style={{
        // height: phase === 'hi-there' ? '100vh' : '100%',
        height: phase === 'hi-there' ? '100vh' : '100vh',
      }}
    >
      <HiThereOpening />
      {phase === 'show-profiles' ? (
        <div className={styles.profileContainerStyle}>
          <UnderConstruction />
        </div>
      ) : null}
    </div>
  );
};

export default Home;
