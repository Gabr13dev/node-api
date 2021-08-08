const mongoose = require('mongoose');

try {
    await mongoose.connect('mongodb://localhost:27017/noderest', { useNewUrlParser: true });
  } catch (error) {
    handleError(error);
  }
    
mongoose.Promise = global.Promise;

module.exports = mongoose;