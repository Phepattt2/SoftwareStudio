// Listen for messages from the main thread

let timeOut

function getRanColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function updateButton() {
    let buttonAtrributes = { "time": "", "color": ""}
    const currentTime = new Date()

    buttonAtrributes["time"] = currentTime
    buttonAtrributes["color"] = getRanColor()

    self.postMessage(buttonAtrributes);
    timeOut = setTimeout(updateButton, 1000);
}


self.addEventListener("message", function sendTime(event) {
    if (event.data === "buttonClickedState") {
        updateButton()
    } else if (event.data === "buttonCancleState") {
        this.clearTimeout(timeOut)
    }
});