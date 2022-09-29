import styles from './Home.css';
import { InputControl,
  TextAreaControl,
  SelectControl,
  CheckboxControl,
  FormButton } from '../FormControls/FormControls.jsx';

export default function Home() {
  return <div className={styles.Home}>
    <form>
      <InputControl 
        label="Name"
        name="name"
        placeholder="your name"
      />
      <InputControl
        label="Date"
        required
        type="date"
        name="date"
        placeholder="pick a date"
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

      <CheckboxControl legend="Do you like?" label="Yes" />

      <FormButton text="Submit" />
    </form>

  </div>;
}
