const resultsTexts = [
  "They scanned the archives and then forgot them.", "Gradually bits and pieces went missing.", "At first, it was barely noticeable — a transparent pixel here and there.", "Even if someone had been looking at the scans, they wouldn’t have been able to differentiate the image loss from the graininess inherent to the original artifact.", "But then, suddenly the eyes disappeared from a portrait tagged with a resolution of 300dpi, only the emptied street remained in a photo of a mass rally, and entire entries went missing, their links leading nowhere.",
  "Later, when searching for the origin of the disease, librarians and scientists discovered that those lost bytes had not simply evaporated into thin air.", "The moths had got to them.", "Perhaps they were attracted by their disuse, all that history unnourished by life.", "Or maybe they sensed something in those images that was imperceptible to the human eye.", "No one knows how the moths made that leap, from material to digital.", "Maybe they too were compelled to forage in new ways when all the libraries moved their collections online.", "From the moths, the history passed to the cicadas, the locusts, and the maggots.",
  "The world noticed neither the loss of the archives nor the changed state of the insects, until humans became carriers.",
  "Who would have thought that something as innocuous as the scroll would be the catalyst.", "My mother was blindsided by her first exposure.", "She was only twenty years old at the time, two years into her study abroad, on her way to her morning class.", "Her mother had sent her yet another article on holistic nutrition, this one on the benefits of eating pears in the fall.", "Usually she ignored such messages, but that moment she just so happened to be standing at the crosswalk, waiting for the light to turn.", "She also knew that her mother would likely ask her about the article when she called later that week.", "She opened the link, and started to scroll.",
  "She scrolled past the opening, listing the seven benefits of eating pears in the fall.", "Past the section describing all the appropriate varieties of pear to eat.", "Past the descriptions of different methods of preparation.", "She was almost at the end of the article when she noticed the buzzing in her ears.", "It was the sound of cicadas from her childhood, but she hadn’t ever heard them in this country.", "The buzzing grew louder.", "She thought she saw something diaphanous flit across her screen, then her finger.", "Then it was inside her hand, moving up.",

]

const navTexts = [
  "Burial",
  "is",
  "just",
  "another",
  "way",
  "of",
  "burrowing"
]


let resultsIndex = 0;
let navIndex = 0;

const mothImgs = [
  "imgs/img20231107_17445165_1.png",
  "imgs/img20231107_17445165_2.png",
  "imgs/img20231107_17445165_3.png",
  "imgs/img20231107_17580860_1.png",
  "imgs/img20231107_17580860_2.png",
  "imgs/img20231107_18165319.png",
  "imgs/img20231107_18174427_1.png",
  "imgs/img20231107_18174427_2.png",
  "imgs/img20231107_18184108_1.png",
  "imgs/img20231107_18184108_2.png",
  "imgs/img20231107_18184108.png",
  "imgs/img20231107_18223046_1.png",
  "imgs/img20231107_18223046_2.png",
  "imgs/img20231107_18231857.png",
  "imgs/img20231107_18273517.png",
  // "imgs/",
  // "imgs/",
  // "imgs/",
  // "imgs/"
];

const chapterImgs = [
  "imgs/chapters/emergence.png",
  "imgs/chapters/inheritance.png",
  "imgs/chapters/passing_on.png",
]

let lastScrollTop = 0;
let resultsElements;
let resultsTextElements;

let navContainer;
let navElements;
let navTextElements;

let resultsTextboxIndex = 0;
let navTextboxIndex = 0;
let resultsLetterIndex = 0;
let navLetterIndex = 0;

let originalText = "";
let remainingText = "";
let currentText = "";

let imgsToReplace;

let chapterImg;

// this code will be executed after page load
(function() {
  console.log('after.js executed');

  imgsToReplace = document.querySelectorAll("img");
  // Initial replace img when the page loads
  imgsToReplace.forEach(replaceImageIfAtTop);
  
  //??How can i make the bg change smooth, like a fadein?
  imgsToReplace.forEach(img => {
    const parentDiv = img.parentNode;
    parentDiv.style.background = "white";
    parentDiv.style.transition = "1s ease-in";
  });
  
  //text in results section
  resultsElements = document.querySelector("#results").getElementsByTagName("*");
  resultsTextElements = Array.from(resultsElements).filter(function (element) {
    return Array.from(element.childNodes).some(isTextNodeWithContent);
  });

  //text in nav section
  navContainer = document.querySelector("#facet-nav");
  navElements = navContainer.getElementsByTagName("*");
  navTextElements = Array.from(navElements).filter(function (element) {
    return Array.from(element.childNodes).some(isTextNodeWithContent);
  });

  window.addEventListener('scroll', checkScroll);
  
  changeBG();

})();


//GENERAL FUNCTIONS
function isTextNodeWithContent(node) {
  return node.nodeType === 3 && node.nodeValue.trim() !== "";
}

