(function($, window) {
  $(function() {
//    $('h2').delete();
    $('#index').text();
//    $('#index').html();
    $("#appendTest").click(function(){
      $('ul').append($('<li>'));
      });
    });
  });
(jQuery, window);

/*
2. testメソッドはhtmlのタグをそのまま文字として出力する。一方で、
  htmlタグを解釈して出力する。
3. appendメソッドは、指定した要素内の最後に引数のコンテンツを追加する。

*/