$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    var input = $("input#person1").val();

    if(input === "funny") {
      $("#funnyCeleb").show();
      $("#smartCeleb").hide();
      $("artisticCeleb").hide();
    }
    else if(input === "smart"){
      $("#smartCeleb").show();
      $("artisticCeleb").hide();
      $("funnyCeleb").hide();
    }
    else{
      $("#artisticCeleb").show();
      $("#smartCeleb").hide();
      $("funnyCeleb").hide();
    }
  });
});
