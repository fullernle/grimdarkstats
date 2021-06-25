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
  wrapper.append(text);
	
	const greetingText = document.createElement("span");
  greetingText.classList.add("greeting-text");
  const text2 =
    "Grimdark stats seeks to provide visualizations for the data collected over by the guys at ";

	greetingText.append(text2);
  const link = document.createElement("a");
  link.setAttribute("href", "https://www.40kstats.com/");
  link.append("40kstats.com");
	greetingText.append(link);
	text.append(greetingText);

  const section = document.createElement("section");
  section.classList.add("greeting-instructions");

	const instrHeader = document.createElement("header");
	instrHeader.classList.add("instruction-header");
  const instructions = document.createTextNode("Instructions:");
	instrHeader.append(instructions);
  section.append(instrHeader);

  const sectionText = document.createElement("ul");
  sectionText.classList.add("greeting-instructions-text");

	const li1 = document.createElement("li");
	const li2 = document.createElement("li");
	const li3 = document.createElement("li");
	li3.classList.add("li-header");
	const li4 = document.createElement("li");
	const li5 = document.createElement("li");
	li5.classList.add("li-header");
	const li6 = document.createElement("li");

  const instText1 =
    "Please use the navigation bar to peruse the visualizations";
  const instText2 =
    "Hover over visualizations to gain more detailed information";
  const instText3 = "Most Commonly Played Factions:";
  const instText4 = "Click on center slices to expand breakdown of subfactions";
  const instText5 = "Faction Win Rates:";
  const instText6 =
    "Click on percentages to be taken to a breakdown of each Faction's wins";
	li1.append(instText1);
	li2.append(instText2);
	li3.append(instText3);
	li4.append(instText4);
	li5.append(instText5);
	li6.append(instText6);

  sectionText.append(li1);
  sectionText.append(li2);
  sectionText.append(li3);
  sectionText.append(li4);
  sectionText.append(li5);
  sectionText.append(li6);

  section.append(sectionText);
  wrapper.append(section);


	const dateInfo = document.createElement("footer"); 
	dateInfo.append("Data taken on 06.21.2021");
	wrapper.append(dateInfo);
};
