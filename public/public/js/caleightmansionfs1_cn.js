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
	var vcheckmatch;
	vcheckmatch = checkmatch(vlifedirection, vmansiondirection);
	document.getElementById("result1").value = "命向是: " + vlifedirection + " ; 命卦是: " + vlifequa;
	document.getElementById("result2").value = "宅向是: " + vmansiondirection + " ; 宅卦是: " + vmansionqua;
	document.getElementById("result3").value = vcheckmatch;
	if(vcheckmatch == "相配"){
		document.getElementById("result3").style.backgroundColor = "red";
	}else if(vcheckmatch == "不相配"){
		document.getElementById("result3").style.backgroundColor = "lightblue";
	}
	palacecolor(vmansiondirection);
	//alert(vmansionqua);
	//配合以宅卦為卦, 不配合以命卦為卦
	if(vcheckmatch == "相配"){
		setstars(vmansionqua);
		palacecolor(vmansionqua);
	}else if(vcheckmatch == "不相配"){
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
      rlife = "東";
    }else{
      rlife = "西";
    }	
    return rlife;
}

function lifequa(byear, sgender){
    var plifequa = "";
	//var vietqua = ["KHAM", "KHON", "CHAN", "TON",  "CAN1", "DOAI", "CAN", "LY"];
    var malequas = ["坎", "坤", "震", "巽", "坤", "乾", "兌", "艮", "離"];
    var femalequas = ["坎", "坤", "震", "巽", "艮", "乾", "兌", "艮", "離" ];
	
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
       housedirection = "東";
    }else{
       housedirection = "西";
    }
   return housedirection;
}

function housequa(door){
        var housequa = "";
		
        if (door == "NT"){
            housequa = "離";  		//向北離
        }else if (door == "ST"){
            housequa = "坎"; 		//向南坎
        }else if (door == "WT"){
            housequa = "震"; 		//向西震
        }else if (door == "NW"){
            housequa = "巽";   	//向西北巽
        }else if (door == "SE"){
            housequa = "乾" ; 	//向東南乾
        }else if (door == "ET"){
            housequa = "兌";   	//向東兌
        }else if (door == "NE"){
            housequa = "坤";   	//向東北坤
        }else if (door == "SW"){
            housequa = "艮";   	//向西南艮
        }
    return housequa
}

function checkmatch(ahousediection, alifedirection){
    var matchresult = "";
    if (ahousediection == alifedirection){
        matchresult = "相配";
        //palacecolor(vhousedirection)
    }else{
        matchresult = "不相配";
        //palacecolor(vlifediection)
	}
    return matchresult
}

