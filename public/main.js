//OBJECTIVE
//Connect to api, & take the user's input to search the api for words that rhyme

//For a query string we need 3 things,
//1 url               (website url)
//2 query parameters  (rel_rhy=)
//3 word query        (search word)

//When user clicks submit we run a function that
//1. save user's input.
//2. Concatinate user's input with api (url + query parameters + search word/user's input)
//3. Request data (in this case XML http request)
//4. Set the response type to JSON (this returns the data as JSON)
//5. Set the onreadystatechange to an anonymous function (this will handle the event change)
//6. Create if statement in the annonymous function (this function says if the request is done do this,)
//The renderRawResponse() helper function can be viewed at public/helperFunctions.js.
//7. Below the anonymous arrow function you just created (but still inside of getSuggestions()), call the .open() method on the XHR object and pass it 'GET' and endpoint as respective arguments. This method call will create a new request using the two arguments: 'GET' sets the method and url sets the destination.
//8. Underneath .open(), call the .send() method on xhr and pass it no arguments. The .send() method will send the request to the server.

// Information to reach API
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_rhy=';

// Selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
const wordQuery = inputField.value;
const endpoint = `${url}${queryParams}${wordQuery}`;
 const xhr = new XMLHttpRequest();
 xhr.responseType = 'json';
 xhr.onreadystatechange = () => {
   if (xhr.readyState === XMLHttpRequest.DONE) {
  renderResponse(xhr.response)
};
 xhr.open('GET', endpoint);
 xhr.send();
 }
}

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault()
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  };
  getSuggestions();
};

submit.addEventListener('click', displaySuggestions)
