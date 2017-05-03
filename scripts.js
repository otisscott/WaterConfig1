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
var bridgeCollection = [];
var tubingCollection = [];
var fittingCollection = [];
var pumpCollection = [];
var pumptopCollection = [];
var reservoirCollection = [];
var radCollection = [];
var fanCollection = [];
var myCPU;
var myMotherboard;
var myGPU1 = "";
var myGPU2 = "";
var myGPU3 = "";
var myGPU4 = "";
var myCase;
var myCPUBlock;
var myGPUBlock1 = "";
var myGPUBlock2 = "";
var myGPUBlock3 = "";
var myGPUBlock4 = "";
var myTubing;
var myFitting1 = "";
var myFitting2 = "";
var myFitting3 = "";
var myFitting4 = "";
var myFitting5 = "";
var myPump;
var myPumpTop = "";
var myReservoir = "";
var myReservoir2 = "";
var myRad1 = "";
var myRad2 = "";
var myRad3 = "";
var myRad4 = "";
var myFan1 = "";
var myFan2 = "";
var myFan3 = "";
var myFan4 = "";
var myFan5 = "";
var myBridge = "";
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
function Case(num5,form,slots,fan120,fan140,fan80,fan240,fan360,radtot,name) {
    this.name = name;
    this.num5 = num5;
    this.form = form;
    this.slots = slots;
    this.fan120 = fan120;
    this.fan140 = fan140;
    this.fan80 = fan80;
    this.fan240 = fan240;
    this.fan360 = fan360;
    this.radtot = radtot;

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
function Bridge(numcards,threads,sp,name) {
    this.numcards = numcards;
    this.threads = threads;
    this.sp = sp; //is it serial or parallel
    this.name = name;

    bridgeCollection.push(this);
}
//Stock objects for testing reasons

var i75930k = new CPU(3.6, 6, 2011.3, "i7 5930k");
var gigabytex99mgaming5 = new Motherboard(2011.3, "mATX", 3, 1, 4, "Gigabyte X99m Gaming5");
var parvums2extended = new Case(0, ["mATX"], 4, 5, 0, 3, 1, 1, 2, "Parvum S2.0 Extended");
var msir9290 = new GPU("amd",2,90,0,"msi",1,0, "MSI R9 290 Reference");
var i54690k = new CPU(3.6, 4, 1150, "i5 4960k");
var asusmaximusviihero = new Motherboard(1150, "ATX", 2, 1, 6, "Asus Maxiums VII Hero");
var nzxtphantom410 = new Case(2, ["ATX", "mATX", "mITX"], 7, 8, 0, 0, 2, 0, 2, "NZXT Phantom 410");
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
var caselabssma8 = new Case(13,["ATX","mATX","EATX","mITX"],8,17, 0, 0, 6, 4, 8,   "CaseLabs SMA8 EATX");
var msix99xpower = new Motherboard(2011.3,"EATX",5,1,7,"MSI X99 XPOWER");
var ek3bridge = new Bridge(3, "G1/4", "serial", "EK 3 Card Bridge (Serial)");
var ek2bridge = new Bridge(2, "G1/4", "parallel", "EK 2 Card Bridge (Parallel)");
var ek4bridge = new Bridge(4, "G1/4", "serial", "EK 4 Card Bridge (Serial)");

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
                myPump = this;
            }
        });
    });
    $(pumptopCollection).each(function() {
        $('#pumptopsel').append($("<option>" + this.name + "</option>"))
    });
    $('#pumptopsel').change(function() {
        myPumpTop = "";
        $(pumptopCollection).each(function(){
            if(this.name == $('#pumptopsel :selected').text()) {
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
        myRad1 = "";
        $(radCollection).each(function(){
            if(this.name == $('#radsel1 :selected').text()) {
                myRad1 = this;
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
var gpusel4ran = 0;
function addGPU() {
    if ($('#gpusel3 :selected').text() == "None" || $('#gpusel3 :selected').text() == myGPU3.name) {
        $('.GPU3').after("<tr class='GPU4'> <td class='text-left'></td> <td class='text-left'> <span class='custom-dropdown custom-dropdown--white'> <select class='custom-dropdown__select custom-dropdown__select--white' id='gpusel4' style = 'width: 400px;'> <option>None</option> </select> </span> <button class='button' style='.small' onclick='removeGPU4()'>Remove</button> </td> <td class='text-left' id='gpupr'></td></tr>");
        $('.GPUB3').after("<tr class='GPUB4'> <td class='text-left'></td> <td class='text-left'> <span class='custom-dropdown custom-dropdown--white'> <select class='custom-dropdown__select custom-dropdown__select--white' id='gpubsel4' style = 'width: 400px;'> <option>None</option> </select> </span> </td> <td class='text-left' id='gpupr'></td></tr>");
        $('#addGPU').remove();
        gpusel4ran = 1;
    }
    else if ($('#gpusel2 :selected').text() == "None" || $('#gpusel2 :selected').text() == myGPU2.name) {
        $('.GPU2').after("<tr class='GPU3'> <td class='text-left'></td> <td class='text-left'> <span class='custom-dropdown custom-dropdown--white'> <select class='custom-dropdown__select custom-dropdown__select--white' id='gpusel3' style = 'width: 400px;'> <option>None</option> </select> </span> <button class='button' style='.small' onclick='removeGPU3()'>Remove</button> </td> <td class='text-left' id='gpupr'></td></tr>");
        $('.GPUB2').after("<tr class='GPUB3'> <td class='text-left'></td> <td class='text-left'> <span class='custom-dropdown custom-dropdown--white'> <select class='custom-dropdown__select custom-dropdown__select--white' id='gpubsel3' style = 'width: 400px;'> <option>None</option> </select> </span> </td> <td class='text-left' id='gpupr'></td></tr>");
        if (($('#gpusel4 :selected').text() == "None" || $('#gpusel4 :selected').text() == myGPU4.name) && ($('#gpusel3 :selected').text() == "None" || $('#gpusel3 :selected').text() == myGPU3.name)) {
            $('#addGPU').remove();
        }
        gpusel3ran = 1;
    }
    else {
        $('.GPU1').after( "<tr class='GPU2'> <td class='text-left'></td> <td class='text-left'> <span class='custom-dropdown custom-dropdown--white'> <select class='custom-dropdown__select custom-dropdown__select--white' id='gpusel2' style = 'width: 400px;'> <option>None</option> </select> </span> <button class='button' style='.small' onclick='removeGPU2()'>Remove</button> </td> <td class='text-left' id='gpupr'></td></tr>" );
        $('.GPUB1').after( "<tr class='GPUB2'> <td class='text-left'></td> <td class='text-left'> <span class='custom-dropdown custom-dropdown--white'> <select class='custom-dropdown__select custom-dropdown__select--white' id='gpubsel2' style = 'width: 400px;'> <option>None</option> </select> </span> </td> <td class='text-left' id='gpupr'></td></tr>" );
        if (($('#gpusel4 :selected').text() == "None" || $('#gpusel4 :selected').text() == myGPU4.name) && ($('#gpusel3 :selected').text() == "None" || $('#gpusel3 :selected').text() == myGPU3.name)) {
            $('#addGPU').remove();
        }
        gpusel2ran = 1;
    }
    if(gpusel2ran == 1) {
        $(gpuCollection).each(function () {
            $('#gpusel2').append($("<option>" + this.name + "</option>"))
        });
        $(gpublockCollection).each(function() {
            $('#gpubsel2').append($("<option>" + this.name + "</option>"))
        });
        $(bridgeCollection).each(function() {
            $('#bridgesel').append($("<option>" + this.name + "</option>"))
        });
        $('.GPUB2').after("<tr id='GPUB'> <td class='text-left'>GPU Bridge</td> <td class='text-left'> <span class='custom-dropdown custom-dropdown--white'><select class='custom-dropdown__select custom-dropdown__select--white' id='bridgesel' style = 'width: 400px;'> <option>None</option> </select> </span> </td> <td class='text-left' id='bridgepr'></td></tr>");
        gpusel2ran = 0;
    }
    if(gpusel3ran == 1) {
        $(gpuCollection).each(function () {
            $('#gpusel3').append($("<option>" + this.name + "</option>"))
        });
        $(gpublockCollection).each(function() {
            $('#gpubsel3').append($("<option>" + this.name + "</option>"))
        });
        gpusel3ran = 0;
    }
    if(gpusel4ran == 1) {
        $(gpuCollection).each(function () {
            $('#gpusel4').append($("<option>" + this.name + "</option>"))
        });
        $(gpublockCollection).each(function () {
            $('#gpubsel4').append($("<option>" + this.name + "</option>"))
        });
        gpusel4ran = 0;
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
        $(gpublockCollection).each(function () {
            if (this.name == $('#gpubsel3 :selected').text()) {
                myGPUBlock3 = this;
            }
        });
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
    $('#bridgesel').change(function() {
        myBridge = "";
        $(bridgeCollection).each(function(){
            if(this.name == $('#bridgesel :selected').text()) {
                myBridge = this;
            }
        });
    });
}
function addRes() {
    $('#res1').after("<tr id='res2'> <td class='text-left'></td> <td class='text-left'> <span class='custom-dropdown custom-dropdown--white'> <select class='custom-dropdown__select custom-dropdown__select--white' id='ressel2' style = 'width: 400px;'> <option>None</option> </select> </span> <span class='custom-dropdown custom-dropdown--white'>         Quantity: <select class='custom-dropdown__select custom-dropdown__select--white' id='resnum2'> </select> </span> <button class='button' style='.small' onclick='removeReservoir2()'>Remove</button> </td> <td class='text-left' id='radpr2'></td> </tr>")
    $(reservoirCollection).each(function() {
        $('#ressel2').append($("<option>" + this.name + "</option>"))
    });
    $('#ressel2').change(function() {
        myReservoir2 = "";
        $(reservoirCollection).each(function(){
            if(this.name == $('#ressel2 :selected').text()) {
                myReservoir2 += this;
            }
        });
    });
    for(var i = 1; i < 4; i++) {
        $('#resnum2').append($("<option>" + i + "</option>"))
    }
    $('#addRes').remove();

}
var radsel2ran = 0;
var radsel3ran = 0;
var radsel4ran = 0;
function addRad() {
    if ($('#radsel3 :selected').text() == "None" || $('#radsel3 :selected').text() == myRad3.name) {
        $('#rad3').after("<tr id='rad4'> <td class='text-left'></td> <td class='text-left'> <span class='custom-dropdown custom-dropdown--white'> <select class='custom-dropdown__select custom-dropdown__select--white' id='radsel4' style = 'width: 400px;'> <option>None</option> </select> </span> <span class='custom-dropdown custom-dropdown--white'>         Quantity: <select class='custom-dropdown__select custom-dropdown__select--white' id='radnum4'> </select> </span> <button class='button' style='.small' onclick='removeRadiator4()'>Remove</button> </td> <td class='text-left' id='radpr4'></td> </tr>")
        $('#addRad').remove();
        radsel4ran = 1;
    }
    else if ($('#radsel2 :selected').text() == "None" || $('#radsel2 :selected').text() == myRad2.name) {
        $('#rad2').after("<tr id='rad3'> <td class='text-left'></td> <td class='text-left'> <span class='custom-dropdown custom-dropdown--white'> <select class='custom-dropdown__select custom-dropdown__select--white' id='radsel3' style = 'width: 400px;'> <option>None</option> </select> </span> <span class='custom-dropdown custom-dropdown--white'>         Quantity: <select class='custom-dropdown__select custom-dropdown__select--white' id='radnum3'> </select> </span> <button class='button' style='.small' onclick='removeRadiator3()'>Remove</button> </td> <td class='text-left' id='radpr3'></td> </tr>")
        radsel3ran = 1;
    }
    else {
        $('#rad1').after("<tr id='rad2'> <td class='text-left'></td> <td class='text-left'> <span class='custom-dropdown custom-dropdown--white'> <select class='custom-dropdown__select custom-dropdown__select--white' id='radsel2' style = 'width: 400px;'> <option>None</option> </select> </span> <span class='custom-dropdown custom-dropdown--white'>         Quantity: <select class='custom-dropdown__select custom-dropdown__select--white' id='radnum2'> </select> </span> <button class='button' style='.small' onclick='removeRadiator2()'>Remove</button> </td> <td class='text-left' id='radpr2'></td> </tr>")
        radsel2ran = 1;
    }
    if(radsel2ran == 1) {
        $(radCollection).each(function() {
            $('#radsel2').append($("<option>" + this.name + "</option>"))
        });
        radsel2ran = 0;
    }
    if(radsel3ran == 1) {
        $(radCollection).each(function() {
            $('#radsel3').append($("<option>" + this.name + "</option>"))
        });
        radsel3ran = 0;
    }
    if(radsel4ran == 1) {
        $(radCollection).each(function () {
            $('#radsel4').append($("<option>" + this.name + "</option>"))
        });
        radsel4ran = 0;
    }
    $('#radsel4').change(function() {
        myRad4 = "";
        $(radCollection).each(function(){
            if(this.name == $('#radsel4 :selected').text()) {
                myRad4 = this;
            }
        });
    });
    $('#radsel3').change(function() {
        myRad3 = "";
        $(radCollection).each(function(){
            if(this.name == $('#radsel3 :selected').text()) {
                myRad3 = this;
            }
        });
    });
    $('#radsel2').change(function() {
        myRad2 = "";
        $(radCollection).each(function(){
            if(this.name == $('#radsel2 :selected').text()) {
                myRad2 = this;
            }
        });
    });
    for(var j = 1; j < 11; j++) {
        $('#radnum2').append($("<option>" + j + "</option>"))
    }
    for(var k = 1; k < 11; k++) {
        $('#radnum3').append($("<option>" + k + "</option>"))
    }
    for(var l = 1; l < 11; l++) {
        $('#radnum4').append($("<option>" + l + "</option>"))
    }
}
var fansel2ran = 0;
var fansel3ran = 0;
var fansel4ran = 0;
var fansel5ran = 0;
function addFan() {
    if (($('#fansel4 :selected').text() == "None" || $('#fansel4 :selected').text() == myFan4.name) && $('#fansel5 :selected').text() !== "None" && $('#fansel5 :selected').text() !== myFan5.name) {
        $('#fan4').after("<tr id='fan5'> <td class='text-left'></td> <td class='text-left'> <span class='custom-dropdown custom-dropdown--white'> <select class='custom-dropdown__select custom-dropdown__select--white' id='fansel5' style = 'width: 400px;'> <option>None</option> </select> </span> <span class='custom-dropdown custom-dropdown--white'>         Quantity: <select class='custom-dropdown__select custom-dropdown__select--white' id='fannum5'> </select> </span> <button class='button' style='.small' onclick='removeFan5()'>Remove</button> </td> <td class='text-left' id='fanpr5'></td> </tr>");
        $('#addFan').remove();
        fansel5ran = 1;
    }
    else if ($('#fansel3 :selected').text() == "None" || $('#fansel3 :selected').text() == myFan3.name) {
        $('#fan3').after("<tr id='fan4'> <td class='text-left'></td> <td class='text-left'> <span class='custom-dropdown custom-dropdown--white'> <select class='custom-dropdown__select custom-dropdown__select--white' id='fansel4' style = 'width: 400px;'> <option>None</option> </select> </span> <span class='custom-dropdown custom-dropdown--white'>         Quantity: <select class='custom-dropdown__select custom-dropdown__select--white' id='fannum4'> </select> </span> <button class='button' style='.small' onclick='removeFan4()'>Remove</button> </td> <td class='text-left' id='fanpr4'></td> </tr>");
        if(($('#fansel5 :selected').text() == "None" || $('#fansel5 :selected').text() == myFan5.name) && ($('#fansel4 :selected').text() == "None" || $('#fansel4 :selected').text() == myFan4.name) && ($('#fansel3 :selected').text() == "None" || $('#fansel3 :selected').text() == myFan3.name) && ($('#fansel2 :selected').text() == "None" || $('#fansel2 :selected').text() == myFan2.name)) {
            $('#addFan').remove();
        }
        fansel4ran = 1;
    }
    else if ($('#fansel2 :selected').text() == "None" || $('#fansel2 :selected').text() == myFan2.name) {
        $('#fan2').after("<tr id='fan3'> <td class='text-left'></td> <td class='text-left'> <span class='custom-dropdown custom-dropdown--white'> <select class='custom-dropdown__select custom-dropdown__select--white' id='fansel3' style = 'width: 400px;'> <option>None</option> </select> </span> <span class='custom-dropdown custom-dropdown--white'>         Quantity: <select class='custom-dropdown__select custom-dropdown__select--white' id='fannum3'> </select> </span> <button class='button' style='.small' onclick='removeFan3()'>Remove</button> </td> <td class='text-left' id='fanpr3'></td> </tr>");
        if(($('#fansel5 :selected').text() == "None" || $('#fansel5 :selected').text() == myFan5.name) && ($('#fansel4 :selected').text() == "None" || $('#fansel4 :selected').text() == myFan4.name) && ($('#fansel3 :selected').text() == "None" || $('#fansel3 :selected').text() == myFan3.name) && ($('#fansel2 :selected').text() == "None" || $('#fansel2 :selected').text() == myFan2.name)) {
            $('#addFan').remove();
        }
        fansel3ran = 1;
    }
    else {
        $('#fan1').after("<tr id='fan2'> <td class='text-left'></td> <td class='text-left'> <span class='custom-dropdown custom-dropdown--white'> <select class='custom-dropdown__select custom-dropdown__select--white' id='fansel2' style = 'width: 400px;'> <option>None</option> </select> </span> <span class='custom-dropdown custom-dropdown--white'>         Quantity: <select class='custom-dropdown__select custom-dropdown__select--white' id='fannum2'> </select> </span> <button class='button' style='.small' onclick='removeFan2()'>Remove</button> </td> <td class='text-left' id='fanpr2'></td> </tr>");
        if(($('#fansel5 :selected').text() == "None" || $('#fansel5 :selected').text() == myFan5.name) && ($('#fansel4 :selected').text() == "None" || $('#fansel4 :selected').text() == myFan4.name) && ($('#fansel3 :selected').text() == "None" || $('#fansel3 :selected').text() == myFan3.name) && ($('#fansel2 :selected').text() == "None" || $('#fansel2 :selected').text() == myFan2.name)) {
            $('#addFan').remove();
        }
        fansel2ran = 1;
    }
    if(fansel2ran == 1) {
        $(fanCollection).each(function() {
            $('#fansel2').append($("<option>" + this.name + "</option>"))
        });
        for(var j = 1; j < 51; j++) {
            $('#fannum2').append($("<option>" + j + "</option>"))
        }
        fansel2ran = 0;
    }
    if(fansel3ran == 1) {
        $(fanCollection).each(function() {
            $('#fansel3').append($("<option>" + this.name + "</option>"))
        });
        for(var k = 1; k < 51; k++) {
            $('#fannum3').append($("<option>" + k + "</option>"))
        }
        fansel3ran = 0;
    }
    if(fansel4ran == 1) {
        $(fanCollection).each(function() {
            $('#fansel4').append($("<option>" + this.name + "</option>"))
        });
        for(var l = 1; l < 51; l++) {
            $('#fannum4').append($("<option>" + l + "</option>"))
        }
        fansel4ran = 0;
    }
    if(fansel5ran == 1) {
        $(fanCollection).each(function () {
            $('#fansel5').append($("<option>" + this.name + "</option>"))
        });
        for (var m = 1; m < 51; m++) {
            $('#fannum5').append($("<option>" + m + "</option>"))
        }
    }
    $('#fansel5').change(function() {
        myFan5 = "";
        $(fanCollection).each(function(){
            if(this.name == $('#fansel5 :selected').text()) {
                myFan5 = this;
            }
        });
    });
    $('#fansel4').change(function() {
        myFan4 = "";
        $(fanCollection).each(function(){
            if(this.name == $('#fansel4 :selected').text()) {
                myFan4 = this;
            }
        });
    });
    $('#fansel3').change(function() {
        myFan3 = "";
        $(fanCollection).each(function(){
            if(this.name == $('#fansel3 :selected').text()) {
                myFan3 = this;
            }
        });
    });
    $('#fansel2').change(function() {
        myFan2 = "";
        $(fanCollection).each(function(){
            if(this.name == $('#fansel2 :selected').text()) {
                myFan2 = this;
            }
        });
    });
}
var fitsel2ran = 0;
var fitsel3ran = 0;
var fitsel4ran = 0;
function addFit() {
    if ($('#fitsel4 :selected').text() == "None" || $('#fitsel4 :selected').text() == myFitting4.name) {
        $('#fit4').after("<tr id='fit5'> <td class='text-left'></td> <td class='text-left'> <span class='custom-dropdown custom-dropdown--white'> <select class='custom-dropdown__select custom-dropdown__select--white' id='fitsel5' style = 'width: 400px;'> <option>None</option> </select> </span> <span class='custom-dropdown custom-dropdown--white'>         Quantity: <select class='custom-dropdown__select custom-dropdown__select--white' id='fitnum5'> </select> </span> <button class='button' style='.small' onclick='removeFitting5()'>Remove</button> </td> <td class='text-left' id='fitpr5'></td> </tr>");
        $('#addFit').remove();
    }
    else if ($('#fitsel3 :selected').text() == "None" || $('#fitsel3 :selected').text() == myFitting3.name) {
        $('#fit3').after("<tr id='fit4'> <td class='text-left'></td> <td class='text-left'> <span class='custom-dropdown custom-dropdown--white'> <select class='custom-dropdown__select custom-dropdown__select--white' id='fitsel4' style = 'width: 400px;'> <option>None</option> </select> </span> <span class='custom-dropdown custom-dropdown--white'>         Quantity: <select class='custom-dropdown__select custom-dropdown__select--white' id='fitnum4'> </select> </span> <button class='button' style='.small' onclick='removeFitting4()'>Remove</button> </td> <td class='text-left' id='fitpr4'></td> </tr>");
        if(($('#fitsel5 :selected').text() == "None" || $('#fitsel5 :selected').text() == myFitting5.name) && ($('#fitsel4 :selected').text() == "None" || $('#fitsel4 :selected').text() == myFitting4.name) && ($('#fitsel3 :selected').text() == "None" || $('#fitsel3 :selected').text() == myFitting3.name) && ($('#fitsel2 :selected').text() == "None" || $('#fitsel2 :selected').text() == myFitting2.name)) {
            $('#addFit').remove();
        }
    }
    else if ($('#fitsel2 :selected').text() == "None" || $('#fitsel2 :selected').text() == myFitting2.name) {
        $('#fit2').after("<tr id='fit3'> <td class='text-left'></td> <td class='text-left'> <span class='custom-dropdown custom-dropdown--white'> <select class='custom-dropdown__select custom-dropdown__select--white' id='fitsel3' style = 'width: 400px;'> <option>None</option> </select> </span> <span class='custom-dropdown custom-dropdown--white'>         Quantity: <select class='custom-dropdown__select custom-dropdown__select--white' id='fitnum3'> </select> </span> <button class='button' style='.small' onclick='removeFitting3()'>Remove</button> </td> <td class='text-left' id='fitpr3'></td> </tr>");
        if(($('#fitsel4 :selected').text() == "None" || $('#fitsel4 :selected').text() == myFitting4.name) && ($('#fitsel3 :selected').text() == "None" || $('#fitsel3 :selected').text() == myFitting3.name) && ($('#fitsel2 :selected').text() == "None" || $('#fitsel2 :selected').text() == myFitting2.name)) {
            $('#addFit').remove();
        }
    }
    else {
        $('#fit1').after("<tr id='fit2'> <td class='text-left'></td> <td class='text-left'> <span class='custom-dropdown custom-dropdown--white'> <select class='custom-dropdown__select custom-dropdown__select--white' id='fitsel2' style = 'width: 400px;'> <option>None</option> </select> </span> <span class='custom-dropdown custom-dropdown--white'>         Quantity: <select class='custom-dropdown__select custom-dropdown__select--white' id='fitnum2'> </select> </span> <button class='button' style='.small' onclick='removeFitting2()'>Remove</button> </td> <td class='text-left' id='fitpr2'></td> </tr>");
        if(($('#fitsel4 :selected').text() == "None" || $('#fitsel4 :selected').text() == myFitting4.name) && ($('#fitsel3 :selected').text() == "None" || $('#fitsel3 :selected').text() == myFitting3.name) && ($('#fitsel2 :selected').text() == "None" || $('#fitsel2 :selected').text() == myFitting2.name)) {
            $('#addFit').remove();
        }
    }
    if(fitsel2ran == 0) {
        $(fittingCollection).each(function() {
            $('#fitsel2').append($("<option>" + this.name + "</option>"))
        });
        for(var j = 1; j < 21; j++) {
            $('#fitnum2').append($("<option>" + j + "</option>"))
        }
        fitsel2ran = 1;
    }
    fitsel3ran += 1;
    fitsel4ran += 1;
    if(fitsel3ran == 2) {
        $(fittingCollection).each(function() {
            $('#fitsel3').append($("<option>" + this.name + "</option>"))
        });
        for(var k = 1; k < 21; k++) {
            $('#fitnum3').append($("<option>" + k + "</option>"))
        }
    }
    if(fitsel4ran == 3) {
        $(fittingCollection).each(function() {
            $('#fitsel4').append($("<option>" + this.name + "</option>"))
        });
        for(var l = 1; l < 21; l++) {
            $('#fitnum4').append($("<option>" + l + "</option>"))
        }
    }
    $(fittingCollection).each(function() {
        $('#fitsel5').append($("<option>" + this.name + "</option>"))
    });
    for(var m = 1; m < 21; m++) {
        $('#fitnum5').append($("<option>" + m + "</option>"))
    }
    $('#fitsel5').change(function() {
        myFitting5 = [];
        $(fittingCollection).each(function(){
            if(this.name == $('#fitsel5 :selected').text()) {
                myFitting5 += this;
            }
        });
    });
    $('#fitsel4').change(function() {
        myFitting4 = [];
        $(fittingCollection).each(function(){
            if(this.name == $('#fitsel4 :selected').text()) {
                myFitting4 += this;
            }
        });
    });
    $('#fitsel3').change(function() {
        myFitting3 = [];
        $(FanCollection).each(function(){
            if(this.name == $('#fitsel3 :selected').text()) {
                myFitting3 += this;
            }
        });
    });
    $('#fitsel2').change(function() {
        myFitting2 = [];
        $(fittingCollection).each(function(){
            if(this.name == $('#fitsel2 :selected').text()) {
                myFitting2 += this;
            }
        });
    });
}
function removeGPU2() {
    $('.GPU2').remove();
    $('.GPUB2').remove();
    myGPU2 = "";
    myGPUBlock2 = "";
    if($('#addGPU').length == 0) {
        $('#case').before("<tr id='addGPU'> <td class='text-left'></td> <td class='text-left'> <button class='button' style='.small' onclick='addGPU()'>Add GPU</button> </td> <td></td> </tr>")
    }
    if($('#gpusel4 :selected').text() !== "None" && $('#gpusel4 :selected').text() !== myGPU4.name && $('#gpusel3 :selected').text() !== "None" && $('#gpusel3 :selected').text() !== myGPU3.name && $('#gpusel2 :selected').text() !== "None" && $('#gpusel2 :selected').text() !== myGPU2.name) {
        $('#GPUB').remove();
        console.log("cuck");
    }
}
function removeGPU3() {
    $('.GPU3').remove();
    $('.GPUB3').remove();
    myGPU3 = "";
    myGPUBlock3 = "";
    if($('#addGPU').length == 0) {
        $('#case').before("<tr id='addGPU'> <td class='text-left'></td> <td class='text-left'> <button class='button' style='.small' onclick='addGPU()'>Add GPU</button> </td> <td></td> </tr>")
    }
    if($('#gpusel4 :selected').text() !== "None" && $('#gpusel4 :selected').text() !== myGPU4.name && $('#gpusel3 :selected').text() !== "None" && $('#gpusel3 :selected').text() !== myGPU3.name && $('#gpusel2 :selected').text() !== "None" && $('#gpusel2 :selected').text() !== myGPU2.name) {
        $('#GPUB').remove();
    }
}
function removeGPU4() {
    $('.GPU4').remove();
    $('.GPUB4').remove();
    myGPU4 = "";
    myGPUBlock4 = "";
    if($('#addGPU').length == 0) {
        $('#case').before("<tr id='addGPU'> <td class='text-left'></td> <td class='text-left'> <button class='button' style='.small' onclick='addGPU()'>Add GPU</button> </td> <td></td> </tr>")
    }
    if($('#gpusel4 :selected').text() !== "None" && $('#gpusel4 :selected').text() !== myGPU4.name && $('#gpusel3 :selected').text() !== "None" && $('#gpusel3 :selected').text() !== myGPU3.name && $('#gpusel2 :selected').text() !== "None" && $('#gpusel2 :selected').text() !== myGPU2.name) {
        $('#GPUB').remove();
    }
}
function removeFitting2() {
    $("#fit2").remove();
    myFitting2 = "";
    if($('#addFit').length == 0) {
        $('#pump').before("<tr id='addFit'> <td class='text-left'></td> <td class='text-left'> <button class='button' style='.small' onclick='addFit()'>Add Other Fitting</button> </td> <td></td> </tr>")
    }
}
function removeFitting3() {
    $("#fit3").remove();
    myFitting3 = "";
    if($('#addFit').length == 0) {
        $('#pump').before("<tr id='addFit'> <td class='text-left'></td> <td class='text-left'> <button class='button' style='.small' onclick='addFit()'>Add Other Fitting</button> </td> <td></td> </tr>")
    }
}
function removeFitting4() {
    $("#fit4").remove();
    myFitting4 = "";
    if($('#addFit').length == 0) {
        $('#pump').before("<tr id='addFit'> <td class='text-left'></td> <td class='text-left'> <button class='button' style='.small' onclick='addFit()'>Add Other Fitting</button> </td> <td></td> </tr>")
    }
}
function removeFitting5() {
    $("#fit5").remove();
    myFitting5 = "";
    if($('#addFit').length == 0) {
        $('#pump').before("<tr id='addFit'> <td class='text-left'></td> <td class='text-left'> <button class='button' style='.small' onclick='addFit()'>Add Other Fitting</button> </td> <td></td> </tr>")
    }
}
function removeReservoir2() {
    $('#res2').remove();
    myReservoir2 = "";
    if($('#addRes').length == 0) {
        $('#rad1').before("<tr id='addRes'> <td class='text-left'></td> <td class='text-left'> <button class='button' style='.small' onclick='addRes()'>Add Different Reservoir</button> </td> <td></td> </tr>")
    }
}
function removeRadiator2() {
    $('#rad2').remove();
    myRad2 = "";
    if($('#addRad').length == 0) {
        $('#fan1').before("<tr id='addRad'> <td class='text-left'></td> <td class='text-left'> <button class='button' style='.small' onclick='addRad()'>Add Different Radiator</button> </td> <td></td> </tr>")
    }
}
function removeRadiator3() {
    $('#rad3').remove();
    myRad3 = "";
    if($('#addRad').length == 0) {
        $('#fan1').before("<tr id='addRad'> <td class='text-left'></td> <td class='text-left'> <button class='button' style='.small' onclick='addRad()'>Add Different Radiator</button> </td> <td></td> </tr>")
    }
}
function removeRadiator4() {
    $('#rad4').remove();
    myRad4 = "";
    if($('#addRad').length == 0) {
        $('#fan1').before("<tr id='addRad'> <td class='text-left'></td> <td class='text-left'> <button class='button' style='.small' onclick='addRad()'>Add Different Radiator</button> </td> <td></td> </tr>")
    }
}
function removeFan2() {
    $('#fan2').remove();
    myFan2 = "";
    if($('#addFan').length == 0) {
        $('#loopcomp').before("<tr id='addFan'> <td class='text-left'></td> <td class='text-left'> <button class='button' style='.small' onclick='addFan()'>Add Another Type of Fan</button> </td> <td></td> </tr>")
    }
}
function removeFan3() {
    $('#fan3').remove();
    myFan3 = "";
    if($('#addFan').length == 0) {
        $('#loopcomp').before("<tr id='addFan'> <td class='text-left'></td> <td class='text-left'> <button class='button' style='.small' onclick='addFan()'>Add Another Type of Fan</button> </td> <td></td> </tr>")
    }
}
function removeFan4() {
    $('#fan4').remove();
    myFan4 = "";
    if($('#addFan').length == 0) {
        $('#loopcomp').before("<tr id='addFan'> <td class='text-left'></td> <td class='text-left'> <button class='button' style='.small' onclick='addFan()'>Add Another Type of Fan</button> </td> <td></td> </tr>")
    }
}
function removeFan5() {
    $('#fan5').remove();
    myFan5 = "";
    if($('#addFan').length == 0) {
        $('#loopcomp').before("<tr id='addFan'> <td class='text-left'></td> <td class='text-left'> <button class='button' style='.small' onclick='addFan()'>Add Another Type of Fan</button> </td> <td></td> </tr>")
    }
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
    $(formcount).each(function () {
        if (this == myMotherboard.form) {
            casecomp += 1;
        }
    });
    var gpuslots = [myGPU1.slots, myGPU2.slots, myGPU3.slots, myGPU4.slots];
    var slotstaken = 0;
    for (var sl = 0; sl < gpuslots.length; sl++) {
        if (typeof(gpuslots[sl]) === 'number') {
            slotstaken += 2;
        }
    }
    var gpuComp1 = 0;
    var gpuComp2 = 0;
    if (myMotherboard.slots16x < (slotstaken / 2)) {
        if (((slotstaken / 2) - myMotherboard.slots16x) == 1) {
            incomp.push("Your motherboard doesn't have enough PCI-E x16 slots to hold all of your graphics cards remove 1 graphics card")
            isincomp += 1;
        }
        else if (((slotstaken / 2) - myMotherboard.slots16x) == 2) {
            incomp.push("Your motherboard doesn't have enough PCI-E x16 slots to hold all of your graphics cards remove 2 graphics cards")
            isincomp += 1;
        }
        else {
            incomp.push("Your motherboard doesn't have enough PCI-E x16 slots to hold all of your graphics cards remove 3 graphics cards")
            isincomp += 1;
        }
    }
    if (myCase.slots < slotstaken) {
        incomp.push(" You have too many graphics card for your case which only has " + myCase.slots + " slots unless they are in a single slot configuration");
        isincomp += 1;
    }
    else {
        if (myGPU2 !== "") {
            if (myGPU2 == 0 || myGPU2 == "") {
                console.log("User hasn't selected a second card yet")
            }
            else {
                if (myGPU1.brand == myGPU2.brand && myGPU1.series == myGPU2.series && myGPU1.cardNumber == myGPU2.cardNumber) {
                    console.log("Crossfire or SLI configured properly");
                    gpuComp1 = 1;
                }
                else {
                    incomp.push(" Cards one and two are not Crossfire or SLI compatible");
                    isincomp += 1
                }
            }
        }
        if (myGPU3 !== "") {
            if (myGPU3 == 0 || myGPU3 == "") {
                console.log("User hasn't selected a third card yet")
            }
            else {
                if (myGPU1.brand == myGPU3.brand && myGPU1.series == myGPU3.series && myGPU1.cardNumber == myGPU3.cardNumber && gpuComp1 == 1) {
                    console.log("Wow, TriFire or Tri-SLI configured properly");
                    gpuComp2 = 4;
                }
                else if (myGPU1.brand == myGPU3.brand && myGPU1.series == myGPU3.series && myGPU1.cardNumber == myGPU3.cardNumber) {
                    incomp.push(" Cards one and three are configured correctly for SLI or Crossfire but card two doesn't match");
                    gpuComp2 = 3;
                    isincomp += 1
                }
                else if (myGPU2.brand == myGPU3.brand && myGPU2.series == myGPU3.series && myGPU2.cardNumber == myGPU3.cardNumber) {
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
        if (myGPU4 !== "") {
            if (myGPU4 == 0 || myGPU4 == "") {
                console.log("User hasn't selected a fourth card yet")
            }
            else {
                if (myGPU1.brand == myGPU4.brand && myGPU1.series == myGPU4.series && myGPU1.cardNumber == myGPU4.cardNumber && gpuComp1 == 1 && gpuComp2 == 4) {
                    console.log("Wow, QuadFire or Quad-SLI configured properly");
                }
                else if (myGPU1.brand == myGPU4.brand && myGPU1.series == myGPU4.series && myGPU1.cardNumber == myGPU4.cardNumber && gpuComp2 == 3) {
                    incomp.push("TriFire or Tri-SLI configured properly but card two doesn't match");
                    isincomp += 1
                }
                else if (myGPU1.brand == myGPU4.brand && myGPU1.series == myGPU4.series && myGPU1.cardNumber == myGPU4.cardNumber && gpuComp2 == 2) {
                    incomp.push(" TriFire or Tri-SLI configured properly but card one doesn't match");
                    isincomp += 1
                }
                else if (myGPU1.brand == myGPU4.brand && myGPU1.series == myGPU4.series && myGPU1.cardNumber == myGPU4.cardNumber && gpuComp2 == 1) {
                    incomp.push("TriFire or Tri-SLI configured properly but card third doesn't match");
                    isincomp += 1
                }
                else if (myGPU1.brand == myGPU4.brand && myGPU1.series == myGPU4.series && myGPU1.cardNumber == myGPU4.cardNumber && gpuComp1 == 0) {
                    incomp.push(" CrossFire or SLI configured properly but card two and three don't match");
                    isincomp += 1
                }
                else if (myGPU3.brand == myGPU4.brand && myGPU3.series == myGPU4.series && myGPU3.cardNumber == myGPU4.cardNumber && gpuComp1 == 0) {
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
    if (isincomp == 0) {
        incomp.push("Congratulations, everything is compatible");
    }
    document.getElementById("iscomp").innerHTML = incomp;
}
var loopcomp = 0;
var loopincomp = [];
var fittingcount = 0;
var gpucount = 0;
var fan120 = 0;
var fan140 = 0;
var fan80 = 0;
var rad360 = 0;
var rad240 = 0;
var rad120 = 0;
function LoopComp() {
    var cpublockcomp = 0;
    for (var l = 0; l < myCPUBlock.socket.length; l++) {
        if (myCPU.socket == myCPUBlock.socket[l] && myMotherboard.socket == myCPUBlock.socket[l]) {
            cpublockcomp = 1;
        }
    }
    if (cpublockcomp !== 1) {
        loopcomp = 1;
        loopincomp.push(" Your CPU Block is incompatible");
        fittingcount += 2;
    }
    else {
        fittingcount += 2;
    }
    if (myGPU1.brand !== myGPUBlock1.brand || myGPU1.cardNumber !== myGPUBlock1.cardNumber || myGPU1.series !== myGPUBlock1.series || myGPU1.reference !== myGPUBlock1.reference || myGPU1.customCardType !== myGPUBlock1.customCardType || myGPU1.mod !== myGPUBlock1.mod) {
        loopcomp = 1;
        loopincomp.push(" Your first GPU Block is incompatible");
        if(myBridge.name == "None" || myBridge.name == $('#bridgesel :selected').text()) {
        }
        else {
            fittingcount += 2;
        }
    }
    else if(myBridge.name == "None" || myBridge.name == $('#bridgesel :selected').text()) {
        gpucount += 1;
    }
    else {
        gpucount += 1;
        fittingcount += 2;
    }
    if (myGPU2 !== "") {
        if (myGPU2.brand !== myGPUBlock2.brand || myGPU2.cardNumber !== myGPUBlock2.cardNumber || myGPU2.series !== myGPUBlock2.series || myGPU2.reference !== myGPUBlock2.reference || myGPU2.customCardType !== myGPUBlock2.customCardType || myGPU2.mod !== myGPUBlock2.mod) {
            loopcomp = 1;
            loopincomp.push(" Your second GPU Block is incompatible");
            if(myBridge.name == "None" || myBridge.name == $('#bridgesel :selected').text()) {
            }
            else {
                fittingcount += 2;
            }
        }
        else if(myBridge.name == "None" || myBridge.name == $('#bridgesel :selected').text()) {
            gpucount += 1;
        }
        else {
            gpucount += 1;
            fittingcount += 2;
        }
    }
    if (myGPU3 !== "") {
        if (myGPU3.brand !== myGPUBlock3.brand || myGPU3.cardNumber !== myGPUBlock3.cardNumber || myGPU3.series !== myGPUBlock3.series || myGPU3.reference !== myGPUBlock3.reference || myGPU3.customCardType !== myGPUBlock3.customCardType || myGPU3.mod !== myGPUBlock3.mod) {
            loopcomp = 1;
            loopincomp.push(" Your third GPU Block is incompatible");
            if(myBridge.name == "None" || myBridge.name == $('#bridgesel :selected').text()) {
            }
            else {
                fittingcount += 2;
            }
        }
        else if(myBridge.name == "None" || myBridge.name == $('#bridgesel :selected').text()) {
            gpucount += 1;
        }
        else {
            gpucount += 1;
            fittingcount += 2;
        }
    }
    if (myGPU4 !== "") {
        if (myGPU4.brand !== myGPUBlock4.brand || myGPU4.cardNumber !== myGPUBlock4.cardNumber || myGPU4.series !== myGPUBlock4.series || myGPU4.reference !== myGPUBlock4.reference || myGPU4.customCardType !== myGPUBlock4.customCardType || myGPU4.mod !== myGPUBlock4.mod) {
            loopcomp = 1;
            loopincomp.push(" Your fourth GPU Block is incompatible");
            if(myBridge.name == "None" || myBridge.name == $('#bridgesel :selected').text()) {
            }
            else {
                fittingcount += 2;
            }
        }
        else if(myBridge.name == "None" || myBridge.name == $('#bridgesel :selected').text()) {
            gpucount += 1;
        }
        else {
            gpucount += 1;
            fittingcount += 2;
        }
    }
    if(myBridge.name == "None" || myBridge.name == $('#bridgesel :selected').text()) {
        fittingcount += 2;
        if(myBridge.numcards !== gpucount) {
            loopincomp.push(" Your bridge size and number of cards don't match")
            loopcomp = 1;
        }
    }
    var pumpcount = $('#pumpnum1 :selected').text();
    if(myPumpTop == "" || myPumpTop.name == undefined || myPumpTop.name == "None") {
        if(myPumpTop == "") {
            fittingcount += (2 * pumpcount);
        }
        else {
            fittingcount += (2 * $('#pumptopnum :selected').text());
        }
    }
    else {
        if($('#pumptopnum :selected').text() !== pumpcount) {
            loopcomp = 1;
            loopincomp.push(" The number of Pumps doesn't match the number of Pump Tops")
        }
        else if(myPump.type !== myPumpTop.type) {
            loopcomp = 1;
            loopincomp.push(" Your pump-top is not compatible with your pump");
            fittingcount += (2 * $('#pumptopnum :selected').text());
        }
        else {
            fittingcount += (2 * $('#pumptopnum :selected').text());
        }
    }
    if(myReservoir.name == $("#ressel1 :selected").text()) {
        fittingcount += (2 * $("#resnum1 :selected").text());
    }
    if(myReservoir2 !== "" && myReservoir2.name !== "None") {
        if(myReservoir2.name == $("#ressel2 :selected").text()) {
            fittingcount += (2 * $("#resnum2 :selected").text());
        }
    }
    if(myFan1.size == 120) {
        fan120 += parseInt($('#fannum1 :selected').text());
    }
    else if(myFan1.size == 140) {
        fan140 += parseInt($('#fannum1 :selected').text());
    }
    else if(myFan1.size == 80) {
        fan80 += parseInt($('#fannum1 :selected').text());
    }
    if(myFan2.size == 120) {
        fan120 += parseInt($('#fannum2 :selected').text());
    }
    else if(myFan2.size == 140) {
        fan140 += parseInt($('#fannum2 :selected').text());
    }
    else if(myFan2.size == 80) {
        fan80 += parseInt($('#fannum2 :selected').text());
    }
    if(myFan3.size == 120) {
        fan120 += parseInt($('#fannum3 :selected').text());
    }
    else if(myFan3.size == 140) {
        fan140 += parseInt($('#fannum3 :selected').text());
    }
    else if(myFan3.size == 80) {
        fan80 += parseInt($('#fannum3 :selected').text());
    }
    if(myFan4.size == 120) {
        fan120 += parseInt($('#fannum4 :selected').text());
    }
    else if(myFan4.size == 140) {
        fan140 += parseInt($('#fannum4 :selected').text());
    }
    else if(myFan4.size == 80) {
        fan80 += parseInt($('#fannum5 :selected').text());
    }
    if(myFan5.size == 120) {
        fan120 += parseInt($('#fannum5 :selected').text());
    }
    else if(myFan5.size == 140) {
        fan140 += parseInt($('#fannum5 :selected').text());
    }
    else if(myFan5.size == 80) {
        fan80 += parseInt($('#fannum5 :selected').text());
    }
    if(fan120 > myCase.fan120) {
        loopcomp = 1;
        loopincomp.push(" You have too many 120mm fans for your case")
    }
    if(fan140 > myCase.fan140) {
        loopcomp = 1;
        loopincomp.push(" You have too many 140mm fans for your case")
    }
    if(fan80 > myCase.fan80) {
        loopcomp = 1;
        loopincomp.push(" You have too many 80mm fans for your case")
    }
    if(myRad1 !== "" && myRad1.name !== "None") {
        if(myRad1.size == 360) {
            rad360 += (1 * parseInt($("#radnum1 :selected").text()));
        }
        else if(myRad1.size == 240) {
            rad240 += (1 * parseInt($("#radnum1 :selected").text()));
        }
        else {
            rad120 += (1 * parseInt($("#radnum1 :selected").text()));
        }
    }
    if(myRad2 !== "" && myRad2.name !== "None") {
        if(myRad2.size == 360) {
            rad360 += (1 * parseInt($("#radnum2 :selected").text()));
        }
        else if(myRad2.size == 240) {
            rad240 += (1 * parseInt($("#radnum2 :selected").text()));
        }
        else {
            rad120 += (1 * parseInt($("#radnum2 :selected").text()));
        }
    }
    if(myRad3 !== "" && myRad3.name !== "None") {
        if(myRad3.size == 360) {
            rad360 += (1 * parseInt($("#radnum3 :selected").text()));
        }
        else if(myRad3.size == 240) {
            rad240 += (1 * parseInt($("#radnum3 :selected").text()));
        }
        else {
            rad120 += (1 * parseInt($("#radnum3 :selected").text()));
        }
    }
    if(myRad4 !== "" && myRad4.name !== "None") {
        if(myRad4.size == 360) {
            rad360 += (1 * parseInt($("#radnum3 :selected").text()));
        }
        else if(myRad4.size == 240) {
            rad240 += (1 * parseInt($("#radnum3 :selected").text()));
        }
        else {
            rad120 += (1 * parseInt($("#radnum3 :selected").text()));
        }
    }
    fittingcount += ($("#radnum1 :selected").text() * 2);
    fittingcount += ($("#radnum2 :selected").text() * 2);
    fittingcount += ($("#radnum3 :selected").text() * 2);
    fittingcount += ($("#radnum4 :selected").text() * 2);
    if((rad120 + rad240 + rad360) > myCase.radtot) {
        loopcomp = 1;
        loopincomp += " You have too many radiators for your case"
    }
    else {
        if (rad360 > myCase.fan360) {
            loopcomp = 1;
            loopincomp += " You have too many 360mm radiators"
        }
        if (rad240 > myCase.fan240) {
            loopcomp = 1;
            loopincomp += " You have too many 240mm radiators"
        }
        if (rad120 > myCase.fan120) {
            loopcomp = 1;
            loopincomp += " You have too many 120mm radiators"
        }
        if (loopcomp == 0) {
            loopincomp.push("Congratulations, everything is compatible");
        }
    }
    console.log(fan120);
    loopcomp = 0;
    document.getElementById("loopiscomp").innerHTML = loopincomp;
    document.getElementById("fitcount").innerHTML = fittingcount;
    loopincomp = [];
    fittingcount = 0;
    gpucount = 0;
    fan120 = 0;
    fan140 = 0;
    fan80 = 0;
    rad120 = 0;
    rad240 = 0;
    rad360 = 0;
}