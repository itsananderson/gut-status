var stati = [
    'irritable',
    'gassy',
    'diuretic',
    'constipated',
    'twisted',
    'cramped'
    // Have another idea? Submit a pull request or issue
    // https://github.com/itsananderson/gut-status/issues
];

function getStatus() {
    var index = Math.floor(Math.random() * stati.length);
    return stati[index];
}

module.exports = {
    stati: stati,
    getStatus: getStatus
};
