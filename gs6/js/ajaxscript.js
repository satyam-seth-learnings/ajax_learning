document.getElementById('btnajax').addEventListener('click', makerequest);
let dt = document.getElementById('data');

function makerequest() {
    console.log('Button Clicked');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.txt', true);
    xhr.withCredentials = true;
    xhr.responseType = 'text';
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = () => {
        if (xhr.status === 200) {
            console.log(xhr.responseText);
            dt.innerText = xhr.responseText;
        } else {
            console.log('Problem Occurred');
        }
    };
    xhr.send();
}