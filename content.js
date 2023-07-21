// icons: https://www.flaticon.com/authors/karyative/

var getElementByXPath = function (xPath) {
    var xPathResult = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
    return xPathResult.singleNodeValue;
};



var xpath='//*[@id="RETURNS_POLICY"]/span/div[2]/span';
var xp = getElementByXPath(xpath);
// try others if above doesn't work
if (!xp) {
	xpath = '//*[@id="RETURNS_POLICY"]/div[2]/span';
	xp = getElementByXPath(xpath);
}

const bar = document.createElement("li");
bar.style.color = "red";
bar.style.fontSize = "14px";
bar.style.fontWeight = "700";
bar.style.fontFamily = "Amazon Ember,Arial,sans-serif";


bar.innerHTML = xp.innerText;

var targetElement = document.getElementsByClassName("a-unordered-list a-vertical a-spacing-mini")[0]
targetElement.prepend(bar);

