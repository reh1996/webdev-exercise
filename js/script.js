function populateList() {
  var ul = document.getElementById("mainList");
  for (var i = 1; i <= 100; i++) {
    var li = document.createElement("li");

    ul.appendChild(li);
    if (i % 5 == 0 && i % 3 == 0) {
      li.innerHTML = "FizzBuzz";
      li.setAttribute('class', 'fizzbuzz--text');
    } else if (i % 3 == 0) {
      li.innerHTML = "Fizz";
      li.setAttribute('class', 'fizz--text');
    } else if (i % 5 == 0) {
      li.innerHTML = "Buzz";
      li.setAttribute('class', 'buzz--text');
    } else {
      li.innerHTML = i;
    }
  }
}
