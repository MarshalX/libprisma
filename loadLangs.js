const all = window.document.getElementById("language").querySelectorAll("input"); /* for instead of forEach because requires one-by-one call */ (async () =>{ for (i of all) {console.log(`loading ${i.value}`); i.click(); /* sleep a bit because of API rate limits */ await new Promise(res => setTimeout(res, 100))}})()