var Node = function(value) {
  this.left     = null;
  this.right    = null;
  this.value    = value || null;
};

var BinaryTree = function() {
  this.head = new Node();

  this.insert = function(value) {

    if(this.head.value === null) {
      this.head = new Node(value);
      return this; 
    }

    this._insert(this.head, value);
    return this;

  };

  this._insert = function(node, value) {

    var isLessThan = value < node.value,
        isEqualTo = value === node.value,
        nextNode;

    if(isEqualTo) return;

    if(isLessThan) {
      if(node.left === null) {
        node.left = new Node(value);
        return;
      }
      nextNode = node.left;
    }
    else {
      if(node.right === null) {
        node.right = new Node(value);
        return;
      }
      nextNode = node.right;
    }
    this._insert(nextNode, value);
  };

  this.search = function(value) {

    var nextNode = this.head;

    while(nextNode && nextNode.value != value) {
      if(value < nextNode.value) {
        nextNode = nextNode.left;
      }
      else {
        nextNode = nextNode.right;
      }
    }

    return nextNode;

  };
}
