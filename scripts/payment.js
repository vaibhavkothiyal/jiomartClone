 function refresh() {
        console.log("he refreshed");
        window.location.href = "home.html";
    }
    let arr = JSON.parse(localStorage.getItem("checkoutPrices"));
    let finalPrice = +arr[0];
    let Mrp = +arr[0];
    if (+arr[1] != NaN) {
        Mrp += +arr[1];
    }

    let fp = document.getElementById("fP");
    let mrp = document.getElementById("mrp");
    fp.style.fontWeight = "bold";
    fp.style.color = "blue";
    fp.textContent = finalPrice + "/-";
    mrp.textContent = finalPrice + "/-";

    function radioBtns() {
        var type = document.getElementsByName("select")

        if (type[0].checked || type[1].checked || type[2].checked || type[3].checked || type[4].checked) {
            let container = document.getElementById("addUrl");
            container.innerHTML = "";
            let input = document.createElement("input");
            let btn = document.createElement("button");

            input.placeholder = "add your wallet url here"
            btn.innerText = "proceed"
            btn.onclick = function () {
                proceed();
            }
            container.append(input, btn)
        }
        else if (type[5].checked) {
            let container = document.getElementById("addUrl");
            container.innerHTML = "";
            let btn = document.createElement("button");
            btn.innerText = "Proceed"
            btn.onclick = function () {
                proceed();
            }
            container.append(btn)
        }
    }

    function proceed() {

        function startSldshw() {
            let paymentmsg=document.createElement("div");
            paymentmsg.innerText="Processing your payment";
            paymentmsg.style.position="absolute";
            paymentmsg.style.top="15px";
            paymentmsg.style.left="575px";
            paymentmsg.style.backgroundColor="white";
            paymentmsg.style.padding="10px";
            paymentmsg.style.borderRadius="3px";
            document.body.append(paymentmsg);
            let count=0;
            let process1 = setInterval(function () {
                paymentmsg.innerText="Successful";
                paymentmsg.style.color="green";
                if(count==1){
                    window.location.href = "afterPayment.html";
                }
                count++;
            },
                4000);
        }
        startSldshw();
    }