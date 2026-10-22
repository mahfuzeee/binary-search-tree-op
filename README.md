# Binary Search Tree

A binary search tree implementation in JavaScript. The `Tree` constructor
creates a balanced tree from an array of numbers by sorting the values,
removing duplicates, and choosing the middle value as the root of each
subtree.

## Requirements

- [Node.js](https://nodejs.org/)

No external packages are required.

## Run

```sh
node index.js
```

This runs the example in `index.js`, which builds a tree and prints the values
using in-order, pre-order, and post-order traversals.

## Available operations

Create a tree with `new Tree(array)`, then use its methods:

| Method | Description |
| --- | --- |
| `includes(value)` | Returns whether the value is in the tree. |
| `insert(value)` | Inserts a value into the tree. |
| `deleteItem(value)` | Removes a value if it exists. |
| `levelOrderForEach(callback)` | Calls the callback for each node in level order. |
| `inOrderForEach(callback)` | Calls the callback for each node in in-order. |
| `preOrderForEach(callback)` | Calls the callback for each node in pre-order. |
| `postOrderForEach(callback)` | Calls the callback for each node in post-order. |
| `height(value)` | Returns the number of search steps taken while traversing from the root using the value. |
| `depth(value)` | Returns the number of search steps taken while traversing from the root using the value. |
| `isBalanced()` | Checks whether every node's subtree heights differ by no more than one. |
| `rebalance()` | Rebuilds a balanced tree from its in-order values. |
| `prettyPrint(node)` | Prints the tree sideways, starting from the supplied node (usually `tree.root`). |

Traversal callbacks receive a `Node` object; read its value from `node.data`.
For example:

```js
tree.inOrderForEach((node) => {
  console.log(node.data);
});
```

`Tree` is currently defined in `index.js` but is not exported as a module.
To use it from another file, add an export to `index.js` first.
