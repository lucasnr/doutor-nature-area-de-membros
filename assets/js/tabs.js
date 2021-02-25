const tabs = document.querySelectorAll(".tabs");
tabs.forEach((tab) => {
	const items = tab.querySelectorAll("li");
	const links = Array.from(tab.querySelectorAll("li a"));
	const targets = document.querySelectorAll(
		links.map((link) => link.getAttribute("href"))
	);

	let active = 0;

	const indicator = document.createElement("div");
	indicator.classList.add("indicator");
	configureIndicator();
	tab.appendChild(indicator);

	function configureIndicator() {
		//calculate distance to the active
		let distance = 0;
		for (let index = 0; index < active; index++) {
			distance += items[index].offsetWidth;
		}

		indicator.style.left = distance + "px";
		indicator.style.width = items[active].offsetWidth + "px";
	}

	function setActive(newValue) {
		// removes current active classes
		items[active].classList.remove("active");
		targets[active].classList.remove("active");

		active = newValue;
		configureIndicator();

		// adds active classes
		items[active].classList.add("active");
		targets[active].classList.add("active");
	}

	links.forEach((link, index) => {
		link.onclick = (event) => {
			event.preventDefault();
			if (active == index) return;

			setActive(index);
		};
	});

	const prevOnResize = window.onresize;
	window.onresize = () => {
		if (prevOnResize) prevOnResize();

		configureIndicator();
	};
});
