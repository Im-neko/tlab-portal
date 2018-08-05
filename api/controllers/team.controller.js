const teamModel = require("../models/team.model");
const jwt = require('../config/jwt');

exports.getTeams = async (req, res) => { // {{{
  try{
    const limit = parseInt(req.query.limit, 10);
    const page = parseInt(req.query.page, 10);
    const data = await teamModel.find({deleted: false})
      .sort('-created')// 降順、最新順ソート
      .skip((page - 1) * limit)
      .limit(limit);
    if (!data.length) {throw [404, 'no teams']}
    res.json({message: 'success', data: {teams: data}, error: null});
  } catch (e) {
    console.error(e);
    res.status(e[0]||500).json({message: 'failed', data: null, error: ''+(e[1]||e)});
  }
} // }}}

exports.getTeamById = async (req, res) => { // {{{
  try{
    const idToken = req.params.id;
    const data = await teamModel.findOne({idToken: idToken, deleted: false});
    if (!data) {throw [404, 'no team']}
    res.json({message: 'success', data: {team: data}, error: null});
  } catch (e) {
    console.error(e);
    res.status(e[0]||500).json({message: 'failed', data: null, error: ''+(e[1]||e)});
  }
} // }}}

exports.postTeam = async (req, res) => { // {{{
  try{
    const r1 = await teamModel.findOne({
      idToken: req.body.idToken
    });
    if (r1) {throw [403, 'already exists', {teamId: r1._id}]}
    const body = req.body;
    const date = new Date().getTime();
    body.created = date;
    body.updated = date;
    body.deleted = false;
    const team = new teamModel(body);
    const r2 = await team.save();
    if (!r2) {throw [500, 'failed to post']}
    const jwtoken = jwt.signJWT({teamId: team._id, userId: null});
    const data = {
      teamId: team._id,
      jwtoken: jwtoken,
      ...body
    }
    res.json({message: 'success', data: data, error: null});
  } catch (e) {
    console.error(e);
    res.status(e[0]||500).json({message: 'failed', data: e[2] || null, error: ''+(e[1]||e)});
  }
} // }}}
