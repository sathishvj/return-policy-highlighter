# Return policy highlighter

Adds a bar on top of the page with the return policy highlighted when you are on an amazon or flipkart.com retail site.

Why?
Because I bought stuff and later realized that they were not returnable. One too many times. Fixing for that error.

![Screenshot](screenshot.png)

# Adding the extension manually

- First you have to download the code in this repo:
  - If you have git, then: git clone https://github.com/sathishvj/return-policy-highlighter
  - If you don't have git, then: find the "Code" button on the repo landing page, click the arrow next to it, then "Download ZIP", and the extract the zip file.
- On Chrome browser, in the address bar enter chrome://extensions.
- On the top left, there should be a button named "Load unpacked".
- Choose the directory where this extension code (manifest.json and .js files) has been downloaded.

# Why can't I put it on the Chrome Extensions webstore?

To upload to the Chrome Extensions store, I have to register a developer account which requires a one time payment of USD5.
Google isn't accepting my regular credit card with the error that it has been used with another currency. I don't have an alternate card or an alternative at the moment.

# Updates

- 2023/07/22 Added support for Flipkart.com
- 2023/07/22 Added icons
- 2023/07/22 Added error check if content returned is empty.
- 2023/07/22 Added info to manually load extension.
