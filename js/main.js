// Navbar burger menu
function collapseNavbar() {
	let navLinks = document.querySelector(".nav__links");
	let burgerMenu = document.querySelector(".burger-menu");
	navLinks.classList.toggle("collapsed");
	burgerMenu.classList.toggle("active");
}

// Commands search bar
function searchCommand() {
	let inputText = document.querySelector("#search-commands").value;
	let commands = document.querySelectorAll(".command");
	inputText = inputText.toLowerCase();

	// Lazy solution I came up with?
	commands.forEach(cmd => {
		let cmdClasses = cmd.classList;
		let children = cmd.children;

		if (!children[0].innerHTML.toLowerCase().includes(inputText) &&
			!children[1].innerHTML.toLowerCase().includes(inputText)) {
				if (!cmdClasses.contains("hidden"))
					cmdClasses.add("hidden");
		} else cmdClasses.remove("hidden");
	});
}
