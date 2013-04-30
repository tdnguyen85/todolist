
$(document).ready(function() {
    $('button').on('click', function() {
       
        var itemValue = $('#inputValue').val();
        var listItem = $('<li>' + itemValue + '<input type="checkbox"><button class="remove">Remove</button></li>');
        listItem.appendTo($('#list-one'));

        $('input:checkbox').on('click', function() {
            var itemCompleted = $(this);
            if (itemCompleted.is(':checked')) {
                itemCompleted.parent().appendTo('#list-two');
                itemCompleted.parent().css('color', 'red');
            } else {
                itemCompleted.parent().css('color', 'black');
            }
        });
        $('.remove').on('click', function() {
            $(this).parent().remove();
        });
        //var remove = $('#item' + count).on
        //li.on('click', function() {
            //var listItem = $(this);
            //listItem.css('color', 'red');
        //});
        var l = $('#todo li').length;
    });

				
});

/*
 var count = 0;

count += 1;
var itemOrder = 'item' + count;
var listItem = $('<li></li>', {id: itemOrder}).appendTo('#list-one').text(itemValue);
        var markCompleted = $('<button></button>', {id: itemOrder}).appendTo('#list-one').text('Completed');
        $('#item' + count).on('click', function() {
            $(listItem).appendTo('#list-two');
            console.log(listItem);
        });
        var removeItem = $('<button></button>', {id: itemOrder}).text('Remove');
        $('#item' + count).on('click', function() {
            $(listItem).remove();
        });

*/