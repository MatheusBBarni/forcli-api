var model = require('../models/agency');

module.exports = {

    create : function (args) {
        return new model(args).save();
    },

    getById: function (id){
        return model.getById(id)
    },

    getAll : function () {
        return model.find()
    }

}