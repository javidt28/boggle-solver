
Google Doc: https://docs.google.com/document/d/1D8cSn81nd4ZrreFkqw-YcF909ytHqt1MHBV2IaNnWyw/edit?usp=sharing

# Starter Project - Solving Boggle (Part 1)
Boggle (https://en.wikipedia.org/wiki/Boggle) is a word-finding game. The goal is to find as many words as possible in an NxN grid of letters.

RULES
* Words must use adjacent tiles, including diagonals.
* Each word may not use a cube more than once.
* Words must be at least 3 letters long.
* Warning: The “Qu” tile counts as 2 letters. There is no raw “Q” tile. The “St” tile counts as 2 letters. There is no raw “S” tile.



	Board:
T
W
Y
R
E
N
P
H
G
St
Qu
R
O
N
T
A





Valid Words (A Partial List):
art	ego	gent	get	net	new
newt	prat	pry	qua	quart	rat
tar	tarp	ten	went	wet      stont  stqura

Invalid Words:
arty	egg	not



An online solver is available at http://fuzzylogicinc.net/boggle/, if you want to play with it.

Your task is to implement a solver for the game. Given a valid grid of letters and an arbitrary dictionary of words, return a list of contained words.

Artificial Requirement: Submit your solution as a single boggle_solver.js file.
Artificial Requirement: Do not import any libraries. Use only the core built-ins.

Assumption: You may assume that the grid and dictionary are valid, although the dictionary may contain impossible words (e.g., less than 3 letters).
Examples:
Input:	grid = [[“A”, “B”], [“C”, “D”]],
dictionary = [“A”, “B”, “AC”, “ACA”, “ACB”, “DE”]
Output: [“ACB”]

Input:	grid = [[“A”, “B”, “C”, “D”], [“E”, “F”, “G”, “H”], [“I”, “J”, “K”, “L”], [“A”, “B”, “C”, “D”]]
	Dictionary = [“ABEF”, “AFJIEB”, “DGKD”, “DGKA”]
Output: [“ABEF”, “AFJIEB”, “DGKD”]
Deliverables
A single file boggle_solver.js that exports the function
	exports.findAllSolutions = function(grid, dictionary) { …… }
      
      The function returns an array or found words.
Please leave a /* Comment */ at the top of the file with your NAME and SID

Node Framework Setup
Here is a link to a quick tutorial for setting up Node.js on your local machine.

Windows
Mac
Linux

How to run Node?
$node boggle_solver.js
