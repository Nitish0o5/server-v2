import dns from 'dns';

console.log("Attempting to resolve SRV record for _mongodb._tcp.cluster0.lfxg4md.mongodb.net");

dns.resolveSrv('_mongodb._tcp.cluster0.lfxg4md.mongodb.net', (err, addresses) => {
    if (err) {
        console.error("DNS Resolution Error:", err);
    } else {
        console.log("SRV Records found:", addresses);
    }
});
