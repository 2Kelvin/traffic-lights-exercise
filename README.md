# traffic-lights-exercise

This project required me to:

- add `conditional rendering` to the project
- understand more about a `state snapshot`
- the snapshot for state variable walk is already recorded as true on the first render, so even if you change it, the component that are used & rendered here use initial state walk=true
- therefore, putting the alert conditional render before using the setter function setWalk doesn't change the results because the `state is already fixed` as per the current snapdhot in that particular time
- calling a setter function only `changes the state variable for the next render`
