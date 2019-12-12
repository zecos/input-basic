import * as React from "react"
import styles from "./select.css"
import groupStyles from "./group.css"
import { ReactFieldzSingleActions } from "@zecos/react-fieldz"
import { IFieldzSingleState } from '@zecos/fields'
import { createInput } from "@zecos/inputs";


const renderOption = ([label, value]) => {
  return (
    <option key={value} value={value}>
      {label}
    </option>
  )
}

export const Select = createInput(({helpers, props}) => {
  const {
    id,
    name,
    value,
    onChange,
    onBlur,
    label,
  } = helpers

  return (
    <div className={groupStyles.groupContainer}>
      <div className={groupStyles.formGroup}>
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>
        <select
          className={styles.selectGroup}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          id={id}
          value={value}
          aria-label={label}
        >
          {Object.entries(props.options).map(renderOption)}
        </select>
      </div>
    </div>
  )
})

export interface IOptions {
  actions: ReactFieldzSingleActions
  state: IFieldzSingleState
  name: string
}
