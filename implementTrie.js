/**Implement a trie with insert, search, and startsWith methods.

Example:

Trie trie = new Trie();

trie.insert("apple");
trie.search("apple");   // returns true
trie.search("app");     // returns false
trie.startsWith("app"); // returns true
trie.insert("app");   
trie.search("app");     // returns true */

class Trie{
  constructor(){
    this.root = {};
  }

  // traverse through root, cks for key 
  // if no key, will create key
  insert(word){
    let current = this.root;
    for(let char of word){
      if(!current[char]) current[char] = {};
      current = current[char];
    }
    current.word = word;
  }

  search(word){
    let current = this.root;
    for(let char of word){
      if(!current[char]) return false;
      current = current[char];
    }

    // after traverse, check if current.word exist
    // without current.word, it is a prefix
    return current.word === word;
  }

  startsWith(prefix){
    let current = this.word;
    for(let char of word){
      if(!current[char]) return false;
      current = current[char];
    }
    return true;
  }
}