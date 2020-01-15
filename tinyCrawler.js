(async function(){
var links = new Set();
var docs = [];
var crawled = new Set();
var crawlLimit = 100;
function getLinks(doc){
 [...doc.querySelectorAll("a")].forEach(function(a){
  a.href ? links.add(a.href.split("#")[0]) : null;
 })
}
async function parseDoc(response){
 var htmlString = await response.text();
 var parser = new DOMParser();
 return parser.parseFromString(htmlString, "text/html");
}
await getLinks(document);
var linkIterator = links.values();
for await (var link of linkIterator){
      try{
      if(link.indexOf(window.location.origin) > -1){
		var response = await fetch(link);
		if (response.status == 200) {
			crawled.add(link);
			var doc = await parseDoc(response);
            var {type,url,status,ok,redirected} = response;
            docs.push({type,url,status,ok,redirected,doc,title:doc.title});
			await getLinks(doc);
		} 
		else {console.log("ERROR: Server returned status:", response.status);} //end if/else response.status == 200
	  } //end if window.location.origin
      }catch(err){console.log({err})}
      crawled.size % 10 == 0 ? console.log({crawlLimit,crawled:crawled.size}) : null; //log progess every 10 links
      if(crawlLimit <= crawled.size){break}
   }
 console.log({links,docs})
})()
