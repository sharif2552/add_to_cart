
const expressions = {
    Email: /^[a-zA-Z0-9._%+-]+(@gmail\.com)$/,
    Phone: /^([0])(\d{10})$/,
    PostCode: /^\d{4}$/
   
  };
  

//used for type switching after selecting from the form field

  var valbtn = document.getElementById('liveAlertBtn');
  var val = document.getElementById('option');
  var selectedValue = val.value;
  val.addEventListener('change', function() {
    switching();
  });
  
  function switching() {
    val = document.getElementById('option');
    selectedValue = val.value;
  

    switch (selectedValue) {
      case 'Email':
        selectedValue = 'Email';
        break;
      case 'Phone':
        selectedValue = 'Phone';
        break;
      case 'PostCode':
        selectedValue = 'PostCode';
        break;
      default:
        break;
    }
  }
  //////////////////////////////////////////////////////////////////////  
  var input  = document.getElementById('input');
  input.addEventListener('click', function(){
    prmpt();
  });


  var inputval;
  function prmpt() {
    inputval = prompt("Enter " + selectedValue);
  
  if (inputval!=null) {
    validate();
 
  }
  }

  function validate() {
  if (expressions.hasOwnProperty(selectedValue)) {
    const userInput = inputval;
    const regex = expressions[selectedValue];
    const isValid = regex.test(userInput);
    if (isValid) {

      alert(`${userInput} is a valid ${selectedValue}.`);
    } else {
      alert(`${userInput} is not a valid ${selectedValue}.`);
    }
  } else {
    console.log('Invalid option chosen.');
  }
}
