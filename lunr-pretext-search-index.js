var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  My Website   copyright  "
},
{
  "id": "question-one",
  "level": "1",
  "url": "question-one.html",
  "type": "Section",
  "number": "1.1",
  "title": "Question 1",
  "body": " Question 1  1. Use the information given in parts (a) and (b) for angles alpha and beta to answer parts (c)-(g).  a. Sketch the right triangle in the corresponding quadrant for with . Label the angle and side lengths.  b. Sketch the right triangle in the corresponding quadrant for . Label the angle and side lengths.  c. Find .  d. Find .  e. Find   f. Find .  g. Find .  "
},
{
  "id": "question-two",
  "level": "1",
  "url": "question-two.html",
  "type": "Section",
  "number": "1.2",
  "title": "Question 2",
  "body": " Question 2  Two homes are near a tree that is feet tall. The home closest to the tree measures an angle of elevation of to the tree, while the angle of depression from the top of the free to the furthest home is . Approximate the distance between the two homes.  insert picture  "
},
{
  "id": "question-three",
  "level": "1",
  "url": "question-three.html",
  "type": "Section",
  "number": "1.3",
  "title": "Question 3",
  "body": " Question 3  Given the function ƒ(x)=2cos(3x+2) where −⅔≤x≤−⅔+π\/3  a. Find the inverse function ƒ(x)  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
