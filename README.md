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

![The road](./documentation/Chaine.png)

Release
-----------------

**22/08/2019**

Release 0.4.1

Improve tests and documentation

**06/02/2019**

First release 0.4.0

Test
-----------------
You need use jasmine
in the root :
>jasmine
