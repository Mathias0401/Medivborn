document.addEventListener("keydown", function(event) {
    if (event.code === 'Enter') {
        let val = document.querySelector('input').value;
        console.log(val);
        let prevComm = document.querySelector('.prev-commands');

        const newText = document.createElement("p");
        newText.classList = "prev-comm";
        newText.textContent = val;
        prevComm.append(newText);
        document.querySelector('input').value = '';
    }
});

document.querySelector('#btnClear').addEventListener('click',()=>{  
    let test = document.querySelectorAll('.prev-comm');
    console.log(test);

    test.forEach(element => {
        element.remove();
    });

    test = document.querySelectorAll('.prev-comm');
    console.log(test);
})
