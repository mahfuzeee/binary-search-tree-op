class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(array) {
    this.root = Tree.#buildTree(array);
  }

  static #buildTree(array) {
    const sortedArray = [...new Set(array)].sort((a, b) => a - b);

    const build = (values) => {
      if (values.length === 0) {
        return null;
      }

      const middle = Math.floor(values.length / 2);
      const root = new Node(values[middle]);
      root.left = build(values.slice(0, middle));
      root.right = build(values.slice(middle + 1));
      return root;
    };

    return build(sortedArray);
  }

  includes(value) {
    let current = this.root;

    while (current !== null) {
      if (value === current.data) {
        return true;
      }

      current = value < current.data ? current.left : current.right;
    }

    return false;
  }
  insert(value) {}
  deleteItem(value) {}
  height(value) {}
  depth(value) {}
  isBalanced() {}
  rebalance() {}
  prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null || node === undefined) {
      return;
    }

    this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  };
}

const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
tree.prettyPrint(tree.root);

console.log(tree.includes(9));
console.log(tree.includes(10));
