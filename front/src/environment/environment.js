if (process.env.NODE_ENV === 'development') {
  console.log('dev mode');
  exports.api_host = 'http://localhost:3000/v1/'
  exports.debug = true;
  exports.slack_uri_1 = 'https://slack.com/oauth/authorize?client_id=229852700674.372955700017&scope=identity.avatar,identity.basic,identity.team'
}else{
  // 今はAPIサーバ建てて無いので一旦ダミー
  exports.api_host = 'https://api.keioac.jp/v1/'
  exports.debug = false;
  exports.slack_uri_1 = 'https://slack.com/oauth/authorize?client_id=229852700674.372955700017&scope=identity.avatar,identity.basic,identity.team'
}
