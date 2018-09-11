import Node from "./Node";

export default class Trie {
  constructor() {
    this.totalWords = 0;
    this.root = new Node();
  }

  count() {
    return this.totalWords;
  }

  insert(word) {
    let currNode = this.root;
    let wordArray = [...word];
    this.insertRecursive(wordArray, currNode);
    this.totalWords++;
  }

  insertRecursive(wordArray, currNode) {
    if (wordArray.length < 1) {
      currNode.end = true;
      return;
    }

    let letter = wordArray.shift();

    if (!currNode[letter]) {
      currNode[letter] = new Node();
    }

    currNode = currNode[letter];
    return this.insertRecursive(wordArray, currNode);
  }

  suggest(string) {
    let wordArray = [...string];

    if (Object.keys(this.root).includes(wordArray[0])) {
      let path = wordArray.reduce((key, letter) => {
        if (key[letter]) {
          return key[letter]
        } else {
          return false;
        }
      }, this.root);
      if (path === undefined) {
        return [];
      }

      return this.returnWords(path, string);
    } else {
      return [];
    }
  }

  returnWords(path, string) {
    let wordArray = [];

    Object.keys(path).forEach(letter => {
      if (letter !== "end") {
        wordArray.push(...this.returnWords(path[letter], string + letter));
      } else if (path.end) {
        wordArray.push(string);
      }
    });
    return wordArray;
  }

  populate(cityState) {
    cityState.forEach(word => {
      this.insert(word);
    });
  }
}
