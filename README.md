# Node Tutorial

This Tutorial contains of multiple example programms programmed with javascript in node. It guides you trough the steps necesairy to setup and programm all this different Apps. Each example Programm is contained in its own branch.

##  branch node_basis_project
Contains a "Hello node" project.

###### run it
1. download the files from the branch (or clone branch)
1. place all files within a parent Folder (i.e. basic_node_project)
1. open Terminal in the parent folder
1. run npm install in this folder
1. the default command "node app.js" shout print "hello node"
1. the in package.json defined costum cmd "npm start" should print "hello node" 

###### set it up initially
1. create new folder
1. create file app.js (one line of code: "console.log("hello node");")
1. open Terminal within folder
1. run "npm init" this generates a "package.json" file
1. edit the "package.json" file in the sections "scripts" and bellow "test: ..." inster line: "start": "node app.js"
1. set a comma "," behind the line "test: ..."
1. run node app.js -> should print "hello node"
1. run npm start -> shoudl print "hello world"

## branch node_rest_service

Contains a small example Rest service programmed with node.
###### run it
1. download the files from the branch (or clone branch)
1. place all files within a parent Folder (i.e. basic_node_project)
1. open Terminal in the parent folder
1. run npm install in this folder
1. the default command "node app.js" shout print "hello node"
1. the in package.json defined costum cmd "npm start" should print "hello node" 

###### set it up initially
1. repeat all steps in branch node_basis_project
2. run cmd "npm install express" to install the package which allows you to use http requests
3. copy all the files located in this branch which where not automatically generated
4. (dont forget to also copy the branches code in File app.js)