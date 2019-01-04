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
	// document.getElementById("result1").value = "Meng direction la: " + vlifedirection + " ; Meng Qua la: " + vlifequa;
	// document.getElementById("result2").value = "Mansion direction la: " + vmansiondirection + " ; Mansion Qua la: " + vmansionqua;
	document.getElementById("result1").value = "Hướng nhà của cung mệnh: " + vlifedirection + " ; Quẻ mệnh: " + vlifequa;
	document.getElementById("result2").value = "Hướng nhà ở: " + vmansiondirection + " ; Quẻ trạch: " + vmansionqua;
	document.getElementById("result3").value = vcheckmatch;
	if(vcheckmatch == "HỢP"){
		document.getElementById("result3").style.backgroundColor = "red";
	}else if(vcheckmatch == "KHÔNG HỢP"){
		document.getElementById("result3").style.backgroundColor = "lightblue";
	}
	palacecolor(vmansiondirection);
	//alert(vmansionqua);
	//配合以宅卦為卦, 不配合以命卦為卦
	if(vcheckmatch == "HỢP"){
		setstars(vmansionqua);
		palacecolor(vmansionqua);
	}else if(vcheckmatch == "KHÔNG HỢP"){
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
      rlife = "Đông";
    }else{
      rlife = "Tây";
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
       housedirection = "Đông";
    }else{
       housedirection = "Tây";
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
        matchresult = "HỢP";
        //palacecolor(vhousedirection)
    }else{
        matchresult = "KHÔNG HỢP";
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
	    document.getElementById("tnw").innerHTML = nw + "Phục vị";
		document.getElementById("tnt").innerHTML = nt + "Lục sát";
	    document.getElementById("tne").innerHTML = ne + "Thiên Y";
	    document.getElementById("twt").innerHTML = wt + "Sinh khí";
	    document.getElementById("tet").innerHTML = et + "Ngũ quỷ";
	    document.getElementById("tsw").innerHTML = sw + "Diên niên";
	    document.getElementById("tst").innerHTML = st + "Tuyệt mệnh";
	    document.getElementById("tse").innerHTML = se + "Họa hại";        
    }else if(qua == "KHON"){        //坤
		document.getElementById("tnw").innerHTML = nw + "Diên niên";
		document.getElementById("tnt").innerHTML = nt + "Tuyệt mệnh";
	    document.getElementById("tne").innerHTML = ne + "Sinh khí";
	    document.getElementById("twt").innerHTML = wt + "Thiên Y";
	    document.getElementById("tet").innerHTML = et + "Họa hại";
	    document.getElementById("tsw").innerHTML = sw + "Phục vị";
	    document.getElementById("tst").innerHTML = st + "Lục sát";
	    document.getElementById("tse").innerHTML = se + "Ngũ quỷ";       
    }else if(qua == "TON"){         //巽
		document.getElementById("tnw").innerHTML = nw + "Họa hại";
		document.getElementById("tnt").innerHTML = nt + "Sinh khí";
	    document.getElementById("tne").innerHTML = ne + "Tuyệt mệnh";
	    document.getElementById("twt").innerHTML = wt + "Lục sát";
	    document.getElementById("tet").innerHTML = et + "Diên niên";
	    document.getElementById("tsw").innerHTML = sw + "Ngũ quỷ";
	    document.getElementById("tst").innerHTML = st + "Thiên Y";
	    document.getElementById("tse").innerHTML = se + "Phục vị";        
    }else if(qua == "DOAI"){         //兑
		document.getElementById("tnw").innerHTML = nw + "Sinh khí";
		document.getElementById("tnt").innerHTML = nt + "Họa hại";
	    document.getElementById("tne").innerHTML = ne + "Diên niên";
	    document.getElementById("twt").innerHTML = wt + "Phục vị";
	    document.getElementById("tet").innerHTML = et + "Tuyệt mệnh";
	    document.getElementById("tsw").innerHTML = sw + "Thiên Y";
	    document.getElementById("tst").innerHTML = st + "Ngũ quỷ";
	    document.getElementById("tse").innerHTML = se + "Lục sát";        
    }else if(qua == "CAN"){       //艮
		document.getElementById("tnw").innerHTML = nw + "Thiên Y";
		document.getElementById("tnt").innerHTML = nt + "Ngũ quỷ";
	    document.getElementById("tne").innerHTML = ne + "Phục vị";
	    document.getElementById("twt").innerHTML = wt + "Diên niên";
	    document.getElementById("tet").innerHTML = et + "Lục sát";
	    document.getElementById("tsw").innerHTML = sw + "Sinh khí";
	    document.getElementById("tst").innerHTML = st + "Họa hại";
	    document.getElementById("tse").innerHTML = se + "Tuyệt mệnh";       
    }else if(qua == "CHAN"){       //震
		document.getElementById("tnw").innerHTML = nw + "Ngũ quỷ";
		document.getElementById("tnt").innerHTML = nt + "Thiên Y";
	    document.getElementById("tne").innerHTML = ne + "Lục sát";
	    document.getElementById("twt").innerHTML = wt + "Tuyệt mệnh";
	    document.getElementById("tet").innerHTML = et + "Phục vị";
	    document.getElementById("tsw").innerHTML = sw + "Họa hại";
	    document.getElementById("tst").innerHTML = st + "Sinh khí";
	    document.getElementById("tse").innerHTML = se + "Diên niên";        
    }else if(qua == "LY"){          //离
		document.getElementById("tnw").innerHTML = nw + "Tuyệt mệnh";
		document.getElementById("tnt").innerHTML = nt + "Diên niên";
	    document.getElementById("tne").innerHTML = ne + "Họa hại";
	    document.getElementById("twt").innerHTML = wt + "Ngũ quỷ";
	    document.getElementById("tet").innerHTML = et + "Sinh khí";
	    document.getElementById("tsw").innerHTML = sw + "Lục sát";
	    document.getElementById("tst").innerHTML = st + "Phục vị";
	    document.getElementById("tse").innerHTML = se + "Thiên Y";        
    }else if(qua == "KHAM"){         //坎
		document.getElementById("tnw").innerHTML = nw + "Lục sát";
		document.getElementById("tnt").innerHTML = nt + "Phục vị";
	    document.getElementById("tne").innerHTML = ne + "Ngũ quỷ";
	    document.getElementById("twt").innerHTML = wt + "Họa hại";
	    document.getElementById("tet").innerHTML = et + "Thiên Y";
	    document.getElementById("tsw").innerHTML = sw + "Tuyệt mệnh";
	    document.getElementById("tst").innerHTML = st + "Diên niên";
	    document.getElementById("tse").innerHTML = se + "Sinh khí";
    }    
}

function showexplain(){
	window.location = "explanation.html";
}

function showsolution(){
	window.location = "solution.html";
}




