var vbyear = "";
var vgender = "";
var vlifedirection = "";
var vlifequa = "";
var vmansiondirection = "";
var vmansionqua = "";
//Bat Quai
function hide(){
	//alert("Hello");
	document.getElementById("explain").style.display = 'none';
	document.getElementById("explain2").style.display = 'none';
}

function checkmain(){	
	var vbyear = document.getElementById("bornyear").value;  //.innerHTML = res;
	var vgender = document.getElementById("gender").value;
	var vdirection = document.getElementById("direction").value;
	//alert(vbyear + vgender + vdirection);
	var ivbyear;
	ivbyear = callife(vbyear, vgender);
	vlifedirection = lifedirection(ivbyear);
	vlifequa = lifequa(ivbyear, vgender);
	//alert(vdirection);
	vmansiondirection = housedirection(vdirection);
	vmansionqua = housequa(vdirection);
	var vcheckmatch = checkmatch(vlifedirection, vmansiondirection);
	document.getElementById("result1").value = "Meng direction la: " + vlifedirection + "; Meng Qua la: " + vlifequa;
	document.getElementById("result2").value = "Mansion direction la: " + vmansiondirection + "; Mansion Qua la: " + vmansionqua;
	document.getElementById("result3").value = vcheckmatch;
	if(vcheckmatch == "HOP"){
		document.getElementById("result3").style.backgroundColor = "red";
	}else if(vcheckmatch == "KHONG HOP"){
		document.getElementById("result3").style.backgroundColor = "lightblue";
	}
	palacecolor(vmansiondirection);
	//alert(vmansionqua);
	//配合以宅卦為卦, 不配合以命卦為卦
	if(vcheckmatch == "HOP"){
		setstars(vmansionqua);
		palacecolor(vmansionqua);
	}else if(vcheckmatch == "KHONG HOP"){
		setstars(vlifequa);
		palacecolor(vlifequa);
	}
	document.getElementById("explain").style.display = 'block';
	document.getElementById("explain2").style.display = 'block';
}

function callife(vyear, vgender){
        var iyear = 0;
        var byear = 0;        
        iyear = parseInt(vyear);
        if(vgender == "M"){
			//if a man
            if( iyear < 2000){
                byear = (2000 - iyear) % 9;
            }else{
                byear = (2099 - iyear) % 9;
            }
        }else if(vgender == "F"){
            //if is woman
            if(iyear < 2000){
                byear = (iyear - 1904) % 9;
            }else{
                byear = (iyear + 6 - 2000) % 9;
            }
        }
        return byear;
}

function lifedirection (byear){
    var rlife = "";	
    if((byear == "1") || (byear == "3") || (byear == "4") || (byear == "9")){
      rlife = "Dong";
    }else{
      rlife = "Tay";
    }	
    return rlife;
}

function lifequa(byear, sgender){
    var plifequa = "";
	//var vietqua = ["KHAM", "KHON", "CHAN", "TON",  "CAN1", "DOAI", "CAN", "LY"];
    var malequas = ["KHAM", "KHON", "CHAN", "TON", "KHON", "CAN1", "DOAI", "CAN", "LY"];
    var femalequas = ["KHAM", "KHON", "CHAN", "TON","CAN" , "CAN1", "DOAI", "CAN", "LY"];
	
    if (sgender == "M"){
        plifequa = malequas[parseInt(byear) -1];
    }else if (sgender == "F"){
        plifequa = femalequas[parseInt(byear) -1];
    }	
    return plifequa;
}

function housedirection(door) {
    var vhousedirection = "";
    if ((door == "NT") || (door == "ST") || (door == "WT") || (door == "NW")){
       housedirection = "Dong";
    }else{
       housedirection = "Tay";
    }
   return housedirection;
}

