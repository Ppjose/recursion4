function codifica(x) {
  if (x < 0) return;
  if (x === 0) return 1;

  return x * codifica(x - 1);
}
// bases
/**
 * Desde otras bases a decimal
 * parzibyte.me/blog
 * @author parzibyte
 */
// Binario a decimal
binario = "1100"; // 12
binarioEnDecimal = parseInt(binario, 2); // La base es 2
console.log("El número binario %s en decimal es %s", binario, binarioEnDecimal);

// Octal a decimal
octal = "60"; // 48
octalEnDecimal = parseInt(octal, 8); // La base es 8
console.log("El número octal %s en decimal es %s", octal, octalEnDecimal);

// Hexadecimal a decimal
hexadecimal = "FF"; // 255
hexadecimalEnDecimal = parseInt(hexadecimal, 16); // La base es 16
console.log("El número hexadecimal %s en decimal es %s", hexadecimal, hexadecimalEnDecimal);


console.log("El factorial de  %s en decimal es %s", codifica(5), hexadecimal );
