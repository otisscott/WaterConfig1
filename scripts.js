/**
 * Created by h205p2 on 1/9/17.
 */
var myComputer = [];
var cpuCollection = [];
var motherboardCollection = [];
var gpuCollection = [];
var caseCollection = [];
var cpublockCollection =[];
var gpublockCollection =[];
var tubingCollection = [];
var fittingCollection = [];
var pumpCollection = [];
var pumptopCollection = [];
var reservoirCollection = [];
var radCollection = [];
var fanCollection = [];
var myCPU;
var myMotherboard;
var myGPU1 = [];
var myGPU2 = [];
var myGPU3 = [];
var myGPU4 = [];
var myCase;
var myCPUBlock;
var myGPUBlock1 = "";
var myGPUBlock2 = "";
var myGPUBlock3 = "";
var myGPUBlock4 = "";
var myTubing;
var myFitting1;
var myFitting2;
var myFitting3;
var myFitting4;
var myFitting5;
var myPump;
var myPump1
var myPumpTop;
var myReservoir;
var myRad1;
var myRad2;
var myRad3;
var myRad4;
var myFan1;
var myFan2;
var myFan3;
var myFan4;
var myFan5;
function CPU(frequency,cores,socket,name) {
    this.name = name;
    this.frequency = frequency;
    this.cores = cores;
    this.socket = socket;

    cpuCollection.push(this);

}
function Motherboard(socket,form,slots16x,slots4x,fan,name) {
    this.name = name;
    this.socket = socket;
    this.form = form;
    this.slots16x = slots16x;
    this.slots4x = slots4x;

    motherboardCollection.push(this);
}
function GPU(brand,series,desig,mod,comp,ref,cct,name) {
    this.name = name;
    this.brand = brand;
    this.series = series;
    this.cardNumber = desig;
    this.mod = mod;
    this.comp = comp;
    this.reference = ref;
    this.customCardType = cct;
    this.slots = 2;

    gpuCollection.push(this);
 }
function Case(num5,form,slots,fan120,fan80,name) {
    this.name = name;
    this.num5 = num5;
    this.form = form;
    this.slots = slots;
    this.fan120 = fan120;
    this.fan80 = fan80;

    caseCollection.push(this);
}
function CPUBlock(socket, threads, material,name) {
    this.socket = socket;
    this.threads = threads;
    this.material = material;
    this.name = name;

    cpublockCollection.push(this);
}
function GPUBlock(brand,series,desig,mod,comp,ref,cct,name,material,threads) {
    this.name = name;
    this.brand = brand;
    this.series = series;
    this.cardNumber = desig;
    this.mod = mod;
    this.comp = comp;
    this.reference = ref;
    this.customCardType = cct;
    this.material = material;
    this.threads = threads;

    gpublockCollection.push(this);
}
function Tubing(type,od,id,name) {
    this.type = type;
    this.outerdiameter = od;
    this.innerdiameter = id;
    this.name = name;

    tubingCollection.push(this);
}
function Fittings(type,od,id,name) {
    this.type = type;
    this.outerdiameter = od;
    this.innerdiameter = id;
    this.name = name;

    fittingCollection.push(this);
}
function Pump(type,threads,name) {
    this.type = type;
    this.threads = threads;
    this.name = name;

    pumpCollection.push(this);
}
function PumpTop(type,threads,name) {
    this.type = type;
    this.threads = threads;
    this.name = name;

    pumptopCollection.push(this);
}
function Reservoir(type,bay,size,threads,pumpcapacity,name) {
    this.type = type;
    this.slotsneeded = bay; // For bay only
    this.size = size; // For tube only
    this.threads = threads;
    this.pumpcapacity = pumpcapacity; // Only for pump res combos
    this.name = name;

    reservoirCollection.push(this);
}
function Rad(size,thick,threads,material,name) {
    this.size = size;
    this.thickness = thick;
    this.threads = threads;
    this.material = material;
    this.name = name;

    radCollection.push(this);
}
function Fans(size,pin,name) {
    this.size = size;
    this.pin = pin;
    this.name = name;

    fanCollection.push(this);
}
//Stock objects for testing reasons

