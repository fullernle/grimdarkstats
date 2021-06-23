import "./styles/index.css";
import * as d3 from "d3";
import * as d3plus from 'd3plus';
import { filterLimit } from "async";
import regeneratorRuntime from "regenerator-runtime";

const data = d3.csv(
  "https://gist.githubusercontent.com/lefuller/378bb2d512cbbc81ddd66cb0c4a571bf/raw/d3f649c3ba184d62000018a4227cf2905e78bf1a/subfactions.csv",
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
      // colorValue: colorValue,
    };

    d.forEach((row, i) => {
      if (row.Faction !== currFaction) {
        currFaction = row.Faction;
        filter.children.push(factionInfo);
        // colorValue += 0.025;

        factionInfo = {
          name: currFaction,
          children: [],
          // colorValue: colorValue,
        };
      }

      let chapterInfo = {
        name: row.Chapter,
        value: row["# Lists"],
        // colorValue: colorValue,
      };
      factionInfo.children.push(chapterInfo);

      if (!d[i + 1]) filter.children.push(factionInfo);
    });
  });
  return filter;
};

const sunBurst = async (data) => {
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

  slices.append("svg:title").text((d) => d.data.name);
};

// sunBurst(subFactionData);

const chart = async (nodeData) => {
  const partition = (data) => {
    const root = d3
      .hierarchy(data)
      .sum((d) => d.value)
      .sort((a, b) => b.value - a.value);
    return d3.partition().size([2 * Math.PI, root.height + 1])(root);
  };

  const format = d3.format(",d");

  let data = await filterFactions(nodeData);
  console.log(data);
  const width = 932;
  const radius = width / 6;
  const root = partition(data);
  const color = d3.scaleOrdinal(
    d3.quantize(d3.interpolateRainbow, data.children.length + 1)
  );

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
    .style("font", "10px sans-serif");

  const g = svg
    .append("g")
    .attr("transform", `translate(${width / 2},${width / 2})`);

  const path = g
    .append("g")
    .selectAll("path")
    .data(root.descendants())
    .join("path")
    .attr("fill", (d) => {
      while (d.depth > 1) d = d.parent;
      return color(d.data.name);
    })
    .attr("fill-opacity", (d) =>
      arcVisible(d.current) ? (d.children ? 0.6 : 0.4) : 0
    )
    .attr("d", (d) => arc(d.current));

  path
    .filter((d) => d.children)
    .style("cursor", "pointer")
    .on("click", clicked);

  // path.append("title").text(
  //   (d) =>
  //     `${d
  //       .ancestors()
  //       .map((d) => d.data.name)
  //       .reverse()
  //       .join("/")}\n${format(d.value)}`
  // );
  path.append("title").text((d) => d.data.name);

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
    .text((d) => {
      if (d.data.name) {
        let name = d.data.name.split(" ");
        name = name.join("\n");
				console.log(name);
        return name;
      } else {
				return d.data.name
			}
    });

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

    // Transition the data on all arcs, even the ones that aren’t visible,
    // so that if this transition is interrupted, entering arcs will start
    // the next transition from the desired position.
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
};

chart(data);
