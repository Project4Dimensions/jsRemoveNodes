/* validated with JSLint edition 2017-04-10 (http://jslint.com/)
 * no errors reported (JSLint options: Assume… a browser)
 */

/* jsRemoveNodes: algorithms to remove HTML elements
 * see https://github.com/Project4Dimensions/jsRemoveNodes
 */

function removeNodes0(parent) {
    "use strict";
    var a = document.getElementById(parent);
    while (a.childNodes[0]) {
        a.removeChild(a.childNodes[0]);
    }
}

function removeNodes1(parent) {
    "use strict";
    var a = document.getElementById(parent);
    while (a.firstChild) {
        a.removeChild(a.firstChild);
    }
}

function newNode(parent, text) {
    "use strict";
    var a = document.getElementById(parent);
    var aa = document.createElement("li");
    aa.appendChild(document.createTextNode(text));
    a.appendChild(aa);
}
