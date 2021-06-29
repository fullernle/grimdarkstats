import "./styles/index.css";
import * as d3 from "d3";
import { drawSunburst } from "./sunburst";
import { filterLimit } from "async";
import regeneratorRuntime from "regenerator-runtime";
import { drawPercentages } from "./percentages";
import { drawFaction } from "./faction";
import { drawHome } from "./home";

const subFactionData = d3.csv(
  "https://gist.githubusercontent.com/fullernle/378bb2d512cbbc81ddd66cb0c4a571bf/raw/daa2f4f097e1723fbdfc5e0486ae9234a0c76903/subfactions.csv",
  d3.autoType
);

export const factionData = d3.csv(
  "https://gist.githubusercontent.com/fullernle/378bb2d512cbbc81ddd66cb0c4a571bf/raw/5e574212e3780fea73744f46e27d72680a59d7f6/Overall.csv",
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
  Necrons: "#727272",
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
      factionWin: d[0]["Faction Win %"],
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
      factionInfo.factionWin = row["Faction Win %"];
      factionInfo.children.push(chapterInfo);

      if (!d[i + 1]) filter.children.push(factionInfo);
    });
  });
  return filter;
};

export const clearGraphHeader = () => {
  let wrapper = document.querySelector(".graph-wrapper header");
  let oldText = document.querySelector(".header-text");
  if (oldText) {
    wrapper.removeChild(oldText);
  }
};

export const clearHome = () => {
  let child = document.querySelector(".content").childNodes[0];
	console.log(child);
  if (child) {
    child.remove();
  }
};

export const clearGraph = () => d3.selectAll("svg").remove();
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

drawHome();
