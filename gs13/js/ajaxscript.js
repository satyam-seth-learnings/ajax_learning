document.getElementById('btnajax').addEventListener('click', makerequest);

function makerequest() {
    console.log('Button Clicked');
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://dummy.restapiexample.com/api/v1/create', true);
    xhr.responseType = 'json';
    xhr.onload = () => {
        if (xhr.status === 200) {
            console.log(xhr.response);
            document.getElementById("info").innerText = "Data Inserted";
        } else {
            console.log('Problem Occurred');
        }
    };
    mydata = '{"name": "test", "salary": "10", "age": "25"}';
    xhr.send(mydata);
}