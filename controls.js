function httpLoad(num) {
    var naigator = document.getElementById("navi");
    document.getElementById('load').style.display = "block";
    switch (num) {
        case 0:
            naigator.style.marginLeft = "47px"
            break;

        case 1:
            naigator.style.marginLeft = "177px"
            break;
        case 2:
            naigator.style.marginLeft = "300px"
            break;
    }
}