var i75930k = new CPU(3.6, 6, 2011.3, "i7 5930k");
var gigabytex99mgaming5 = new Motherboard(2011.3, "mATX", 3, 1, 4, "Gigabyte X99m Gaming5");
var parvums2extended = new Case(0, ["mATX"], 4, 5, 3, "Parvum S2.0 Extended");
var msir9290 = new GPU("amd",2,90,0,"msi",1,0, "MSI R9 290 Reference");
var i54690k = new CPU(3.6, 4, 1150, "i5 4960k");
var asusmaximusviihero = new Motherboard(1150, "ATX", 2, 1, 6, "Asus Maxiums VII Hero");
var nzxtphantom410 = new Case(2, ["ATX", "mATX", "mITX"], 7, 8, 0, "NZXT Phantom 410");
var evgagtx970acx20 = new GPU("nvidia", 9, 70, "", "EVGA", 0, "ACX2.0", "EVGA GTX970 ACX2.0");
var eksupremacyevo = new CPUBlock([1150,2011.3,2011,1151,1155,"AM3+","AM3","FM2","FM2+"],"G1/4","copper","EK Supremacy EVO Copper");
var ekfcr9290ref = new GPUBlock("amd",2,90,0,"msi",1,0,"EK FC AMD R9 290 Reference", "nickel-acetal","G1/4");
var ekfcgtx970ref = new GPUBlock("nvidia", 9, 70, "", "EVGA", 0, "ACX2.0", "EK FC Nvidia GTX 970 Reference", "nickel-acetal", "G1/4");
var primochill3858 = new Tubing("soft","5/8","3/8", "Primochill 3/8 5/8");
var coppertubing12in = new Tubing("copper","1/2",0,'1/2" Copper Tubing');
var bitspowercompression3858 = new Fittings("compression","5/8","3/8", "Bitspower 3/8 5/8 Compression Fittings");
var rocketscience12 = new Fittings("hard","1/2",0,'RocketScience 1/2" Copper Fittings');
var swiftechmcp50x = new Pump("DDC1","G1/4","Swiftech MCP50X");
var swiftechd5 = new Pump("D5","G1/4","Swiftech D5");
var bitspowerd5top = new PumpTop("D5","G1/4","Bitspower Black Nickel D5 Top");
var bitspower150mmz = new Reservoir("tube",0,150,"G1/4",0,"Bitspower Z-Multi 150mm");
var koolancerp452x2 = new Reservoir("bay",2,0,"G1/4",2,"Koolance RP452X2");
var blackicenemesisstealth240 = new Rad(240,28,"G1/4","copper","Black Ice Nemesis Stealth 240mm");
var blackicenemesisstealth260 = new Rad(360,28,"G1/4","copper","Black Ice Nemesis Stealth 360mm");
var gentletyphoonap15120mm = new Fans(120,3,"Gentle Typhoon AP15 120mm");
var caselabssma8 = new Case(13,["ATX","mATX","EATX","mITX"],8,17,0,"CaseLabs SMA8 EATX");
var msix99xpower = new Motherboard(2011.3,"EATX",5,1,7,"MSI X99 XPOWER")

