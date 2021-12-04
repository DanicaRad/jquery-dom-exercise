// When the DOM is ready, console.log the message “Let’s get ready to party with jQuery!”
// Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).
// Remove the last paragraph in the article.
// Set the font size of the title to be a random pixel size from 0 to 100.
// Add an item to the list; it can say whatever you want.
// Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list’s existence.
// When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.
// Add an event listener so that when you click on the image, it is removed from the DOM.

$.when( $.ready ).then(function() {
    console.log(`Let's get ready to party with jquery!`);
  });


     // $('body').css('background-color', `'` + 'rgb(' + red + ', ' + green + ', ' + blue + ')' + `'`);

    // $('body').css({
    //   'background-color' : `'` + 'rgb(' + $('input').eq(0).val() + ',' + $('input').eq(1).val() + ',' + $('input').eq(2).val() + ')' + `'`
    // }) 

    $("input").on("click", function() {
        console.log($(this).eq(0).val());
    })