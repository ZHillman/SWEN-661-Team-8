import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import PrimaryButton from '../../components/PrimaryButton';

test('button presses correctly', () => {
  const mockPress = jest.fn();
  const { getByText } = render(
    <PrimaryButton title="Continue" onPress={mockPress} />
  );

  fireEvent.press(getByText('Continue'));
  expect(mockPress).toHaveBeenCalled();
});
