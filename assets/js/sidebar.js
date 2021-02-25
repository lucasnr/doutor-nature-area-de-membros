(() => {
	const links = document.querySelectorAll(".sidebar .sidebar-item-dropdown a");
	links.forEach((link) => {
		link.onclick = (event) => {
			event.preventDefault();
			link.parentElement.classList.toggle("active");
		};
	});

	const toggleSidebar = () => {
		document.body.classList.toggle("sidebar-active");
	};

	const menu = document.querySelector("#sidebar-toggler");
	menu.onclick = toggleSidebar;
})();
