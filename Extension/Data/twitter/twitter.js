var htmldata = ''

$(function() {
	$.get('https://twitter.com/i/notifications', function(data) {
		htmldata = ''+data;

		$('body').append($(htmldata).find('#stream-items-id').eq(0));

	})
});

function printNotification() {

	document.write(data);
}