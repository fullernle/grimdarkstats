import "./styles/index.scss";

const data = d3.csv(
  "https://raw.githubusercontent.com/lefuller/grimdarkstats/factions-graph/data/2020data.csv"
);

data.then((d) => {
  console.log(d);
  let factions = d.filter((row) => {
    return row.Faction === "Adepta Sororitas";
  });

  console.log(factions);
});
