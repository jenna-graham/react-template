import styles from './Home.css';
import { InputControl, TextAreaControl } from '../FormControls/FormControls';

export default function Home() {
  return <div className={styles.Home}>
    <form>
      <InputControl 
        label="Name"
        name="name"
        placeholder="your name"
      />

      <TextAreaControl
        label="Tell us more"
        name="bio"
        placeholder="tell us about yourself"
      />
    </form>

  </div>;
}
