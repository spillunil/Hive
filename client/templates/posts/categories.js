var categories = [
	{
		name: "Aliments",
		value: "aliments",
		src: "resources/aliments.jpg"
	},
	{
		name: "Outillage",
		value: "outillage",
		src: "resources/outillage.jpg"
	},
	{
		name: "Jardin",
		value: "jardin",
		src: "resources/jardin.jpg"
	},
	{
		name: "Bricolage",
		value: "bricolage",
		src: "resources/bricolage.jpg"
	},
	{
		name: "Mécanique",
		value: "mecanique",
		src: "resources/mecanique.jpg"
	},
	{
		name: "Divers",
		value: "divers",
		src: "resources/divers.png"
	}
];

Template.categories.helpers({
	categories: categories
});

Template.categories.events({
	'click .thumbnail': function (e) {
		return Session.set('category', e.target.id);
	}
});
