function GetDate() {
    let epochDate = Date.now();
    let element = document.getElementById("BodyParagraph")

    element.textContent = element.innerHTML + epochDate;
}

GetDate();
