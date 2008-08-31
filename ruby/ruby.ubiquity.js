CmdUtils.CreateCommand({
     name: "ruby",
     takes: {"function": noun_arb_text},
     icon: "http://ruby-doc.org/favicon.ico",
     homepage: "http://jackndempsey.blogspot.com",
     author: {name: "Jack Dempsey", email: "jack.dempsey@gmail.com"},
     license: "MPL,GPL",
     description: "Search ruby functions documentation",
     help: "Select a ruby function",
     execute: function(directObject)
     {
         var url = "http://apidock.com/ruby/search?query={QUERY}&commit=Search"
         var urlString = url.replace("{QUERY}", directObject.text);
         Utils.openUrlInBrowser(urlString);
     },
     preview: function(pblock, directObject)
     {
         searchText = jQuery.trim(directObject.text);
         if(searchText.length <= 0)
         {
           pblock.innerHTML = "Search ruby function documentation";
           return;
         }
         var previewTemplate = "Search ruby function documentation of ${query}";
         var previewData = {query: searchText};
         pblock.innerHTML = CmdUtils.renderTemplate(previewTemplate, previewData);
     }
 });