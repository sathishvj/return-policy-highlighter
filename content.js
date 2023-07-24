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

getTextByXPath = function (xPath, field) {
  var xp = getElementByXPath(xPath);
  if (!xp) {
    return "";
  }

  if (!field) {
    field = "textContent";
  }

  var text = "";
  switch (field) {
    case "innerText":
      text = xp.innerText;
      break;
    case "innerHTML":
      text = xp.innerHTML;
      break;
    case "textContent":
      text = xp.textContent;
      break;
  }
  return text.trim();
};

const xpaths = {
  "www.amazon.in/": [
    '//*[@id="RETURNS_POLICY"]/span/div[2]/span',
    '//*[@id="RETURNS_POLICY"]/div[2]/span',
  ],
  "flipkart.com": [
    '//*[@id="container"]/div/div[3]/div[1]/div[2]/div[*]/div[*]/div/div[2]/div[2]/ul/li/div',
  ],
  "www.amazon.com/": ['//*[@id="tabular-buybox"]/div[1]/div[8]/span/a/span'],
  "www.amazon.de/": ['//*[@id="tabular-buybox"]/div[1]/div[8]/span/a/span'],
  "www.amazon.ca/": [
    '//*[@id="productSupportAndReturnPolicy-return-policy-anchor-text"]',
  ],
  "www.amazon.com.mx/": ['//*[@id="RETURNS_POLICY"]/span/div[*]/span'],
  "www.amazon.es/": ['//*[@id="tabular-buybox"]/div[1]/div[8]/span/a/span'],
  "www.amazon.co.uk/": ['//*[@id="tabular-buybox"]/div[1]/div[8]/span/a/span'],
};

console.log("On site:", document.URL);

// go through list of sites and xpaths until returnPolicy is not empty.
var returnPolicy = "";
for (const site of Object.keys(xpaths)) {
  if (returnPolicy != "") break;

  if (document.URL.indexOf(site) != -1) {
    for (const xpath of xpaths[site]) {
      returnPolicy = getTextByXPath(xpath, "textContent");
      if (returnPolicy != "") break;
    }
  }
}

// special cases

if (document.URL.indexOf("flipkart.com") != -1) {
  if (returnPolicy.endsWith("?")) {
    returnPolicy = returnPolicy.slice(0, -1);
  }
}

const amazonInGeneralReturnPolicies = {
  Books: "For Books, typically, 10 day replacement only.",
  "Kindle e-Readers":
    " For Kindle e-Readers, typically, 7 Days Refund for accidental orders only.",
};

if (document.URL.indexOf("amazon.in") != -1) {
  var generalReturnPolicy = "";
  if (returnPolicy == "" || returnPolicy == "Returns Policy") {
    var category = getTextByXPath(
      '//*[@id="nav-subnav"]/a[1]/span',
      "innerText"
    );
    // alert("Cateogry: " + category);

    if (category in amazonInGeneralReturnPolicies)
      generalReturnPolicy += amazonInGeneralReturnPolicies[category];
  }

  if (returnPolicy.indexOf("Returns Policy") != -1) {
    returnPolicy = "See Returns Policy link on page.";
  }

  returnPolicy += " " + generalReturnPolicy;
}

if (returnPolicy != "") {
  const bar = document.createElement("div");
  //bar.style.backgroundColor = "yellow";
  bar.style.color = "red";
  bar.style.height = "30px";
  bar.style.width = "100%";
  bar.style.fontSize = "20px";
  bar.style.textAlign = "center";

  //bar.innerHTML = xp.innerText;
  bar.innerHTML = returnPolicy;

  // Add bar on top of page.
  document.body.insertBefore(bar, document.body.firstChild);
}
