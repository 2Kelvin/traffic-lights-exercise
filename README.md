# traffic-lights-exercise

![traffic](https://user-images.githubusercontent.com/85868026/202928796-9a42ccaa-6c1d-4180-a145-44cdbedfe30c.png)

In this project:

- I added `conditional rendering` to the project
- I understood more about a `state snapshot`
- the snapshot for state variable 'walk' is already recorded as true on the first render, so even if you change it, the components that are used & rendered here use initial state value => true. Therefore, putting the alert conditional render before using the setter function setWalk doesn't change the results because the `state is already fixed` as per the current snapdhot in that particular time
- calling a setter function only `changes the state variable for the next render`
