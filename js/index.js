

function clickSubmit(){
    let text = $("#textToCount").val();
    // /\s+/ matches one or more whitespace
    // trim removes at the beginning and at the end 
    let words = text.trim().split(/\s+/);
    //console.log("Counted: ", words.length, words);
    if( words.length > 0 && words[0] !== ""){
        $("#alert").html(`Word counted: ${words.length}`)
        $("#alert").removeClass().addClass("alert").addClass("alert-success")
    }else{
        $("#alert").html("You have to write a not white space character")
        $("#alert").removeClass().addClass("alert").addClass("alert-danger")
    }
    $("#alert").css("display", "block")

}

function addHandlers(){
    $("#submit").on('click', clickSubmit);
    // add more handlers here if needed
}


// add handlers just when all DOM and contents are loaded
$(window).on('load', () => {
    addHandlers()
   });