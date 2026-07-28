## React Toastify

here its just like a animated pop-up 

- we got to react-toastify site
- intall it bt given instruction 
- then import it in project 
- also import its css link too 
- then you get amazing toast.

-----------------------------------
----------------------------------------

## Context-api 

why we use context-api and where

- first datt always gor from parent to child1 to child2 , child3 ......and so on . its never jump like if we only need data n child4 we cant jump we have to pass ferom parent to one single every child.
  so in large app we cant tranfer data like this 
- so here come `DATA-CENTRALIZATION` . HERE WHAT WE DO IS =>  we make a data folder like {Context} and here make file of every data  like {ThemeContext} and now that data file we have to cantralize it so which need it go directly there and take it . 
- here its come `CONTEXT-API` . go to context folder => file 
- 3 points keep in mind while context-api 
- CREAT CONTEXT
- PROVIDE DATA
- USE DATA
  
- fIRST CREAT-DATA
    1.  here first we need to import `creatContext`
    2. then export it with some varible name like {const themeData = creatContext()}
    3. make any array or object or any const value to give data
   
- Second provide-data
   4. now the upper const varible `(2)` with .Provider and wrap the `{chilren}` with this 
        like this  <themeData.provider>{children}</themeData.provider>
   5. and here its time to pass the value with `value={}` like this 
         <themeData.provider value={"any value here"}>{children}</themeData.provider>

- third USE-DATA
   6. go to that file where you want that data here you import `useContext` and  that `(2)` varible too 
   7. and now useContext(that varible name) and equal to some varible name too 
   8. now it time to use data just `(7)` that const varible in {}
   9. and data reach directly from source not wander around from parent to child 

import useContext and themeData
const data = useContext(themeData)
`<h1>{data}</h1> ` 

--------------------------------------