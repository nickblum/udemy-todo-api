var configValues = require('./config.json');

module.exports = {
    getDbConnectionString: function(){
        return 'mongodb://' + configValues.uname + ":" 
            + configValues.pwd + "@127.0.0.1:27017/tododb"
    }

}