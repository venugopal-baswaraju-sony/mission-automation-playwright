

  $(document).ready(function() {
    $( "#submitBtn" ).on( "click", function() {
      calValueByPercent();
      } );

      $("#myCheckbox").click(function(){
        // Toggle the visibility of the hidden element
        $("#infoDetails").toggle();
      });
  });

  function calValueByPercent(){
    let calculatedValue;
    let userEnteredPercentageValue = $("#valueInPercentage").val()
    let userEnteredTotalValue = $("#valueInNumber").val()
    if(userEnteredPercentageValue && userEnteredTotalValue){
      calculatedValue = (parseInt(userEnteredPercentageValue) / 100) * parseInt(userEnteredTotalValue);
    }
    $("#result").html(`<label>Result:</label>&nbsp;&nbsp;&nbsp;The &nbsp;<b>${userEnteredPercentageValue}%</b>&nbsp;of &nbsp;<b>${userEnteredTotalValue}</b>&nbsp;is &nbsp;<b>${calculatedValue}</b>.`)
  }


  function calculateValueByPercent(userEnteredFinalValue, userEnteredTotalValue) {

    let calculatedValue;

    calculatedValue = (userEnteredFinalValue / 100) * userEnteredTotalValue;


    return {
      userEnteredPercentageValue: userEnteredFinalValue,
      userEnteredTotalValue: userEnteredTotalValue,
      calculatedAnswer: calculatedValue,
      suggestions: suggestionObj
    }
  }