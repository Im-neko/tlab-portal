const mongoose = require('../config/db');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  idToken: {
    // slackからもらえるid
    type: String,
    required: true,
  },
  domain: {
    type:String,
    required: true
  },
  team: {
    display_name: {
      // 表示名
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    profile: {
      type: String
    }
  },
  users: {
   type: [mongoose.SchemaTypes.ObjectId]
  },
  articles: {
    type: [mongoose.SchemaTypes.ObjectId]
  },
  created: {
    // unixtime
    type: Number,
    required: true
  },
  updated: {
    // unixtime
    type: Number,
    required: true
  },
  deleted: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model('Team', teamSchema);
