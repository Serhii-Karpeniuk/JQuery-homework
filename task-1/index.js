/**
знайдіть всі <h2> з класом head,
зробіть для них зелений колір фону,
потім серед знайдених елементів знайдіть елементи з класом inner
і поставте їм розмір шрифту 35px (не вносьте змін до html-файлу)
 */

$(document).ready(function() {
  const $allElements = $("h2.head").css("background-color", "#008000");
  const $innerItems = $allElements.find(".inner").css("font-size", "35px")
})
