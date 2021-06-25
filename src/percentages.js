import { factionColors, filterFactions } from "./index";
import regeneratorRuntime from "regenerator-runtime";
import * as d3 from "d3";
import { drawFaction } from "./faction";

export const drawPercentages = async (factionData) => {
  let data = await factionData;

  for (let i = 0; i < data.length; i++) {
    let faction = data[i];
    if (!Object.keys(factionColors).includes(faction.Faction)) continue;

    const width = 150;
    const height = 150;
    const twoPi = 2 * Math.PI;
    const formatPercent = d3.format(".0%");
    const winRate = faction["Actual Win %"] / 100;

    const arc = d3.arc().startAngle(0).innerRadius(40).outerRadius(50);

    const currFactionData = data.filter((d) => d.Faction === faction.Faction);

    const svg = d3
      .select(".graph")
      .append("svg")
      .attr("class", "circle")
      .attr("width", width)
      .attr("height", height)
      .on("click", () => drawFaction(currFactionData[0]));

    const g = svg
      .append("g")
      .attr("class", "round " + i)
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    g.append("path").datum({ endAngle: twoPi }).attr("d", arc);

    const foreground = g
      .append("path")
      .datum({ endAngle: 0 })
      .style("fill", `${factionColors[faction.Faction]}`)
      .attr("d", arc);

    g.append("text")
      .attr("text-anchor", "middle")
      .attr("class", "win-percentage")
      .attr("fill", () => (winRate >= 0.49 ? "#00a300" : "#a30000"))
      .attr("dy", "0em")
      .attr("dx", ".2em")
      .text(formatPercent(winRate));

    g.append("text")
      .attr("text-anchor", "middle")
      .attr("class", "description")
      .attr("dy", "1.8em")
      .text("Win Rate");

    g.append("text")
      .attr("text-anchor", "middle")
      .attr("class", "faction-title")
      .attr("dy", "-3.8em")
      .text(
        `${faction.Faction === "Chaos Space Marines" ? "CSM" : faction.Faction}`
      );

			
    foreground
      .transition()
      .duration(1000)
      .attrTween("d", arcTween(winRate * twoPi));

    function arcTween(angle) {
      return function (d) {
        const interpolate = d3.interpolate(d.endAngle, angle);
        return function (t) {
          d.endAngle = interpolate(t);
          return arc(d);
        };
      };
    }
  }
};
