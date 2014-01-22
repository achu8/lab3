'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript has taken control");
		$("#testjs").text("Please wait...");
		$(".jumbotron p").toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("#submitBtn").click(updateProject);
	$("a.thumbnail").click(projectClick);
}

function updateProject(e) {
	var projectID = $('#project').val();
	$(projectID).animate({
		width: $('#width').val()
	});

	var newText = $('#description').val();
	$(projectID + " .project-description").text(newText);

}

function projectClick(e) {
	//console.log("Project clicked");
	// prevent the page from reloading
	e.preventDefault();

	// In an event handler, $(this) refers to 
	// the object that triggered the event
	var projectTitle = $(this).find("p").text();
	var jumbotronHeader = $('.jumbotron h1');
	jumbotronHeader.text(projectTitle);
	var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    var message = $(containingProject).find(".message");
    if (description.length == 0) {
    	message.remove();
    	$(containingProject).append("<div class='message'><p>Activating at " + (new Date()) + "...</p></div>");
    	$(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
        $(containingProject).animate({
       		width: 600
//       		outline: 3px ridge red
       });
       $(this).css("background-color", "#FFFF00");
       $(this).css("outline", "none");


    }
    else {
    	message.remove();
    	$(containingProject).append("<div class='message'><p>Deactivating at " + (new Date()) + "...</p></div>");
    	description.remove();
       //description.hide();
        $(containingProject).animate({
       		width: 400
       });
		$(this).css("background-color", "#A0A0A0");
		$(this).css("outline", "dotted");

              //("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
    }
	//$(this).css("background-color", "#7fff00");
}