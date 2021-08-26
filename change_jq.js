$(function() {
  var $input = $('#input');
  var $output = $('#output').contents().find('#outputchild');
  var $outputchild = $('iframe').contents().find('#outputchild');
  $input.on('input', function(event) {
    var value = $input.val();
    console.log($input);
    console.log($output);
    console.log($outputchild);
    $outputchild.html(value);
  });
});
