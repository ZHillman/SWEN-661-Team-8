import React from 'react';
import { render } from '@testing-library/react-native';
import WelcomeScreen from '../../screens/WelcomeScreen';

test('renders welcome message', () => {
  const { getByText } = render(<WelcomeScreen />);
  expect(getByText('Welcome to CareConnect')).toBeTruthy();
});
