Template.postPage.helpers({
	src: function () {
		if (this.type.indexOf('image') >= 0) {
			return 'upload/' + this.path;
		} else {
			return 'file_icon.png';
		}
	},
	category: function () {
		return Session.get('category');
	}
});

Template.postPage.events({
	'change #flag': function (e) {
		Meteor.call('flag', this._id);
		var flagged = document.getElementById('flag');
		flagged.setAttribute("disabled", "true");
	}
});
//
// Template.participation.events({
//
// 	'submit .participation': function (e) {
// 		e.preventDefault();
//
// 	var participation: $(e.target).find('[name=participation]').val()
// 	var
//
// 	Posts.update(thisPostId, {$set: postUpdate}, function(error) {
// 		if (error) {
// 			//display the error to the user
// 			alert('error');
// 		}else {
// 			Router.go('postPage', {_id: thisPostId});
// 		}
// 	});
//
// });
