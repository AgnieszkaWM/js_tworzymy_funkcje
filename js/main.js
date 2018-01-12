
function getTriangleArea (a,h) {
	if (a > 0 && h > 0) {
		return a*h/2;
	}else {
		return"Nieprawidłowe dane";
	}
}

var triangle1Area = getTriangleArea (15,4);
var triangle2Area = getTriangleArea (20,5);
var triangle3Area = getTriangleArea (30,6);

alert(triangle1Area);
alert(triangle2Area);
alert(triangle3Area);

console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);