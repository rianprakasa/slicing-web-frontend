// tangkap tombol dengan class accordion
let acc = document.getElementsByClassName('accordion');
let i;

// gunakan for loop untuk membuat event click
 for(i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function() {
        // ketika di click, tombol akan menambahkan class dengan nama active
        this.classList.toggle('active');

        // variabel panel memiliki nilai setelah variabel dengan index ke i
        let panel = this.nextElementSibling;
        if(panel.style.display === "block") {
            panel.style.display = "none";
        }else {
            panel.style.display = "block";
        }
    })
 }