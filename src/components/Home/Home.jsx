import styles from './Home.css';
import { InputControl, TextAreaControl, SelectControl } from '../FormControls/FormControls';

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

      <SelectControl 
        label="Number"
        required
        name="number"
        placeholder="select a number">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </SelectControl>
    </form>

  </div>;
}
