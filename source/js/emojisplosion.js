window.emojisplosion = emojisplosion;

const triggerEmojisplosion = event => {
  var sign = Math.random() > 0.5 ? 1 : -1;
  emojisplosion({
    emojiCount: 1,
    physics: {
      fontSize: 24,
      gravity: 0.16,
      framerate: 12,
      initialVelocities: {
        x: {
          max: 1,
          min: -1
        },
        y: {
          max: -3,
          min: -5
        }
      }
    },
    position: {
      x: event.clientX,
      y: event.clientY
    }
  });
};

for (const eventName of ["click", "drag", "touchmove"]) {
  document.addEventListener(eventName, triggerEmojisplosion);
}
