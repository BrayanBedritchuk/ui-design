window.onload = function () {
    initListeners();
};

function initListeners() {
    getByClass("button").addEventListener('click', showModal);
    getByClass("hide").addEventListener('click', hideModal);
}

function showModal() {
    getByClass("modal").style.bottom = "20px";
}

function hideModal() {
    getByClass("modal").style.bottom = "-300px";
}

function getByClass(className) {
    return document.getElementsByClassName(className)[0];
}