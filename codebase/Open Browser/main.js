

  $(document).ready(function() {
    $( "#submitBtn" ).on( "click", function() {
      calValueByPercent();
      } );
  });

  function calValueByPercent(){
    let calculatedValue;
    let userEnteredPercentageValue = $("#valueInPercentage").val()
    let userEnteredTotalValue = $("#valueInNumber").val()
    if(userEnteredPercentageValue && userEnteredTotalValue){
      calculatedValue = (parseInt(userEnteredPercentageValue) / 100) * parseInt(userEnteredTotalValue);
    }
    $("#result").html(`<label>Result:</label>&nbsp;&nbsp;&nbsp;The ${userEnteredPercentageValue}% of ${userEnteredTotalValue} is ${calculatedValue}.`)
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