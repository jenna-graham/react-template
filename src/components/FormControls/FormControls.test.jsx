import { render, screen } from '@testing-library/react';
import { InputControl, TextAreaControl } from './FormControls.jsx';

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
})