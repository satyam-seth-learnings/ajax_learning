document.getElementById('btnajax').addEventListener('click', makerequest);
let t = document.getElementById('title');
let b = document.getElementById('body');

function makerequest() {
    console.log('Button Clicked');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
    xhr.withCredentials = true;
    xhr.responseType = 'json';
    xhr.onload = () => {
        if (xhr.status === 200) {
            console.log(xhr.response);
            x = xhr.response;
            for (i = 0; i < x.length; i++) {
                console.log(x[i].userId);
                console.log(x[i].id);
                console.log(x[i].title);
                console.log(x[i].body);
            }
        } else {
            console.log('Problem Occurred');
        }
    };
    xhr.send();
}