import * as React from 'react';
import { Radio } from '@atlaskit/radio'

const App = () => {
  return (<div>
    hello
    <Radio
      value='radiovalue'
      isChecked
      label="Test Radio"
      name="radio-check"
    />
  </div>)
}