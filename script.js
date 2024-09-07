const crInput = document.getElementById('currentRating');
const nrInput = document.getElementById('numberReviews');
const drInput = document.getElementById('desiredRating');
const result = document.getElementById('result');

function updateRating() {
    const currentRating = parseFloat(crInput.value) || -1;
    const numberReviews = parseInt(nrInput.value) || -1;
    const desiredRating = parseFloat(drInput.value) || -1;
    
    if (currentRating == -1 || numberReviews == -1 || desiredRating == -1) {
        result.textContent = `Input a valid number`;
        return;
    }

    if (currentRating < 1 || currentRating > 5) {
        result.textContent = `Input a current rating between 1 to 5`;
        return;
    }

    if (numberReviews < 0) {
        result.textContent = `Input a number of reviews that is at least 0`;
        return;
    }

    if (desiredRating < 1 || desiredRating > 5) {
        result.textContent = `Input a desired rating between 1 to 5`;
        return;
    }

    if (desiredRating < currentRating) {
        result.textContent = `Input a desired rating above your current rating`;
        return;
    }

    const totalNeeded = ((desiredRating - currentRating) * numberReviews) / (5 - desiredRating);
    result.textContent = `You need ${totalNeeded} 5 star reviews to reach a rating of ${desiredRating}`;
}

// Add event listeners
crInput.addEventListener('input', updateRating);
drInput.addEventListener('input', updateRating);