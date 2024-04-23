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
  "body": " Question 3  Given the function where   a. Find the inverse function .  b. Solve for the domain and range of .  "
},
{
  "id": "question-four",
  "level": "1",
  "url": "question-four.html",
  "type": "Section",
  "number": "1.4",
  "title": "Question 4",
  "body": " Question 4  Graphs A and B are given. Fill in the chart below, stating the various properties of the graphs.  "
},
{
  "id": "question-five",
  "level": "1",
  "url": "question-five.html",
  "type": "Section",
  "number": "1.5",
  "title": "Question 5",
  "body": " Question 5  A student in another trigonometry class asks for your help with one of their final exam review questions. They write out the following solution and you notice a mistake in their solution.   Original Problem:   Solve the equation on the interval .   Incorrect Solution:   line 1:   line 2:   line 3:      undefined  a. An error occurs in lines 1-3. State which line the error occurred and explain the mistake.  b. Fix the mistake and determine the correct solution set.  "
},
{
  "id": "question-six",
  "level": "1",
  "url": "question-six.html",
  "type": "Section",
  "number": "1.6",
  "title": "Question 6",
  "body": " Question 6  Each of the following expressions (parts a through e) form an identity with exactly one of the expressions in the box. Establish each identity, showing which expressions are equal with all intermediate steps .  insert box pic  a.   b.   c.   d.   e.   "
},
{
  "id": "question-seven",
  "level": "1",
  "url": "question-seven.html",
  "type": "Section",
  "number": "1.7",
  "title": "Question 7",
  "body": " Question 7  In the picture, is in the center of the circle. The measure of the central angle , the line segment , and line segment .  a. Find the area of the entire triangle, . Round to two decimal places.  insert picture  b. Suppose that the shaded region has area . Use your answer from part a to find the length of the radius of the circle. Round to the nearest whole foot.  "
},
{
  "id": "question-eight",
  "level": "1",
  "url": "question-eight.html",
  "type": "Section",
  "number": "1.8",
  "title": "Question 8",
  "body": " Question 8  A ship leaves the port of San Diego and is moving at a constant speed. After traveling 2 miles, the ship has a bearing of . If the ship turns and heads towards the southwest, approximate how many more miles the ship needs to travel until it has a bearing of ? Round your answer to the nearest whole mile. Draw a picture to illustrate this word problem.  insert pic  "
},
{
  "id": "question-nine",
  "level": "1",
  "url": "question-nine.html",
  "type": "Section",
  "number": "1.9",
  "title": "Question 9",
  "body": " Question 9  Given the polar coordinate , complete the following.  a. Graph point on the grid.  insert pic  b. Based on the unit circle, the rectangular coordinates of the point are (___, ___).  c. Show that your answer to part b is correct by converting point to rectangular coordinates.  d. Find another set of polar coordinates for point where .  "
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
