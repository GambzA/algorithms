function naiveSearch(haystack, needle) {
  var count = 0,
      i,
      j,
      k;

  for (i = 0; i < haystack.length - needle.length + 1; i++) {
    if (haystack[i] === needle[0]) {
      for (j = 1; j < needle.length; j++) {
        if (haystack[i + j] !== needle[j]) {
          break;
        }
      }
      if (j === needle.length) {
        count++;
        console.log(`Found at ${i}`);
      }
    }
  }
  console.log(`Found ${count} instances`);
}

var haystack = "AABAACAADAABAABA"
var needle = "AABA"

naiveSearch(haystack, needle)
