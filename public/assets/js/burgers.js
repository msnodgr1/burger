$(function(){
	$(".devour").on('click', function(event){
		var id = $(this).data("id");
		var newDevour = true;
		console.log(newDevour);
		var newDevourState = {
			devoured: newDevour
		};

		$.ajax("/api/burgers/" + id, {
			type: "PUT",
			data: newDevourState
		}).then(
			function(){
				location.reload();
			}
		)
	})

	$(".create-form").on("submit", function(event){
		event.preventDefault();


		var newBurger = {
			burger_name: $("#bgr").val().trim()
		};
		console.log(newBurger);
		$.ajax("/api/burgers", {
			type: "POST",
			data: newBurger
		}).then(
			function(){
				console.log("it worked: POST")
				location.reload();
			}
		)
	})

})