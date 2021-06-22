import "./styles/index.scss";

const data = d3.csv(
  "https://gist.githubusercontent.com/lefuller/719daced1cc272d4ef244f7ac2d9e137/raw/324be17e0af83073e8c5cabf15b7decf53cad0d7/2020.csv",
  d3.autoType
);

const svg = d3.select("svg").attr("width", "1000").attr("height", "500");

const width = +svg.attr("width");
const height = +svg.attr("height");

const renderHrzBar = (data) => {
  const xValue = (d) => d["Avg VP"];
  const yValue = (d) => d.Player;
  const margin = { top: 20, right: 20, bottom: 20, left: 180 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const xScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, xValue)])
    .range([0, innerWidth]);

  const yScale = d3
    .scaleBand()
    .domain(data.map(yValue))
    .range([0, innerHeight])
    .padding(0.1);

  // g = group element
  const g = svg
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  g.append("g").call(d3.axisLeft(yScale));
  g.append("g")
    .call(d3.axisBottom(xScale))
    .attr("transform", `translate(0, ${innerHeight})`);

  g.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("y", (d) => yScale(yValue(d)))
    .attr("width", (d) => xScale(xValue(d)))
    .attr("height", yScale.bandwidth());
};

var nodeData = {
  name: "TOPICS",
  children: [
    {
      name: "Topic A",
      children: [
        { name: "Sub A1", size: 4 },
        { name: "Sub A2", size: 4 },
      ],
    },
    {
      name: "Topic B",
      children: [
        { name: "Sub B1", size: 3 },
        { name: "Sub B2", size: 3 },
        {
          name: "Sub B3",
          size: 3,
        },
      ],
    },
    {
      name: "Topic C",
      children: [
        { name: "Sub A1", size: 4 },
        { name: "Sub A2", size: 4 },
      ],
    },
  ],
};



var nodeData = {
  name: "Factions Breakdown",
  children: [
    {
      name: "Adepta Sororitas",
      children: [
        { name: "Order of the Bloody Rose", size: 4 },
        { name: "Order of the Ebon Chalice", size: 4 },
        { name: "Order of the Sacred Rose", size: 4 },
        { name: "Order of the Valorous Heart", size: 4 },
        { name: "Order of Our Martyred Lady", size: 4 },
				{ name: "Adeptus Ministorum", size: 4} 
      ],
    },
    {
      name: "Adeptus Custodes",
      children: [
        { name: "Solar Watch", size: 3 },
        { name: "Shadowkeepers", size: 3 },
        { name: "Dread Host", size: 3 },
        { name: "Emissaries Imperaturs", size: 3 },
        { name: "Aquilan Shield", size: 3 },
        {
          name: "Sub B3",
          size: 3,
        },
      ],
    },
    {
      name: "Blood Angels",
      children: [
        { name: "Blood Angels", size: 4 },
        { name: "Flesh Tearers", size: 4 },
      ],
    },
  ],
};




const filterFactions = (data) => {
	let data ={}

	let adeptaSoriritas = data.forEach((row) => {
		let faction = {
			faction: row.Faction,
			chapter: row.Chapter
		}
 
  });
	

	return factions;
};



data.then((d) => {
  console.log(d);


	let filtered = filterFactions(d);


	

	console.log(filtered);
  renderHrzBar(filtered);
});
