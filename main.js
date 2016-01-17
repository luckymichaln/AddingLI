function add (adding) {
	var li = document.createElement("li")
	var ul = document.getElementsByTagName("ul")[0];
	li.innerHTML="<li>Developer</li>";
	ul.appendChild(li);
}

add("li");