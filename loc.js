console.log("on the right site, running");

// chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
//   let url = tabs[0].url;
//   console.log(url);
//   // use `url` here inside the callback because it's asynchronous!
// });


const resultsTexts = [
  "They scanned the archives, but still no one came.", "Gradually bits and pieces went missing.", "At first, it was barely noticeable — a transparent pixel here and there.", "Even if someone had been looking at the scans, they wouldn’t have been able to differentiate the image loss from the graininess inherent to the original artifact.", "But then, suddenly the eyes disappeared from a portrait tagged with a resolution of 300dpi, only the emptied street remained in a photo of a mass rally, and entire entries went missing, their links leading nowhere.",

  "Later, when searching for the origin of the disease, librarians and scientists discovered that those lost bytes had not simply evaporated into thin air.", "The moths had got to them.", "Perhaps they were attracted by their disuse, all that history unnourished by life.", "Or maybe they sensed something in those images that was imperceptible to the human eye.", "No one knows how the moths made that leap, from material to digital.", "Maybe they too were compelled to forage in new ways when all the libraries moved their collections online.", "From the moths, history passed to the cicadas, the locusts, and the maggots.",

  "The world noticed neither the loss of the archives nor the changed state of the insects, until humans became carriers.",

  "Who would have thought that something as innocuous as the act of scrolling would be the catalyst.", "My mother was blindsided by her first exposure.", "She was only twenty years old at the time, two years into her study abroad, on her way to her morning class.", "Her mother had sent her yet another article on holistic nutrition, this one on the benefits of eating pears in the fall.", "Usually she ignored such messages, but at that moment she just so happened to be standing at the crosswalk, waiting for the light to turn.", "She also knew that her mother would likely ask her about the article when she called later that week.", "She opened the link, and started to scroll.",

  "She scrolled past the opening, listing the seven benefits of eating pears in the fall.", "Past the section describing all the appropriate varieties of pear to eat.", "Past the descriptions of different methods of preparation.", "She was almost at the end of the article when she noticed the buzzing in her ears.", "It was the sound of cicadas from her childhood, but she had never heard it in this country.", "The buzzing grew louder.", "She thought she saw something diaphanous flit across her screen, then her finger.", "Then it was inside her hand, moving up.",

  "The sound was everywhere now.", "On the trees, the buildings, the pavement.", "She couldn’t see, her sight was occluded by a mass of vibrating wings.", "They hit against her arms, stomach, face, their vibrations generating a dizzying heat.", "The buzzing began to sound like language when suddenly she found herself in a mass of heaving bodies, chanting slogans.", "The man on stage wore a strange, tall cone of a hat with scribbles on it, his head hung low, but familiar in a way that terrified her.", "She realized her own mouth was moving too, but she heard no sound.",

  "She later learned that one of her mother’s memories had found her.", "It turns out that it is quite common for the insects to mistake the relatives of the memories’ former carriers for the carriers themselves.", "It is still a mystery what causes this confusion.", "Some scientists have proposed that they are attracted to our blood like sugar water.",

  "The disease baffled scientists, doctors, and engineers alike.", "However, eventually they were able to narrow down the vector of infection to links.", "Opening any link, sent by anyone, was enough to transmit the disease — health articles, memes, videos, news, emails, conference calls.", "And regardless of what link it was, the infection came in waves — every one, thirteen, and seventeen years.", "My mother had been infected along with 2 million other people.", "Lastly, they also determined that the incubation period of the disease varied — some might immediately experience symptoms upon infection, as my mother did, and others might go months and even years before suddenly being pulled back into a memory.", "Like a woman whose grandmother’s features only surface in her face in adulthood, usually, you didn’t find out what you were infected with till much later.", "You could try to predict when a brood might emerge, but it was not always reliable.", "Sometimes, when the weather was warm, you ate something wrong, or some other obscure conditions were met, they would hatch early.",

  "It was not long before serious cases appeared.", "During dinner, an elderly woman was sabotaged by visions of her relatives’ emaciated limbs and swollen bellies, and lost her sight.", "In the middle of a meeting, a middle-aged man pleaded with his employer to lower his gun and spare his life, swearing that he was not a Communist like his brother.",

  "Governments and hospitals scrambled to classify and contain the rapidly spreading disease.", "It wasn’t long before the men in white suits came and sealed their apartment doors from the outside, and then entire buildings, complexes, even cities.", "Temporary field hospitals were hastily set up to accommodate the sudden outbreak.", "People were sprayed with pesticides at checkpoints.", "Once the government regained its bearings, it tried to predict mass eruptions and set up firewalls to squash suspicious links.", "But the security systems never detected anything.", "The only possible way to stop the spread would have been to take down the web entirely, but no corporation or nation could accept that.", "And by that point, the disease had already spread almost everywhere.", "So, while the off-grid industry experienced a major boom, most of the world just kept on scrolling.",

  "Dejavu is the first sign.", "The sights, sounds, smells come from elsewhere.", "First in passing, then in pursuit.", "Faces as old as new, intimate conversations with strangers, unfamiliar objects fitting snugly in the hand.", "And then, the need to tell someone, to share the sight.",

  "Most of those afflicted hovered around stages 1 and 2, and learned to live with the spates of buzzing and the accompanying impulse to pass on their visions.", "The urge breaks over you like a combination of immense nausea and intelligible tinnitus.", "It’s horrible, but you learn to bear it.",

  "Or not.", "As the disease progresses, you might find yourself prone to compulsive outpourings, in person or online, spamming your address book with links as your profile fills up with pleas to never forget some obscure date, eulogies for strangers, reminiscences directed at no one in particular.", "As soon as you advance to stage 3, the government automatically shuts down your social media accounts.", "They know that soon you’ll be ranting “your” memories to any ear and any online forum within reach, sometimes by force if necessary.", "Stage 4 is comparatively quiet.", "Locked in your room or roaming the streets, you chitter, twitch, and click around, looking for things with antennae you don’t have.", "People have learned to avoid those who were too far gone.", "It won’t be long before the white suits take you away.",

  "For all the glowing advertisements and state endorsements, surgery has produced mixed results.", "The location where the insects made their nests seemed arbitrary.", "Some colonies would be found resting atop or within the folds of the brain, others in between the folds of intestines, others beneath the shin.", "Usually patients left the operating table with some part of their body missing, with no guarantee that any stray eggs wouldn’t briskly repopulate.",

  "Doctors dissected the insects, trying to find some organ of memory, some special synapse, but all their medical examinations, their clinical trials, produced the simple result that they were only bugs.", "It was like trying to uncover the location of the human soul.",

  "It was taboo to acknowledge aloud, but the illness was not always just something to cope with.", "To some, maybe a number more than can be admitted, the infection came as a relief, a gift.", "Some greeted their parasites as old friends, others revered them as mediums, and all evaded treatment.", "For them, the humming was as grounding as it was disorienting.", "They came to develop a feeling of responsibility for the wellbeing of their inhabitants, terror even at the thought of their leaving, and thus tried to condition their interiors to be as welcoming as possible.", "But the insects can be cruel.", "They overstay their welcome in the bodies of those who don't want them, and leave early from those who don't want to let them go.",

  "",

  "When I was a child, I cried incessantly.", "I did not understand what I was seeing.", "The older adults around me would always ask me what I was looking at that made me weep so.", "It was only once I had the words to tell them about the man in the tall hat, and the chorus that sounded like the language baba and mama spoke, that they realized.",

  "At that point, my mother was still able to manage her sickness.", "I was too young to know the depth of it.", "I only felt that sometimes she looked right through me.", "But when she found out about my symptoms, she could no longer bear to look at me at all.", "She began to babble, sometimes right in the middle of a conversation, about the cabbages that glimmered with frost on the balcony.", "The winter cold was a natural refrigerator.", "She was so sick of eating cabbage all the time.", "When could they eat something else?",

  "I was sent to a boarding school on the other side of the country.", "The memories followed me there.", "In that foreign place, their chittering was almost a solace.", "When I had not yet learned to resent my mother, they felt like the only connection I still had with her.", "I eventually could repeat all the words spoken in those memories by heart, though nobody from my family was willing to tell me what they meant.", "It was only when I met an international student from my mother’s original country that I learned their meaning.",

  "",

  "Forty years after her first infection, twenty years after my first symptoms, and five years after I had moved to another country, my mother was hospitalized for the last time.", "When I returned to visit her, I could hear the humming as soon as I entered the room.", "She opened her mouth and I saw hundreds of vibrating wings, rising rhythmically with the sound.", "The doctor had warned me that they had replaced most of her tongue.",

  "Those who, like my mother, reached the terminal stage of possession were completely immobilized.", "They stayed frozen in place at the site of the final outbreak, their brains flooded with the past.", "There was no future for those who had progressed to this stage — the activity of memory occupied so much of their being that they could not even eat or drink, and soon even blinking and breathing would be beyond them.", "Rumors circulated that some terminal cases would shed their skins and molt, flying away.",

  "I did not witness so spectacular an emergence in my mother’s last moments.", "Yet, looking into her eyes, I saw something liquid move behind them.", "A flash of downy white.", "When I touched her, her edges were soft and trembling, warm with a heat abnormal for a body so close to death, a heat that instead should have belonged to multiple bodies.", "Later I saw moths gathering at her grave.", "They rose into the sky like rising snow.",

  // "",

  // "",

  // "",

  // "",

  // "",

  // "",

  // "",

  // "",

  // "",

  // "",

  // "",

  // "",


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

const letterReplacementPace = 4;

let imgsToReplace;

let chapterImg;

let mothSize = null;

// this code will be executed after page load
(function() {
  console.log('after.js executed');

  imgsToReplace = document.querySelectorAll("img");
  mothSize = imgsToReplace[0].offsetWidth;
  // Initial replace img when the page loads
  imgsToReplace.forEach(replaceImageIfAtTop);
  
  imgsToReplace.forEach(img => {
    const parentDiv = img.parentNode;
    parentDiv.style.background = "white";
    parentDiv.style.transition = "background 1s ease-in";
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


  //??How can I get the buttons to show all the text??
  //buttons in results section
  const buttons = navContainer.querySelectorAll("button");
  buttons.forEach(button => {
    button.style.height = "auto";
    button.style.overflow = "visible";
    button.parentNode.style.height = "auto";
    button.parentNode.style.overflow = "visible";
    button.parentNode.parentNode.style.height = "auto";
    button.parentNode.parentNode.style.overflow = "visible";
  });

  const searchBar = document.querySelector(".header-search");
  searchBar.querySelector("input").style.fontSize = "2em";
  // const searchBarEls = searchBar.querySelectorAll("*");
  // searchBar.style.fontSize = "4em";
  // searchBarEls.forEach(searchBarEl => {
  //   searchBarEl.style.fontSize = "2em";
  // })


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

  document.querySelector("body").marginTop += scrollDifference;

  if (scrollDifference > 0) {
    // Start replacing text from the first text-containing element
    replaceTextinResults();
    // replaceTextinNav();

    //move chapterImg up
    // const currentTop = parseInt(chapterImg.style.top);
    // chapterImg.style.top = `${currentTop - scrollDifference * 2}px`;
    // console.log(currentTop);
  }

  imgsToReplace.forEach((img)=>replaceImageIfAtTop(img, currentScrollTop));

  lastScrollTop = currentScrollTop;
}

// TEXT FUNCTIONS
//?? Why are the replaceText and replaceNav functions writing in each other's textboxes?
function replaceTextinResults() {
  if (resultsTextboxIndex < resultsTextElements.length && resultsIndex < resultsTexts.length) {
    // Replace text letter by letter in the current element
    const currentElement = resultsTextElements[resultsTextboxIndex];
    
    // Ensure the element is visible before modifying its content
    if (isElementVisible(currentElement)) {
      if (!getClassName(currentElement, 'first')) {
        originalText = currentElement.textContent.trim();
        remainingText = originalText;
      }
      currentElement.classList.add('first');
      //?? At the end of each "section", it skips a bunch of text. Console shows it's being put into an <a> that doesn't exist between the elements in the dom
      // console.log(currentElement);

      
      if (resultsLetterIndex < resultsTexts[resultsIndex].length) {
        // Add one letter from resultsTexts[resultsIndex] to currentText
        currentText += resultsTexts[resultsIndex].slice(resultsLetterIndex, resultsLetterIndex + letterReplacementPace);
        // console.log(currentText);
        remainingText = remainingText.slice(letterReplacementPace);
        // console.log(remainingText);
        currentElement.textContent = currentText + remainingText;
        resultsLetterIndex+=letterReplacementPace;
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

function replaceTextinNav() {
  if (navTextboxIndex < navTextElements.length && navIndex < navTexts.length) {
    // Replace text letter by letter in the current element
    const currentElement = navTextElements[navTextboxIndex];
    
    // Ensure the element is visible before modifying its content
    if (isElementVisible(currentElement)) {
      if (!getClassName(currentElement, 'first')) {
        originalText = currentElement.textContent.trim();
        remainingText = originalText;
      }
      currentElement.classList.add('first');
      
      if (navLetterIndex < navTexts[navIndex].length) {
        // Add one letter from navTexts[navIndex] to currentText
        currentText += navTexts[navIndex].slice(navLetterIndex, navLetterIndex + letterReplacementPace);
        // console.log(currentText);
        remainingText = remainingText.slice(letterReplacementPace);
        // console.log(remainingText);
        currentElement.textContent = currentText + remainingText;
        navLetterIndex+=letterReplacementPace;
        // console.log(navLetterIndex);
      } else {
        // Move to the next text and reset navLetterIndex
        navIndex++;
        navTextboxIndex++;
        navLetterIndex = 0;
        originalText = "";
        remainingText = "";
        //making sure to delete any extra original text that hasn't been replaced by mine
        currentElement.textContent = currentText + remainingText;
        currentText = "";
        console.log("moving to next text");
      }
    } else {
      // If the element is not visible, move to the next one immediately
      navTextboxIndex++;
      navLetterIndex = 0;
      currentText = "";
      originalText = "";
      remainingText = "";
      console.log("empty div");
    }
  }
}

// Helper function to check if an element is visible
function isElementVisible(element) {
  var style = window.getComputedStyle(element);
  return style.display !== "none" && style.visibility !== "hidden";
}

//IMG FUNCTIONS
// Replace img with moth if it is scrolled to top of viewport
function replaceImageIfAtTop(img, currentScrollTop) {

  // console.log(currentScrollTop);
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
    img.style.transition = "all 1s ease-in-out";
    img.style.opacity = 0;
    mothSize += 20;
    img.style.maxWidth = "none";
    img.style.maxHeight = "none";
    img.style.width = mothSize + "px";
    img.style.height = "auto";

    const randomMothImg = Math.floor(randomize(0, mothImgs.length - 1));
    setTimeout(()=> {
      img.src = chrome.runtime.getURL(mothImgs[randomMothImg]);
      img.style.opacity = 1;
      img.style.left = img.getBoundingClientRect().left + "px";
      img.style.top = img.getBoundingClientRect().top + "px";
      img.style.position = "absolute";
      img.style.transform = "translate(-50%,-50%)";
  
      setInterval(() => flutter(img, parentDivWidth / 2, parentDivHeight / 2, parentDivWidth, parentDivHeight), 1000);
    }, 1000);

    if (currentScrollTop > window.innerHeight) {
      console.log("met");
      parentDiv.style.position = "absolute";
      parentDiv.style.zIndex = 1000;

      parentDiv.style.transition = "all 1s ease-in-out";
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
  chapterImg.style.width = "100%";
  chapterImg.style.filter = "drop-shadow(0 0 0.2em rgba(255,255,255, 1))";
  chapterImg.src = chrome.runtime.getURL(chapterImgs[0]);

  navContainer.style.background = "black";
  const allNavEls = navContainer.querySelectorAll("*");
  allNavEls.forEach(navEl => {
    navEl.style.display = "none";
  });
  // navContainer.appendChild(chapterDiv);
  navContainer.appendChild(chapterImg);

}