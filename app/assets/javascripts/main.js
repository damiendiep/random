$(document).ready(function() {
  /* Activating Best In Place */
  jQuery(".best_in_place").best_in_place();
});

$(document).ready(function() {
    $('#ajax_people').change(function(event) {
        location.reload();
    }); 
});