const dropzone = document.getElementById('dropzone');
const fileInput = document.getElementById('fileInput');
const uploadButton = document.getElementById('uploadButton');
const fileList = document.getElementById('fileList');

dropzone.ondrop = function(event) {
    event.preventDefault();
    handleFiles(event.dataTransfer.files);
};

dropzone.ondragover = function(event) {
    event.preventDefault();
};

uploadButton.addEventListener('click', function() {
    fileInput.click();
});

fileInput.addEventListener('change', function() {
    handleFiles(fileInput.files);
});

function handleFiles(files) {
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const li = document.createElement('li');
        li.textContent = file.name;
        fileList.appendChild(li);

        const formData = new FormData();
        formData.append('file', file);

        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'upload.php', true);
        xhr.onload = function() {
            if (xhr.status === 200) {
                console.log('Uploaded!');
            } else {
                console.log('Error!');
            }
        };
        xhr.send(formData);
    }
}