import * as React from 'react'
import { createLayout } from '@zecos/input'
import styles from './SimpleLayout.css'


export const SimpleLayout = createLayout(({props, items, helpers}) => {
  return (
    <div {...props}>
      <h3 className={styles.heading}>{helpers.title}</h3>
      {items.map((Input, i) => (
        <span key={i}><Input.Cmpt key={i} /></span>
      ))}
    </div>
  )
})


