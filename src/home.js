export const drawHome = () => {
  let home = document.querySelector(".content");
  let div = document.createElement("div");
  home.append(div);
	div.classList.add("greeting")

  let text1 = document.createTextNode("Welcome to Grimdark Stats!");
  let text2 = document.createTextNode(
    "Grimdark stats seeks to provide visualizations for the data collected over by the guys at 40kstats.com"
  );
  let text3 = document.createTextNode(
    "Instructions: Please click on the headings to go to the relevant visualization"
  );
	
	div.appendChild(text1);
	div.appendChild(text2);

	div.appendChild(text3);
};