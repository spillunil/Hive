Posts = new Meteor.Collection('posts');

Posts.allow({
	update: function (userId, post) { return ownsDocument(userId, post); },
	remove: function (userId, post) { return ownsDocument(userId, post); }
});

/*
Permissions for editing the postings
Posts.deny({
	update: function (userId, post, fieldNames) {
		// may only edit the following fields:
		return (_.without(fieldNames, ))
	}
})
*/

validatePost = function (post) {
	var errors = {};

	if (!post.title) {
		errors.title = "Spécifier un titre";
	};

	if (!post.bien) {
		errors.bien = "Spécifier un bien";
	};

	if (!post.quantity) {
		errors.quantity = "Spécifier une quantité";
	};

	if (!post.unity) {
		errors.unity = "Spécifier une unité";
	};

	if (!post.description) {
		errors.description = "Spécifier une description";
	};

	if (!post.region) {
		errors.region = "Spécifier une région";
	};

	if (!post.pays) {
		errors.pays = "Spécifier un pays";
	};

	if (!post.category) {
		errors.category = "Please select a category";
	};




	return errors;
}


Meteor.methods({
	postInsert: function (postAttributes) {
		check(this.userId, String);
		check(postAttributes, {
			title: String,
			image: String,
			quantity: String,
			unity: String,
			category: String,
			description: String,
			region: String,
			pays: String,
			bien: String,
			fournisseur1: String,
			fournisseur2: String,
			fournisseur3: String




		});

		var errors = validatePost(postAttributes);
		if (errors.title || errors.category || errors.quantity || errors.unity || errors.description || errors.region || errors.pays || errors.bien
			|| errors.fournisseur1 || errors.fournisseur2 || errors.fournisseur3   ) {
			throw new Meteor.Error('invalid-post', "Please fill in all the reqired fields");
		};

		var user = Meteor.user();
		var post = _.extend(postAttributes, {
			userId: user._id,
			author: user.username,
			submitted: new Date(),
			flags: 0
		});

		var postId = Posts.insert(post);

		return {
			_id: postId
		};
	},

	flag: function (postId) {
		var updated = Posts.update(postId, {$inc: {flags: 1}});
	},

	deletePost: function (postId) {
		check(postId, String);

		var toDelete = Posts.findOne(postId);

		if (toDelete == null) {
			alert('no posting found');
		};

		// Posts.delete(toDelete.path);
		Posts.remove({ _id: postId });
	}

	// flags: function (postId) {}
});
