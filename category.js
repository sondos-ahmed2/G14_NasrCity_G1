const favourite = document.querySelectorAll(".favourite");

favourite.forEach(function (ele) {

    ele.addEventListener("click", function () {

        ele.classList.toggle("text-danger");

    });

}); 