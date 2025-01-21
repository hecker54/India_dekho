document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    const ratingInput = document.getElementById('rating');

    stars.forEach(star => {
        star.addEventListener('mouseover', () => {
            const value = star.getAttribute('data-value');
            updateStars(value);
        });

        star.addEventListener('mouseout', () => {
            updateStars(ratingInput.value);
        });

        star.addEventListener('click', () => {
            ratingInput.value = star.getAttribute('data-value');
            updateStars(ratingInput.value);
        });
    });

    function updateStars(rating) {
        stars.forEach(star => {
            if (star.getAttribute('data-value') <= rating) {
                star.classList.add('selected');
            } else {
                star.classList.remove('selected');
            }
        });
    }
});





 reviewForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        const rating = ratingInput.value;
        const reviewText = document.getElementById('review').value;

        if (reviewText.trim() === '' || rating === '0') {
            alert('Please provide a rating and a review.');
            return;
        }

        // Create a new review element
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review');
        reviewElement.innerHTML = `
            <div class="stars">
                ${'<span class="star selected">&#9733;</span>'.repeat(rating)}
                ${'<span class="star">&#9733;</span>'.repeat(5 - rating)}
            </div>
            <p>${reviewText}</p>
        `;

        // Add the new review to the reviews container
        reviewsContainer.appendChild(reviewElement);

        // Clear the form
        reviewForm.reset();
        updateStars('0');
    });
