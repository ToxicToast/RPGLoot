export class Utils {
  roundNumber(number, precision) {
    const factor = Math.pow(10, precision);
  	const tempNumber = number * factor;
  	const roundedTempNumber = Math.round(tempNumber);
  	return roundedTempNumber / factor;
  }
}
