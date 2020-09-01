function convert() {
    let txt = document.getElementById("text").value.split("\n");
    let str = "";
    let temp;
    
    str += '<p style="padding: 0px; margin: 0px;">&lt;section class="code"&gt;</p>'
    str += '<p style="padding: 0px; margin: 0px;">&lt;pre&gt;</p>'

    for (let i = 0; i < txt.length; i++) {
        temp = txt[i].replace("<", "&lt;").replace(">", "&gt;");
        str += "<pre style='padding: 0px; margin: 0px;'>&lt;code&gt;" + temp + "&lt;/code&gt;</pre>";
    }

    str += '<p style="padding: 0px; margin: 0px;">&lt;/pre&gt;</p>'
    str += '<p style="padding: 0px; margin: 0px;">&lt;/section&gt;</p>'

    document.getElementById("output").innerHTML = str;
}
