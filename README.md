# Assignment: Word Count Challenge

This programming challenge should take around 1-3 hours and can be done anytime prior to the interview.
The task is to create a user-facing form that counts the number of words in a block of text. 
As a user when I view the application then I see a form containing a text box to enter a body of text and when I submit the form with some text then I see a result containing the number of words in the text box
and when I submit the form with an empty text then I see a form error telling me that some text input is required.

## Choices and Motivations
Due to the simplicity of the assignment, the strict time to deliver the task, and the absence of any requirements like the use of specific tools, cross-validation client and server side, unit tests, and so on, I decided to adopt as most as possible KEEP IT th SIMPLE approach.
Indeed, I decided to use just three tools to complete the task: 
* HTML to realize the web form
* Javascript to achieve word counting
* Bootstrap to have a nice-to-see web page

No backend required, as well as any frontend framework, we just count words.


### Time required: 
Coding: < 1H

Writing README: < 1H

## Repository Structure
The repository is composed of
* index.html: which contains the HTML form that is supposed to count the words in the text area
* js/index.js: which contains the handlers associated with the index.html elements
* README.md: this file

### Requirements:
* Required: laptop, browser, internet connection
* Optional: docker

## How to Install
* For production purposes the project directory needs to be located in the served directory of the installed HTTP server, usually /var/www/html in Apache2 or /usr/share/nginx/html in Nginx
* For test purposes just open the index.html file in the browser, the html content should be normally rendered.

### Testing on Docker
If you want to test the code with Docker, find a TCP port you are not using in your laptop, for instance, 8080 and then run:
```bash
git clone https://github.com/christiansicari/WebWordCounter
cd WebWordCounter
docker run  -p 8080:80 -v "$PWD":/usr/local/apache2/htdocs/ --rm httpd:2.4
```
Open your browser, go to http://localhost:8080/ and you should see the form page

### Tested on:
* client: Google Chrome 110.0.5481.177 (Official Build) (64-bit), Ubuntu 20.04
* client: Firefox 112.0.2 (64-bit), Ubuntu 20.04
* server: local serving using file://
* server: Apache2 version 2.4 on Docker (image: httpd:2.4), host: Ubuntu 20.04 amd64




