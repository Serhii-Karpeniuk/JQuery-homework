// створіть HTML-сторінку з 6 чекбоксами. Підключіть бібліотеку **JQuery** та напишіть скріпт, який після того, як користувач позначив будь-які 3 чекбокси, всі чекбокси робить неактивними.


$(document).ready(function () {
    const $limited = 3;
    const $checkBox = $(".check__box");

    $checkBox.change(function(){
        const $checked = $checkBox.filter(":checked").length;

        if ($checked >= $limited) {
            $checkBox.not(":checked").prop("disabled", true);
          } else {
            $checkBox.prop("disabled", false);
          }
    });
});
