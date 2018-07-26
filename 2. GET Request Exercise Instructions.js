//#1
//At the top of main.js, create a const named url and save to it the following URL (as a string):
//https://api.datamuse.com/words?
//You'll be using this URL to direct your request.

//#2
//Underneath const url, create another const named queryParams and assign it to 'rel_rhy='

//'rel_rhy=' is the start of a parameter for the query string. This parameter will narrow your search to words that rhyme.

//#3
//In the function getSuggestions(), create a const named wordQuery and assign it to be inputField.value.

//inputField.value grabs what is in the inputField and assigns it to the variable wordQuery.

//You'll be working in getSuggestions() for the rest of the exercise

//4
 //Now create another const named endpoint, and assign equal to a string that concatenates url, queryParams, and wordQuery.

//endpoint will store the value of the entire URL and query string.

//#5.
//You can now start on the XMLHttpRequest object. Declare a const named xhr and use the new operator to create the XMLHttpRequest object.

//#6. Set the responseType of xhr to 'json'.
//When data is sent back, it will be in JSON format.

//#7.
//Assign an anonymous arrow function to the onreadystatechange event handler of xhr.

//You can think of the onreadystatechange event handler as another property. Use dot notation to access it and assign it to an anonymous arrow function.

//#8.
//Include the following code inside the code block of the anonymous arrow function you just created:

//if (xhr.readyState === XMLHttpRequest.DONE) {
  //renderRawResponse(xhr.response)
//}

//The renderRawResponse() helper function can be viewed at public/helperFunctions.js.

//#9.
//Below the anonymous arrow function you just created (but still inside of getSuggestions()), call the .open() method on the XHR object and pass it 'GET' and endpoint as respective arguments. This method call will create a new request using the two arguments: 'GET' sets the method and url sets the destination.

//Underneath .open(), call the .send() method on xhr and pass it no arguments. The .send() method will send the request to the server.

//Then run your code.

//Type in a word in the input field and click the submit button. If all went well, the response field in the browser will display the raw response from the API!

//#10.
//Now delete renderRawResponse(xhr.response) and replace it with renderResponse(xhr.response) and run your code.
