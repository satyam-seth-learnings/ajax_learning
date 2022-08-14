document.getElementById('btnajax').addEventListener('click', makerequest);
let data = document.getElementById('data');

function makerequest() {
    console.log('Button Clicked');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.xml', true);
    xhr.withCredentials = true;
    xhr.responseType = 'document';
    xhr.onload = () => {
        if (xhr.status === 200) {
            x = xhr.response.getElementsByTagName('student');
            for (i = 0; i < x.length; i++) {
                data.innerHTML += "<p>" + x[i].getElementsByTagName('name')[0]
                    .childNodes[0].nodeValue + "</p>" + "<p>" + x[i].getElementsByTagName('roll')[0]
                        .childNodes[0].nodeValue + "</p>" + "</br>";
            }
        } else {
            console.log('Problem Occurred');
        }
    };
    xhr.send();
}