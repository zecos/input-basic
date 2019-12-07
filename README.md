### @zecos/inputs-basic

`@zecos/inputs-basic` is a library for quickly creating form fields for rapid prototyping.

`@zecos/inputs-basic` is based on the [`@zecos/inputs`](https://npmjs.com/@zecos/inputs) library, which allows you to create your own UI input components with minimal boilerplate.


#### Installation

`yarn add @zecos/inputs-basic`

`npm i -S @zecos/inputs-basic`

#### Example

![example](https://s5.gifyu.com/images/ezgif.com-crop762341ac25e7e4f4.gif)

```tsx
import React from "react"
import { nameValidator } from "@zecos/validators"
import { useText, useTextArea, useSelect } from "@zecos/inputs-basic"

export const InputForm = () => {
  const [FirstName, firstNameState] = useText({
    validate: nameValidator,
    name: "firstName"
  })

  const [DescribeYourself, describeYourselfState] = useTextArea({
    name: "describeYourself"
  })
  
  const [FavoriteColor, favoriteColorState] = useSelect({
    init: "blue",
    name: "favoriteColor",
  })

  return (
    <form className="form">
      {/* These are your inputs */}
      <FirstName />
      <DescribeYourself />
      <FavoriteColor options={{Blue: "blue", Red: "red"}}/>

      {/* display the data */}
      First Name State: {firstNameState.value}<br />
      Describe Yourself: {describeYourselfState.value}<br />
      Favorite Color: {favoriteColorState.value}
    </form>
  )
}
```

#### How it works

You pick an input type:

* `useText`
* `useTextArea`
* `useSelect`

Then pass it its options:

*`name: string`: will determine the classname, label, etc. THIS MUST BE CAMEL CASE.
*`validate?: fn => Error`: an optional function to return an array of errors to display. Do not throw the errors. This works seamlessly with the [@zecos/validators](https://npmjs.com/@zecos/validators) library.
* `init?: string | number`: an optional initial value for the field. The default is "".

All together, for a `text` input, it looks like this:

```tsx
const [FirstName, firstNameState, firstNameActions] = text({
  validate: nameValidator,
  name: "firstName"
})
```

This returns an array of 3 values:

* `0`: the input component (<input />)
* `1`: the field state, which includes:
  * `value`: value of the field
  * `touched`: whether or not the user has focused and blurred the input
  * `errors`: the errors returned by your `validate` function
  * `pristine`: whether or not the field data has been manipulated
* `2`: the field actions, which include:
  * `getState`: returns the same thing as `1`
  * `setValue`: set the value of the field (also runs validation and sets pristine to false)
  * `reset`: sets the field back to its original state (pristine, untouched, with the original init values)
  * `setTouched`: set the `touched` value to `true`
  
So, you see, you can manipulate the field data yourself, but it also manages the field data for you.

The component can then be used as your input with no additional setup:

```tsx
<FirstName />
```

This is very powerful and enables you to eliminate a lot of the boilerplate of writing forms while maintaining flexibility.

You can rapidly prototype your forms, and, when you outgrow and need more customization, it's very easy to write your own library with [`@zecos/inputs`](https://npmjs.com/@zecos/inputs).