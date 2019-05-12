import "../src/scss/main.scss";
import {filtering} from "../src/js/filtering";

window.onload = () => {
    const input = document.getElementById("tableFilter");
    const tableElems = document.querySelectorAll(".table__odd, .table__even");
    const tableBtn = document.querySelector(".form__btn");

    tableBtn.addEventListener("click", () => {
        filtering(input, tableElems);
    });

    input.addEventListener("keydown", e => {
        if (e.keyCode === 13) {
            e.preventDefault();
            filtering(input, tableElems);
        }
    })
}