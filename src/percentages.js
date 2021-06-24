import { factionColors, filterFactions } from "./index";
import regeneratorRuntime from "regenerator-runtime";
import * as d3 from "d3";

export const drawPercentages = async (nodeData) => {
  let data = await nodeData;

  for (let i = 0; i < data.length; i++) {
    let faction = data[i];
    if (!Object.keys(factionColors).includes(faction.Faction)) continue;

    const width = 150;
    const height = 150;
    const twoPi = 2 * Math.PI;
    const formatPercent = d3.format(".0%");
    const winRate = faction["Actual Win %"] / 100;
    let progress = 0;

    const arc = d3.arc().startAngle(0).innerRadius(40).outerRadius(50);

    const svg = d3
      .select(".graph")
      .append("svg")
      .attr("class", "circle")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    const currFaction = svg.append("g").attr("class", `round ` + i);

    currFaction
      .append("path")
      .attr("class", "background")
      .attr("d", arc.endAngle(twoPi));

    const foreground = currFaction.append("path").attr("class", "foreground");

    const winRatePercentage = currFaction
      .append("text")
      .attr("text-anchor", "middle")
      .attr("class", "win-percentage")
      .attr("fill", () => (winRate >= 0.49 ? "#00a300" : "#a30000"))
      .attr("dy", "0em")
      .attr("dx", ".2em");

    const description = currFaction
      .append("text")
      .attr("text-anchor", "middle")
      .attr("class", "description")
      .attr("dy", "1.8em")
      .text("Win Rate");

    const facionName = currFaction
      .append("text")
      .attr("text-anchor", "middle")
      .attr("class", "faction-title")
      .attr("dy", "-3.8em")
      .text(
        `${faction.Faction === "Chaos Space Marines" ? "CSM" : faction.Faction}`
      );

    const j = d3.interpolate(progress, winRate);

    progress = j(1);
    foreground
      .transition()
      .duration(1000)
      .attr("d", arc.endAngle(twoPi * progress))
      .attr("style", `fill: ${factionColors[faction.Faction]}`);

    winRatePercentage.text(formatPercent(winRate));
  }
};
