---
setup: |
  import Layout from '../../layouts/BlogPost.astro'

title: What are props in React?
publishDate: 19 Feb 2023
name: Nick Huemmer
twitter: 'https://twitter.com/nickhuemmer'
value: 128
description: A brief introduction to props in React.
tags: JavaScript, React, props, components, syntax, introduction, explanation
---

# What are props in React?

Understanding what props are when learning React can sometimes be a little confusting. `props` is short for "properties" and is used to pass data from a parent component to a child component.
Similarly to how functions in JavaScript take arguments, components take `props` so data can be passed to components. They are like arguments of a function and allow us to pass data to our components, so that the components can include customizations based on the data.

When a parent component renders a child component, it can pass data to the child component using `props`. It's important to know that `props` are read-only and cannot be modified by the child component. The parent component sets the props and the child component uses them. This allows for greater modularity and reusability in React components. `props` are usually passed to a component as an object, but they can also be passed as a string, number, array, or function.

## A brief example

Here's an example of how `props` work in React:

```javascript
function ParentComponent() {
  const name = 'John';
  return <Child name={name} />;
}

//Props are inhereted from the ParentComponent
function ChildComponent(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

See how the `props` are passed between the two components?

In this example, the `ParentComponent` component passes a name value to the `ChildComponent` component as a prop. The `ChildCompnent` component uses the name prop to render a greeting message. The `ChildComponent` component cannot modify the name prop, it can only use it to display the greeting.

`props` can also be used to pass functions or other types of data from a parent component to a child component. This allows for greater flexibility in how data is shared between components in a React application.

`props` are an important part of how React components communicate with each other, and understanding how to use them is key to writing effective and reusable components.
