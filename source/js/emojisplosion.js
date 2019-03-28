window.emojisplosion = emojisplosion;

const triggerEmojisplosion = (event) => {
    emojisplosion({
        emojiCount: 1,
        physics:{
            fontSize: 24,
        },
        position: {
            x: event.clientX,
            y: event.clientY,
        },
    });
};

for (const eventName of ["click", "drag", "touchmove"]) {
    document.addEventListener(eventName, triggerEmojisplosion);
}
