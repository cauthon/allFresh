var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var messageSchema   = new Schema({
    text: String,
    user: String,
    //Edit_moo
    item_name: String,
    item_category: String,
    item_exp_date: String,
    item_remindme_at: String,
    item_notes: String
    //
});

module.exports = mongoose.model('Message', messageSchema);