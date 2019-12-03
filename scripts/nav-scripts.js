/*
Author: Shayna Jamieson
File Name: nav-scripts.js
Last Modified: 12/02/2019

This file contains the scripts that allow the user to be taken to various project
pages when they click on the buttons associated with each project.
 */

// when the user clicks on the IDAYDream project button we re-direct
// them to the website on a new window tab
$('#daydream-btn').on('click', function() {
   window.open('http://three-of-a-kind.greenriverdev.com/', '_blank');
});

// when the user clicks on the resume project button we re-direct
// them to the website on a new window tab
$('#resume-btn').on('click', function() {
    window.open('http://sjamieson.greenriverdev.com/305/HTML-Resume/index.html', '_blank');
});

// when the user clicks on the guest book project button we re-direct
// them to the website on a new window tab
$('#guestbook-btn').on('click', function() {
    window.open('http://sjamieson.greenriverdev.com/305/Guest-Book/guestbook.php', '_blank');
});