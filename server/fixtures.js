if (Posts.find().count() === 0) {
	
	for (var i = 0; i < 10; i++) {
		Posts.insert({
			author: 'Guy ' + i,
			number: '+25512345678',
			title: 'post#' + i,
			category: 'community',
			image: 'resources/blue-camera-icon.png',
			description: 'This is the description for this post!',
			price: '300',
			city: 'Dar-Es-Salaam',
			region: 'Mbezi',
			flags: 0

		});
	};

	for (var i = 0; i < 10; i++) {
		Posts.insert({
			author: 'Jim ' + i,
			number: '+25512345678',
			title: 'post#' + i,
			category: 'for-sale',
			image: 'resources/blue-camera-icon.png',
			description: 'This is the description for this post!',
			price: '500,000',
			city: 'Arusha',
			region: 'Njiro',
			flags: 0

		});
	};

	for (var i = 0; i < 10; i++) {
		Posts.insert({
			author: 'Jack ' + i,
			number: '+25512345678',
			title: 'post#' + i,
			category: 'housing',
			image: 'resources/blue-camera-icon.png',
			description: 'This is the description for this post!',
			price: '3000,000',
			city: 'Arusha',
			region: 'Njiro',
			flags: 0

		});
	};
}