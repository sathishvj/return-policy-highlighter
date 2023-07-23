# Return policy highlighter

Adds a bar on top of the page with the return policy highlighted when you are on some amazon sites and flipkart.com retail site.

## Some testing done on sites

- https://www.amazon.in/
- https://www.flipkart.com/
- https://www.amazon.ca/
- https://www.amazon.com/
- https://www.amazon.com.mx/
- https://www.amazon.co.uk/
- https://www.amazon.de/
- https://www.amazon.es/

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

# Is it on the Chrome Extensions webstore?

I have submitted the extension for review. The SLA for review is 30 days.

# Updates

- 2023/07/23 Refactored code to make it work easily for multiple sites
- 2023/07/23 Tested some of the international amazon sites minimally
- 2023/07/22 Added support for Flipkart.com
- 2023/07/22 Added icons
- 2023/07/22 Added error check if content returned is empty.
- 2023/07/22 Added info to manually load extension.
