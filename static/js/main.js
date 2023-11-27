document.addEventListener('DOMContentLoaded', function () {
    const labelContainer = document.getElementById('label-container');
    const labelDetails = document.getElementById('label-details');
    const hideDetailsBtn = document.getElementById('hide-details-btn');

    labelContainer.addEventListener('click', function (event) {
        if (event.target.classList.contains('label')) {
            const labelId = event.target.id;
            const labelText = event.target.textContent;

            // Update label-details content
            labelDetails.innerHTML = `
                <h2>${labelText}</h2>
                <p>Details for ${labelText} go here.</p>
                <button class="hide-details-btn" id="hide-details-btn">Hide Details</button>
            `;

            // Show label-details
            labelDetails.style.display = 'block';

            // Hide label-container
            labelContainer.style.display = 'none';

            // Attach event listener to the new "Hide Details" button
            attachHideDetailsEvent();
        }
    });

    function attachHideDetailsEvent() {
        const hideDetailsBtn = document.getElementById('hide-details-btn');

        hideDetailsBtn.addEventListener('click', function () {
            // Hide label-details and show label-container
            labelDetails.style.display = 'none';
            labelContainer.style.display = 'flex';
        });
    }
});
