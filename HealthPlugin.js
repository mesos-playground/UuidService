module.exports = function HealthPlugin(opts) {

    this.add('role:health,cmd:ping,ver:1', ping_v1);

    return { name: "HealthPlugin" }

    function ping_v1(args, done) {
        done({ ack: "pong" });
    }
}
