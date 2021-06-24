import "./styles/index.css";
import * as d3 from "d3";
import { drawSunburst } from "./sunburst";
import { filterLimit } from "async";
import regeneratorRuntime from "regenerator-runtime";
import { drawPercentages } from "./percentages";

const subFactionData = d3.csv(
  "https://gist.githubusercontent.com/lefuller/378bb2d512cbbc81ddd66cb0c4a571bf/raw/aa28cef8592d0797f1433e24b4224eb9b7b474f7/subfactions.csv",
  d3.autoType
);

const playerData = d3.csv(
  "https://gist.githubusercontent.com/lefuller/378bb2d512cbbc81ddd66cb0c4a571bf/raw/d58f2367dd8c0448e95276e8b5bea5560ab6c57c/Overall.csv",
  d3.autoType
);

const factionData = d3.csv(
  "https://gist.githubusercontent.com/lefuller/378bb2d512cbbc81ddd66cb0c4a571bf/raw/805a79ce78bc8f89940ba9f26c991b3c737cc722/Overall.csv",
  d3.autoType
);

export const factionColors = {
  "Adepta Sororitas": "#3D3C3F",
  "Adeptus Custodes": "#E2A95A",
  "Astra Militarum": "#51604B",
  Asuryani: "#C74C43",
  "Blood Angels": "#B11216",
  "Chaos Daemons": "#AF93AF",
  "Chaos Space Marines": "#161C20",
  "Cult Mechanicus": "#792831",
  "Dark Angels": "#003d26",
  "Death Guard": "#6D774D",
  Deathwatch: "#6A6566",
  Drukhari: "#14555B",
  "Genestealer Cults": "#7658A5",
  "Grey Knights": "#8696A0",
  Harlequins: "#74E1EA",
  "Imperial Knights": "#A09990",
  Necrons: "#C5C6CA",
  Orks: "#007427",
  "Renegade Knights": "#595E4B",
  "Space Wolves": "#6D94B3",
  "Tau Empire": "#BC6B10",
  "Thousand Sons": "#00506F",
  Tyranids: "#5C4E7B",
};

export const sumValues = (arrayOfObjects) => {
  let sum = 0;
  arrayOfObjects.forEach((obj) => {
    if (obj.value) {
      sum += obj.value;
    } else {
      sum += obj.total;
    }
  });

  return sum;
};

export const filterFactions = async (data) => {
  let filter = {
    name: "Factions Breakdown",
    children: [],
  };

  let filtered = await data.then((d) => {
    let currFaction = d[0].Faction;
    let factionInfo = {
      name: currFaction,
      children: [],
      total: 0,
      colorValue: factionColors[currFaction],
    };

    d.forEach((row, i) => {
      if (row.Faction !== currFaction) {
        currFaction = row.Faction;
        factionInfo.total = sumValues(factionInfo.children);
        filter.children.push(factionInfo);

        factionInfo = {
          name: currFaction,
          children: [],
          total: 0,
          colorValue: factionColors[currFaction],
        };
      }

      let chapterInfo = {
        name: row.Chapter,
        value: row["# Lists"],
        colorValue: factionColors[currFaction],
        win: row["Win %"],
      };
      factionInfo.children.push(chapterInfo);

      if (!d[i + 1]) filter.children.push(factionInfo);
    });
  });
  return filter;
};

const clearGraph = () => d3.selectAll("svg").remove();
let mcFaction = document.querySelector(".mc-faction");
let wrFaction = document.querySelector(".wr-faction");

mcFaction.addEventListener("click", () => {
  clearGraph();
  setTimeout(1000, drawSunburst(subFactionData));
});
wrFaction.addEventListener("click", () => {
  clearGraph();
  setTimeout(1000, drawPercentages(factionData));
});
// mcFaction.onclick = drawSunburst(data);
// wrFaction.onclick = drawPercentages(factionData);