function AppendThings() {
    $(cpuCollection).each(function() {
        $('#cpusel').append($("<option>" + this.name + "</option>"))
    });
    $('#cpusel').change(function() {
        myCPU = "";
        $(cpuCollection).each(function(){
            var text = $('#cpusel :selected').text();
            if(this.name == text) {
                myCPU = this;
            }
        });
    });
    $(motherboardCollection).each(function() {
        $('#mobosel').append($("<option>" + this.name + "</option>"))
    });

    $('#mobosel').change(function() {
        myMotherboard = "";
        $(motherboardCollection).each(function(){
            var selectedmobo = $('#mobosel :selected').text();
            if(this.name == selectedmobo) {
                myMotherboard = this;
            }
        });
    });
    $(gpuCollection).each(function() {
        $('#gpusel1').append($("<option>" + this.name + "</option>"))
    });
    $('#gpusel1').change(function() {
        myGPU1 = "";
        $(gpuCollection).each(function(){
            if(this.name == $('#gpusel1 :selected').text()) {
                myGPU1 = this;
            }
        });
    });
    $(caseCollection).each(function() {
        $('#casesel').append($("<option>" + this.name + "</option>"))
    });
    $('#casesel').change(function() {
        myCase = "";
        $(caseCollection).each(function(){
            var selectedcase = $('#casesel :selected').text();
            if(this.name == selectedcase) {
                myCase = this;
            }
        });
    });
    $(cpublockCollection).each(function() {
        $('#cpubsel').append($("<option>" + this.name + "</option>"))
    });
    $('#cpubsel').change(function() {
        myCPUBlock = "";
        $(cpublockCollection).each(function(){
            if(this.name == $('#cpubsel :selected').text()) {
                myCPUBlock = this;
            }
        });
    });
    $(gpublockCollection).each(function() {
        $('#gpubsel1').append($("<option>" + this.name + "</option>"))
    });
    $('#gpubsel1').change(function() {
        myGPUBlock1 = "";
        $(gpublockCollection).each(function(){
            if(this.name == $('#gpubsel1 :selected').text()) {
                myGPUBlock1 = this;
            }
        });
    });
    $(tubingCollection).each(function() {
        $('#tubsel').append($("<option>" + this.name + "</option>"))
    });
    $('#tubsel').change(function() {
        myTubing = "";
        $(tubingCollection).each(function(){
            if(this.name == $('#tubsel :selected').text()) {
                myTubing = this;
            }
        });
    });
    $(fittingCollection).each(function() {
        $('#fitsel1').append($("<option>" + this.name + "</option>"))
    });
    $('#fitsel1').change(function() {
        myFitting1 = "";
        $(fittingCollection).each(function(){
            if(this.name == $('#fitsel1 :selected').text()) {
                myFitting1 += this;
            }
        });
    });
    for(var i = 1; i < 21; i++) {
        $('#fitnum1').append($("<option>" + i + "</option>"))
    }
    $(pumpCollection).each(function() {
        $('#pumpsel1').append($("<option>" + this.name + "</option>"))
    });
    $('#pumpsel1').change(function() {
        myPump = "";
        $(pumpCollection).each(function(){
            if(this.name == $('#pumpsel1 :selected').text()) {
                myPump += this;
            }
        });
    });
    $(pumptopCollection).each(function() {
        $('#pumptopsel').append($("<option>" + this.name + "</option>"))
    });
    $('#pumptopsel').change(function() {
        myPumpTop = "";
        $(pumptopCollection).each(function(){
            if(this.name == $('#tubsel :selected').text()) {
                myPumpTop = this;
            }
        });
    });
    $(reservoirCollection).each(function() {
        $('#ressel1').append($("<option>" + this.name + "</option>"))
    });
    $('#ressel1').change(function() {
        myReservoir = [];
        $(reservoirCollection).each(function(){
            if(this.name == $('#ressel1 :selected').text()) {
                myReservoir = this;
            }
        });
    });
    $(radCollection).each(function() {
        $('#radsel1').append($("<option>" + this.name + "</option>"))
    });
    $('#radsel1').change(function() {
        myRad1 = [];
        $(radCollection).each(function(){
            if(this.name == $('#radsel1 :selected').text()) {
                myRad1 += this;
            }
        });
    });
    for(var j = 1; j < 11; j++) {
        $('#radnum1').append($("<option>" + j + "</option>"))
    }
    $(fanCollection).each(function() {
        $('#fansel1').append($("<option>" + this.name + "</option>"))
    });
    $('#fansel1').change(function() {
        myFan1 = [];
        $(fanCollection).each(function(){
            if(this.name == $('#fansel1 :selected').text()) {
                myFan1 = this;
            }
        });
    });
    for(var k = 1; k < 51; k++) {
        $('#fannum1').append($("<option>" + k + "</option>"))
    }
}
var gpusel2ran = 0;
var gpusel3ran = 0;
function addGPU() {
    if($('#gpusel3 :selected').text() == "None" || $('#gpusel3 :selected').text() == myGPU3.name) {
        $('.GPU3').after( "<tr class='GPU4'> <td class='text-left'></td> <td class='text-left'> <span class='custom-dropdown custom-dropdown--white'> <select class='custom-dropdown__select custom-dropdown__select--white' id='gpusel4'> <option>None</option> </select> </span> </td> <td class='text-left' id='gpupr'></td></tr>" );
        $('.GPUB3').after( "<tr class='GPUB4'> <td class='text-left'></td> <td class='text-left'> <span class='custom-dropdown custom-dropdown--white'> <select class='custom-dropdown__select custom-dropdown__select--white' id='gpubsel4'> <option>None</option> </select> </span> </td> <td class='text-left' id='gpupr'></td></tr>" );
        $('#addGPU').remove();
    }
    else if($('#gpusel2 :selected').text() == "None" || $('#gpusel2 :selected').text() == myGPU2.name) {
        $('.GPU2').after( "<tr class='GPU3'> <td class='text-left'></td> <td class='text-left'> <span class='custom-dropdown custom-dropdown--white'> <select class='custom-dropdown__select custom-dropdown__select--white' id='gpusel3'> <option>None</option> </select> </span> </td> <td class='text-left' id='gpupr'></td></tr>" );
        $('.GPUB2').after( "<tr class='GPUB3'> <td class='text-left'></td> <td class='text-left'> <span class='custom-dropdown custom-dropdown--white'> <select class='custom-dropdown__select custom-dropdown__select--white' id='gpubsel3'> <option>None</option> </select> </span> </td> <td class='text-left' id='gpupr'></td></tr>" );}
    else {
        $('.GPU1').after( "<tr class='GPU2'> <td class='text-left'></td> <td class='text-left'> <span class='custom-dropdown custom-dropdown--white'> <select class='custom-dropdown__select custom-dropdown__select--white' id='gpusel2'> <option>None</option> </select> </span> </td> <td class='text-left' id='gpupr'></td></tr>" );
        $('.GPUB1').after( "<tr class='GPUB2'> <td class='text-left'></td> <td class='text-left'> <span class='custom-dropdown custom-dropdown--white'> <select class='custom-dropdown__select custom-dropdown__select--white' id='gpubsel2'> <option>None</option> </select> </span> </td> <td class='text-left' id='gpupr'></td></tr>" );
    }
    if(gpusel2ran == 0) {
        $(gpuCollection).each(function () {
            $('#gpusel2').append($("<option>" + this.name + "</option>"))
        });
        $(gpublockCollection).each(function() {
            $('#gpubsel2').append($("<option>" + this.name + "</option>"))
        });
        gpusel2ran = 1;
    }
    $('#gpusel2').change(function() {
        myGPU2 = "";
        $(gpuCollection).each(function(){
            if(this.name == $('#gpusel2 :selected').text()) {
                myGPU2 = this;
            }
        });
    });
    $('#gpubsel2').change(function() {
        myGPUBlock2 = 0;
        $(gpublockCollection).each(function(){
            if(this.name == $('#gpubsel2 :selected').text()) {
                myGPUBlock2 = this;
            }
        });
    });
    gpusel3ran += 1;
    if(gpusel3ran == 2) {
        $(gpuCollection).each(function () {
            $('#gpusel3').append($("<option>" + this.name + "</option>"))
        });
        $(gpublockCollection).each(function() {
            $('#gpubsel3').append($("<option>" + this.name + "</option>"))
        });
    }
    $('#gpusel3').change(function() {
        myGPU3 = 0;
        $(gpuCollection).each(function(){
            if(this.name == $('#gpusel3 :selected').text()) {
                myGPU3 = this;
            }
        });
    });
    $('#gpubsel3').change(function() {
        myGPUBlock3 = 0;
        $(gpublockCollection).each(function(){
            if(this.name == $('#gpubsel3 :selected').text()) {
                myGPUBlock3 = this;
            }
        });
    });
    $(gpuCollection).each(function () {
        $('#gpusel4').append($("<option>" + this.name + "</option>"))
    });
    $(gpublockCollection).each(function() {
        $('#gpubsel4').append($("<option>" + this.name + "</option>"))
    });
    $('#gpusel4').change(function() {
        myGPU4 = 0;
        $(gpuCollection).each(function(){
            if(this.name == $('#gpusel4 :selected').text()) {
                myGPU4 = this;
            }
        });
    });
    $('#gpubsel4').change(function() {
        myGPUBlock4 = 0;
        $(gpublockCollection).each(function(){
            if(this.name == $('#gpubsel4 :selected').text()) {
                myGPUBlock4 = this;
            }
        });
    });
}

