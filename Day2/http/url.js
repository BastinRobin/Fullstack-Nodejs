var url = require('url');
var address = `https://answers.microsoft.com/en-us/msoffice/forum/msoffice_o365admin-mso_other-mso_o365b/download-team-meeting-recording/3a934f59-0785-4474-819d-cf2c161053dc?name=robin&gender=male&dept=cse`;

var q = url.parse(address, true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);
console.log(q.query);