//要用卦來定色,不應用屋向定色, 因可能用屋主卦定色
function palacecolor(quai){
	if((quai == "乾") || (quai == "坤") || (quai == "兑") || (quai == "艮")){
        //都是以「西北、西南、東北、西方」為吉位；並以「東方、東南、南方、北方」為凶位。
			document.getElementById("tnw").style.backgroundColor = "red";
			document.getElementById("tnt").style.backgroundColor = "lightblue";
			document.getElementById("tne").style.backgroundColor = "red";
			document.getElementById("twt").style.backgroundColor = "red";
			document.getElementById("tet").style.backgroundColor = "lightblue";
			document.getElementById("tsw").style.backgroundColor = "red";
			document.getElementById("tst").style.backgroundColor = "lightblue";
			document.getElementById("tse").style.backgroundColor = "lightblue";			
    }else if ((quai == "巽") || (quai == "震") || (quai == "离") || (quai == "坎")){
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
	if(qua == "乾"){        //乾
	    document.getElementById("tnw").innerHTML = nw + "伏位";
		document.getElementById("tnt").innerHTML = nt + "六煞";
	    document.getElementById("tne").innerHTML = ne + "天医";
	    document.getElementById("twt").innerHTML = wt + "生气";
	    document.getElementById("tet").innerHTML = et + "五鬼";
	    document.getElementById("tsw").innerHTML = sw + "延年";
	    document.getElementById("tst").innerHTML = st + "绝命";
	    document.getElementById("tse").innerHTML = se + "祸害";        
    }else if(qua == "坤"){        //坤
		document.getElementById("tnw").innerHTML = nw + "延年";
		document.getElementById("tnt").innerHTML = nt + "绝命";
	    document.getElementById("tne").innerHTML = ne + "生气";
	    document.getElementById("twt").innerHTML = wt + "天医";
	    document.getElementById("tet").innerHTML = et + "祸害";
	    document.getElementById("tsw").innerHTML = sw + "伏位";
	    document.getElementById("tst").innerHTML = st + "六煞";
	    document.getElementById("tse").innerHTML = se + "五鬼";       
    }else if(qua == "巽"){         //巽
		document.getElementById("tnw").innerHTML = nw + "祸害";
		document.getElementById("tnt").innerHTML = nt + "生气";
	    document.getElementById("tne").innerHTML = ne + "绝命";
	    document.getElementById("twt").innerHTML = wt + "六煞";
	    document.getElementById("tet").innerHTML = et + "延年";
	    document.getElementById("tsw").innerHTML = sw + "五鬼";
	    document.getElementById("tst").innerHTML = st + "天医";
	    document.getElementById("tse").innerHTML = se + "伏位";        
    }else if(qua == "兑"){         //兑
		document.getElementById("tnw").innerHTML = nw + "生气";
		document.getElementById("tnt").innerHTML = nt + "祸害";
	    document.getElementById("tne").innerHTML = ne + "延年";
	    document.getElementById("twt").innerHTML = wt + "伏位";
	    document.getElementById("tet").innerHTML = et + "绝命";
	    document.getElementById("tsw").innerHTML = sw + "天医";
	    document.getElementById("tst").innerHTML = st + "五鬼";
	    document.getElementById("tse").innerHTML = se + "六煞";        
    }else if(qua == "艮"){       //艮
		document.getElementById("tnw").innerHTML = nw + "天医";
		document.getElementById("tnt").innerHTML = nt + "五鬼";
	    document.getElementById("tne").innerHTML = ne + "伏位";
	    document.getElementById("twt").innerHTML = wt + "延年";
	    document.getElementById("tet").innerHTML = et + "六煞";
	    document.getElementById("tsw").innerHTML = sw + "生气";
	    document.getElementById("tst").innerHTML = st + "祸害";
	    document.getElementById("tse").innerHTML = se + "绝命";       
    }else if(qua == "震"){       //震
		document.getElementById("tnw").innerHTML = nw + "五鬼";
		document.getElementById("tnt").innerHTML = nt + "天医";
	    document.getElementById("tne").innerHTML = ne + "六煞";
	    document.getElementById("twt").innerHTML = wt + "绝命";
	    document.getElementById("tet").innerHTML = et + "伏位";
	    document.getElementById("tsw").innerHTML = sw + "祸害";
	    document.getElementById("tst").innerHTML = st + "生气";
	    document.getElementById("tse").innerHTML = se + "延年";        
    }else if(qua == "离"){          //离
		document.getElementById("tnw").innerHTML = nw + "绝命";
		document.getElementById("tnt").innerHTML = nt + "延年";
	    document.getElementById("tne").innerHTML = ne + "祸害";
	    document.getElementById("twt").innerHTML = wt + "五鬼";
	    document.getElementById("tet").innerHTML = et + "生气";
	    document.getElementById("tsw").innerHTML = sw + "六煞";
	    document.getElementById("tst").innerHTML = st + "伏位";
	    document.getElementById("tse").innerHTML = se + "天医";        
    }else if(qua == "坎"){         //坎
		document.getElementById("tnw").innerHTML = nw + "六煞";
		document.getElementById("tnt").innerHTML = nt + "伏位";
	    document.getElementById("tne").innerHTML = ne + "五鬼";
	    document.getElementById("twt").innerHTML = wt + "祸害";
	    document.getElementById("tet").innerHTML = et + "天医";
	    document.getElementById("tsw").innerHTML = sw + "绝命";
	    document.getElementById("tst").innerHTML = st + "延年";
	    document.getElementById("tse").innerHTML = se + "生气";
    }    
}

function showexplain(){
	window.location = "explanation_cn.html";
}

function showsolution(){
	window.location = "solution_cn.html";
}




