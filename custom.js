// Manual image slider js - from this tutorial: https://www.kirupa.com/html5/creating_a_sweet_content_slider.htm

// just querying the DOM...like a boss!
var links = document.querySelectorAll(".itemLinks");
var wrapper = document.querySelector(".carousel-inner");

// the activeLink provides a pointer to the currently displayed item
var activeLink = 0;

// setup the event listeners
for (var i = 0; i < links.length; i++) {
    var link = links[i];
    link.addEventListener('click', setClickedItem, false);

    // identify the item for the activeLink
    link.itemID = i;
}

// set first item as active
links[activeLink].classList.add("active");

function setClickedItem(e) {
    removeActiveLinks();

    var clickedLink = e.target;
    activeLink = clickedLink.itemID;

    changePosition(clickedLink);
}

function removeActiveLinks() {
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
    }
}

// Handle changing the slider position as well as ensure
// the correct link is highlighted as being active
function changePosition(link) {
    var position = link.getAttribute("data-pos");

    var translateValue = "translate3d(" + position + ", 0px, 0)";
    wrapper.style[transformProperty] = translateValue;

    link.classList.add("active");
}

//
// Dealing with Transforms
//
var transforms = ["transform",
            "msTransform",
            "webkitTransform",
            "mozTransform",
            "oTransform"];

var transformProperty = getSupportedPropertyName(transforms);

// vendor prefix management
function getSupportedPropertyName(properties) {
    for (var i = 0; i < properties.length; i++) {
        if (typeof document.body.style[properties[i]] != "undefined") {
            return properties[i];
        }
    }
    return null;
}




// JS for Portfolio Carousel (same js from team carousel)

// just querying the DOM...like a boss!
var linkage = document.querySelectorAll(".portfolio-itemLinks");
var wrapperage = document.querySelector(".portfolio-carousel-inner");

// the activeLink provides a pointer to the currently displayed item
var activeLinkage = 0;   // changed variable name

// setup the event listeners
for (var i = 0; i < linkage.length; i++) {
    var link1 = linkage[i];  // changed variable name
    link1.addEventListener('click', setClickedItem1, false);  // the "setClickedItem1", prior to adding the #1 at the end was what was causing the portfolio carousel navLinks to affect and slide the Team images. After adding the #1 (not to mention other naming changes) both set of navLinks affect their RESPECTIVE carousels. :)

    // identify the item for the activeLink
    link1.itemID = i;
}

// set first item as active
linkage[activeLinkage].classList.add("active");

function setClickedItem1(e) {   // changed function name
    removeActiveLinks1();

    var clickedLinker = e.target;  // changed variable name
    activeLinkage = clickedLinker.itemID;

    changePosition1(clickedLinker);
}

function removeActiveLinks1() {    // changed function name
    for (var i = 0; i < linkage.length; i++) {
        linkage[i].classList.remove("active");
    }
}

// Handle changing the slider position as well as ensure
// the correct link is highlighted as being active
function changePosition1(link1) {     // changed function name
    var positioner = link1.getAttribute("data-pos"); // changed variable name

    var translateValue = "translate3d(" + positioner + ", 0px, 0)";
    wrapperage.style[transformProperty1] = translateValue;

    link1.classList.add("active");
}

//
// Dealing with Transforms
//
var transformage = ["transform",  // changed variable name
            "msTransform",
            "webkitTransform",
            "mozTransform",
            "oTransform"];

var transformProperty1 = getSupportedPropertyName(transformage);  // changed variable name

// vendor prefix management
function getSupportedPropertyName1(properties) {    // changed function name
    for (var i = 0; i < properties.length; i++) {
        if (typeof document.body.style[properties[i]] != "undefined") {
            return properties[i];
        }
    }
    return null;
}

$('.menu-toggle').on('click', function() {
    $('.full-menu').toggleClass('full-menu--open');
})
