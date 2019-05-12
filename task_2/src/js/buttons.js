export const toggleModal = () => {
    const buttons = document.querySelectorAll(".button");
    const modal = document.querySelector(".modal");
    buttons.forEach( button => {
        button.addEventListener("click", () => {
            modal.classList.toggle("hide");
        })
    })
}