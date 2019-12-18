import * as React from 'react'
import { createInput } from '@zecos/input'
import styles from './Checkbox.css'

export const Checkbox = createInput(({helpers, state, actions, props}) => {
  const {
    id,
    name,
    label,
  } = helpers

  const { value } = state
  const boolVal = Boolean(value)
  const {className, ...moreProps} = props
  return (
    <label className={styles.checkboxContainer} htmlFor={name} id={id}>
      {label}
      <input
        type="checkbox"
        className={`${styles.checkmark} ${className}`}
        name={name}
        checked={boolVal}
        onChange={() => actions.setValue(!boolVal)}
        {...moreProps}
      />
    </label>
  )
})