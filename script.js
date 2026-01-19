// ================= DATA =================

const masterCompliments = [ "You're weirder than I am, and I like that.",
            "You're the human equivalent of finding $20 in your pocket.",
            "I would share my fries with you. And I don't share food.",
            "You're more fun than a bubble wrap factory.",
            "I bet you make babies smile on public transport.",
            "You're the reason I look down at my phone and smile like an idiot.",
            "You're the only person I'd survive a zombie apocalypse with.",
            "If you were a fruit, you'd be a fine-apple.",
            "You have the best laugh. It makes me want to tell bad jokes just to hear it.",
            "You're cooler than the other side of the pillow.",
            "I would totally delete my browser history for you. That's true love.",
            "You're not just a snack, you're the whole vending machine.",
            "You're the sprinkles on the donut of life.",
            "You're less annoying than 99% of the population.",
            "I like your face. It's a really nice face.",
            "You're the human version of a golden retriever: loyal and always happy to see me.",
            "You're smart, funny, and attractive. Stop hogging all the good genes.",
            "I'd trust you with my passwords. Maybe not the banking one, but the Netflix one for sure.",
            "You're the best bad influence I know.",
            "I’d fight a bear for you. A gummy bear, but still.",
            "You're the comma in a world of periods.",
            "You’re more refreshing than an ice-cold lemonade on a hot day.",
            "You’re the 'cool aunt/uncle' everyone wishes they had.",
            "You have great taste... mostly because you hang out with me.",
            "You’re the reason I believe in aliens, because you’re out of this world.",
            "I’d let you have the last slice of pizza. Even if it's pepperoni.",
            "You’re the typo I wouldn’t fix.",
            "You’re chaos, but the good kind. Like a confetti cannon.",
            "You smell like success and expensive detergent.",
            "You’re the only person I want to be stuck in an elevator with.",
            "You’re a limited edition. I checked the serial number.",
            "You have 'main character' energy, but without the drama.",
            "You’re the highlight of my doom-scrolling.",
            "You’re sharper than a fresh haircut.",
            "You’re the cheese to my macaroni.",
            "I’d pause my game for you. And it's an online game.",
            "You make sweatpants look like high fashion.",
            "You’re the vodka to my cranberry.",
            "You’re proof that the universe has a sense of humor, in a good way.",
            "You’re a certified 10/10. I checked the scorecard.",
            "You’re tougher than a Nokia 3310.",
            "You’re the unexpected item in the bagging area of life... the good kind.",
            "You’re a masterpiece. You should be in a museum, but like, a fun one.",
            "You’re the remix that’s better than the original.",
            "You’re the reason I haven’t lost my mind yet.",
            "You’re the glitter in a world of beige.",
            "You’re the sauce. The secret sauce.",
            "You’re the plot twist everyone wanted.",
            "You’re basically a superhero, minus the spandex.",
            "I appreciate your existence. Keep doing that.",
            "You’re a vibe. A really good vibe.",
            "You’re the kind of person my dog would like instantly.",
            "You’re the opposite of a Monday morning.",
            "You’re the bacon bits in the salad of life.",
            "You’re the result of a wish upon a shooting star.",
            "You’re the cool breeze on a humid day.",
            "You’re the extra nugget in a 10-piece box.",
            "You’re the silence after a car alarm finally turns off.",
            "You’re the perfectly ripe avocado. Rare and perfect.",
            "You’re the charger when I’m at 1%.",
            "You’re the skip button on a YouTube ad.",
            "You’re the tax refund I didn’t expect.",
            "You’re the green light when I’m running late.",
            "You’re the cold side of the pillow.",
            "You’re the smell of old books and fresh coffee.",
            "You’re the password I always remember.",
            "You’re the relief of taking off tight jeans.",
            "You’re the first sip of coffee in the morning.",
            "You’re the canceled plan I didn’t want to go to anyway.",
            "You’re the song I play on repeat until I hate it (but I never hate you).",
            "You’re the memes I send to my best friend.",
            "You’re the perfectly toasted toast.",
            "You’re the unexpected day off.",
            "You’re the fun fact at a boring party.",
            "You’re the bubbles in the champagne.",
            "You’re the surprise ending of a great movie.",
            "You’re the good hair day.",
            "You’re the package arriving two days early.",
            "You’re the fresh sheets on the bed.",
            "You’re the person holding the elevator door.",
            "You’re the waiter bringing free breadsticks.",
            "You’re finding money in your old winter coat.",
            "You’re the umbrella in a surprise rainstorm.",
            "You’re the playlist that perfectly matches my mood.",
            "You’re the joke I actually laugh out loud at.",
            "You’re the nap that wasn’t too long or too short.",
            "You’re the battery that never dies.",
            "You’re the pen that writes perfectly the first time.",
            "You’re the hoodie I stole and never gave back.",
            "You’re the dessert stomach.",
            "You’re the midnight snack.",
            "You’re the dream I actually remembered.",
            "You’re the clear skin day.",
            "You’re the perfect high five.",
            "You’re the lyrics I didn’t forget.",
            "You’re the sunbeam breaking through the clouds.",
            "You’re the dog wagging its tail when I come home.",
            "You’re the cat purring on my lap.",
            "You’re the best thing since sliced bread, but like, garlic bread."
];
const masterJokes = [ // --- Family Friendly (1-25) ---
            { s: "Why don't scientists trust atoms?", p: "Because they make up everything." },
            { s: "What do you call a fake noodle?", p: "An impasta." },
            { s: "Why did the scarecrow win an award?", p: "Because he was outstanding in his field." },
            { s: "How do you organize a space party?", p: "You planet." },
            { s: "What do you call a bear with no teeth?", p: "A gummy bear." },
            { s: "Why did the bicycle fall over?", p: "Because it was two-tired." },
            { s: "What do you call a sleeping bull?", p: "A bulldozer." },
            { s: "Why can't you give Elsa a balloon?", p: "Because she will let it go." },
            { s: "What do you call cheese that isn't yours?", p: "Nacho cheese." },
            { s: "Why did the math book look sad?", p: "Because it had too many problems." },
            { s: "What do you call a snowman with a six-pack?", p: "An abdominal snowman." },
            { s: "Where do fruits go on vacation?", p: "Pear-is." },
            { s: "What do you call a factory that makes okay products?", p: "A satisfactory." },
            { s: "Why did the golfer bring two pairs of pants?", p: "In case he got a hole in one." },
            { s: "What is brown and sticky?", p: "A stick." },
            { s: "Why do seagulls fly over the ocean?", p: "Because if they flew over the bay, they'd be bagels." },
            { s: "What did the ocean say to the beach?", p: "Nothing, it just waved." },
            { s: "Why was the belt arrested?", p: "For holding up a pair of pants." },
            { s: "What do you call a pile of cats?", p: "A meowtain." },
            { s: "Why did the cookie go to the hospital?", p: "Because he felt crummy." },
            { s: "What does a cloud wear under his raincoat?", p: "Thunderwear." },
            { s: "Why are elevator jokes so good?", p: "They work on so many levels." },
            { s: "What do you call a pony with a cough?", p: "A little horse." },
            { s: "What did the left eye say to the right eye?", p: "Between you and me, something smells." },
            { s: "Why did the tomato turn red?", p: "Because it saw the salad dressing." },

            // --- Dirty / Adult (26-50) ---
            { s: "What’s the difference between a G-spot and a golf ball?", p: "A guy will actually search for a golf ball." },
            { s: "Why do hurricanes get named after people?", p: "Because they come wet and wild, and leave with your house and car." },
            { s: "What’s 6 inches long, 2 inches wide, and drives women crazy?", p: "A $100 bill." },
            { s: "Why is sex like bridge?", p: "If you don't have a good partner, you better have a good hand." },
            { s: "What did the toaster say to the slice of bread?", p: "I want you inside me." },
            { s: "What has 4 legs and yells 'Hooray!'?", p: "A dog coming home from the vet without a cone." }, 
            { s: "My girlfriend said she wanted me to tease her...", p: "So I said, 'Fatty, fatty, two-by-four...'" },
            { s: "What’s long, hard, and has cum in it?", p: "A cucumber." },
            { s: "How is a boyfriend like a parking spot?", p: "The good ones are taken, and the rest are handicapped." },
            { s: "What goes in dry and hard, and comes out soft and wet?", p: "Chewing gum. Get your mind out of the gutter." },
            { s: "What did the banana say to the vibrator?", p: "Why are you shaking? She's gonna eat ME." },
            { s: "Why did the condom fly across the room?", p: "It was pissed off." },
            { s: "Why does Santa have such a huge sack?", p: "He only comes once a year." },
            { s: "Why did the man fall down the well?", p: "Because he couldn’t see that well." },
            { s: "What’s the difference between hungry and horny?", p: "Where you put the cucumber." },
            { s: "Why can't you hear a pterodactyl go to the bathroom?", p: "Because the 'P' is silent." },
            { s: "What's invisible and smells like carrots?", p: "Bunny farts." },
            { s: "What do you call a cheap circumcision?", p: "A rip-off." },
            { s: "Why did the baker have brown hands?", p: "Because he kneaded a poo." },
            { s: "What is the difference between a lightbulb and a pregnant woman?", p: "You can unscrew a lightbulb." },
            { s: "What did the left boob say to the right boob?", p: "You hang low, I'll grab the support." },
            { s: "What’s the difference between 'ooh' and 'aaah'?", p: "About three inches." },
            { s: "Why is a penis like a rumor?", p: "It spreads from mouth to mouth." },
            { s: "What did the penis say to the condom?", p: "Cover me, I'm going in." },
            { s: "Are you a beaver?", p: "Because dam." }
 ];

