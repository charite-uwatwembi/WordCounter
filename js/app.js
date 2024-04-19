document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.getElementById('text');
    const statDiv = document.getElementById('stat');

    // Function to count words and characters
    function countWordsAndChars() {
        const text = textarea.value;
        const words = text.trim().split(' ');
        const chars = text.length;

        // Update the statistics display
        statDiv.textContent = `You've written ${words.length} words and ${chars} characters`;
    }

    // Listen for input events on the textarea
    textarea.addEventListener('input', countWordsAndChars);

    // Initial count
    countWordsAndChars();
});
