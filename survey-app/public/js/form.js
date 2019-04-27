var x, i, j, selElmnt, a, b, c;

x = document.getElementsByClassName("custom-select1");
for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < selElmnt.length; j++) {
    
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
                y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
            }
        }
        h.click();
    });
    b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
       
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
   
    var x, y, i, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
        arrNo.push(i)
    } else {
        y[i].classList.remove("select-arrow-active");
    }
    }
    for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
    }
    }
}

document.addEventListener("click", closeAllSelect);
// y=document.getElementById("incident");
// console.log(b);
console
var entry={}

function Onsubmit(){
    var userUrl = '/addEntry';
    var brief=document.getElementById('reportEve');
    var inctype=document.getElementById('incident').value;
    var witness= document.getElementById('q3').value;
    var whereI= document.getElementById('where').value;
    var when= document.getElementById('when');
    entry["Brief"]=brief;
    entry["type"]=inctype;
    entry["witness"]=witness;
    entry["Where"]=whereI;
    entry["when"]=when;

    console.log(entry);

    var successCallback = function (data) {
                console.log(data);
                setTimeout(function() {
                    window.localStorage.removeItem("token");
                    window.location = "/index.html";    
                }, 2500);
                $.toast({
                    heading: 'Thank you',
                    text: 'We appreciate.'
                })
        
            }
    $.ajax({
                type: "POST",
                url: userUrl,
                data: entry,
                success: successCallback
            });


}
//console.log(document.getElementsByTagName("select").value)

function Oncancel(){
    window.location="/dashboard.html";