const suitIcons = [
    '<i class="fa-solid fa-heart"></i>',
    '<i class="fa-solid fa-diamond"></i>',
    '<i class="fa-solid fa-spade"></i>',
    '<i class="fa-solid fa-club"></i>',
    '😈','🍑','🍆','🍺','👑','💸','💊','💣'
];

const suitColors = [
    '#e73c7e','#23a6d5','#23d5ab','#ee7752',
    '#ff00cc','#333333','#667eea','#ffb199','#764ba2'
];

// ================= DOM =================

const mainCard = document.getElementById('mainCard');
const textArea = document.getElementById('textArea');
const cornerTR = document.getElementById('cornerTR');
const cornerBL = document.getElementById('cornerBL');
const complimentBtn = document.getElementById('complimentBtn');
const jokeBtn = document.getElementById('jokeBtn');

let punchlineTimer = null;
let availableCompliments = [];
let availableJokes = [];

// ================= UTIL =================

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

function updateCardStyle() {
    const color = suitColors[Math.floor(Math.random() * suitColors.length)];
    const icon = suitIcons[Math.floor(Math.random() * suitIcons.length)];
    cornerTR.style.backgroundColor = color;
    cornerBL.style.backgroundColor = color;
    cornerTR.innerHTML = icon;
    cornerBL.innerHTML = icon;
}

