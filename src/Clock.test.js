import React from 'react';
import { render } from '@testing-library/react';
import Clock from './Clock';

test('render clock component', () => {
  const {getByTestId} = render(<Clock></Clock>)
  const clockElement = getByTestId("clock-tid");
  expect(clockElement).toBeInTheDocument();
});

test('render date component in clock', () => {
    const {getByTestId} = render(<Clock></Clock>)
    const elem = getByTestId("clock-date-tid");
    expect(elem).toBeInTheDocument();
});

test('render time component in clock', () => {
    const {getByTestId} = render(<Clock></Clock>)
    const elem = getByTestId("clock-time-tid");
    expect(elem).toBeInTheDocument();
});
