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
	document.getElementById("result1").value = "Life direction is: " + vlifedirection + " ; Life Qua is: " + vlifequa;
	document.getElementById("result2").value = "Mansion direction is: " + vmansiondirection + " ; Mansion Qua is: " + vmansionqua;
	document.getElementById("result3").value = vcheckmatch;
	if(vcheckmatch == "Match"){
		document.getElementById("result3").style.backgroundColor = "red";
	}else if(vcheckmatch == "Not Match"){
		document.getElementById("result3").style.backgroundColor = "lightblue";
	}
	palacecolor(vmansiondirection);
	//alert(vmansionqua);
	//配合以宅卦為卦, 不配合以命卦為卦
	if(vcheckmatch == "Match"){
		setstars(vmansionqua);
		palacecolor(vmansionqua);
	}else if(vcheckmatch == "Not Match"){
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
      rlife = "East";
    }else{
      rlife = "West";
    }	
    return rlife;
}

function lifequa(byear, sgender){
    var plifequa = "";
	//var vietqua = ["KHAM", "KHON", "CHAN", "TON",  "CAN1", "DOAI", "CAN", "LY"];
    var malequas = ["Kan", "Kun", "Zhen", "Xun", "Kun", "Qian", "Dui", "Gen", "Li"];
    var femalequas = ["Kan", "Kun", "Zhen", "Xun", "Gen", "Qian", "Dui", "Gen", "Li" ];
	
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
       housedirection = "East";
    }else{
       housedirection = "West";
    }
   return housedirection;
}

function housequa(door){
        var housequa = "";
		//var vietqua = ["KHAM", "KHON", "CHAN", "TON",  "CAN1", "DOAI", "CAN", "LY"];
        if (door == "NT"){
            housequa = "Li";  		//向北離
        }else if (door == "ST"){
            housequa = "Kan"; 		//向南坎
        }else if (door == "WT"){
            housequa = "Zhen"; 		//向西震
        }else if (door == "NW"){
            housequa = "Xun";   	//向西北巽
        }else if (door == "SE"){
            housequa = "Qian" ; 	//向東南乾
        }else if (door == "ET"){
            housequa = "Dui";   	//向東兌
        }else if (door == "NE"){
            housequa = "Kun";   	//向東北坤
        }else if (door == "SW"){
            housequa = "Gen";   	//向西南艮
        }
    return housequa
}

function checkmatch(ahousediection, alifedirection){
    var matchresult = "";
    if (ahousediection == alifedirection){
        matchresult = "Match";
        //palacecolor(vhousedirection)
    }else{
        matchresult = "Not Match";
        //palacecolor(vlifediection)
	}
    return matchresult
}

