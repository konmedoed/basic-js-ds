const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.num = null;
  }

  root() {
    return this.num;
  }

  add(value) {
    this.num = checkNode(this.num, value);
    function checkNode(context, value){
      if (context===null) return new Node (value);
      if (context.data===value)
          return context;
        if (context.data>value){
            context.left = checkNode(context.left, value)
            return context;
        }
        else {
            context.right = checkNode(context.right, value);
            return context;
        }
    }
  }

  has(value) {
    let resp = checkValue(this.num, value);
    function checkValue(context, value){
      if (context===null) return false
      if (context.data===value)
        return true
      if (context.data<value)
        return checkValue(context.right, value)
      else return checkValue(context.left, value)
    }
    if (resp)
      return resp
    return false
  }

  find(value) {
    let resp = findNode(this.num, value);
    function findNode(context, value){
      if (context===null){
        return null
      }
      if (context.data===value)
        return context
      if (context.data<value) return findNode(context.right, value)
        else return findNode(context.left, value)
    }
    return resp
  }

  remove(value) {
    this.num = removeNode(this.num, value);

    function removeNode(context, value){
      if (context===null) return null;

      if (context.data===value){
        if (context.left===null && context.right===null)
          return null;
        if (context.left===null) return context.right;
        if (context.right===null) return context.left;

        let maxLeft = context.left;
        while (maxLeft.right) {
          maxLeft = maxLeft.right;
        }
        context.data = maxLeft.data;

        context.left = removeNode(context.left, maxLeft.data);

        return context;
      }

      if (value<context.data) {
        context.left = removeNode(context.left, value);
        return context;
      }
      else {
        context.right = removeNode(context.right, value);
        return context;
      }
    }
  }

  min() {
    function findMin(context){
      if (context===null) return null
      if (context.left===null)
        return context.data
      else return findMin(context.left)
    }
    return findMin(this.num)
  }

  max() {
    function findMax(context){
      if (context===null) return null
      if (context.right===null)
        return context.data
      else return findMax(context.right)
    }
    return findMax(this.num)
  }
}

module.exports = {
  BinarySearchTree
};