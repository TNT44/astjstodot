# AstJsToDot
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

Next :

I build a new package for the manipulation of AST.

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
**27/01/2022**
Change dependencies

**13/12/2021**
Release 0.5.4
Work in progess
Clean the test
Clean the package.json

**12/12/2021**
Release 0.5.3

Clean the package.json

Release 0.5.2

First npm.

Quality

-------------------|---------|----------|---------|---------|-------------------
File               | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-------------------|---------|----------|---------|---------|-------------------
All files          |     100 |    98.68 |     100 |     100 |                   
 src               |     100 |    98.57 |     100 |     100 |                   
  AstJsToDot.js    |     100 |    98.57 |     100 |     100 | 265               
 src/module        |     100 |      100 |     100 |     100 |                   
  StringBuilder.js |     100 |      100 |     100 |     100 |                   
-------------------|---------|----------|---------|---------|-------------------

**17/09/2021**
Release 0.5.1

Improve quality code

Work around to produce npm

**13/03/2021**

Release 0.5.0

Rename projet AST2DOT to astjstodot.

Improve quality code

**07/03/2021**

Refactor the projet to build a npm package.

-------------------|---------|----------|---------|---------|-----------------------
File               | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s     
-------------------|---------|----------|---------|---------|-----------------------
All files          |   95.45 |     85.9 |   96.55 |   95.45 |                       
 src               |   94.94 |    84.72 |   95.24 |   94.94 |                       
  AstJsToDot.js    |   94.94 |    84.72 |   95.24 |   94.94 | 14,88,295-300,342-349 
 src/module        |     100 |      100 |     100 |     100 |                       
  StringBuilder.js |     100 |      100 |     100 |     100 |                       
-------------------|---------|----------|---------|---------|-----------------------

**13/03/2020**

Refactor code and improve test

Use Mocha

Use istanbul

Use coverage

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
