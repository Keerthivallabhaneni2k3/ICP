document.addEventListener('DOMContentLoaded', function() {
    const htmlEditor = document.getElementById('html-code');
    const cssEditor = document.getElementById('css-code');
    const jsEditor = document.getElementById('js-code');
    const previewFrame = document.getElementById('live-preview');
    const errorConsole = document.getElementById('error-console');
    const runBtn = document.getElementById('run-btn');
    const clearBtn = document.getElementById('clear-btn');
    const themeBtn = document.getElementById('toggle-theme');

    // Run code function with error handling
    function runCode() {
        errorConsole.innerHTML = ''; // Clear previous errors
        
        try {
            const html = htmlEditor.value;
            const css = `<style>${cssEditor.value}</style>`;
            const js = `<script>${jsEditor.value}<\/script>`;
            
            const previewDoc = previewFrame.contentDocument || previewFrame.contentWindow.document;
            previewDoc.open();
            previewDoc.write(html + css + js);
            previewDoc.close();
            
            // Clear errors if successful
            errorConsole.innerHTML = 'No errors detected';
            errorConsole.style.color = '#2ecc71';
        } catch (error) {
            // Display errors in console
            errorConsole.innerHTML = `Error: ${error.message}`;
            errorConsole.style.color = '#e74c3c';
        }
    }

    // Theme toggle
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Clear all editors
    clearBtn.addEventListener('click', () => {
        htmlEditor.value = '';
        cssEditor.value = '';
        jsEditor.value = '';
        errorConsole.innerHTML = '';
        const previewDoc = previewFrame.contentDocument || previewFrame.contentWindow.document;
        previewDoc.open();
        previewDoc.write('');
        previewDoc.close();
    });

    // Run button event
    runBtn.addEventListener('click', runCode);

    // Initial empty preview
    const previewDoc = previewFrame.contentDocument || previewFrame.contentWindow.document;
    previewDoc.open();
    previewDoc.write('');
    previewDoc.close();
});
