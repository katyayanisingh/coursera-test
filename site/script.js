function makeMultiplier (multiplier) {
	function b() {
		console.log("Multiplier is" + multiplier);

	}
	b();
	return (
		function (x) {
			return multiplier * x;

		}
		);
}
var doubleaLL = makeMultiplier(2);
console.log(doubleall(10));