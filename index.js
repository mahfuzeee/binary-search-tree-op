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

  //Check if the value is in the tree
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

  //Add a value to the tree
  insert(value) {
    const temp = new Node(value);

    // If the tree is empty, set the root to the new node
    if (this.root === null) {
      this.root = temp;
    }

    //Find the node where it going to
    let current = this.root;

    while (current !== null) {
      if (value < current.data) {
        if (current.left === null) {
          current.left = temp;
          break;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = temp;
          break;
        }
        current = current.right;
      }
    }
  }

  //Remove a value from the tree
  deleteItem(value) {
    const remove = (node, target) => {
      if (node === null) {
        return null;
      }

      if (target < node.data) {
        node.left = remove(node.left, target);
      } else if (target > node.data) {
        node.right = remove(node.right, target);
      } else if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      } else {
        let successor = node.right;
        while (successor.left !== null) {
          successor = successor.left;
        }
        node.data = successor.data;
        node.right = remove(node.right, successor.data);
      }

      return node;
    };

    this.root = remove(this.root, value);
  }

  //Get the height of the tree
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

tree.deleteItem(4);
tree.prettyPrint(tree.root);
