function area() {
    var width = parseInt(document.getElementById("width").value)
    var height = parseInt(document.getElementById("height").value)
    var area = 0.5 * width * height
    document.getElementById("result").innerHTML = "area of triangle = " + area
}