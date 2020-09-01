function convert() {
    let txt = document.getElementById("text").value.split("\n");
    let lineNums = document.getElementById("lineNums").value.split("\n");
    let str = "";
    let temp;
    let isHL = false;
    
    str += '<p style="padding: 0px; margin: 0px;">&lt;section class="code"&gt;</p>';
    str += '<p style="padding: 0px; margin: 0px;">&lt;pre&gt;</p>';

    for (let i = 0; i < txt.length; i++) {
        temp = txt[i].substring(4).replace("<", "&lt;").replace(">", "&gt;");

        for (let j = 0; j < lineNums.length; j++) {
            if (lineNums[j] == (i+1)) {
                isHL = true;
            }
        }
        if (isHL === true) {
            str += "<pre style='padding: 0px; margin: 0px;'>&lt;code class='hl'&gt;" + temp + "&lt;/code&gt;</pre>";
        }
        else if (isHL === false) {
            str += "<pre style='padding: 0px; margin: 0px;'>&lt;code&gt;" + temp + "&lt;/code&gt;</pre>";
        }
        isHL = false;
    }

    str += '<p style="padding: 0px; margin: 0px;">&lt;/pre&gt;</p>';
    str += '<p style="padding: 0px; margin: 0px;">&lt;/section&gt;</p>';

    document.getElementById("output").innerHTML = str;
}
