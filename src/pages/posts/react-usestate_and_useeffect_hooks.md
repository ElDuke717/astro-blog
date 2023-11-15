---
setup: |
  import Layout from '../../layouts/BlogPost.astro'

title: What are hooks in React?
publishDate: 14 September 2023
name: Nick Huemmer
twitter: "https://twitter.com/njhuemmer"
value: 128
description: What are hooks in React and how do we use them, specifically useState and useEffect?
tags: JavaScript, React, hooks, functional components
---

# Hooks in React

Hooks are a feature in React 16.8 that allow you to use state and other React features without writing a class. Many developers that have been using React for awhile remember writing and using Class components to manage state and lifecycle methods. Hooks allow you to do the same thing with functional components.

Before, when defining a component, you had to use a class to define state and lifecycle methods. Now, you can use a function component and use hooks to define state and lifecycle methods.

Example of a class component:

```javascript
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }

  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
```

Example of the same component as a function component using hooks:

```javascript
import React, { useState, useEffect } from "react";

const Example = () => {
  // Use useState to manage the 'count' state variable
  const [count, setCount] = useState(0);

  // Use useEffect to handle side-effects (this replaces componentDidMount and componentDidUpdate)
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]); // Re-run the effect when 'count' changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default Example;
```

Notice how much simpler and more concise the function component is, a good reason to use them in your React projects.

One limiting thing about function components is that they can’t have state or lifecycle methods.

Hooks solve this problem.

## What are hooks?

They are functions that let you “hook into” React state and lifecycle features from function components. Hooks don’t work inside classes — they let you use React without classes.

React provides a few built-in hooks like `useState` and `useEffect`, giving you the same capabilities that `this.state` and lifecycle methods offer in a class. But hooks are not just a way to reduce boilerplate. They fundamentally change how you work with React.

## Why use hooks?

- **Easier to reuse stateful logic:** Before hooks, sharing stateful logic between components required complex patterns such as render props and higher-order components. With hooks, you can extract stateful logic from a component, making it independent and reusable.

- **Simplified components:** Hooks let you split one component into smaller functions based on what pieces are related, such as setting up a subscription or fetching data.

- **More readable codebase:** Hooks avoid the confusion of `this` keyword, which can be tricky to understand in JavaScript. Function components with hooks are generally easier to understand for newcomers.

- **Less nesting:** With hooks, you can flatten your logic and avoid wrapping your logic in lifecycle methods. You can also avoid nesting in callbacks or higher-order components.

## Basic Hooks

Here are the basic hooks that React provides and you're likely to encounter when you first start writing functional components are making the switch from class components to function components.

### `useState`

This hook is a state management tool. It returns a pair: the current state value and a function that lets you update it. You can use `useState` as many times as you want in a single component.

```javascript
const [age, setAge] = useState(42);
```

### `useEffect`

You’ve likely performed data fetching, subscriptions, or manually changing the DOM in your React components. Before hooks, you’d do this in `componentDidMount` and `componentDidUpdate`. `useEffect` serves the same purpose but unified into a single API.

```javascript
useEffect(() => {
  // Update the document title using the browser API
  document.title = `You clicked ${count} times`;
});
```

### `useContext`

Accepts a context object and returns the current context value for that context. The current context value is determined by the `value` prop of the nearest `<MyContext.Provider>` above the calling component in the tree.

```javascript
const value = useContext(MyContext);
```

## Advanced Hooks

In addition to the basic hooks, React provides a few more hooks for more specific scenarios:

- `useReducer`: For more complex state logic that involves multiple sub-values or when the next state depends on the previous one.
- `useCallback`: Returns a memoized callback function.
- `useMemo`: Returns a memoized value.
- `useRef`: Returns a mutable ref object.

## Rules of Hooks

Hooks are JavaScript functions, but they have two additional rules:

1. Only call hooks at the top level. Don’t call hooks inside loops, conditions, or nested functions.
2. Only call hooks from React function components or custom hooks.

## Custom Hooks

When you find yourself using the same side effect logic in multiple components, you can extract that logic to a custom hook. Custom hooks allow you to create your own hooks with the full power of React's built-in hooks behind them.

Here's an example of a custom hook that fetches data from an API:

```javascript
import { useState, useEffect } from "react";

function useApi(endpoint) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [endpoint]);

  return data;
}
```

To sum it up, hooks offer a powerful and expressive way to build your components. By understanding and applying hooks effectively, you can greatly simplify your components and make your code more maintainable.

Ready to start refactoring your class components or building new ones with hooks? Happy coding!
