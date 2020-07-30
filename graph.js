class Node {
  // Creates a new graph node
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  // Graph holding nodes and adjacents
  // BFS - go to all closest neighbors and work your way outwards
  // DFS - continue on a path until it’s exhausted
  constructor() {
    this.adjList = new Set();
  }

  addVertex(vertex) {
    this.adjList.add(vertex);
  }

  addEdge(vertex1, vertex2) {
    vertex1.adjacent.add(vertex2);
  }

  findVertex(vertex) {
    return this.adjList.has(vertex);
  }

  // BFS - checks all neighbor first FIFO
  areConnectedBFS(vertex1, vertex2){
    const toVisitQueue = [vertex1];
    const seen = new Set(toVisitQueue);

    while(toVisitQueue.length && vertex1 !== vertex2){
      let currVertex = toVisitQueue.shift();
      if(currVertex === vertex2) return true;

      for(let neighbor of currVertex.adjacent){
        if(!seen.has(neighbor)){
          toVisitQueue.push(neighbor);
          seen.add(neighbor);
        }
      }
    }
    return false;
  }

  // DFS - go all the way through one route
  areConnectedDFS(vertex1, vertex2){
    const toVisitStack = [vertex1];
    const seen = new Set(toVisitStack);

    while(toVisitStack.length){
      let currVertex = toVisitStack.pop();
      if(currVertex === vertex2) return true;

      for(let neighbor of currVertex.adjacent){
        if(!seen.has(neighbor)){
          toVisitStack.push(neighbor);
          seen.add(neighbor);
        }
      }
    }
    
    return false;
  }
}

const g1 = new Graph();
const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);

g1.addVertex(one);
g1.addVertex(two);
g1.addVertex(three);
g1.addVertex(four);
g1.addVertex(five);
g1.addVertex(six);

g1.addEdge(one, two);
g1.addEdge(one, three);
g1.addEdge(one, four);
g1.addEdge(two, five);
g1.addEdge(three, six);
g1.addEdge(four, three);
g1.addEdge(four, six);
g1.addEdge(five, six);

console.log(g1.areConnectedBFS(three, three)); // False

console.log(g1);
