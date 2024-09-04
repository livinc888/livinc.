document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.content');

    // Tab switching functionality
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove 'active' class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            // Add 'active' class to the clicked tab and corresponding content
            this.classList.add('active');
            const contentId = this.id.replace('-tab', '') + '-content';
            const contentToShow = document.getElementById(contentId);

            if (contentToShow) {
                contentToShow.classList.add('active');
            } else {
                console.error('No content found for ID: ${contentId}');
            }
        });
    });

    const addImageBtn = document.querySelector('.add-image');
    const gallery = document.querySelector('.gallery-images');

    // Function to add a new image with a delete button
    addImageBtn.addEventListener('click', function() {
        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add('image-wrapper');

        const newImg = document.createElement('img');
        newImg.src = 'https://via.placeholder.com/100'; // Placeholder image source
        newImg.alt = 'Gallery Image';

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'X'; // Shorter text for delete button
        deleteBtn.classList.add('delete-image');

        // Delete the image when the delete button is clicked
        deleteBtn.addEventListener('click', function() {
            gallery.removeChild(imageWrapper);
        });

        imageWrapper.appendChild(newImg);
        imageWrapper.appendChild(deleteBtn);
        gallery.appendChild(imageWrapper);
    });
});