import "./styles/index.css";
import * as d3 from "d3";
import { filterLimit } from "async";
import regeneratorRuntime from "regenerator-runtime";

const data = d3.csv(
  "https://gist.githubusercontent.com/lefuller/378bb2d512cbbc81ddd66cb0c4a571bf/raw/34c7fb6bfb9970203601ab6c2de568be734859df/subfactions.csv",
  d3.autoType
);

const playerData = d3.csv(
  "https://gist.githubusercontent.com/lefuller/378bb2d512cbbc81ddd66cb0c4a571bf/raw/d58f2367dd8c0448e95276e8b5bea5560ab6c57c/Overall.csv",
  d3.autoType
);

const factionData = d3.csv(
  "https://gist.githubusercontent.com/lefuller/378bb2d512cbbc81ddd66cb0c4a571bf/raw/d58f2367dd8c0448e95276e8b5bea5560ab6c57c/Overall.csv",
  d3.autoType
);

const factionColors = {
  "Adepta Soroitas": "#3D3C3F",
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

const sumValues = (arrayOfObjects) => {
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

const filterFactions = async (data) => {
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


const drawSunburst = async (nodeData) => {
  let data = await filterFactions(nodeData);
  console.log(data);
  const totalLists = sumValues(data.children);

  const partition = (data) => {
    const root = d3
      .hierarchy(data)
      .sum((d) => d.value)
      .sort((a, b) => b.value - a.value);
    return d3.partition().size([2 * Math.PI, root.height + 1])(root);
  };

  function arcVisible(d) {
    return d.y1 <= 3 && d.y0 >= 1 && d.x1 > d.x0;
  }

  function labelVisible(d) {
    return d.y1 <= 2.5 && d.y0 >= 1 && (d.y1 - d.y0) * (d.x1 - d.x0) > 0.03;
  }

  function labelTransform(d) {
    const x = (((d.x0 + d.x1) / 2) * 180) / Math.PI;
    const y = ((d.y0 + d.y1) / 2) * radius;
    return `rotate(${x - 90}) translate(${y},0) rotate(${x < 180 ? 0 : 180})`;
  }

  const format = d3.format(",d");
  const width = 932;
  const radius = width / 6;
  const root = partition(data);

  const arc = d3
    .arc()
    .startAngle((d) => d.x0)
    .endAngle((d) => d.x1)
    .padAngle((d) => Math.min((d.x1 - d.x0) / 2, 0.005))
    .padRadius(radius * 1.5)
    .innerRadius((d) => d.y0 * radius)
    .outerRadius((d) => Math.max(d.y0 * radius, d.y1 * radius - 1));

  root.each((d) => (d.current = d));

  const svg = d3
    .select("svg")
    .attr("width", "1000")
    .attr("height", "1000")
    .attr("viewBox", [0, 0, width, width])
    .style("font", "10px Graphik");

  const g = svg
    .append("g")
    .attr("transform", `translate(${width / 2},${width / 2})`);

  const path = g
    .append("g")
    .selectAll("path")
    .data(root.descendants())
    .join("path")
    .attr("class", "slice")
    .attr("fill", (d) => d.data.colorValue)
    .attr("fill-opacity", (d) =>
      arcVisible(d.current) ? (d.children ? 0.6 : 0.4) : 0
    )
    .attr("d", (d) => arc(d.current));

  path
    .filter((d) => d.children)
    .style("cursor", "pointer")
    .on("click", clicked);

  path.append("title").text((d) => {
    let title;
    if (d.data.win) {
      title = d.data.name + "\n" + "Win Rate: " + d.data.win + "%";
    } else {
      title = d.data.name;
    }

    return title;
  });

  const label = g
    .append("g")
    .attr("pointer-events", "none")
    .attr("text-anchor", "middle")
    .style("user-select", "none")
    .selectAll("text")
    .data(root.descendants().slice(1))
    .join("text")
    .attr("dy", "0.35em")
    .attr("fill-opacity", (d) => +labelVisible(d.current))
    .attr("transform", (d) => labelTransform(d.current))
    .attr("class", "text-wrap")
    .text((d) => d.data.name);

  const parent = g
    .append("circle")
    .datum(root)
    .attr("r", radius)
    .attr("fill", "none")
    .attr("pointer-events", "all")
    .on("click", clicked);

  function clicked(event, p) {
    parent.datum(p.parent || root);

    root.each(
      (d) =>
        (d.target = {
          x0:
            Math.max(0, Math.min(1, (d.x0 - p.x0) / (p.x1 - p.x0))) *
            2 *
            Math.PI,
          x1:
            Math.max(0, Math.min(1, (d.x1 - p.x0) / (p.x1 - p.x0))) *
            2 *
            Math.PI,
          y0: Math.max(0, d.y0 - p.depth),
          y1: Math.max(0, d.y1 - p.depth),
        })
    );

    const t = g.transition().duration(750);

    path
      .transition(t)
      .tween("data", (d) => {
        const i = d3.interpolate(d.current, d.target);
        return (t) => (d.current = i(t));
      })
      .filter(function (d) {
        return +this.getAttribute("fill-opacity") || arcVisible(d.target);
      })
      .attr("fill-opacity", (d) =>
        arcVisible(d.target) ? (d.children ? 0.6 : 0.4) : 0
      )
      .attrTween("d", (d) => () => arc(d.current));

    label
      .filter(function (d) {
        return +this.getAttribute("fill-opacity") || labelVisible(d.target);
      })
      .transition(t)
      .attr("fill-opacity", (d) => +labelVisible(d.target))
      .attrTween("transform", (d) => () => labelTransform(d.current));
  }
};

drawSunburst(data);
