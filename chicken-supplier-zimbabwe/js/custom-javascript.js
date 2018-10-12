$(document).ready(function() {
$('select-party-type').on('change', function (e) {
    var selectVal = $("#select-party-type option:selected").val();
    // var valueSelected = this.value;
   alert("success");
   console.log('Selected entity is : ' + selectVal);
});

$('select-party-type').change(function() {
        var selectedText = $(this).find('option:selected').text();
        alert(selectedText);
    });
	
	$('select#select-party-type').on('change', function(e){
			console.log(this.value,
              this.options[this.selectedIndex].value,
              $(this).find("option:selected").val(),);
});

$('select#select-party-type').on('changed.bs.select', function (e, clickedIndex, newValue, oldValue) {
    var selected = $(e.currentTarget).val();
	 alert("success");
});

 

});

$('select#select-party-type').on('changed.bs.select', function (e, clickedIndex, newValue, oldValue) {
    var selected = $(e.currentTarget).val();
	 alert("success");
});

 