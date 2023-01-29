    // ==UserScript==
    // @name         Twitch, Simplifiy Chat
    // @namespace    http://tampermonkey.net/
    // @version      0.1.1
    // @description  Simplifiy for chat
    // @author       You
    // @match        https://www.twitch.tv/*
    // @icon         https://www.google.com/s2/favicons?domain=tampermonkey.net
    // @grant        none
    // @run-at       document-end
    // ==/UserScript==
     
    (function() {
        'use strict';
        var style = document.createElement("style");
        style.innerHTML = `
    .vod-message,
    .chat-line__message {
        z-index: 1;
        position: relative;
    }
    .vod-message__header {
        display: none !important;
    }
    .user-notice-line {
        display: none;
    }
    .chat-line__username,
    .video-chat__message-author {
        position: absolute;
        right: 0;
        top: 0;
        font-size: 8px;
        z-index: 0;
        opacity: 0.6;
    }
    .chat-author__display-name + .chat-author__intl-login {
        display: none
    }
    [data-test-selector="chat-message-separator"] {
        display: none;
    }
    .video-chat__message > span:first-child {
        display: none;
    }
    .chat-badge,
    [data-a-target="chat-badge"] {
        display: none;
    }
    .chat-line__message [aria-hidden=true] {
        display: none;
    }
        `;
        document.body.appendChild(style);
        // Your code here...
    })();
