(function($, window) {
  $(function() {
/*    $('h2').show();
    $('h2').remove();
    console.log($('#index').html());
    console.log($('#index').text());
    
    $('ul#index').append('<li>メソッド</li>');
*/    
    $('#index').find('li').each(function(){
      alert($(this).length());
    });
      
    $('#index').find('li').each(function(){
       $(this).text($(this).text()+"$(this).text().length");
    });
    
    $('#index').find('li').eq(0).each(function(){
       $(this).text($(this).text()+"[11文字]");
    });
  });
})(jQuery, window);


/*
2. testメソッドはhtmlのタグをそのまま文字として出力する。一方で、
  htmlタグを解釈して出力する。
3. appendメソッドは、指定した要素内の最後に引数のコンテンツを追加する。
*/