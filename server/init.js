// Meteor.startup(function () {
// 	// init items collection
// 	if (Items.find().count() == 0) {
// 		Items.insert({name: 'My Item', uploads: [] });
// 	};

// 	UploadServer.init({
// 		tmpDir: process.env.PWD + '/.uploads/tmp',
// 		uploadDir: process.env.PWD + '/.uploads',
// 		checkCreateDirectories: true, //create the directories for you
// 		getDirectory: function (fileInfo, formData) {
// 			//create a sub-directory in the uploadDir based on the content typte (e.g. 'images')
// 			if (formData && formData.directoryName != null) {
// 				return formData.directoryName;
// 			}
// 			return "";
// 		},

// 		getFileName: function (fileInfo, formData) {
// 			if (formData && formData.prefix != null) {
// 				return formData.prefix + '_' + fileInfo.name;
// 			}
// 			return fileInfo.name
// 		},

// 		finished: function (fileInfo, formData) {
// 			// perform a disk operation
// 			if (formData && formData._id != null) {
// 				Items.update({_id: formData._id}, { $push: { uploads: fileInfo }});
// 			}
// 		}
// 	});
// });

// Remote url for mongodb set up as environment
//Meteor.startup(function () {
//	process.env.MONGO_URL = 'mongodb://root:edubab8Iby@proximus.modulusmongo.net:27017/monUso7v?autoReconnect=true&connectTimeoutMS=60000';
//});
