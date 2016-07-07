$(document).ready(function(){
  // listen for form submission
  $("#entry").on("submit", function(evt){
    // prevent default action
    evt.preventDefault()
    // get user input && convert to float with 2 decimal placess
    var amount = $("#newEntry").val()
    var floatAmount = parseFloat(amount).toFixed(2)
    console.log(floatAmount);
    // place user input in table
    // One tr, containing 2 td's, final td has amount
    var newRow = $("<tr></tr>")
    newRow.append($("<td></td>"))
    newRow.append($("<td>" + floatAmount + "</td>"))
    $("#entries").append(newRow)
    // update total
      //  get current total
    var total = $("#total").html()
    var numericTotal = parseFloat(total.split("$")[1])
    var actualTotal = floatAmount + numericTotal


//below I was trying to add the entries so that they would created an added total, instead of it always saying 0. 
    var entry = $("#entry")
    var total = $("#total")
    document.querySelextor (entry).addedTotal = function (total){
      console.log("check if working");
    }

    console.log();
    $("input#newEntry").val("")
  })

    // make sure dollar signs are there
})


//the total should equal the entry input. the entry input should auto add.
