import {DpsnClient} from 'dpsn-client';

const dpsnClient = new DpsnClient("betanet.dpsn.org", "YOUR_ACCESS_TOKEN");

dpsnClient.on('connect', (res) => {
  console.log('[CONNECT LOG]', res);
});
dpsnClient.on('error', (error) => {
  console.log('[ERROR LOG]', error);
});
dpsnClient.on('publish', (res) => {
  console.log('[PUBLISH LOG]', res);
});
(async () => {
await dpsnClient.publish('YOUR_TOPIC_ID', 'your json/string data');

})();