//	HYPE.documents["index"]

(function(){(function m(){function k(a,b,c,d){var e=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(m),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),e=l,false==!0&&(e=""),b.type="text/javascript",""!=d&&(b.integrity=d,b.setAttribute("crossorigin","anonymous")),b.src=e+"/"+c,a.appendChild(b)):window[b].push(m),e=!0);return e}var l="index.hyperesources",f="index",g="index_hype_container";if(false==
!1)try{for(var c=document.getElementsByTagName("script"),a=0;a<c.length;a++){var d=c[a].src,b=null!=d?d.indexOf("/index_hype_generated_script.js"):-1;if(-1!=b){l=d.substr(0,b);break}}}catch(p){}c=null==navigator.userAgentData&&navigator.userAgent.match(/MSIE (\d+\.\d+)/);c=parseFloat(c&&c[1])||null;d=!0==(null!=window.HYPE_754F||null!=window.HYPE_dtl_754F)||true==!0||null!=c&&10>c;a=!0==d?"HYPE-754.full.min.js":"HYPE-754.thin.min.js";c=!0==d?"F":"T";
d=d?"":"";if(false==!1&&(a=k("HYPE_754"+c,"HYPE_dtl_754"+c,a,d),false==!0&&(a=a||k("HYPE_w_754","HYPE_wdtl_754","HYPE-754.waypoints.min.js","")),false==!0&&(a=a||k("Matter","HYPE_pdtl_754","HYPE-754.physics.min.js","")),a))return;d=window.HYPE.documents;if(null!=d[f]){b=1;a=f;do f=""+a+"-"+b++;while(null!=d[f]);for(var e=
document.getElementsByTagName("div"),b=!1,a=0;a<e.length;a++)if(e[a].id==g&&null==e[a].getAttribute("HYP_dn")){var b=1,h=g;do g=""+h+"-"+b++;while(null!=document.getElementById(g));e[a].id=g;b=!0;break}if(!1==b)return}b=[];b=[{name:"colorClicked",source:"function(hypeDocument, element, event) {\t\t\t\t\t\n\tif (BUTTONSCLICKABLE == true) {\n\t\n\t\tif (element.id == \"redDetect\") {\n\t\t\tif (COLORSEQUENCE[CURRENTELEMENT] == \"red\") {\n\t\t\t\thypeDocument.startTimelineNamed('redBeep');\n\t\t\t\tCURRENTELEMENT++;\n\t\t\t} else {\n\t\t\t\tGAMEOVER = true;\n\t\t\t}\n\t\t} else if (element.id == \"greenDetect\") {\n\t\t\tif (COLORSEQUENCE[CURRENTELEMENT] == \"green\") {\n\t\t\t\thypeDocument.startTimelineNamed('greenBeep');\n\t\t\t\tCURRENTELEMENT++;\n\t\t\t} else {\n\t\t\t\tGAMEOVER = true;\n\t\t\t}\n\t\t} else if (element.id == \"blueDetect\") {\n\t\t\tif (COLORSEQUENCE[CURRENTELEMENT] == \"blue\") {\n\t\t\t\thypeDocument.startTimelineNamed('blueBeep');\n\t\t\t\tCURRENTELEMENT++;\n\t\t\t} else {\n\t\t\t\tGAMEOVER = true;\n\t\t\t}\n\t\t} else if (element.id == \"yellowDetect\") {\n\t\t\tif (COLORSEQUENCE[CURRENTELEMENT] == \"yellow\") {\n\t\t\t\thypeDocument.startTimelineNamed('yellowBeep');\n\t\t\t\tCURRENTELEMENT++;\n\t\t\t} else {\n\t\t\t\tGAMEOVER = true;\n\t\t\t}\t\n\t\t}\n\n\t\tif (GAMEOVER == true ) { // USER CLICKED THE WRONG VALUE\n\t\t\tBUTTONSCLICKABLE = false;\n\t\t\thypeDocument.startTimelineNamed('gameOver');\n\t\t}\n\n\t\tif ((CURRENTELEMENT) == SEQUENCECOUNT) {\n\t\t\tCURRENTELEMENT = 0;\n\t\t\t\n\t\t\tdocument.getElementById(\"sequenceValue\").innerHTML = \"SCORE<br/>\" + SEQUENCECOUNT;\n\t\t\tBUTTONSCLICKABLE = false;\n\t\t\t\n\t\t\tif (AWARDSHOW == true) {\n\t\t\t\n\t\t\t\tif ((SEQUENCECOUNT % 5) != 0){\n\t\t\t\t\tSEQUENCECOUNT++;\n\t\t\t\t\tsetTimeout(function(){ hypeDocument.startTimelineNamed('roundComplete'); }, 500);\n\t\t\t\t\tsetTimeout(function(){ PLAYINTERVAL = setInterval(SELECTCOLOR, INTERVALSPEED); }, 1500);\n\t\t\t\t} else {\n\t\t\t\n\t\t\t\t\tvar tempString = SEQUENCECOUNT + \" ROUNDS<br/>\";\n\t\t\t\t\tif (SEQUENCECOUNT == (5 || 25 || 50 || 75 || 100)) { \n\t\t\t\t\t\ttempString += \"wow!\";\n\t\t\t\t\t} else if (SEQUENCECOUNT == (10 || 30 || 55 || 80)) {\n\t\t\t\t\ttempString += \"ok!\";\n\t\t\t\t\t} else if (SEQUENCECOUNT == (15 || 35 || 60 || 85)) {\n\t\t\t\t\t\ttempString += \"wow, ok!\";\n\t\t\t\t\t} else if (SEQUENCECOUNT == (20 || 40 || 65 || 90)) {\n\t\t\t\t\t\ttempString += \"wowie zowie!\";\n\t\t\t\t\t} else if (SEQUENCECOUNT == (25 || 45 || 70 || 95)) {\n\t\t\t\t\t\ttempString += \"why?\";\n\t\t\t\t\t} \n\t\t\t\t\tdocument.getElementById(\"badgeMessage\").innerHTML = tempString;\n\t\t\t\n\t\t\t\t\tSEQUENCECOUNT++;\n\t\t\t\t\tsetTimeout(function(){ hypeDocument.startTimelineNamed('showBadge'); }, 500);\n\t\t\t\t}\n\t\t\t\t\n\t\t\t} else {\n\t\t\t\tSEQUENCECOUNT++;\n\t\t\t\tsetTimeout(function(){ hypeDocument.startTimelineNamed('roundComplete'); }, 500);\n\t\t\t\tsetTimeout(function(){ PLAYINTERVAL = setInterval(SELECTCOLOR, INTERVALSPEED); }, 1500);\n\t\t\t}\n\t\t}\n\t}\t\t\n\t\t\t\t\t\t\n}",identifier:"48"},{name:"initializeMain",source:"function(hypeDocument, element, event) {\t\n\tSELECTCOLOR = function() {\n\t\tvar color = COLORSEQUENCE[CURRENTELEMENT];\n\t\tif (color == \"blue\") { \n\t\t\thypeDocument.startTimelineNamed('blueBeep');   \n\t\t} else if (color == \"red\") { \n\t\t\thypeDocument.startTimelineNamed('redBeep');    \n\t\t} else if (color == \"green\") { \n\t\t\thypeDocument.startTimelineNamed('greenBeep');  \n\t\t} else if (color == \"yellow\") { \n\t\t\thypeDocument.startTimelineNamed('yellowBeep'); \n\t\t}\n\t\tif (CURRENTELEMENT < (SEQUENCECOUNT - 1)) {\n\t\t\tCURRENTELEMENT++;\n\t\t} else {\n\t\t\tclearInterval(PLAYINTERVAL);\n\t\t\tLISTENSEQUENCE();\n\t\t}\n\t};\n\n\tLISTENSEQUENCE = function() {\n\t\tBUTTONSCLICKABLE = true;\n\t\tCURRENTELEMENT = 0;\n\t};\n\n\tclearInterval(PLAYINTERVAL);\n\tvar i; \n\tvar temp1;\n\tvar temp2 = new Array();\n\tfor (i = 0; i < 100; i++) {\n\t\ttemp1 = Math.floor(Math.random()*4);\n\t\tif (temp1 == 0) { \t\ttemp2[i] = \"red\"; }\n\t\telse if (temp1 == 1) {\ttemp2[i] = \"blue\"; }\n\t\telse if (temp1 == 2) {\ttemp2[i] = \"yellow\"; }\n\t\telse if (temp1 == 3) {\ttemp2[i] = \"green\"; }\n\t}\n\tCOLORSEQUENCE = temp2;\n\tconsole.log(\"The color sequence is \" + COLORSEQUENCE);\n\n\tif (GAMEOVER == true) {\n\t\tGAMEOVER = false;\n\t\tBUTTONSCLICKABLE = false;\n\t\tdocument.getElementById(\"sequenceValue\").innerHTML = \"SCORE<br/>\" + SEQUENCECOUNT;\n\t\tconsole.log(\"Play The Sequence For The User\");\n\t\tPLAYINTERVAL = setInterval(SELECTCOLOR, INTERVALSPEED);\n\t}\n\t\t\t\t\t\t\n}",identifier:"50"},{name:"resumeGame",source:"function(hypeDocument, element, event) {\t\n\thypeDocument.startTimelineNamed('hideBadge');\n\tsetTimeout(function(){ PLAYINTERVAL = setInterval(SELECTCOLOR, INTERVALSPEED); }, 1500);\t\n}",identifier:"91"},{name:"chooseSpeed",source:"function(hypeDocument, element, event) {\t\n\tif (element.id == \"easyButton\") {\n\t\tINTERVALSPEED = 1000;\n\t} else {\n\t\tINTERVALSPEED = 400;\n\t}\n\thypeDocument.showSceneNamed('main');\n\t\n}",identifier:"94"},{name:"awardDisplay",source:"function(hypeDocument, element, event) {\t\n\tif (element.id == \"awardYes\") {\n\t\tAWARDSHOW = true;\n\t} else {\n\t\tAWARDSHOW = false;\n\t}\n\tconsole.log(\"Award Show value is\" + AWARDSHOW);\n\n}",identifier:"102"}];e={};h={};for(a=0;a<b.length;a++)try{h[b[a].identifier]=b[a].name,e[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(n){window.console&&window.console.log(n),e[b[a].name]=function(){}}c=new window["HYPE_754"+c](f,g,{"10":{p:2,n:"successpop.mp3",g:"123",t:"audio/mpeg"},"2":{p:1,n:"green.png",g:"13",t:"@1x"},"-2":{n:"blank.gif"},"3":{p:1,n:"red.png",g:"9",t:"@1x"},"11":{p:2,n:"badgecheer.mp3",g:"124",t:"audio/mpeg"},"4":{p:1,n:"yellow.png",g:"96",t:"@1x"},"5":{p:1,n:"badgebackground.png",g:"67",t:"@1x"},"12":{p:2,n:"myoof.mp3",g:"125",t:"audio/mpeg"},"6":{p:2,n:"red.mp3",g:"119",t:"audio/mpeg"},"7":{p:2,n:"yellow.mp3",g:"122",t:"audio/mpeg"},"-1":{n:"PIE.htc"},"0":{p:1,n:"outline.png",g:"5",t:"@1x"},"8":{p:2,n:"blue.mp3",g:"120",t:"audio/mpeg"},"1":{p:1,n:"blue.png",g:"11",t:"@1x"},"9":{p:2,n:"green.mp3",g:"121",t:"audio/mpeg"}},
l,[],e,[{n:"splash",o:"59",X:[0]},{n:"main",o:"1",X:[1]}],[{o:"61",p:"600px",cA:false,Y:800,Z:600,L:[],c:"#000",bY:1,d:800,U:{},T:{"66_hover":{q:false,z:1,i:"66_hover",n:"66_hover",a:[{f:"c",y:0,z:1,i:"G",e:"#2996CC",s:"#FFF",o:"126"},{f:"c",y:0,z:1,i:"B",e:"#2996CC",s:"#FFF",o:"126"},{f:"c",y:0,z:1,i:"C",e:"#2996CC",s:"#FFF",o:"126"},{f:"c",y:0,z:1,i:"D",e:"#2996CC",s:"#FFF",o:"126"},{f:"c",y:0,z:1,i:"A",e:"#2996CC",s:"#FFF",o:"126"},{y:1,i:"G",s:"#2996CC",z:0,o:"126",f:"c"},{y:1,i:"B",s:"#2996CC",z:0,o:"126",f:"c"},{y:1,i:"C",s:"#2996CC",z:0,o:"126",f:"c"},{y:1,i:"D",s:"#2996CC",z:0,o:"126",f:"c"},{y:1,i:"A",s:"#2996CC",z:0,o:"126",f:"c"}],f:30,b:[]},"95_hover":{q:false,z:1,i:"95_hover",n:"95_hover",a:[{f:"c",y:0,z:1,i:"A",e:"#E5D845",s:"#FFF",o:"127"},{f:"c",y:0,z:1,i:"G",e:"#E5D845",s:"#FFF",o:"127"},{f:"c",y:0,z:1,i:"C",e:"#E5D845",s:"#FFF",o:"127"},{f:"c",y:0,z:1,i:"B",e:"#E5D845",s:"#FFF",o:"127"},{f:"c",y:0,z:1,i:"D",e:"#E5D845",s:"#FFF",o:"127"},{y:1,i:"A",s:"#E5D845",z:0,o:"127",f:"c"},{y:1,i:"G",s:"#E5D845",z:0,o:"127",f:"c"},{y:1,i:"C",s:"#E5D845",z:0,o:"127",f:"c"},{y:1,i:"B",s:"#E5D845",z:0,o:"127",f:"c"},{y:1,i:"D",s:"#E5D845",z:0,o:"127",f:"c"}],f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:16,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"c",y:0,z:4,i:"bA",e:"#B29B24",s:"#CC2A29",o:"129"},{f:"c",y:4,z:4,i:"bA",e:"#55CC3D",s:"#B29B24",o:"129"},{f:"c",y:8,z:4,i:"bA",e:"#2996CC",s:"#55CC3D",o:"129"},{f:"c",y:12,z:4,i:"bA",e:"#CC2A29",s:"#2996CC",o:"129"},{f:"c",p:2,y:16,z:0,i:"ActionHandler",s:{a:[{b:"kTimelineDefaultIdentifier",p:3,z:false,symbolOid:"60"}]},o:"kTimelineDefaultIdentifier"},{y:16,i:"bA",s:"#CC2A29",z:0,o:"129",f:"c"}],f:30,b:[]}},bZ:180,O:["129","128","126","127"],n:"Untitled Layout","_":0,v:{"126":{b:420,z:4,K:"Solid",c:133,L:"Solid",d:78,aS:6,M:10,bD:"none",N:10,aT:6,dB:"button",O:10,aU:6,P:10,aV:6,i:"easyButton",j:"absolute",k:"div",aI:20,aJ:20,aK:20,aL:20,A:"#FFF",Y:36,B:"#FFF",aM:"66_hover",r:"inline",C:"#FFF",Z:"break-word",s:"Chalkboard,'Chalkboard SE','Comic Sans MS',sans-serif",D:"#FFF",t:36,F:"center",aA:{a:[{p:4,h:"94"}]},G:"#FFF",aP:"pointer",w:"normal<br>mode",x:"visible",I:"Solid",a:155,y:"preserve",J:"Solid"},"127":{b:420,z:5,K:"Solid",c:133,L:"Solid",d:78,aS:6,M:10,bD:"none",N:10,aT:6,dB:"button",O:10,aU:6,P:10,aV:6,i:"hardButton",j:"absolute",k:"div",aI:20,aJ:20,aK:20,aL:20,A:"#FFF",Y:36,B:"#FFF",aM:"95_hover",r:"inline",C:"#FFF",Z:"break-word",s:"Chalkboard,'Chalkboard SE','Comic Sans MS',sans-serif",D:"#FFF",t:36,F:"center",aA:{a:[{p:4,h:"94"}]},G:"#FFF",aP:"pointer",w:"fast<br>mode",x:"visible",I:"Solid",a:480,y:"preserve",J:"Solid"},"128":{aU:8,G:"#FFF",c:684,aV:8,r:"inline",d:184,s:"Chalkboard,'Chalkboard SE','Comic Sans MS',sans-serif",t:36,Z:"break-word",i:"splashDirections",w:"It\u2019s Simone Says!<br>Press the buttons matching the pattern!<br>Turn awards on to get award pop-ups!",j:"absolute",x:"visible",k:"div",y:"preserve",z:3,aS:8,aT:8,a:50,F:"center",b:220},"129":{aU:8,bB:6,G:"#E1E1E1",aV:8,r:"inline",bC:6,s:"Chalkboard,'Chalkboard SE','Comic Sans MS',sans-serif",t:96,Z:"break-word",v:"bold",i:"titleSimone",w:"<span style=\"color: white;\">SIMONE SAYS</span>",j:"absolute",x:"visible",yy:"nowrap",aZ:0,y:"preserve",k:"div",z:6,aS:8,aT:8,a:66,bA:"#CC2A29",b:52}}},{A:{a:[{p:4,h:"50"}]},o:"3",p:"600px",cA:false,Y:800,Z:600,c:"#002132",L:[],bY:1,d:800,U:{},T:{"57":{q:false,z:2.05,i:"57",n:"roundComplete",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"123",q:false}]},o:"57"},{f:"c",y:0,z:0.2,i:"e",e:1,s:0,o:"133"},{f:"c",y:0.2,z:0.25,i:"e",e:1,s:1,o:"133"},{f:"c",y:1.15,z:0.2,i:"e",e:0,s:1,o:"133"},{y:2.05,i:"e",s:0,z:0,o:"133",f:"c"}],f:30,b:[]},"36":{q:false,z:0.1,i:"36",n:"redBeep",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"119",q:false}]},o:"36"},{f:"a",y:0,z:0.01,i:"b",e:-600,s:0,o:"139"},{f:"a",y:0.01,z:0.08,i:"b",e:-600,s:-600,o:"139"},{f:"a",y:0.09,z:0.01,i:"b",e:0,s:-600,o:"139"},{y:0.1,i:"b",s:0,z:0,o:"139",f:"c"}],f:30,b:[]},"71_hover":{q:false,z:1,i:"71_hover",n:"71_hover",a:[{f:"c",y:0,z:1,i:"G",e:"#FF2600",s:"#000",o:"137"},{f:"c",y:0,z:1,i:"B",e:"#FF2600",s:"#000",o:"137"},{f:"c",y:0,z:1,i:"C",e:"#FF2600",s:"#000",o:"137"},{f:"c",y:0,z:1,i:"D",e:"#FF2600",s:"#000",o:"137"},{f:"c",y:0,z:1,i:"A",e:"#FF2600",s:"#000",o:"137"},{y:1,i:"G",s:"#FF2600",z:0,o:"137",f:"c"},{y:1,i:"B",s:"#FF2600",z:0,o:"137",f:"c"},{y:1,i:"C",s:"#FF2600",z:0,o:"137",f:"c"},{y:1,i:"D",s:"#FF2600",z:0,o:"137",f:"c"},{y:1,i:"A",s:"#FF2600",z:0,o:"137",f:"c"}],f:30,b:[]},"32":{q:false,z:0.1,i:"32",n:"blueBeep",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"120",q:false}]},o:"32"},{f:"a",y:0,z:0.01,i:"b",e:-900,s:-300,o:"136"},{f:"a",y:0.01,z:0.08,i:"b",e:-900,s:-900,o:"136"},{f:"a",y:0.09,z:0.01,i:"b",e:-300,s:-900,o:"136"},{y:0.1,i:"b",s:-300,z:0,o:"136",f:"c"}],f:30,b:[]},"86":{q:false,z:1,i:"86",n:"hideBadge",a:[{f:"e",y:0,z:1,i:"b",e:-500,s:25,o:"148"},{f:"e",y:0,z:1,i:"b",e:-265,s:260,o:"150"},{f:"e",y:0,z:1,i:"b",e:-145,s:380,o:"137"},{y:1,i:"b",s:-145,z:0,o:"137",f:"c"},{y:1,i:"b",s:-265,z:0,o:"150",f:"c"},{y:1,i:"b",s:-500,z:0,o:"148",f:"c"}],f:30,b:[]},"44":{q:false,z:0.1,i:"44",n:"yellowBeep",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"122",q:false}]},o:"44"},{f:"a",y:0,z:0.01,i:"b",e:-900,s:-300,o:"153"},{f:"a",y:0.01,z:0.08,i:"b",e:-900,s:-900,o:"153"},{f:"a",y:0.09,z:0.01,i:"b",e:-300,s:-900,o:"153"},{y:0.1,i:"b",s:-300,z:0,o:"153",f:"c"}],f:30,b:[]},"55":{q:false,z:0.2,i:"55",n:"gameOver",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"125",q:false}]},o:"55"},{f:"c",y:0,z:0.2,i:"e",e:1,s:0,o:"140"},{y:0.2,i:"e",s:1,z:0,o:"140",f:"c"}],f:30,b:[]},"40":{q:false,z:0.1,i:"40",n:"greenBeep",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"121",q:false}]},o:"40"},{f:"a",y:0,z:0.01,i:"b",e:-600,s:0,o:"131"},{f:"a",y:0.01,z:0.08,i:"b",e:-600,s:-600,o:"131"},{f:"a",y:0.09,z:0.01,i:"b",e:0,s:-600,o:"131"},{y:0.1,i:"b",s:0,z:0,o:"131",f:"c"}],f:30,b:[]},"72":{q:false,z:1,i:"72",n:"showBadge",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"124",q:false}]},o:"72"},{f:"f",y:0,z:1,i:"b",e:25,s:-500,o:"148"},{f:"f",y:0,z:1,i:"b",e:260,s:-265,o:"150"},{f:"f",y:0,z:1,i:"b",e:380,s:-145,o:"137"},{y:1,i:"b",s:25,z:0,o:"148",f:"c"},{y:1,i:"b",s:260,z:0,o:"150",f:"c"},{y:1,i:"b",s:380,z:0,o:"137",f:"c"}],f:30,b:[]},"100_hover":{q:false,z:1,i:"100_hover",n:"100_hover",a:[{f:"c",y:0,z:1,i:"G",e:"#CC2A29",s:"#FFF",o:"141"},{f:"c",y:0,z:1,i:"w",e:"<span style=\"color: rgb(85, 204, 61);\">Yes</span>",s:"Yes",o:"141"},{y:1,i:"G",s:"#CC2A29",z:0,o:"141",f:"c"},{y:1,i:"w",s:"<span style=\"color: rgb(85, 204, 61);\">Yes</span>",z:0,o:"141",f:"c"}],f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30,b:[]},"101_hover":{q:false,z:1,i:"101_hover",n:"101_hover",a:[{f:"c",y:0,z:1,i:"G",e:"#CC2A29",s:"#FFF",o:"144"},{f:"c",y:0,z:1,i:"w",e:"No",s:"No",o:"144"},{y:1,i:"G",s:"#CC2A29",z:0,o:"144",f:"c"},{y:1,i:"w",s:"No",z:0,o:"144",f:"c"}],f:30,b:[]}},bZ:180,O:["148","150","137","134","147","153","131","136","139","138","142","130","132","146","140","133","143","135","145","152","151","141","144","149"],n:"Untitled Layout","_":1,v:{"136":{h:"11",p:"no-repeat",x:"visible",a:0,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:1,bF:"135",b:-300,d:1200,i:"blue",k:"div",c:600},"149":{aU:8,G:"#FFF",c:184,aV:8,r:"inline",d:91,s:"Chalkboard,'Chalkboard SE','Comic Sans MS',sans-serif",t:32,Z:"break-word",i:"refresh",w:"Refresh to<br>try again!",j:"absolute",x:"visible",k:"div",y:"preserve",z:23,aS:8,aT:8,a:600,F:"center",b:493},"140":{aU:8,G:"#FFF",c:214,aV:8,r:"inline",d:104,e:0,s:"Chalkboard,'Chalkboard SE','Comic Sans MS',sans-serif",t:48,Y:47,Z:"break-word",v:"bold",i:"overText",w:"GAME<br>OVER!",j:"absolute",x:"visible",k:"div",y:"preserve",z:27,aS:8,aT:8,a:185,F:"center",b:240},"132":{aU:8,bB:0,G:"#FFF",c:184,aV:8,r:"inline",d:104,bC:0,s:"Chalkboard,'Chalkboard SE','Comic Sans MS',sans-serif",t:45,Y:45,Z:"break-word",v:"bold",i:"title",w:"<span style=\"color: rgb(204, 42, 41);\">S</span><span style=\"color: rgb(229, 216, 69);\">I</span><span style=\"color: rgb(85, 204, 61);\">M</span><span style=\"color: rgb(41, 150, 204);\">O</span><span style=\"color: rgb(204, 42, 41);\">N</span><span style=\"color: rgb(229, 216, 69);\">E</span><br><span style=\"color: rgb(85, 204, 61);\">S</span><span style=\"color: rgb(41, 150, 204);\">A</span><span style=\"color: rgb(204, 42, 41);\">Y</span><span style=\"color: rgb(229, 216, 69);\">S</span>",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:22,aS:8,aT:8,a:600,bA:"#000",F:"center",b:28},"153":{h:"96",p:"no-repeat",x:"visible",a:-300,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:1,bF:"152",b:-300,d:1200,k:"div",c:600},"145":{c:300,d:300,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,i:"yellowDetect",N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",O:0,P:0,C:"#D8DDE4",z:14,dB:"button",D:"#D8DDE4",aA:{a:[{p:4,h:"48"}]},k:"div",a:300,b:300},"137":{b:-145,z:21,K:"Solid",c:80,L:"Solid",d:58,aS:6,M:5,bD:"none",N:5,aT:6,dB:"button",O:5,aU:6,P:5,aV:6,i:"badgeButton",j:"absolute",k:"div",aI:50,aJ:50,aK:50,aL:50,A:"#000",Y:55,B:"#000",aM:"71_hover",r:"inline",C:"#000",Z:"break-word",s:"Chalkboard,'Chalkboard SE','Comic Sans MS',sans-serif",D:"#000",t:24,F:"center",aA:{a:[{p:4,h:"91"}]},v:"bold",G:"#000",aP:"pointer",w:"NEXT",x:"visible",I:"Solid",a:270,y:"preserve",J:"Solid"},"141":{b:367,z:24,K:"None",c:58,L:"None",d:31,aS:6,M:0,bD:"none",N:0,aT:6,dB:"button",O:0,aU:6,P:0,aV:6,i:"awardYes",j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",aM:"100_hover",r:"inline",C:"#A0A0A0",Z:"break-word",s:"Chalkboard,'Chalkboard SE','Comic Sans MS',sans-serif",D:"#A0A0A0",t:24,F:"center",aA:{a:[{p:4,h:"102"}]},v:"bold",G:"#FFF",aP:"pointer",w:"Yes",x:"visible",I:"None",a:630,y:"preserve",J:"None"},"133":{aU:8,G:"#FFF",c:214,aV:8,r:"inline",d:104,e:0,s:"Chalkboard,'Chalkboard SE','Comic Sans MS',sans-serif",t:40,Z:"break-word",i:"roundEnd",w:"ROUND<br>COMPLETE!",j:"absolute",x:"visible",k:"div",y:"preserve",z:26,aS:8,aT:8,a:185,F:"center",b:240},"146":{aU:8,G:"#FFF",c:184,aV:8,r:"inline",d:104,s:"Chalkboard,'Chalkboard SE','Comic Sans MS',sans-serif",t:40,Z:"break-word",i:"sequenceValue",w:"score<br>0",j:"absolute",x:"visible",k:"div",y:"preserve",z:17,aS:8,aT:8,a:600,F:"center",b:164},"138":{x:"hidden",k:"div",c:300,d:300,z:1,i:"redGroup",a:0,j:"absolute",b:0},"150":{aU:8,bB:0,G:"#000",c:348,aV:8,r:"inline",d:104,bC:0,s:"Chalkboard,'Chalkboard SE','Comic Sans MS',sans-serif",t:36,Z:"break-word",v:"bold",i:"badgeMessage",w:"5 ROUNDS<br>\nBRILLIANT",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:20,aS:8,aT:8,a:139,bA:"#000",F:"center",b:-265},"142":{c:300,d:300,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,i:"greenDetect",N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",O:0,P:0,C:"#D8DDE4",z:13,dB:"button",D:"#D8DDE4",aA:{a:[{p:4,h:"48"}]},k:"div",a:300,b:0},"134":{c:300,d:300,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,i:"redDetect",N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",O:0,P:0,C:"#D8DDE4",z:11,dB:"button",D:"#D8DDE4",aA:{a:[{p:4,h:"48"}]},k:"div",a:0,b:0},"147":{h:"5",p:"no-repeat",x:"visible",a:0,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:10,i:"outline",b:0,d:600,k:"div",c:600},"139":{h:"9",p:"no-repeat",x:"visible",a:0,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:1,bF:"138",b:0,d:1200,i:"red",k:"div",c:600},"130":{x:"hidden",k:"div",c:300,d:300,z:5,i:"greenGroup",a:300,j:"absolute",b:0},"151":{aU:8,G:"#FFF",c:184,aV:8,r:"inline",d:104,s:"Chalkboard,'Chalkboard SE','Comic Sans MS',sans-serif",t:40,Z:"break-word",i:"awardText",w:"awards?",j:"absolute",x:"visible",k:"div",y:"preserve",z:18,aS:8,aT:8,a:600,F:"center",b:307},"143":{c:300,d:300,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,i:"blueDetect",N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",O:0,P:0,C:"#D8DDE4",z:12,dB:"button",D:"#D8DDE4",aA:{a:[{p:4,h:"48"}]},k:"div",a:0,b:300},"135":{x:"hidden",k:"div",c:300,d:300,z:3,i:"blueGroup",a:0,j:"absolute",b:300},"148":{h:"67",p:"no-repeat",x:"visible",a:65,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:19,i:"badgeBackground",b:-500,d:500,k:"div",c:470},"131":{h:"13",p:"no-repeat",x:"visible",a:-300,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:1,bF:"130",b:0,d:1200,i:"green",k:"div",c:600},"152":{x:"hidden",k:"div",c:300,d:300,z:7,i:"yellowGroup",a:300,j:"absolute",b:300},"144":{b:367,z:25,K:"None",c:58,L:"None",d:31,aS:6,M:0,bD:"none",N:0,aT:6,dB:"button",O:0,aU:6,P:0,aV:6,i:"awardNo",j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",aM:"101_hover",r:"inline",C:"#A0A0A0",Z:"break-word",s:"Chalkboard,'Chalkboard SE','Comic Sans MS',sans-serif",D:"#A0A0A0",t:24,F:"center",aA:{a:[{p:4,h:"102"}]},v:"bold",G:"#FFF",aP:"pointer",w:"No",x:"visible",I:"None",a:700,y:"preserve",J:"None"}}}],{},h,{f:{p:0,q:[[0,0,0.1971,0,0.3391,0.8944,0.3636,1],[0.3636,1,0.3636,1,0.4425,0.75,0.5455,0.75],[0.5455,0.75,0.6519,0.75,0.7273,1,0.7273,1],[0.7273,1,0.7273,1,0.7718,0.9375,0.8182,0.9375],[0.8182,0.9375,0.8646,0.9375,0.9091,1,0.9091,1],[0.9091,1,0.9091,1,0.9294,0.9844,0.9546,0.9844],[0.9546,0.9844,0.9798,0.9844,1,1,1,1]]}},null,false,true,-1,true,true,false,true,true);d[f]=c.API;document.getElementById(g).setAttribute("HYP_dn",f);c.z_o(this.body)})();})();
