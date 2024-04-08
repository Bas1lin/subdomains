// change the file to [sub].js
export default {
    owner: {
        // your github username
        user: "bas1lin",
        // your github email
        email: "nevergona@eurocuck.pw",
    },
    records: [
        // can include multiple records, if some of them conflict, may be overwritten
        {
            // type of DNS record
            type: "CNAME",
            record: "cname.vercel-dns.com.",
            // using Cloudflare CDN
            proxied: true,
            // TTL, (s), must be between 60 and 86400
            ttl: 60,
        },
    ]
}
