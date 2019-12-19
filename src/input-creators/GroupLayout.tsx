import * as React from 'react'
import { createLayout } from '@zecos/input'

const renderError = (error, i) => (
  <div key={i}>
    {error.toString()}
  </div>
)

export const GroupLayout = createLayout(({props, items, errors, helpers}) => {
  const Items = items
    .map(input => {
      const {Cmpt, helpers} = input
      return <Cmpt key={helpers.name} />
    })
  
  return (
    <div>
      {errors.map(renderError)}
      <label>{helpers.label}</label>
      {Items}
    </div>
  )
})

