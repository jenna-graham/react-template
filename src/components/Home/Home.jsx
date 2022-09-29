import styles from './Home.css';
import { InputControl } from '../FormControls/FormControls';

export default function Home() {
  return <div className={styles.Home}>
    <form>
      <InputControl 
        label="Name"
        name="name"
        placeholder="your name"
      />
    </form>

  </div>;
}
