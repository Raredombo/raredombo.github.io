$(function () {
    count = 0;
    wordsArray = ["used", "abandoned", "extrovert", "introvert", "nostalgia", "2010", "mike", "suicide", "music", "the greatest", "", "alleen op de wereld"];
    setInterval(function () {
      count++;
      $("#word").fadeOut(400, function () {
        $(this).text(wordsArray[count % wordsArray.length]).fadeIn(400);
      });
    }, 2000);
  });