window.onload = function () {
    const params = new URLSearchParams(window.location.search);
    const imgURL = params.get('imgURL');

    if (imgURL) {
        document.getElementById('imgElement').src = imgURL;
        document.getElementById('imgElementUno').src = imgURL;
    }
};