#9.1-React

#### How to use
* run npm install
* run npm start
* start testing your app at <http://localhost:3001>
* Write your solutions in the folder ./exercises. **Attention**: you should only write the react code in this folder. There render method will be handled by the specs!

###Exercices:
In order to succefully compleate all the exercises, your solutions need to match the behavior shown [here](https://eliumacademy.github.io/exercises/9.3.html) 

**Notes**: All compoenents should only export one single react component as required by the specs 
1. Create a counter that will only update if the number of click's is odd.
2. create a counter that once it reaches 10 it will reset to 0.
3. create a counter that once it reaches 3 it will display a message
    Component will unmount in 3
    Component will unmount in 2
    Component will unmount in 1
    Component will unmount in 0 
    when it reaches 0 the component should unmount itself.  Use ```setTimeout``` to realize this counter
4. Repeate a counter with the same functionality but use ```setInterval``` instead of ```setTimeout```
5. **Challange 1**: Create a react component that manages an other react component. The second react component should be made jump when the first compoenent is clicked.
6. **Challange 2**: Create a react component that manages several other components. Each child component will be create at a interval of more or less 2 seconds and each created component should move from left to right of the parent box.
7. **Challange 3**: Using the components of the previous two challanges create a little game where, when one of the left to right moving boxes hits the jumping box you will loose a point. If you jump and avoid a box, you will gain one.
