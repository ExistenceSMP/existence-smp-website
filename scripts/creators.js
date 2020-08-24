
let creators = members.filter(m => m.creator).sort((a, b) => a.name.localeCompare(b.name));

for(let creator of creators) {
	let node = document.importNode(document.querySelector("template.creator").content, true).querySelector("*");

	console.log(creator);
	node.querySelector(".icon").src = creator.icon || `/images/members/${creator.name}.png`;
	node.querySelector(".title").innerText = creator.name;

	function handleSocial(social) {
		if(!creator[social]) {
			node.querySelector(`.social[data-social="${social}"]`).remove();
		} else {
			node.querySelector(`.social[data-social="${social}"]`).href = creator[social];
			node.querySelector(`.social[data-social="${social}"] span`).innerText = creator[`${social}-text`] || creator[social].split("/").filter(Boolean).pop();
		}
	}

	handleSocial("twitch");
	handleSocial("twitter");
	handleSocial("youtube");
	handleSocial("instagram");

	document.querySelector(".creators").appendChild(node);
}
