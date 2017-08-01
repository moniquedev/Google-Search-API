var button = document.getElementById('button');
var input  = document.getElementById('input');
var results= document.getElementById('results');

button.addEventListener('click', function() {
    if(input.value === '') {
      alert('There is no value');
    } else {
        console.log('This function works');
        console.log(input.value);
        $.ajax({
            url:"https://www.googleapis.com/books/v1/volumes?q=" + input.value,
            dataType: 'json',
            success: function(data) {
                console.log(data);
                for(var i = 0; i < data.items.length; i++) {
                    results.innerHTML += '<img src="' + data.items[i].volumeInfo.imageLinks.thumbnail + '">';
                    results.innerHTML += '<h2>' + data.items[i].volumeInfo.title + '</h2>';
                    results.innerHTML += '<h3>' + 'Author/s: '+ data.items[i].volumeInfo.authors + '</h3>';
                    results.innerHTML += '<h4>' + 'Published Date: ' + data.items[i].volumeInfo.publishedDate + '</h4>';
                    results.innerHTML += '<p>' + data.items[i].volumeInfo.description + '</p>';
                }
            },
            type: 'GET'
        });
        input.value = '';
    }
});
