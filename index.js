var util = require('util');

var stati = [
    'irritable',
    'gassy',
    'diuretic',
    'constipated',
    'twisted',
    'cramped',
    'surly',
    'churlish',
    'hungry',
    'famished',
    'nauseous'
    // Have another idea? Submit a pull request or issue
    // https://github.com/itsananderson/gut-status/issues
];

function getStatus() {
    var index = Math.floor(Math.random() * stati.length);
    return util.format('A little %s, actually. Yours?', stati[index]);
}

module.exports = {
    stati: stati,
    getStatus: getStatus
};
