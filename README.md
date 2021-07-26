# Grimdark Stats

[Live](http://www.fullernle.com/grimdarkstats)

![Screenshot from 2021-07-08 14-28-13](https://user-images.githubusercontent.com/63718493/124993159-d4341a80-dff8-11eb-8ee0-3a6fb71fb30d.png)


## Background and Overview 

Grimdark stats's goal is to utilize the fantastic data collected over at 40kstats.com and provide players with a visualization of the Warhammer 40k tournament scene. It takes all the raw data and provides an interactive experience that allows players to delve deeper into how their faction is doing competitively. 

## Functionality and MVP

- [x] Instructions for Users
- [x] Have main visualization breaking down faction spread
- [x] Select visualization for each faction
- [x] Hover over charts to see more information.

## Architecture and Technologies 

This project is implemented using the following: 

- `JavaScript` for interactivity
- `HTML/CSS` for document and design
- `D3.js` for data visualizations

The data will come from 40kstats.com 

## Implementation Timeline 

Day 1: Project proposal and initial project setup. 

Day 2: Dedicate day to learning D3.js and how to incorporate data provided form 40kstats.

Day 3: Finish any learning necessary and start implementing data visualization for main overall faction breakdown.

Day 4: Create each faction breakdown table, and add interactivity.

## Code Snippet
Event Listeners to redraw page
```javascript
const mcFaction = document.querySelector(".mc-faction");
const wrFaction = document.querySelector(".wr-faction");
const logo = document.querySelector(".logo");

mcFaction.addEventListener("click", () => {
  const exists = document.querySelector(".sunburst");
  if (!exists) {
    clearHome();
    clearGraph();
    clearGraphHeader();
    setTimeout(1000, drawSunburst(subFactionData));
  }
});
wrFaction.addEventListener("click", () => {
  const exists = document.querySelector(".circle");
  if (!exists) {
    clearHome();
    clearGraph();
    clearGraphHeader();
    setTimeout(1000, drawPercentages(factionData));
  }
});

logo.addEventListener("click", () => {
  const exists = document.querySelector(".greeting");
  if (!exists) {
    clearHome();
    clearGraph();
    clearGraphHeader();
    drawHome();
  }
});
```
