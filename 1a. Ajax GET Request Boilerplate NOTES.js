//Boilerplate code for an AJAX GET request using an XMLHttpRequest object.

//Asynchronous JavaScript and XML (AJAX), enables requests to be made after the initial page load. Initially, AJAX was used only for XML formatted data, now it can be used to make requests that have many different formats.

//1. First, we need to create the XMLHttpRequest object using the new operator. Save this object in a const called xhr.
//xhr stands for XMLHttpRequest
const xhr = new XMLHttpRequest();

//2. Next, save the following URL to a const called url. Make sure the URL is wrapped in quotes so that it is a string.
const url = 'https://api-to-call.com/endpoint';

//3. Set the responseType property of the xhr object to equal 'json'.
//JSON is JavaScript Object Notation, which is how the response is going to be formatted.
xhr.responseType = 'json';

//4. Set the xhr.onreadystatechange event handler equal to an anonymous arrow function. Leave the function empty.
// Syntax looks like this
//xhr.onreadystatechange = () => {};

// !Hint! - The .onreadystatechange of xhr will contain an event listener which will execute when the readyState property changes.

//5.In the code block of the function you created in the previous step, add this conditional statement:
//if (xhr.readyState === XMLHttpRequest.DONE) {}

//6. In the code block of the conditional statement, return the response property of xhr.
// To access the response property, we can use dot notation like so: xhr.response. This response will contain the data that we’re getting back from the request.
//The syntax will look like:
//return xhr.response;

//7. Below the function you created in the previous two steps, call the .open() method on the xhr object and pass it 'GET' and url as arguments.
//.open() creates a new request and the arguments passed in determine the type and URL of the request.


//8. On the following line, call the .send() method on the xhr object. Do not pass it any arguments.

xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
		return xhr.response;
	}
};
xhr.open('GET', url);
xhr.send();
