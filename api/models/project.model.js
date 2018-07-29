const mongoose = require('../config/db');
const Schema = mongoose.Schema;


const projectSchema = new Schema({
  teamId: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true
  },
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true
  },
  relation: {
    // projectId
    type: [mongoose.SchemaTypes.ObjectId]
  },
  text: {
    type: String,
    required: true
  },
  images: {
    // imageurl
    1: {
      type: String
    },
    2: {
      type: String
    },
    3: {
      type: String
    }
  },
  tags: {
    type: [mongoose.SchemaTypes.ObjectId]
  },
  categories: {
    type: [mongoose.SchemaTypes.ObjectId]
  },
  created: {
    type: Number,
    required: true
  },
  updated: {
    type: Number,
    required: true
  }
},{ minimize: false });

module.exports = mongoose.model("project", projectSchema);