function CompComp() {
    var incomp = [];
    document.getElementById("iscomp").innerHTML = "";
    var isincomp = 0;
    if (myCPU.socket !== myMotherboard.socket) {
        incomp.push("Your CPU and Motherboard are incompatible");
        isincomp += 1;
    }
    var casecomp = 0;
    var formcount = myCase.form;
    $(formcount).each(function() {
        if(this == myMotherboard.form) {
            casecomp += 1;
        }
    });
    var gpuslots = [myGPU1.slots, myGPU2.slots, myGPU3.slots, myGPU4.slots];
    var slotstaken = 0;
    for(var sl = 0; sl < gpuslots.length; sl++) {
        if(typeof(gpuslots[sl]) === 'number') {
            slotstaken += 2;
        }
    }
    var gpuComp1 = 0;
    var gpuComp2 = 0;
    if(myMotherboard.slots16x < (slotstaken/2)) {
        if(((slotstaken/2)-myMotherboard.slots16x) == 1) {
            incomp.push("Your motherboard doesn't have enough PCI-E x16 slots to hold all of your graphics cards remove 1 graphics card")
            isincomp += 1;
        }
        else if (((slotstaken/2)-myMotherboard.slots16x) == 2) {
            incomp.push("Your motherboard doesn't have enough PCI-E x16 slots to hold all of your graphics cards remove 2 graphics cards")
            isincomp += 1;
        }
        else {
            incomp.push("Your motherboard doesn't have enough PCI-E x16 slots to hold all of your graphics cards remove 3 graphics cards")
            isincomp += 1;
        }
    }
    if(myCase.slots < slotstaken) {
        incomp.push(" You have too many graphics card for your case which only has " + myCase.slots + " slots unless they are in a single slot configuration");
        isincomp += 1;
    }
    else {
        if(myGPU2 !== "") {
            if(myGPU2 == 0 || myGPU2 == "") {
                console.log("User hasn't selected a second card yet")
            }
            else {
                if(myGPU1.brand == myGPU2.brand && myGPU1.series == myGPU2.series && myGPU1.cardNumber == myGPU2.cardNumber) {
                    console.log("Crossfire or SLI configured properly");
                    gpuComp1 = 1;
                }
                else {
                    incomp.push(" Cards one and two are not Crossfire or SLI compatible");
                    isincomp += 1
                }
            }
        }
        if(myGPU3 !== "") {
            if(myGPU3 == 0 || myGPU3 == "") {
                console.log("User hasn't selected a third card yet")
            }
            else {
                if(myGPU1.brand == myGPU3.brand && myGPU1.series == myGPU3.series && myGPU1.cardNumber == myGPU3.cardNumber && gpuComp1 == 1) {
                    console.log("Wow, TriFire or Tri-SLI configured properly");
                    gpuComp2 = 4;
                }
                else if(myGPU1.brand == myGPU3.brand && myGPU1.series == myGPU3.series && myGPU1.cardNumber == myGPU3.cardNumber) {
                    incomp.push(" Cards one and three are configured correctly for SLI or Crossfire but card two doesn't match");
                    gpuComp2 = 3;
                    isincomp += 1
                }
                else if(myGPU2.brand == myGPU3.brand && myGPU2.series == myGPU3.series && myGPU2.cardNumber == myGPU3.cardNumber) {
                    incomp.push(" Cards two and three are configured correctly for SLI or Crossfire but card one doesn't match");
                    gpuComp2 = 2;
                    isincomp += 1
                }
                else {
                    incomp.push(" The third card added doesn't match the first two");
                    gpuComp2 = 1;
                    isincomp += 1
                }
            }
        }
        if(myGPU4 !== "") {
            if(myGPU4 == 0 || myGPU4 == "") {
                console.log("User hasn't selected a fourth card yet")
            }
            else {
                if(myGPU1.brand == myGPU4.brand && myGPU1.series == myGPU4.series && myGPU1.cardNumber == myGPU4.cardNumber && gpuComp1 == 1 && gpuComp2 == 4) {
                    console.log("Wow, QuadFire or Quad-SLI configured properly");
                }
                else if(myGPU1.brand == myGPU4.brand && myGPU1.series == myGPU4.series && myGPU1.cardNumber == myGPU4.cardNumber && gpuComp2 == 3) {
                    incomp.push( "TriFire or Tri-SLI configured properly but card two doesn't match");
                    isincomp += 1
                }
                else if(myGPU1.brand == myGPU4.brand && myGPU1.series == myGPU4.series && myGPU1.cardNumber == myGPU4.cardNumber && gpuComp2 == 2) {
                    incomp.push(" TriFire or Tri-SLI configured properly but card one doesn't match");
                    isincomp += 1
                }
                else if(myGPU1.brand == myGPU4.brand && myGPU1.series == myGPU4.series && myGPU1.cardNumber == myGPU4.cardNumber && gpuComp2 == 1) {
                    incomp.push( "TriFire or Tri-SLI configured properly but card third doesn't match");
                    isincomp += 1
                }
                else if(myGPU1.brand == myGPU4.brand && myGPU1.series == myGPU4.series && myGPU1.cardNumber == myGPU4.cardNumber && gpuComp1 == 0) {
                    incomp.push(" CrossFire or SLI configured properly but card two and three don't match");
                    isincomp += 1
                }
                else if(myGPU3.brand == myGPU4.brand && myGPU3.series == myGPU4.series && myGPU3.cardNumber == myGPU4.cardNumber && gpuComp1 == 0) {
                    incomp.push(" CrossFire or SLI configured properly but card one and two don't match");
                    isincomp += 1
                }
                else {
                    incomp.push(" The fourth card doesn't match the first three");
                    isincomp += 1
                }
            }
        }
    }
    if (casecomp == 0) {
        incomp.push(" Your Motherboard and Case are incompatible.");
        isincomp += 1;
    }
    if(isincomp == 0) {
        incomp.push("Congratulations, everything is compatible");
    }
    document.getElementById("iscomp").innerHTML = incomp;
}
var loopcomp = 0;
var loopincomp = [];
function LoopComp() {
    var cpublockcomp = 0;
    for(var l = 0; l < myCPUBlock.socket.length; l++) {
        if (myCPU.socket == myCPUBlock.socket[l] && myMotherboard.socket == myCPUBlock.socket[l]) {
            cpublockcomp = 1;
        }
    }
    if(cpublockcomp !== 1) {
        loopcomp = 1;
        loopincomp.push(" Your CPU Block is incompatible");
    }
    if (myGPU1.brand !== myGPUBlock1.brand || myGPU1.cardNumber !== myGPUBlock1.cardNumber || myGPU1.series !== myGPUBlock1.series || myGPU1.reference !== myGPUBlock1.reference || myGPU1.customCardType !== myGPUBlock1.customCardType || myGPU1.mod !== myGPUBlock1.mod) {
        loopcomp = 1;
        loopincomp.push(" Your first GPU Block is incompatible");
    }
    if (myGPU2 !== "") {
        if (myGPU2.brand !== myGPUBlock2.brand || myGPU2.cardNumber !== myGPUBlock2.cardNumber || myGPU2.series !== myGPUBlock2.series || myGPU2.reference !== myGPUBlock2.reference || myGPU2.customCardType !== myGPUBlock2.customCardType || myGPU2.mod !== myGPUBlock2.mod) {
            loopcomp = 1;
            loopincomp.push(" Your second GPU Block is incompatible");
        }
    }
    if(loopcomp == 0) {
        loopincomp.push("Congratulations, everything is compatible");
    }
    document.getElementById("loopiscomp").innerHTML = loopincomp;
    loopincomp = [];
}