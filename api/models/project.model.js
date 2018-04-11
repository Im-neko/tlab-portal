const mongoose = require('../db');
const Schema = mongoose.Schema;


const projectSchema = new Schema({
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true
  },
  project_code: {
    type: Number
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
  areas:{
    type: [mongoose.SchemaTypes.ObjectId],
    required: true
  },
  countries: {
    type: [mongoose.SchemaTypes.ObjectId],
    required: true
  },
  tags: {
    type: [mongoose.SchemaTypes.ObjectId]
  },
  categories: {
    type: [mongoose.SchemaTypes.ObjectId]
  },
  celebId: {
    type: [mongoose.SchemaTypes.ObjectId]
  },
  createdAt: {
    type: Number,
    required: true
  },
  updatedAt: {
    type: Number,
    required: true
  }
},{ minimize: false });

module.exports = mongoose.model("project", projectSchema);
