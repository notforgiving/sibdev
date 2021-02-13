const { model, Schema } = require("mongoose");
var ObjectId = Schema.ObjectId;

const Request = new Schema({
  text: { type: String, required: true },
  name: { type: String, required: true },
  sort: { type: String, required: true },
  value: { type: Number, required: true },
  user: {type: ObjectId, ref: 'User'},
});

module.exports = model('Request',Request)