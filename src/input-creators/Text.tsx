import * as React from "react";
import styles from "./Text.css";
import groupStyles from "./group.css";
import { createInput } from "@zecos/input";


const renderError = error => <div key={error.toString()} className={styles.error}>{error.toString()}</div>
const renderErrors = errors => {
  if (!errors.length) {
    return ""
  }
  return (
    <div className={styles.errors}>
      {errors.map(renderError)}
    </div>
  )
}

export const Text = createInput(({helpers, state}) => {
    const {
      id,
      name,
      label,
      handleChange,
      handleBlur,
    } = helpers
    
    const {touched, errors, value} = state
    return (
      <div className={groupStyles.groupContainer}>
        <div className={groupStyles.formGroup}>
          <label className={styles.textLabel} htmlFor={name}>
            {label}
          {touched && renderErrors(errors)}
          </label>
          <input
            className={styles.textInput}
            name={name}
            aria-label={label}
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            id={id}
          />
        </div>
      </div>
    )
})