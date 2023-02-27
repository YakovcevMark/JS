/*
The URL https://eloquentjavascript.net/author is configured to respond
with either plaintext, HTML, or JSON, depending on what the client asks for.
These formats are identified by the standardized media types text/plain,
text/html, and application/json.

Send requests to fetch all three formats of this resource.
Use the headers property in the options object passed to fetch to set
the header named Accept to the desired media type.

Finally, try asking for the media type application/rainbows+unicorns
and see which status code that produces.
*/
/*
*****************************
It's better to use const instead of let if you define something
that won't (must not) be changed.
*****************************
 */
const url = "https://eloquentjavascript.net/author";
const types = ["text/plain",
    "text/html",
    "application/json",
    "application/rainbows+unicorns"];

types.forEach(item =>
    fetch(url, {headers: {accept: item}})
    .then(resp => resp.text())
    .then(text => console.log(`Type : ${item} \n ${text}`)));

