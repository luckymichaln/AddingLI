function add (adding) {
	var li = document.createElement("li")
	var ul = document.getElementsByTagName("ul")[0];
	li.innerText = "Developer";
	ul.appendChild(li);
}

add("li");

/*function addNew (adding2) {
	var ul = document.getElementsByTagName("ul")[0] += ul.innerText = "<li>Developer</li>"
	ul.appendChild(li);
}

addNew("li");*/