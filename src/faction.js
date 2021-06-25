import { factionColors, clearGraph, clearGraphHeader } from "./index";
import regeneratorRuntime from "regenerator-runtime";
import * as d3 from "d3";
import { xml } from "d3";

export const drawFaction = async (factionData) => {
  console.log(factionData);

  clearGraph();
  const numWin = { category: "Number of Wins", value: factionData.Win };
  const numLoss = { category: "Number of Losses", value: factionData.Loss };
  const numDraw = { category: "Number of Draws", value: factionData.Draw };

  const gameStats = [numWin, numLoss, numDraw];

  const selfVP = { category: "Average VP Scored", value: factionData.VP };
  const oppVP = {
    category: "Average Opp. VP Scored",
    value: factionData["Opp VP"],
  };

  const vpStats = [selfVP, oppVP];

  const winPercentage = factionData["Actual Win %"];
  const totalLists = factionData["Total Lists"];
  const faction = factionData.Faction;
  const numGames = numWin + numLoss + numDraw;

  clearGraphHeader();
  let wrapper = document.querySelector(".graph-wrapper header");

  let header = document.createElement("p");
  header.classList.add("header-text");
  console.log(header);
  let text = document.createTextNode(`${faction}`);
  wrapper.append(header);
  header.appendChild(text);

  drawBar(gameStats, faction);
  drawBar(vpStats, faction);
};

const drawBar = (data, factionName) => {
  const margin = { top: 0, right: 30, bottom: 50, left: 180 };
  const height = 150;
  const width = 1000;
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const svg = d3
    .select(".graph")
    .append("svg")
    .attr("height", height)
    .attr("width", width);

  const xValue = (d) => d.value;
  const yValue = (d) => d.category;

  const xScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, xValue) + 20])
    .range([0, innerWidth])
		.nice();

  const yScale = d3
    .scaleBand()
    .domain(data.map(yValue))
    .range([0, 100])
    .padding(0.1);

  const g = svg
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`)
		.attr("fill", `#cacaca`);

  g.append("g").call(d3.axisLeft(yScale)).selectAll(".tick line").remove();

  g.append("g")
    .call(d3.axisBottom(xScale).tickSize(-innerHeight))
    .attr("fill", `#cacaca`)
    .attr("transform", `translate(0, ${innerHeight})`);

	let color = factionColors[factionName];
  g.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("y", (d) => yScale(yValue(d)))
    .attr("width", (d) => xScale(xValue(d)))
    .attr("height", yScale.bandwidth())
		.attr("fill", color)
		.append("title").text(d => `${d.value}`);

	
};
