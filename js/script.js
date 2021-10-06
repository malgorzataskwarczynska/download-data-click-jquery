console.log('Warsztat - Pobierz dane po kliknięciu przycisku - jQuery');

$(document).ready(function() {
    
    $('#get-data').click(function() {
    
        /* wariant 1 */
       /*  $.get('https://akademia108.pl/api/ajax/get-post.php')
        .done(function(data) {

            let pId = $('<p></p>').text(`Post ID: ${data.id}`);
            let puserId = $('<p></p>').text(`User ID: ${data.userId}`);
            let pTitle = $('<p></p>').text(`Title: ${data.title}`);
            let pBody = $('<p></p>').text(`Body: ${data.body}`);
            let hr = $('<hr />');

            let jqBody = $('body');

            jqBody.append(pId);
            jqBody.append(puserId);
            jqBody.append(pTitle);
            jqBody.append(pBody);
            jqBody.append(hr);
            
            console.log(pId);
        })
        .fail(function(error) {
            console.error(error);
        }); */

        /* wariant 2 */
        $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
        .done(function(data) {

            let pId = $('<p></p>').text(`Post ID: ${data.id}`);
            let puserId = $('<p></p>').text(`User ID: ${data.userId}`);
            let pTitle = $('<p></p>').text(`Title: ${data.title}`);
            let pBody = $('<p></p>').text(`Body: ${data.body}`);
            let hr = $('<hr />');

            let jqBody = $('body');

            jqBody.append(pId);
            jqBody.append(puserId);
            jqBody.append(pTitle);
            jqBody.append(pBody);
            jqBody.append(hr);
            
            console.log(pId);
        })
        .fail(function(error) {
            console.error(error);
        });

    });

});