function getNextCompliment() {
    if (!availableCompliments.length) {
        availableCompliments = [...masterCompliments];
        shuffleArray(availableCompliments);
    }
    return availableCompliments.pop();
}

function getNextJoke() {
    if (!availableJokes.length) {
        availableJokes = [...masterJokes];
        shuffleArray(availableJokes);
    }
    return availableJokes.pop();
}

// ================= RENDER =================

function displayContent(content, isJoke = false) {
    if (punchlineTimer) clearTimeout(punchlineTimer);
    textArea.classList.add('fade-out');

    setTimeout(() => {
        updateCardStyle();

        if (isJoke) {
            textArea.innerHTML = `
                <div>${content.s}</div>
                <div class="punchline" id="jokePunchline">${content.p}</div>
            `;
            punchlineTimer = setTimeout(() => {
                document.getElementById('jokePunchline')?.classList.add('visible');
            }, 2500);
        } else {
            textArea.innerHTML = `<div>${content}</div>`;
        }

        textArea.classList.remove('fade-out');
    }, 300);
}

// ================= EVENTS =================

shuffleArray(availableCompliments = [...masterCompliments]);
shuffleArray(availableJokes = [...masterJokes]);

complimentBtn.addEventListener('click', () => {
    displayContent(getNextCompliment());
});

jokeBtn.addEventListener('click', () => {
    displayContent(getNextJoke(), true);
});

mainCard.addEventListener('click', () => {
    const pl = document.getElementById('jokePunchline');
    if (pl && !pl.classList.contains('visible')) {
        if (punchlineTimer) clearTimeout(punchlineTimer);
        pl.classList.add('visible');
    }
});
