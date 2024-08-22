var myCanvas = document.getElementById('confetti');

// Initialize the confetti to use the specific canvas
var myConfetti = confetti.create(myCanvas, {
    resize: true, // resize the canvas when the window is resized
    useWorker: true // use a web worker to improve performance
});

const bothCornerConfetti = () => {
    var duration = 3 * 1000;
    var end = Date.now() + duration;
    var scalar = 1.2;

    (function frame() {
        // launch a few confetti from the left corner
        myConfetti({
            particleCount: 4,
            startVelocity: 25,
            angle: 315,
            spread: 120,
            gravity: 0.8,
            ticks: 500,
            drift: 1,
            origin: {
                x: 0,
                y: 0
            },
            shapes: ['circle', 'circle', 'square', 'star'],
            colors: ['#ffffff', '#ffd700', '#ffcc00', '#ffffe0', '#ff4500'],
            scalar
        });

        // and launch a few from the right corner
        myConfetti({
            particleCount: 4,
            startVelocity: 25,
            angle: 225,
            spread: 120,
            gravity: 0.8,
            ticks: 500,
            drift: -1,
            origin: {
                x: 1,
                y: 0
            },
            shapes: ['circle', 'circle', 'square'],
            colors: ['#ff69b4', '#00ffff', '#00ff7f', '#ffa500', '#8a2be2', '#ff4500'],
            scalar
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
};

const streamerConfetti = () => {
    var duration = 3 * 1000;
    var end = Date.now() + duration;

    (function frame() {
        myConfetti({
            particleCount: 5,
            startVelocity: 25,
            spread: 100,
            gravity: 0.8,
            ticks: 500,
            shapes: ['square'],
            colors: ['#ff6347', '#1e90ff', '#32cd32', '#ff69b4'],
            origin: {
                x: 0.5,
                y: 0
            }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
};

const surpriseConfetti = () => {
    var duration = 3 * 1000;
    var end = Date.now() + duration;

    (function frame() {
        myConfetti({
            particleCount: 5,
            startVelocity: 25,
            angle: 60,
            spread: 80,
            origin: { x: Math.random(), y: Math.random() },
            shapes: ['star'],
            colors: ['#ff69b4', '#ffcc00', '#00ffff', '#00ff7f']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
};

const sparklingConfetti = () => {
    var duration = 3 * 1000;
    var end = Date.now() + duration;

    (function frame() {
        myConfetti({
            particleCount: 10,
            startVelocity: 40,
            spread: 160,
            gravity: 0.4,
            ticks: 200,
            shapes: ['star'],
            colors: ['#ffd700', '#ffffff', '#ffcc00', '#ffffe0'],
            origin: {
                x: 0.5,
                y: 0.5
            }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
};

const startIt = () => {
    setTimeout(function () {
        (function frame() {
            bothCornerConfetti();

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());
    }, 1000); // Start confetti after 1 second
};

document.addEventListener('DOMContentLoaded', () => {
    startIt();
});
