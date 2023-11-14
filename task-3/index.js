/**
Знайдіть теги `<div>`, які стоять безпосередньо після `<h3>` 
і перемістіть ці `<div>`-елемент так, щоб кожен з них став
безпосередньо над відповідним елементом `<h3>`.
 */
$(document).ready(function () {
  $("h3 + div").each(function() {
    const $div = $(this);
    const $h3 = $div.prev("h3");
    $h3.before($div);
  })
});


