$(document).ready(function () {
 $("form").on('submit', function(event) {
      event.preventDefault();
      var url = $(this).attr('action');
      var randomnumber=Math.floor(Math.random()*6)+1;
        $.post(url, {value: randomnumber},function(data){
      $('body').html(data);
      })
  });
 });


