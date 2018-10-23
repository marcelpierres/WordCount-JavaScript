document.getElementById("openFile").onchange = function() {
  var file = this.files[0];
  var fr = new FileReader();
  fr.onload = function(progressEvent) {
    // show file contents
    document.getElementById("fcontents").textContent = fr.result;

    //use Regular expression to split file
    var lines = fr.result.split("\n");
    // line variable
    var linecount = 0;
    var chars = fr.result.split(/[\S^\n]/gm);
    // character variable
    var charcount = 0;
    var words = fr.result.split(/[\s^\n]/gm);
    //words variable
    var wordcount = 0;

    while (linecount < lines.length) {
      linecount++;
    }
    document.getElementById("lcount").innerHTML = linecount;

    while (charcount < chars.length) {
      charcount++;
    }
    document.getElementById("ccount").innerHTML = charcount - linecount;

    while (wordcount < words.length) {
      wordcount++;
    }
    document.getElementById("wcount").innerHTML = wordcount - (linecount - 1);
  };
  fr.readAsText(file);
};