function housequa(door){
        var housequa = "";
		//var vietqua = ["KHAM", "KHON", "CHAN", "TON",  "CAN1", "DOAI", "CAN", "LY"];
        if (door == "NT"){
            housequa = "LY";  		//向北離
        }else if (door == "ST"){
            housequa = "KHAM"; 		//向南坎
        }else if (door == "WT"){
            housequa = "CHAN"; 		//向西震
        }else if (door == "NW"){
            housequa = "TON";   	//向西北巽
        }else if (door == "SE"){
            housequa = "CAN1" ; 	//向東南乾
        }else if (door == "ET"){
            housequa = "DOAI";   	//向東兌
        }else if (door == "NE"){
            housequa = "KHON";   	//向東北坤
        }else if (door == "SW"){
            housequa = "CAN";   	//向西南艮
        }
    return housequa
}

function checkmatch(ahousediection, alifedirection){
    var matchresult = "";
    if (ahousediection == alifedirection){
        matchresult = "HOP";
        //palacecolor(vhousedirection)
    }else{
        matchresult = "KHONG HOP";
        //palacecolor(vlifediection)
	}
    return matchresult
}

//要用卦來定色,不應用屋向定色, 因可能用屋主卦定色
function palacecolor(quai){
	if((quai == "CAN1") || (quai == "KHON") || (quai == "DOAI") || (quai == "CAN")){
        //都是以「西北、西南、東北、西方」為吉位；並以「東方、東南、南方、北方」為凶位。
			document.getElementById("tnw").style.backgroundColor = "red";
			document.getElementById("tnt").style.backgroundColor = "lightblue";
			document.getElementById("tne").style.backgroundColor = "red";
			document.getElementById("twt").style.backgroundColor = "red";
			document.getElementById("tet").style.backgroundColor = "lightblue";
			document.getElementById("tsw").style.backgroundColor = "red";
			document.getElementById("tst").style.backgroundColor = "lightblue";
			document.getElementById("tse").style.backgroundColor = "lightblue";			
    }else if ((quai == "TON") || (quai == "CHAN") || (quai == "LY") || (quai == "KHAM")){
            //以「東方、東南、南方、北方」為吉位; 並以「西北、西南、東北、西方」為凶位。
            document.getElementById("tnw").style.backgroundColor = "lightblue";
			document.getElementById("tnt").style.backgroundColor = "red";
			document.getElementById("tne").style.backgroundColor = "lightblue";
			document.getElementById("twt").style.backgroundColor = "lightblue";
			document.getElementById("tet").style.backgroundColor = "red";
			document.getElementById("tsw").style.backgroundColor = "lightblue";
			document.getElementById("tst").style.backgroundColor = "red";
			document.getElementById("tse").style.backgroundColor = "red";	
    }
}

