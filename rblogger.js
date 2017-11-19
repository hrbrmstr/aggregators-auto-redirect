function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

var x = getElementByXpath(".//aside/following-sibling::p[@class='syndicated-attribution'][1]/following-sibling::div[1]/div[1]/strong/a/@href");

if (x != null) {
  if ("nodeValue" in x) {
    if (x.nodeValue.indexOf("http") !== -1) {
      document.location = x.nodeValue;  
    }
  }
}
