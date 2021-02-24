const filters = document.querySelectorAll(".filters");
filters.forEach((filter) => {
	let active = 0;
	const items = filter.querySelectorAll("li");
	const links = filter.querySelectorAll("li a");
	links.forEach((link, index) => {
		link.onclick = (event) => {
			event.preventDefault();

			items[active].classList.toggle("active");
			active = index;
			items[active].classList.toggle("active");
		};
	});
});
