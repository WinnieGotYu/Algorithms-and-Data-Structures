class Node {
  // Creates a new graph node
  constructor(value, adjacent = new Set()){
    this.value = value; 
    this.adjacent = adjacent;
  }
}

class Graph {
  // Graph holding nodes and adjacents
  constructor() {
    this.adjList = new Set();
  }

  addVertex (vertex) {
    this.adjList.add(vertex);
  };

  addEdge (v1, v2) {
    v1.adjacent.add(v2);
  }

  findVertex(value){
    
  }
}

const g1 = new Graph();
const one = new Node(1); 
const two = new Node(2);
const three = new Node(3);

g1.addVertex(one);
g1.addVertex(two);
g1.addVertex(three);


g1.addEdge(one, two);
g1.addEdge(one, three);
g1.addEdge(two, three);

console.log(g1); 