# 🎴 The Vibe Check

> A playful, interactive card-based experience that delivers compliments and jokes — one vibe at a time.

![HTML5](https://img.shields.io/badge/HTML5-orange?style=for-the-badge\&logo=html5)
![CSS3](https://img.shields.io/badge/CSS3-blue?style=for-the-badge\&logo=css3)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-yellow?style=for-the-badge\&logo=javascript)

A browser-based interactive card game designed to boost morale and deliver laughs. The application renders a stylized playing card with dynamic visuals, animated transitions, and randomized content, using pure HTML, CSS, and Vanilla JavaScript—no frameworks required.

---

## 🎮 Features

* **Interactive Playing Card:** Poker-sized card with 3D hover effects, depth, and texture overlays.
* **Dynamic Content System:** Randomized quirky compliments and jokes pulled from curated collections.
* **Punchline Timing Logic:** Joke punchlines reveal after a delay or instantly on card click.
* **Visual Randomization:** Random suit icons and color themes on every interaction.
* **Smooth Animations:** Fade transitions, scale pops, and subtle 3D motion for tactile feedback.
* **Responsive Design:** Fully usable on desktop and mobile devices.
* **Zero Dependencies:** Runs entirely in the browser with no external JavaScript libraries.

## 🕹️ How to Play

1. **Start:** Open the page in your browser.
2. **Choose:** Click **“Give a Compliment”** or **“Tell a Joke.”**
3. **Wait:** If you chose a joke, the setup appears first.
4. **Reveal:** Wait for the punchline — or click the card to reveal it instantly.
5. **Repeat:** Continue drawing cards for endless vibes.

## 🚀 Installation & Setup

**⚠️ Good News:** This project does **not** use ES modules or external JavaScript imports.

You can open it directly in your browser using the `file://` protocol.

### Option A: Direct Open (Recommended)

1. Save the file as `index.html`.
2. Double-click it or drag it into your browser.

### Option B: Local Server (Optional)

If you prefer running a local server:

**Python 3:**

```bash
python -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) in your browser.

## ⚙️ Configuration

The project is easy to customize directly in the JavaScript section:

* **Compliments Array:** Add, remove, or tweak compliment strings.
* **Jokes Array:** Modify setups and punchlines (family-friendly or adult).
* **Suit Icons:** Update emoji or Font Awesome icons.
* **Suit Colors:** Adjust the color palette for the card corners.
* **Punchline Delay:** Change the timeout value to control reveal timing.

All configuration lives at the top of the script for easy tuning.

## 📂 Code Structure

The entire project is contained within a single HTML file for simplicity and portability.

* **CSS:** Animated gradient background, card styling, 3D transforms, responsive layout, and button theming.
* **HTML:** Card layout, corner decorations, text display area, and control buttons.
* **JavaScript:** Content collections, randomized card styling logic, timed punchline reveal system, and event listeners.

## 🛠️ Browser Support

* **Chrome / Edge:** Full support
* **Firefox:** Full support
* **Safari:** Full support (macOS & iOS)

Requires only standard modern browser features.

## 📄 License

This project is open-source and free to use for personal, educational, or portfolio purposes.

Use responsibly. Share good vibes.
