### @zecos/inputz-basic

`@zecos/inputz-basic` is a library for quickly creating form fields for rapid prototyping.

`@zecos/inputz-basic` is based on the [`@zecos/inputz`](https://npmjs.com/@zecos/inputz) library, which allows you to create your own UI input components with minimal boilerplate.


#### Installation

`yarn add @zecos/inputz-basic`

`npm i -S @zecos/inputz-basic`

#### Example

```tsx
import React from "react"
import { nameValidator } from "@zecos/validatorz"
import { text, textArea, select } from "@zecos/inputz-basic"

export const InputForm = () => {
  const [FirstName, firstNameState] = text({
    validate: nameValidator,
    name: "firstName"
  })

  const [DescribeYourself, describeYourselfState] = textArea({
    name: "describeYourself"
  })
  
  const [FavoriteColor, favoriteColorState] = select({
    init: "blue",
    name: "favoriteColor",
  })

  return (
    <form className="form">
      {/* These are your inputs */}
      <FirstName />
      <DescribeYourself />
      <FavoriteColor options={{blue: "Blue", red: "Red"}}/>

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

* `text`
* `textArea`
* `select`

Then pass it its options:

*`name: string`: will determine the classname, label, etc. THIS MUST BE CAMEL CASE.
*`validate?: fn => Error`: an optional function to return an array of errors to display. Do not throw the errors. This works seamlessly with the [@zecos/validatorz](https://npmjs.com/@zecos/validatorz) library.
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

You can rapidly prototype your forms, and, when you outgrow and need more customization, it's very easy to write your own library with [`@zecos/inputz`](https://npmjs.com/@zecos/inputz).