function setstars(qua){
	var nw = document.getElementById("tnw").innerHTML;
	var nt = document.getElementById("tnt").innerHTML;
	var ne = document.getElementById("tne").innerHTML;
	var wt = document.getElementById("twt").innerHTML;
	var et = document.getElementById("tet").innerHTML;
	var sw = document.getElementById("tsw").innerHTML;
	var st = document.getElementById("tst").innerHTML;
	var se = document.getElementById("tse").innerHTML;
	//配合以宅卦為卦, 不配合以命卦為卦
	if(qua == "CAN1"){        //乾
	    document.getElementById("tnw").innerHTML = nw + "Phuc Vi";
		document.getElementById("tnt").innerHTML = nt + "Luc Sat";
	    document.getElementById("tne").innerHTML = ne + "Thien Y";
	    document.getElementById("twt").innerHTML = wt + "Sinh Khi";
	    document.getElementById("tet").innerHTML = et + "Ngu Quy";
	    document.getElementById("tsw").innerHTML = sw + "Dien Nien";
	    document.getElementById("tst").innerHTML = st + "Tuyet Menh";
	    document.getElementById("tse").innerHTML = se + "Hoa Hai";        
    }else if(qua == "KHON"){        //坤
		document.getElementById("tnw").innerHTML = nw + "Dien Nien";
		document.getElementById("tnt").innerHTML = nt + "Tuyet Menh";
	    document.getElementById("tne").innerHTML = ne + "Sinh Khi";
	    document.getElementById("twt").innerHTML = wt + "Thien Y";
	    document.getElementById("tet").innerHTML = et + "Hoa Hai";
	    document.getElementById("tsw").innerHTML = sw + "Phuc Vi";
	    document.getElementById("tst").innerHTML = st + "Luc Sat";
	    document.getElementById("tse").innerHTML = se + "Ngu Quy";       
    }else if(qua == "TON"){         //巽
		document.getElementById("tnw").innerHTML = nw + "Hoa Hai";
		document.getElementById("tnt").innerHTML = nt + "Sinh Khi";
	    document.getElementById("tne").innerHTML = ne + "Tuyet Menh";
	    document.getElementById("twt").innerHTML = wt + "Luc Sat";
	    document.getElementById("tet").innerHTML = et + "Dien Nien";
	    document.getElementById("tsw").innerHTML = sw + "Ngu Quy";
	    document.getElementById("tst").innerHTML = st + "Thien Y";
	    document.getElementById("tse").innerHTML = se + "Phuc Vi";        
    }else if(qua == "DOAI"){         //兑
		document.getElementById("tnw").innerHTML = nw + "Sinh Khi";
		document.getElementById("tnt").innerHTML = nt + "Hoa Hai";
	    document.getElementById("tne").innerHTML = ne + "Dien Nien";
	    document.getElementById("twt").innerHTML = wt + "Phuc Vi";
	    document.getElementById("tet").innerHTML = et + "Tuyet Menh";
	    document.getElementById("tsw").innerHTML = sw + "Thien Y";
	    document.getElementById("tst").innerHTML = st + "Ngu Quy";
	    document.getElementById("tse").innerHTML = se + "Luc Sat";        
    }else if(qua == "CAN"){       //艮
		document.getElementById("tnw").innerHTML = nw + "Thien Y";
		document.getElementById("tnt").innerHTML = nt + "Ngu Quy";
	    document.getElementById("tne").innerHTML = ne + "Phuc Vi";
	    document.getElementById("twt").innerHTML = wt + "Dien Nien";
	    document.getElementById("tet").innerHTML = et + "Luc Sat";
	    document.getElementById("tsw").innerHTML = sw + "Sinh Khi";
	    document.getElementById("tst").innerHTML = st + "Hoa Hai";
	    document.getElementById("tse").innerHTML = se + "Tuyet Menh";       
    }else if(qua == "CHAN"){       //震
		document.getElementById("tnw").innerHTML = nw + "Ngu Quy";
		document.getElementById("tnt").innerHTML = nt + "Thien Y";
	    document.getElementById("tne").innerHTML = ne + "Luc Sat";
	    document.getElementById("twt").innerHTML = wt + "Tuyet Menh";
	    document.getElementById("tet").innerHTML = et + "Phuc Vi";
	    document.getElementById("tsw").innerHTML = sw + "Hoa Hai";
	    document.getElementById("tst").innerHTML = st + "Sinh Khi";
	    document.getElementById("tse").innerHTML = se + "Dien Nien";        
    }else if(qua == "LY"){          //离
		document.getElementById("tnw").innerHTML = nw + "Tuyet Menh";
		document.getElementById("tnt").innerHTML = nt + "Dien Nien";
	    document.getElementById("tne").innerHTML = ne + "Hoa Hai";
	    document.getElementById("twt").innerHTML = wt + "Ngu Quy";
	    document.getElementById("tet").innerHTML = et + "Sinh Khi";
	    document.getElementById("tsw").innerHTML = sw + "Luc Sat";
	    document.getElementById("tst").innerHTML = st + "Phuc Vi";
	    document.getElementById("tse").innerHTML = se + "Thien Y";        
    }else if(qua == "KHAM"){         //坎
		document.getElementById("tnw").innerHTML = nw + "Luc Sat";
		document.getElementById("tnt").innerHTML = nt + "Phuc Vi";
	    document.getElementById("tne").innerHTML = ne + "Ngu Quy";
	    document.getElementById("twt").innerHTML = wt + "Hoa Hai";
	    document.getElementById("tet").innerHTML = et + "Thien Y";
	    document.getElementById("tsw").innerHTML = sw + "Tuyet Menh";
	    document.getElementById("tst").innerHTML = st + "Dien Nien";
	    document.getElementById("tse").innerHTML = se + "Sinh Khi";
    }    
}

function showexplain(){
	window.location = "explanation.html";
}

function showsolution(){
	window.location = "solution.html";
}




