export default async function handler(request, res) {
    const search = request.query.search || '';

    var types = [
    {
    
        "title": "Technology & information",
        "body": "APA Style Citations: Introduction",
        "icon": "save",
        "author": "Creator: Victoria Raish"
    
    
    },
    
    
    {
    
    "title": "Professional Skills",
    "body": "IST Careers- Meet a Coach - level 2",
    "icon": "save",
    "author": "Creator: Rita Griffith"
    
    
    },
    
    
    {
   
    "title": "Agriculture and Natural Resources",
    "body": "Treat Yourself",
    "icon": "save",
    "author": "Creator: Allain Daigle"
    
    
    },

    {
   
     "title": "Technology & information",
    "body": "Savy Searcher",
    "icon": "save",
    "author": "Creator: Emily Remlind"
    
    
    }
    ];
    types.map((type) => {
        type.index = type.title.toLowerCase() + " " + type.body.toLowerCase() + " " + type.author.toLowerCase();
    }); 
    types = types.filter((type) => {
        return type.index.indexOf(search.toLowerCase()) > -1;
      });

    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader( 'Access-Control-Allow-Methods',
    'GET,OPTIONS,PATCH,DELETE,POST,PUT'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
  res.json(types);
}