function randomize(min, max) {
  return min + Math.random() * (max - min);
}

function positionDiv(div, x, y) {
  div.style.left = `${x}px`;
  div.style.top = `${y}px`;
}

function getClassName(element, keyword) {
  const hasClassName = element.classList.contains(`${keyword}`);
  return hasClassName;
}

// SCROLLING FUNCTIONS
function checkScroll() {
  const currentScrollTop = window.scrollY || document.documentElement.scrollTop;
  const scrollDifference = currentScrollTop - lastScrollTop;

  //??How can I make the scroll slower?
  // window.scrollTo(0, currentScrollTop - scrollDifference*.99);

  if (scrollDifference > 0) {
    // Start replacing text from the first text-containing element
    replaceTextinResults();
    // replaceTextInElement(resultsTextboxIndex, resultsTextElements, resultsIndex, resultsTexts, resultsLetterIndex);
    // replaceTextInElement(navTextboxIndex, navTextElements, navIndex, navTexts, navLetterIndex);

    //move chapterImg up
    const currentTop = parseInt(chapterImg.style.top);
    chapterImg.style.top = `${currentTop - scrollDifference * 2}px`;
    // console.log(currentTop);
  }

  imgsToReplace.forEach(replaceImageIfAtTop, currentScrollTop);

  lastScrollTop = currentScrollTop;
}

// TEXT FUNCTIONS
function replaceTextinResults() {
  if (resultsTextboxIndex < resultsTextElements.length && resultsIndex < resultsTexts.length) {
    // Replace text letter by letter in the current element
    const currentElement = resultsTextElements[resultsTextboxIndex];
    console.log(resultsTextElements);
    console.log(resultsTextboxIndex);
    console.log(currentElement);
    
    // Ensure the element is visible before modifying its content
    if (isElementVisible(currentElement)) {
      if (!getClassName(currentElement, 'first')) {
        originalText = currentElement.textContent.trim();
        remainingText = originalText;
      }
      currentElement.classList.add('first');
      
      if (resultsLetterIndex < resultsTexts[resultsIndex].length) {
        // Add one letter from resultsTexts[resultsIndex] to currentText
        currentText += resultsTexts[resultsIndex][resultsLetterIndex];
        // console.log(currentText);
        remainingText = remainingText.slice(1);
        // console.log(remainingText);
        currentElement.textContent = currentText + remainingText;
        resultsLetterIndex++;
        // console.log(resultsLetterIndex);
      } else {
        // Move to the next text and reset resultsLetterIndex
        resultsIndex++;
        resultsTextboxIndex++;
        resultsLetterIndex = 0;
        originalText = "";
        remainingText = "";
        //making sure to delete any extra original text that hasn't been replaced by mine
        currentElement.textContent = currentText + remainingText;
        currentText = "";
        console.log("moving to next text");
      }
    } else {
      // If the element is not visible, move to the next one immediately
      resultsTextboxIndex++;
      resultsLetterIndex = 0;
      currentText = "";
      originalText = "";
      remainingText = "";
      console.log("empty div");
    }
  }
}

//??Why doesn't this work?
//based off my console.logs, the only difference from replaceTextinResults() is that textboxIndex never increments beyond 0 here for some reason even though it logs "empty div" and I don't reset it to 0 there
function replaceTextInElement(textboxIndex, Elements, textIndex, texts, letterIndex) {
  if (textboxIndex < Elements.length && textIndex < texts.length) {
    // Replace text letter by letter in the current element
    const currentElement = Elements[textboxIndex];
    console.log(Elements);
    console.log(textboxIndex);
    console.log(currentElement);

    // Ensure the element is visible before modifying its content
    if (isElementVisible(currentElement)) {
      if (!getClassName(currentElement, 'first')) {
        originalText = currentElement.textContent.trim();
        remainingText = originalText;
      }
      currentElement.classList.add('first');
      
      if (letterIndex < texts[textIndex].length) {
        // Add one letter from texts[textIndex] to currentText
        currentText += texts[textIndex][letterIndex];
        // console.log(currentText);
        remainingText = remainingText.slice(1);
        // console.log(remainingText);
        currentElement.textContent = currentText + remainingText;
        letterIndex++;
        // console.log(letterIndex);
      } else {
        // Move to the next text and reset letterIndex
        textIndex++;
        textboxIndex++;
        letterIndex = 0;
        originalText = "";
        remainingText = "";
        //making sure to delete any extra original text that hasn't been replaced by mine
        currentElement.textContent = currentText + remainingText;
        currentText = "";
        console.log("moving to next text");
      }
    } else {
      // If the element is not visible, move to the next one immediately
      textboxIndex++;
      letterIndex = 0;
      currentText = "";
      originalText = "";
      remainingText = "";
      console.log("empty div");
    }
  }
}

