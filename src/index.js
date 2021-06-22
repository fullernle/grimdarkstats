import "./styles/index.scss";

const data = d3.csv(
  "https://gist.githubusercontent.com/lefuller/719daced1cc272d4ef244f7ac2d9e137/raw/324be17e0af83073e8c5cabf15b7decf53cad0d7/2020.csv",
  d3.autoType
);

const svg = d3.select("svg").attr("width", "1000").attr("height", "500");

const width = +svg.attr("width");
const height = +svg.attr("height");

const render = (data) => {
  const xValue = (d) => d["Avg VP"];
  const yValue = (d) => d.Player;

  const xScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, xValue)])
    .range([0, width]);

  const yScale = d3
    .scaleBand()
    .domain(data.map(yValue))
    .range([0, height]);

  svg
    .selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("y", (d) => yScale(yValue(d)))
    .attr("width", (d) => xScale(xValue(d)))
    .attr("height", yScale.bandwidth());
};

data.then((d) => {
  let factions = d.filter((row) => {
    return row.Faction === "Adepta Sororitas";
  });

  render(factions);
  console.log(factions);
});
