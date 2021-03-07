# AST2DOT
Convert graphviz AST to DOT.

When you use Graphviz you create a .dot file or a .gz file.
You can parse a .dot file, a .gz file to an AST tree with 
[avanka dotparser](https://github.com/anvaka/dotparser).

The AST tree can be modified with javascript's function, like add a node.

I build a program to revert the process.
I create a new .dot file from an AST tree.

How it work ?:

The challenge is to parse a dot file, create an AST tree and build the .dot file again from the AST tree.
I compare the primary .dot file with the new one.

I take many representative .dot file.


![Process of test](./documentation/description3.png)


Now, i try to 
* add new function in the AST tree.

** remove a node

** add a node

* add interractive svg function
* improve the graphviz table parse.

* add a new way to parse html node.

* Mix ast2dot with other library.
  
![The road](./documentation/Chaine.png)

Release
-----------------

**13/03/2020**

Release 0.4.5

Refactor code and improve test

Use Mocha

Use istanbul

Use coverage

------------------|---------|----------|---------|---------|------------------------------------------------------------------
File              | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s                                                
------------------|---------|----------|---------|---------|------------------------------------------------------------------
 AstToDot.js      |   84.74 |    61.84 |   90.48 |   84.74 | ...2,303,305-308,311,342,351,353,354,357,360,385-389,391,393-395 
 fctArray.js      |   59.43 |    46.48 |   33.33 |   68.97 | ...,70,72,83,102,119,124,127-130,160,161,217,246,257,260,263,265 
------------------|---------|----------|---------|---------|------------------------------------------------------------------

**07/03/2021**
Release 0.5.0

Refactor the projet to build a npm package.

**22/08/2019**

Release 0.4.1

Improve tests and documentation

**06/02/2019**

First release 0.4.0

Test
-----------------
You need use mocha
in the root :
>mocha
