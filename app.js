let upvotes = 0;
let downvotes = 0;
let scale = 1;  // Starting scale of the image

function incrementUpvote() {
    upvotes++;
    document.getElementById("upvoteCount").textContent = upvotes + 'k';
    updateImageSize(0.1);  // Increase size by 10%
}

function incrementDownvote() {
    downvotes++;
    document.getElementById("downvoteCount").textContent = downvotes + 'k';
    updateImageSize(-0.1);  // Decrease size by 10%
}

function updateImageSize(amount) {
    scale += amount;
    if (scale < 0.1) scale = 0.1; // Prevent image from becoming too small
    if (scale > 3) scale = 3; // Prevent image from becoming too large
    document.getElementById("muscleImage").style.width = (200 * scale) + "px"; // Adjust width
}
