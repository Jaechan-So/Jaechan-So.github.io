import { useState, useEffect } from 'react';

import { secondToMillisecond } from '../../utils/time';
import * as styles from './styles.css';

export type Phase = 'hi-there' | 'show-profiles';

const usePhase = () => {
  const [phase, setPhase] = useState<Phase>('hi-there');

  useEffect(() => {
    setTimeout(() => {
      setPhase('show-profiles');
    }, secondToMillisecond(styles.elapsedTimeInHiTherePhase + 1));
  }, []);

  return phase;
};

export default usePhase;
