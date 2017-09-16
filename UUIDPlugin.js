const uuid = require('uuid');

module.exports = function UUIDPlugin(opts) {

    var seneca = this;

    seneca.add('role:uuid,cmd:generate,ver:1', generate_v1);

    return { name: 'UUIDPlugin' };

    // ------------------------------------------------------------------------

    function generate_v1(args, done) {
        done({ uuid: uuid() });
    }
}
