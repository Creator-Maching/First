window.onload = function() {
    let viewportWidth = window.innerWidth;

    if (viewportWidth < 768) {
        document.getElementById('message-box').style.display = 'block';
    }
}

function closeMessage() {
    document.getElementById('message-box').style.display = 'none';
}
