export const drawHome = () => {
  const home = document.querySelector(".content");

  const div = document.createElement("div");
  home.append(div);
  div.classList.add("greeting");

	const img = document.createElement("img");
	img.setAttribute(
    "src",
    "./src/images/40klogo.png"
  );
	img.setAttribute("alt", "Warhammer 40k Logo")
	img.classList.add("logo-40k");
	div.append(img);

  const text = document.createElement("p");
  text.classList.add("greeting-text");
  div.append(text);

  const header = document.createElement("header");
  header.classList.add("greeting-header");
  const headerText = document.createTextNode("Welcome to Grimdark Stats!");
  header.append(headerText);
  text.append(header);

  const text2 = document.createTextNode(
    "Grimdark stats seeks to provide visualizations for the data collected over by the guys at 40kstats.com"
  );

	const link = document.createElement("a");
	link.setAttribute("href", "https://www.40kstats.com/");
  text.appendChild(text2);

  const section = document.createElement("section");
  section.classList.add("greeting-instructions");
  const instructions = document.createTextNode(
    "Instructions: Please click on the headings to go to the relevant visualization"
  );
  section.append(instructions);
	text.append(section);


};
