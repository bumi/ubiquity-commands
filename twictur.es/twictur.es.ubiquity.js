CmdUtils.CreateCommand({
	name: "twicture",
  takes: {"function": noun_arb_text},
  icon: "http://railslove.com/favicon.ico",
  homepage: "http://railslove.com",
  author: {name: "Michael Bumann", email: "michael@railslove.com"},
  description: "Create a twicture.es for a twitter post",
	// TODO: refactore this HTML + JS and add some styles
  template: '<div class="twicture" style="height:200px"><strong><a href="${pictureUrl}">${pictureUrl}</a></strong> [<span style="cursor:pointer" class="copy_notice" onclick="var gClipboardHelper = Components.classes[\'@mozilla.org/widget/clipboardhelper;1\'].getService(Components.interfaces.nsIClipboardHelper);gClipboardHelper.copyString(\'${pictureUrl}\');alert(\'${pictureUrl} copied to clipboard.\')">copy</span>]<br /> <a href="${pictureUrl}"><img src="${pictureUrl}" alt="Twitter ${statusId}" /></a></div>',
	_getStatusId: function(input) {
		input = input || "";
		if(input.length < 1) {
			var url = context.focusedWindow.document.location.toString();
			var m   = url.match(/statuses\/([0-9]*)/);
			if(m)
				var statusID = m[1];
		}
		else {
			var m = input.match(/([0-9]*)$/);
			if(m)
				var statusID = m[1];
		}
		return statusID;
	},
	_pictureUrlFor: function(statusID) {
		statusID = statusID || this._getStatusId();
		return "http://twictur.es/i/" + statusID + ".gif";
	},
	execute: function(command){
  	var inputText = jQuery.trim(command.text);
		var pictureUrl = this._pictureUrlFor(this._getStatusId(inputText));
    CmdUtils.setSelection(pictureUrl);
	},
  preview: function(pblock, command) {
		var inputText = jQuery.trim(command.text);
		var statusID = this._getStatusId(inputText);
		if(!statusID)
			return;
		var pictureUrl = this._pictureUrlFor(statusID);
		pblock.innerHTML = CmdUtils.renderTemplate(this.template, {statusID: statusID, pictureUrl:pictureUrl});
	}	
	
 });