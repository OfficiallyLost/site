const mongoose = require('mongoose');
module.exports = mongoose.connect(`mongodb://lost:8a03d445630c1e21e3be29302cb73c37b37ea05f@localhost:27017/lost-site?authSource=lost-site`, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});
