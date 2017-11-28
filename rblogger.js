function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

var x = getElementByXpath(".//aside/following-sibling::p[@class='syndicated-attribution'][1]/following-sibling::div[1]/div[1]/strong/a/@href");

var delay = 5 * 1000; // # seconds to delay the redirect since it's fair to let some lingering

if (x != null) {
  if ("nodeValue" in x) {
    if (x.nodeValue.indexOf("http") !== -1) {
      setTimeout(function() {
        document.location = x.nodeValue; 
      }, delay);
    }
  }
}
