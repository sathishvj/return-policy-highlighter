var getElementByXPath = function (xPath) {
  var xPathResult = document.evaluate(
    xPath,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  );
  return xPathResult.singleNodeValue;
};

//console.log('Within Non-Returnable highlighter.');

var returnPolicy = "";
console.log("Within:", document.URL);
if (document.URL.indexOf("amazon.") != -1) {
  var xpath = '//*[@id="RETURNS_POLICY"]/span/div[2]/span';
  var xp = getElementByXPath(xpath);
  // try others if above doesn't work
  if (!xp) {
    xpath = '//*[@id="RETURNS_POLICY"]/div[2]/span';
    xp = getElementByXPath(xpath);
  }
  if (xp) {
    returnPolicy = xp.textContent;
    if (returnPolicy.indexOf("Returns Policy") != -1) {
      returnPolicy = "Info inside Returns Policy link on page.";
    }
  }
} else if (document.URL.indexOf("flipkart.com") != -1) {
  var xpath =
    '//*[@id="container"]/div/div[3]/div[1]/div[2]/div[7]/div[1]/div/div[2]/div[2]/ul/li/div';
  var xp = getElementByXPath(xpath);
  // try others if above doesn't work
  if (!xp) {
    var xpath =
      '//*[@id="container"]/div/div[3]/div[1]/div[2]/div[6]/div[1]/div/div[2]/div[2]/ul/li/div';
    xp = getElementByXPath(xpath);
  }
  if (xp) {
    returnPolicy = xp.textContent;
    if (returnPolicy.endsWith("?")) {
      returnPolicy = returnPolicy.slice(0, -1);
    }
  }
}

if (returnPolicy != "") {
  const bar = document.createElement("div");
  //bar.style.backgroundColor = "yellow";
  bar.style.color = "red";
  bar.style.height = "30px";
  bar.style.width = "100%";
  bar.style.fontSize = "25px";
  bar.style.textAlign = "center";

  //bar.innerHTML = xp.innerText;
  bar.innerHTML = returnPolicy;

  // Add bar on top of page.
  document.body.insertBefore(bar, document.body.firstChild);
}
