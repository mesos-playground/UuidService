const Seneca = require('seneca');

var app = Seneca();

app.use("UUIDPlugin");
app.use("HealthPlugin");

console.log("OK");

app.listen({
    //type: 'tcp',
    port: 3001,
    pin: ['role:uuid','role:health']
}, ()=>console.log("Ready"));
