var EDD=function(){function j(){document.getElementById("divMessage").innerHTML="Please enter a valid 6-digit pincode.";document.getElementById("divMessage").style.color="#dd1e31"}function d(){document.getElementById("divMessage").innerHTML="";document.getElementById("divInfo").style.display="none";document.getElementById("divCheck").style.display="block"}function k(){c(deliveryDate)?d():(c(deliveryCity)&&(document.getElementById("dataLocation").innerHTML="Your Location",document.getElementById("divInfo").setAttribute("title",
"Your Location")),document.getElementById("divCheck").style.display="none",document.getElementById("divInfo").style.display="block",document.getElementById("txtPin").value="")}function h(){document.getElementById("divMessage").innerHTML="Delivery date not available to this pincode.";document.getElementById("divMessage").style.color="#D46361"}function g(b){return null===b||"undefined"===typeof b}function c(b){return g(b)||/^\s*$/.test(b)}return{initialize:function(){""===deliveryDate&&d();""===deliveryCity&&
(deliveryCity="Your Location",document.getElementById("dataLocation").innerHTML="Your Location",document.getElementById("divInfo").setAttribute("title","Your Location"));document.getElementById("txtPin").addEventListener("keyup",function(b){if(13===b.keyCode)EDD.submit();else if(b=this.value.split("").pop(),isNaN(parseFloat(b))||!isFinite(b))this.value=this.value.replace(b,""),j()})},check:d,cancel:k,submit:function(){var b=document.getElementById("txtPin").value.replace(/^\s+|\s+$/g,""),e;if(!(e=
!/^\d{6}$/.test(b)))a:{e=b.toString().substr(0,2);for(var d="00 01 02 03 04 05 06 07 08 09 10 29 35 54 55 65 66 86 87 88 89 90 91 92 93 94 95 96 97 98 99".split(" "),i=0;i<d.length;i++)if(d[i]===e){e=!0;break a}e=!1}if(e)j();else{document.getElementById("divMessage").innerHTML="Loading...";document.getElementById("divMessage").style.color="#209900";var b=location.pathname.split("/").pop()+"?pincode="+b+"&itemId="+itemId,f=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");
f.onreadystatechange=function(){if(4===f.readyState)if(200===f.status){var a=JSON.parse(f.responseText);if(g(a.status)||"SUCCESS"!==a.status||g(a.deliverBy)||g(a.deliverBy.type))return h();if("DATE"===a.deliverBy.type||"DAYS"===a.deliverBy.type){if(c(a.deliverBy.value))return h();deliveryDate=a.deliverBy.value}else{if(c(a.deliverBy.min)&&c(a.deliverBy.max))return h();deliveryDate=!c(a.deliverBy.min)&&!c(a.deliverBy.max)?a.deliverBy.min+" - "+a.deliverBy.max:c(a.deliverBy.max)?a.deliverBy.min:a.deliverBy.max}deliveryCity=
g(a.deliverAt)||c(a.deliverAt.location)?"Your Location":a.deliverAt.location;document.getElementById("dataDate").innerHTML=deliveryDate;document.getElementById("dataLocation").innerHTML=deliveryCity;document.getElementById("divInfo").setAttribute("title",deliveryCity);k()}else return h()};f.open("POST",b,!0);f.send(null)}}}}();