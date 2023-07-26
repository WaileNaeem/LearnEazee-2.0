let baseUrl = 'https://api-m.sandbox.paypal.com';
const base64 = require('base-64');

let clientID =
  'AXGJn6H-tk9qIqjCxqhi9TYLdI9RAUIYIeHsub1_YwuOwgnGKKoUzwMpb57MpScemQMBwAOYCzGBCZ_P';
let secretKey =
  'ECs02Vv2nYHXNPYT-0vYwSYeak1qB4uzDOFPLTAVdFZWusjUxur2PcgcLWlXdRtPVz18y046VB5NU1gR';

const generateToken = () => {
  let headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');
  headers.append('Authorization', 'Basic ' + base64.encode());
};
