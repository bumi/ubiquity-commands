makeSearchCommand({
  name: "woobby",
  homepage: "http://woobby.com",
  url: "http://woobby.com",
  author: {name: "Michael Bumann", email: "michael@railslove.com"},
  icon: "http://de.woobby.com/favicon.ico",
  description: "Search Woobby.com",
  preview: function(pblock, directObject) {
		if(directObject.text.length < 2) 
			return;
		var url = "http://de.woobby.com/home/search.xml";

		pblock.innerHTML = "searching for: " + directObject.text;

    var params = { search_string: directObject.text};

  	jQuery.get(url, params, function(data){ 
				var template = '{for ranking in rankings}'
		                 + '<div class="gresult">'
		                 + '<strong><a href="${ranking.url}">${ranking.title}</a></strong> '
		                 + '&ndash; <small>${ranking.description}</small> '
		                 + '</div>'
		                 + '{/for}';

				var rankings = jQuery.map( jQuery("results[filter='themes'] result", data), function(item) { 
				 	return {title: jQuery("title:first",item).text(), description: jQuery("description:first",item).text() , url: jQuery("link:first",item).text()};
				});

       pblock.innerHTML = CmdUtils.renderTemplate(template, {rankings: rankings});

    });
  }
});