//要用卦來定色,不應用屋向定色, 因可能用屋主卦定色
function palacecolor(quai){
	if((quai == "Qian") || (quai == "Kun") || (quai == "Dui") || (quai == "Gen")){
        //都是以「西北、西南、東北、西方」為吉位；並以「東方、東南、南方、北方」為凶位。
			document.getElementById("tnw").style.backgroundColor = "red";
			document.getElementById("tnt").style.backgroundColor = "lightblue";
			document.getElementById("tne").style.backgroundColor = "red";
			document.getElementById("twt").style.backgroundColor = "red";
			document.getElementById("tet").style.backgroundColor = "lightblue";
			document.getElementById("tsw").style.backgroundColor = "red";
			document.getElementById("tst").style.backgroundColor = "lightblue";
			document.getElementById("tse").style.backgroundColor = "lightblue";			
    }else if ((quai == "Xun") || (quai == "Zhen") || (quai == "Li") || (quai == "Kan")){
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
	if(qua == "Qian"){        //乾
	    document.getElementById("tnw").innerHTML = nw + "Fu Wei";
		document.getElementById("tnt").innerHTML = nt + "Six Killings";
	    document.getElementById("tne").innerHTML = ne + "Thien Y";
	    document.getElementById("twt").innerHTML = wt + "Sheng Chi";
	    document.getElementById("tet").innerHTML = et + "Five Ghosts";
	    document.getElementById("tsw").innerHTML = sw + "Yan Nien";
	    document.getElementById("tst").innerHTML = st + "Mishaps";
	    document.getElementById("tse").innerHTML = se + "Disaster";        
    }else if(qua == "Kun"){        //坤
		document.getElementById("tnw").innerHTML = nw + "Yan Nien";
		document.getElementById("tnt").innerHTML = nt + "Mishaps";
	    document.getElementById("tne").innerHTML = ne + "Sheng Chi";
	    document.getElementById("twt").innerHTML = wt + "Thien Y";
	    document.getElementById("tet").innerHTML = et + "Disaster";
	    document.getElementById("tsw").innerHTML = sw + "Fu Wei";
	    document.getElementById("tst").innerHTML = st + "Six Killings";
	    document.getElementById("tse").innerHTML = se + "Five Ghosts";       
    }else if(qua == "Xun"){         //巽
		document.getElementById("tnw").innerHTML = nw + "Disaster";
		document.getElementById("tnt").innerHTML = nt + "Sheng Chi";
	    document.getElementById("tne").innerHTML = ne + "Mishaps";
	    document.getElementById("twt").innerHTML = wt + "Six Killings";
	    document.getElementById("tet").innerHTML = et + "Yan Nien";
	    document.getElementById("tsw").innerHTML = sw + "Five Ghosts";
	    document.getElementById("tst").innerHTML = st + "Thien Y";
	    document.getElementById("tse").innerHTML = se + "Fu Wei";        
    }else if(qua == "Dui"){         //兑
		document.getElementById("tnw").innerHTML = nw + "Sheng Chi";
		document.getElementById("tnt").innerHTML = nt + "Disaster";
	    document.getElementById("tne").innerHTML = ne + "Yan Nien";
	    document.getElementById("twt").innerHTML = wt + "Fu Wei";
	    document.getElementById("tet").innerHTML = et + "Mishaps";
	    document.getElementById("tsw").innerHTML = sw + "Thien Y";
	    document.getElementById("tst").innerHTML = st + "Five Ghosts";
	    document.getElementById("tse").innerHTML = se + "Six Killings";        
    }else if(qua == "Gen"){       //艮
		document.getElementById("tnw").innerHTML = nw + "Thien Y";
		document.getElementById("tnt").innerHTML = nt + "Five Ghosts";
	    document.getElementById("tne").innerHTML = ne + "Fu Wei";
	    document.getElementById("twt").innerHTML = wt + "Yan Nien";
	    document.getElementById("tet").innerHTML = et + "Six Killings";
	    document.getElementById("tsw").innerHTML = sw + "Sheng Chi";
	    document.getElementById("tst").innerHTML = st + "Disaster";
	    document.getElementById("tse").innerHTML = se + "Mishaps";       
    }else if(qua == "Zhen"){       //震
		document.getElementById("tnw").innerHTML = nw + "Five Ghosts";
		document.getElementById("tnt").innerHTML = nt + "Thien Y";
	    document.getElementById("tne").innerHTML = ne + "Six Killings";
	    document.getElementById("twt").innerHTML = wt + "Mishaps";
	    document.getElementById("tet").innerHTML = et + "Fu Wei";
	    document.getElementById("tsw").innerHTML = sw + "Disaster";
	    document.getElementById("tst").innerHTML = st + "Sheng Chi";
	    document.getElementById("tse").innerHTML = se + "Yan Nien";        
    }else if(qua == "Li"){          //离
		document.getElementById("tnw").innerHTML = nw + "Mishaps";
		document.getElementById("tnt").innerHTML = nt + "Yan Nien";
	    document.getElementById("tne").innerHTML = ne + "Disaster";
	    document.getElementById("twt").innerHTML = wt + "Five Ghosts";
	    document.getElementById("tet").innerHTML = et + "Sheng Chi";
	    document.getElementById("tsw").innerHTML = sw + "Six Killings";
	    document.getElementById("tst").innerHTML = st + "Fu Wei";
	    document.getElementById("tse").innerHTML = se + "Thien Y";        
    }else if(qua == "Kan"){         //坎
		document.getElementById("tnw").innerHTML = nw + "Six Killings";
		document.getElementById("tnt").innerHTML = nt + "Fu Wei";
	    document.getElementById("tne").innerHTML = ne + "Five Ghosts";
	    document.getElementById("twt").innerHTML = wt + "Disaster";
	    document.getElementById("tet").innerHTML = et + "Thien Y";
	    document.getElementById("tsw").innerHTML = sw + "Mishaps";
	    document.getElementById("tst").innerHTML = st + "Yan Nien";
	    document.getElementById("tse").innerHTML = se + "Sheng Chi";
    }    
}

function showexplain(){
	window.location = "explanation_en.html";
}

function showsolution(){
	window.location = "solution_en.html";
}




