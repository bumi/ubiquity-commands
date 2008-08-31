CmdUtils.CreateCommand({
     name: "rails",
     takes: {"function": noun_arb_text},
     homepage: "http://Railslove.com",
     author: {name: "Michael Bumann", email: "michael@railslove.com"},
     description: "Search the rails documentation at apidock.com",
     execute: function(directObject)
     {
         var url = "http://apidock.com/rails/search?query="+ directObject.text;
         Utils.openUrlInBrowser(url);
     },
     preview: function(pblock, directObject)
     {
         var query = jQuery.trim(directObject.text);
         if(query.length <= 0)
         	return;
         pblock.innerHTML = "Search rails documentation for:" + query;
     }
 });