import { DpsnClient } from 'dpsn-client';
// Initialize DPSN client
const dpsnClient = new DpsnClient(
  "betanet.dpsn.org",
  'YOUR_ACCESS_TOKEN'
);

// Optional:Setup event handlers
dpsnClient.on('connect', (res) => {
  console.log('Connected to DPSN Client');
});

dpsnClient.on('error', (error) => {
  console.error('DPSN client error');
});

// Subscribe to topic
(async()=>{await dpsnClient.subscribe("TOPIC_ID_TO_SUBSCRIBE", (message) => {
  console.log("Message received ",message);
})

})();