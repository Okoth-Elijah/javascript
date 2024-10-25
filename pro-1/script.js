const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const submitBtn = document.getElementById('submitBtn');
const ul =  document.getElementById('userList');

// Load stored data from localStorage when the page loads

window.addEventListener('load', () => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    storedUsers.forEach(user => {
        const li = document.createElement('li');
        li.textContent = `Name: ${user.fullName} Email: ${user.email}`;
        ul.appendChild(li);
    });
});


submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (fullName.value == '' || email.value == '') {
        alert('Please fill in all fields.');
    }
    else {
        let li = document.createElement('li');
          li.textContent = `Name:  ${fullName.value}  Email: ${email.value}`;
          ul.appendChild(li);


        // store the new user in the localStorage

        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        storedUsers.push({fullName: fullName.value, email: email.value});
        localStorage.setItem('users', JSON.stringify(storedUsers));


          fullName.value = "";
          email.value = "";
    }
});