// function replaceTextInElement(textboxIndex, Elements, textIndex, texts, letterIndex) {
//   if (textboxIndex < Elements.length && textIndex < texts.length) {
//     // Replace text letter by letter in the current element
//     const currentElement = Elements[textboxIndex];
//     console.log("1 textboxIndex is:" + textboxIndex);

//     // Ensure the element is visible before modifying its content
//     if (isElementVisible(currentElement)) {
//       var originalText = currentElement.textContent.trim();
//       var currentText = "";
//       var remainingText = originalText;

//       if (letterIndex < texts[textIndex].length) {
//         // Add one letter from texts[textIndex] to currentText
//         currentText += texts[textIndex][letterIndex];
//         console.log(currentText);
//         remainingText = remainingText.slice(1);
//         currentElement.textContent = currentText + remainingText;
//         letterIndex++;
//         console.log(letterIndex);
//       } else {
//         // Move to the next text and reset letterIndex
//         textIndex++;
//         textboxIndex++;
//         letterIndex = 0;
//         console.log("moving to next text");
//       }
//     } else {
//       // If the element is not visible, move to the next one immediately
//         console.log("2 textboxIndex is:" + textboxIndex);
//       textboxIndex++;
//       letterIndex = 0;
//       console.log("empty div");
//       console.log("3 textboxIndex is:" + textboxIndex);
//     }
//   }
// }

// Helper function to check if an element is visible
function isElementVisible(element) {
  var style = window.getComputedStyle(element);
  return style.display !== "none" && style.visibility !== "hidden";
}

//IMG FUNCTIONS
// Replace img with moth if it is scrolled to top of viewport
function replaceImageIfAtTop(img, currentScrollTop) {
  function isElementAtTop(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top <= 0 &&
      rect.left >= 0
    );
  }

  if (isElementAtTop(img) && !getClassName(img, 'mothed')) {
    img.classList.add('mothed');
    const parentDiv = img.parentNode;
    const parentDivWidth = parentDiv.offsetWidth;
    const parentDivHeight = parentDiv.offsetHeight;
    parentDiv.style.width = parentDivWidth + "px";
    parentDiv.style.height = parentDivHeight + "px";
    parentDiv.style.position = "relative";
    parentDiv.style.overflow = "hidden";
    parentDiv.style.background = "black";
    const randomMothImg = Math.floor(randomize(0, mothImgs.length - 1));
    img.style.left = img.getBoundingClientRect().left + "px";
    img.style.top = img.getBoundingClientRect().top + "px";
    img.src = chrome.runtime.getURL(mothImgs[randomMothImg]);
    img.style.position = "absolute";
    img.style.transform = "translate(-50%,-50%)";
    img.style.transition = "1s ease-in-out";

    setInterval(() => flutter(img, parentDivWidth / 2, parentDivHeight / 2, parentDivWidth, parentDivHeight), 1000);

    //??Why is currentScrollTop incrementing so slowly here?
    if (currentScrollTop > window.innerHeight) {
      console.log("met");
      parentDiv.style.position = "absolute";
      setInterval(() => flutter(parentDiv, parentDivWidth, parentDivHeight, parentDivWidth, parentDivHeight), currentScrollTop);
    }
  }
}

function flutter(tbPositioned, x, y, xVariation, yVariation) {
  x = randomize(x - xVariation, x + xVariation);
  y = randomize(y - yVariation, y + yVariation);
  
  positionDiv(tbPositioned, x, y);
}

//BG FUNCTIONS
function changeBG() {
  // const all = document.querySelectorAll("*");
  // all.forEach(item => {
  //   item.style.background = "none";
  // });

  // const body = document.querySelector("body");
  // body.style.background = "black";

  // const chapterDiv = document.createElement('div');
  // chapterDiv.style.zIndex = "-1";
  // chapterDiv.style.height = "100vh";
  // chapterDiv.style.overflow = "hidden";

  chapterImg = document.createElement('img');
  
  //??How can i have this as fixed to positioned relative to navContainer??
  chapterImg.style.position = "fixed";
  chapterImg.style.top = "0";
  chapterImg.style.left = "1em";
  chapterImg.style.width = "100%";
  chapterImg.style.zIndex = "1000";
  chapterImg.style.width = "100%";
  chapterImg.style.width = "calc(25% - 2rem)";
  chapterImg.style.maxWidth = "calc(25% - 2rem)";
  chapterImg.style.filter = "drop-shadow(0 0 0.2em rgba(255,255,255, 1))";
  chapterImg.src = chrome.runtime.getURL(chapterImgs[0]);
  //need to define it this way so i get it in px and not vh, for syncing with scroll later
  chapterImg.style.top = window.innerHeight*1.2 + "px";

  navContainer.style.position = "relative";
  // navContainer.appendChild(chapterDiv);
  navContainer.appendChild(chapterImg);

}