var getElementByXPath = function (xPath) {
    var xPathResult = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
    return xPathResult.singleNodeValue;
};

//console.log('Within Non-Returnable highlighter.');
//

var xpath='//*[@id="RETURNS_POLICY"]/span/div[2]/span';
var xp = getElementByXPath(xpath);
// try others if above doesn't work
if (!xp) {
	xpath = '//*[@id="RETURNS_POLICY"]/div[2]/span';
	xp = getElementByXPath(xpath);
}

const bar = document.createElement("div");
//bar.style.backgroundColor = "yellow";
bar.style.color = "red";
bar.style.height = "30px";
bar.style.width = "100%";
bar.style.fontSize = "25px";
bar.style.textAlign = "center";

bar.innerHTML = xp.innerText;

// Add bar on top of page.
document.body.insertBefore(bar, document.body.firstChild);

