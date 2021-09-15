/**
 * Given a Boggle board and a dictionary, returns a list of available words in
 * the dictionary present inside of the Boggle board.
 * @param {string[][]} grid - The Boggle game board.
 * @param {string[]} dictionary - The list of available words.
 * @returns {string[]} solutions - Possible solutions to the Boggle board.
 */
 exports.findAllSolutions = function(grid, dictionary) {
    let solutions = [];
    let result = new Array();
  
     if (grid == null || dictionary == null){
       return solutions;
     }
     
     for (let i = 0; i < grid.length; i++){
       if (grid[i].length != grid.length){
         return solutions;
       }
     }
     
     convertCase(grid, dictionary)
     let trie = new Set(dictionary);
         for (let j = 0; j < grid.length; j++) {
          for (let x = 0; x < grid.length; x++) {
              let visited = new Array(grid.length).fill(false).map(() => new Array(grid.length).fill(false));
              let word = [];//is empty to start
              find(word, grid, trie, x, j, visited, result);
          }
      }
      solutions = Array.from(result);
      return solutions;
  }
   
    function find(word, grid, trie, y, x, checked, result){
      const adjacent = [[-1, -1], [-1, 0],[-1, 1],[0, 1],[1, 1],[1, 0],[1, -1],[0, -1]];
      if (y < 0 || y >= grid.length || x < 0 || x >= grid.length || checked[y][x] == true)
        return;
      
      word += grid[y][x]
      if (checkPrefix(trie,word)){
        checked[y][x] = true;
      
      
      if (isValidWord(trie,word)){
        result.push(word);
      }
      
      for (let i = 0; i < 8; i ++){
        find(word,grid,trie, y + adjacent[i][0], x + adjacent[i][1], checked,result);
      }
     }
      checked[y][x] = false;
    }
     
  
    function checkPrefix(trie,word){
      for (let i of trie) {
        if (i.substr(0, word.length) == word) {
          return true;
          }
      }
      return false;
    }
     
     
    function isValidWord(trie, word){
      for (let tword of trie) {
        if (tword == word && word.length >= 3) {
          return true;
        }
      }
      return false;
    }
  
     
    function convertCase(grid, dictionary) {
        for (let x = 0; x < grid.length; x++) {
            for (let i = 0; i < grid[x].length; i++) {
                grid[x][i] = grid[x][i].toLowerCase();
            }
        }
        for (let x = 0; x < dictionary.length; x++) {
            dictionary[x] = dictionary[x].toLowerCase();
        }
  
    }
  
  
  var grid = [['T', 'W', 'Y', 'R'],
                ['E', 'N', 'P', 'H'],
                ['G', 'Z', 'Qu', 'R'],
                ['O', 'N', 'T', 'A']];
  
  var dictionary = ['art', 'ego', 'gent', 'get', 'net', 'new', 'newt', 'prat',
                      'pry', 'qua', 'quart', 'quartz', 'rat', 'tar', 'tarp',
                      'ten', 'went', 'wet', 'arty', 'egg', 'not', 'quar'];
  
  console.log(exports.findAllSolutions(grid, dictionary));
  