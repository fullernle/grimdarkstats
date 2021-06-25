export const drawHome = () => {
  const home = document.querySelector(".content");

  const div = document.createElement("div");
  home.append(div);
  div.classList.add("greeting");

  const img = document.createElement("img");
  img.setAttribute("src", "./src/images/40klogo.png");
  img.setAttribute("alt", "Warhammer 40k Logo");
  img.classList.add("logo-40k");
  div.append(img);

  const wrapper = document.createElement("div");
  wrapper.classList.add("greeting-text-wrapper");
  div.append(wrapper);

  const header = document.createElement("header");
  header.classList.add("greeting-header");
  const headerText = document.createTextNode("Welcome to Grimdark Stats!");
  header.append(headerText);
  wrapper.append(header);

  const text = document.createElement("p");
  text.classList.add("greeting-text");
  wrapper.append(text);
  const text2 =
    "Grimdark stats seeks to provide visualizations for the data collected over by the guys at ";

  const link = document.createElement("a");
  link.setAttribute("href", "https://www.40kstats.com/");
  link.append("40kstats");
  text.append(text2);
  text.append(link);

  const section = document.createElement("section");
  section.classList.add("greeting-instructions");
  const instructions = document.createTextNode("Instructions:");
  section.append(instructions);

  const sectionText = document.createElement("p");
  sectionText.classList.add("greeting-instructions-text");
  const lineBreak1 = document.createElement("br");
  const lineBreak2 = document.createElement("br");
  const lineBreak3 = document.createElement("br");
  const lineBreak4 = document.createElement("br");
  const lineBreak5 = document.createElement("br");
  const instText1 =
    "Please use the navigation bar to peruse the visualizations";
  const instText2 =
    "Hover over visualizations to gain more detailed information";
  const instText3 = "Sunburst:";
  const instText4 = "Click on center slices to expand breakdown of subfactions";
  const instText5 = "Percentages:";
  const instText6 =
    "Click on percentages to be taken to a detailed breakdown of each factions wins";
  sectionText.append(instText1);
  sectionText.append(lineBreak1);
  sectionText.append(instText2);
  sectionText.append(lineBreak2);
  sectionText.append(instText3);
  sectionText.append(lineBreak3);
  sectionText.append(instText4);
  sectionText.append(lineBreak4);
  sectionText.append(instText5);
  sectionText.append(lineBreak5);
  sectionText.append(instText6);

  section.append(sectionText);

  wrapper.append(section);
};
