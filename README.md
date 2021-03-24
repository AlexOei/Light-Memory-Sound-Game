# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Alexander Oei

Time spent: **4** hours spent in total

[Link to project]https://oasis-bead-digit.glitch.me/

## Required Functionality

The following **required** functionality is complete:

* [Yes] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [Yes] "Start" button toggles between "Start" and "Stop" when clicked. 
* [Yes] Game buttons each light up and play a sound when clicked. 
* [Yes] Computer plays back sequence of clues including sound and visual cue for each button
* [Yes] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [Yes] User wins the game after guessing a complete pattern
* [Yes] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [Yes] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [Yes] Buttons use a pitch (frequency) other than the ones in the tutorial
* [Yes] More than 4 functional game buttons
* [Yes] Playback speeds up on each turn
* [Yes] Computer picks a different pattern each time the game is played
* [Yes] Player only loses after 3 mistakes (instead of on the first mistake)
* [Yes] Game button appearance change goes beyond color (e.g. add an image)
* [Yes] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [Yes] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:


![Alt Text](https://cdn.glitch.com/b17fdeb2-6fa4-44aa-810f-03dcc015aef2%2Fwingame.gif?v=1616622412657)

[Video with Sound](https://youtu.be/GkiAFNCPOJA)

User correctly finishes pattern

![Alt Text](https://cdn.glitch.com/b17fdeb2-6fa4-44aa-810f-03dcc015aef2%2Fezgif.com-gif-maker.gif?v=1616622067123)

[Video with Sound](https://youtu.be/KVsTtCncEJo)

User runs out of time


![Alt Text](https://cdn.glitch.com/b17fdeb2-6fa4-44aa-810f-03dcc015aef2%2Fthreestrikes.gif?v=1616622364414)

[Video with Sound](https://youtu.be/sxGexEw29L8) 

User makes 3 mistakes



## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

W3 Schools

Stack Overflow

Mozilla developer site

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

  I had a few issues while creating this submission, which were when inserting images, making sure the sound played, and implementing the timer.
The problem I had with inserting images was that using the img tag led to the image not aligning correctly with the button. I first tried to play with
the width and height in the img tag, but eventually used google to see if there was a css solution for inserting the image. I found that using background-image
and background-size allowed me to align and scale the image to the button, so I decided to use that implementation. 
  The next problems I encountered were with implementation of the sound. The first sound problem I encountered was that the sound started to stop playing during longer
patterns. I thought it might be a problem with my clue hold time, so I inserted console.log(clueHoldTime) and found I accidentally inserted the clueHoldTime decrement
in the for loop, causing the hold time to go negative and not play the tone. The second problem I had with sound was implementing the audio clips. When the same clip was 
played twice in a row, sometimes the clip would not play the second time. I found that it was because I did not set a timeout for the clueHoldTime. Once I created the timeout, it worked as intended
  The final issue I had was my attempt to implement the timer. I first tried using the setInterval and clearInterval, but I didn't have much success, as the timer just started
before the pattern finished. I then tried using async await due to the delays being different each time a clue was played but found that didn't work due to the use of setTimeout(). 
I then realized I was probably overcomplicating things because async/await was never mentioned in the assignment so I took a small break in order to come back to the problem with a fresh mindset. 
When I came back I reread all the functions in order to make sure I completely understood them. I then realized I just needed to use setTimeout() with Delay-ClueHoldTime-CluePauseTime in order to 
get the correct delay before the timer started. These issues taught me the importance of checking for typos, making sure I completely understand the code, and Google (lol). 


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

What would be the optimal way to test this? (I used many console.log statements while testing)
How could this be implemented using asynchronous code?
What's the optimal way to deploy a site like this?
How would I embed this site in another one?
How would I make a multiplayer game?
How do CSS animations work?
Are there libraries/frameworks that would simplify the code of this project?
Where would I store the assets if I wasn't using glitch?
How does the sound synthesizer for the button audio work?
How would I create a dynamic website?
What other event handlers are there?


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had a few more hours to work on the project, I would want to try to implement the game using async and await/promise chaining, as it would allow me to become more familiar with asynchronous code 
as well as more easily use different length audio clips. This would likely require me to refactor many of the functions that implement setTimeout().
I would also want to give users the option to change the sounds and images they use for the buttons. 
I would create packs of images(ex: dog pack, cat pack) and sounds (ex: dog barks, and cat barks) that could be used interchangeably.
I think it would also be cool to give users the opportunity to change the difficulty, which would change the rate that clueHoldTime decreases based on difficulty selected.
Finally, the most challening thing I would want to implement would be an infinite mode, where score would be increased each time the user correctly finishes the pattern. 
The pattern would continue to increase in length until the user makes three mistakes. 






## License

    Copyright Alexander Oei

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
