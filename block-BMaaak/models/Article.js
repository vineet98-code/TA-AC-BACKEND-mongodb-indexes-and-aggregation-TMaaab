var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var articleSchema = new Schema({
    title : { type: String, required: true },
    description :{ type: String },
    tags: [String],
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true},
    // Any time we store ObjectId of any other document, which belongs to some other models, we are going to use Schema.Types.ObjectId
 
    remark : [{ type: Schema.Types.ObjectId, ref: 'Remark' }],
        // whatever objectId is store here belongs to which model

}, {timestamps: true });

// compound indexes
articleSchema.index({'name': 1, 'email': 1},{unique: true});

// Multiple indexes
// Multikey indexes support efficient queries against only to array fields.
articleSchema.index({'tags': 1 });

// Text indexes support full text search
articleSchema.index({'title': 'text', 'description': 'text'});

module.exports = mongoose.model('Article', articleSchema); // model is equivalent to colletions