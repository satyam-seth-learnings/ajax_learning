document.getElementById('btnajax').addEventListener('click', makerequest);

function makerequest() {
    console.log('Button Clicked');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.txt', true);
    // xhr.open('GET', 'data2.txt', true);
    // xhr.timeout = 2;
    xhr.timeout = 2000;
    xhr.onload = () => {
        if (xhr.status === 200) {
            console.log(xhr);
            console.log(xhr.responseText);
        } else {
            console.log('Problem Occurred');
        }
    };

    xhr.onprogress = (e) => {
        console.log(e.loaded);
        console.log(e.total);
    };

    xhr.onerror = () => {
        console.log("Network Not Available");
    };

    xhr.onloadstart = () => {
        console.log("Transaction has started...");
    };

    xhr.onloadend = () => {
        console.log("Transaction End.");
    };

    xhr.onabort = () => {
        console.log("Abort");
    };

    xhr.ontimeout = () => {
        console.log("Timeout");
    };

    xhr.send();
}