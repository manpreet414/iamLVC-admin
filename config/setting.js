import moment from 'moment';

var config = {
  mailgun: {
    auth: {
      api_key: 'key-6081f600ed99c827b8ad0fdcd56e0bb3',
      domain: 'mg.novushealth.space'
    }
  }
}

exports.get = function(type) {
  return config[type];
}
