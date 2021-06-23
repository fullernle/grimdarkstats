import "./styles/index.css";
import * as d3 from "d3";
import { filterLimit } from "async";
import regeneratorRuntime from "regenerator-runtime";

const data = d3.csv(
  "https://gist.githubusercontent.com/lefuller/378bb2d512cbbc81ddd66cb0c4a571bf/raw/d3f649c3ba184d62000018a4227cf2905e78bf1a/subfactions.csv",
  d3.autoType
);

const filterFactions = async (data) => {
  let filter = {
    name: "Factions Breakdown",
    children: [],
  };
  let colorValue = 0.05;

  let filtered = await data.then((d) => {
    let currFaction = d[0].Faction;
    let factionInfo = {
      name: currFaction,
      children: [],
      colorValue: colorValue,
    };

    d.forEach((row, i) => {
      if (row.Faction !== currFaction) {
        currFaction = row.Faction;
        filter.children.push(factionInfo);
        colorValue += 0.025;

        factionInfo = {
          name: currFaction,
          children: [],
          colorValue: colorValue,
        };
      }

      let chapterInfo = {
        name: row.Chapter,
        size: row["# Lists"],
        colorValue: colorValue,
      };
      factionInfo.children.push(chapterInfo);

      if (!d[i + 1]) filter.children.push(factionInfo);
    });
  });
  return filter;
};

const sunBurst = async () => {
  let nodeData = await filterFactions(data);

  // Variables
  const width = window.innerWidth / 2;
  const height = window.innerHeight;
  const radius = Math.min(width, height) / 2;
  const color = d3.scaleSequential(d3.interpolateViridis);

  // Create primary <g> element
  const g = d3
    .select("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  // Data strucure
  const partition = d3.partition().size([2 * Math.PI, radius]);

  // Find data root
  const root = d3.hierarchy(nodeData).sum(function (d) {
    return d.size;
  });

  // Size arcs
  partition(root);
  const arc = d3
    .arc()
    .startAngle(function (d) {
      return d.x0;
    })
    .endAngle(function (d) {
      return d.x1;
    })
    .innerRadius(function (d) {
      return d.y0;
    })
    .outerRadius(function (d) {
      return d.y1;
    });

  const slices = g.selectAll("g").data(root.descendants()).enter().append("g");
  slices
    .append("path")
    .attr("display", function (d) {
      return d.depth ? null : "none";
    })
    .attr("d", arc)
    .attr("class", "slice")
    .style("stroke", "#fff")
    .style("fill", function (d) {
      let currColor = color((d.children ? d : d.parent).data.colorValue);
      return currColor;
    });

		slices.append("svg:title") 
			.text(d => d.data.name)

  // slices
  //   .append("text") // <--1
  //   .filter(function (d) {
  //     return d.parent;
  //   }) // <--2
  //   .attr("transform", function (d) {
  //     // <--3
  //     return (
  //       "translate(" +
  //       arc.centroid(d) +
  //       ")rotate(" +
  //       computeTextRotation(d) +
  //       ")"
  //     );
  //   })
  //   .attr("dx", "-20") // <--4
  //   .attr("dy", ".5em") // <--5
  //   .text(function (d) {
	// 		console.log(d);
  //     return d.data.name;
  //   }); // <--6
};

function computeTextRotation(d) {
  var angle = ((d.x0 + d.x1) / Math.PI) * 90; // <-- 1

  // Avoid upside-down labels; labels aligned with slices
  return angle < 90 || angle > 270 ? angle : angle + 180; // <--2

  // Alternate label formatting; labels as spokes
  //return (angle < 180) ? angle - 90 : angle + 90;  // <-- 3
}

sunBurst();
// const factions = d3.csv(
//   "https://gist.githubusercontent.com/lefuller/378bb2d512cbbc81ddd66cb0c4a571bf/raw/884221966feb9a98fcc66b9e960ee11b68cb908e/Overall.csv",
//   d3.autoType
// );

// // const svg = d3.select("svg").attr("width", "1000").attr("height", "500");

// // const width = +svg.attr("width");
// // const height = +svg.attr("height");

// // const renderHrzBar = (data, x, y) => {
// //   // const xValue = (d) => d["Win %"];
// //   // const yValue = (d) => d.Faction;
// //   const xValue = x;
// //   const yValue = y;
// //   const margin = { top: 20, right: 20, bottom: 20, left: 180 };
// //   const innerWidth = width - margin.left - margin.right;
// //   const innerHeight = height - margin.top - margin.bottom;

// //   const xScale = d3
// //     .scaleLinear()
// //     .domain([0, d3.max(data, xValue)])
// //     .range([0, innerWidth]);

// //   const yScale = d3
// //     .scaleBand()
// //     .domain(data.map(yValue))
// //     .range([0, innerHeight])
// //     .padding(0.1);

// //   const g = svg
// //     .append("g")
// //     .attr("transform", `translate(${margin.left}, ${margin.top})`);

// //   g.append("g").call(d3.axisLeft(yScale));
// //   g.append("g")
// //     .call(d3.axisBottom(xScale))
// //     .attr("transform", `translate(0, ${innerHeight})`);

// //   g.selectAll("rect")
// //     .data(data)
// //     .enter()
// //     .append("rect")
// //     .attr("fill", ran)
// //     .attr("y", (d) => yScale(yValue(d)))
// //     .attr("width", (d) => xScale(xValue(d)))
// //     .attr("height", yScale.bandwidth());
// // };

// // subFactions.then((d) => {
// //   console.log(d);
// //   renderHrzBar(d, d => d.Faction, d => d.Chapter)
// // });

// // factions.then((d) => {
// //   console.log(d);
// //   renderHrzBar(
// //     d,
// //     (d) => d["Actual Win %"],
// //     (d) => d.Faction
// //   );
// // });
