export default async function handler(request, res) {

    const type = [
    {
    // "image": "'https://upload.wikimedia.org/wikipedia/commons/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg'",
    "title": "Technology & information",
    "body": "APA Style Citations: Introduction",
    "author": "Creator: Victoria Raish"
    
    
    },
    
    
    {
    // "image": "'https://upload.wikimedia.org/wikipedia/commons/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg'",
    "title": "Technology & information",
    "body": "APA Style Citations: Introduction",
    "author": "Creator: Victoria Raish"
    
    
    },
    
    
    {
    // "image": "'https://upload.wikimedia.org/wikipedia/commons/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg'",
    "title": "Technology & information",
    "body": "APA Style Citations: Introduction",
    "author": "Creator: Victoria Raish"
    
    
    }
    ];
    
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(type);
    }