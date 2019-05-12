export const filtering = (input, arr) => {
    const inputUppCase = input.value.toUpperCase();
    arr.forEach( tableElem => {
        if (tableElem.textContent.toUpperCase().indexOf(inputUppCase) < 0) {
            tableElem.style.display = "none";
        } else {
            tableElem.style.display = "table-row";
        }
    })
}