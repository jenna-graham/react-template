import { render, screen } from '@testing-library/react';
import { InputControl,
  TextAreaControl, 
  SelectControl,
  CheckboxControl, } from './FormControls.jsx';

test('Input Control', async () => {
  render(
    <InputControl
      label="Name"
      name="name"
      required
      placeholder="your name"
    />
  );

  const inputControl = screen.getByLabelText('Name');
  expect(inputControl.name).toBe('name');
  expect(inputControl.placeholder).toBe('your name');
  expect(inputControl.required).toBe(true);
});

test('TextArea Control', async () => {
  render(
    <TextAreaControl
      label="Tell us more"
      name="bio"
      required
      placeholder="tell us about yourself"
    />
  );
  const textAreaControl = screen.getByLabelText('Tell us more');
  expect(textAreaControl.name).toBe('bio');
  expect(textAreaControl.required).toBe(true);
  expect(textAreaControl.placeholder).toBe('tell us about yourself');
});

test('Select Control', async () => {
  render(
    <SelectControl label="Number" name="number" required>
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </SelectControl>
  );
  
  const selectControl = screen.getByLabelText('Number');
  expect(selectControl.name).toBe('number');
  expect(selectControl.required).toBe(true);
  expect(selectControl.options.length).toBe(3);

});

test('Checkbox Control', async () => {
  render(
    <CheckboxControl
      legend="Do you like?"
      label="Yes"
      name="accept"
      required
    />
  );
  
  const legend = screen.getByText('Do you like?');
  expect(legend).not.toBeNull();
  const checkboxControl = screen.getByLabelText('Yes');
  expect(checkboxControl.required).toBe(true);
});