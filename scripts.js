/**
 * Created by h205p2 on 1/9/17.
 */
var myComputer = [];
var cpuCollection = [];
var motherboardCollection = [];
var gpuCollection = [];
var caseCollection = [];
var myCPU;
var myMotherboard;
var myGPU1 = "";
var myGPU2 = "";
var myGPU3 = "";
var myGPU4 = "";
var myCase;
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
function Case(num5,form,slots,fan,name) {
    this.name = name;
    this.num5 = num5;
    this.form = form;
    this.slots = slots;
    this.fan = fan;

    caseCollection.push(this);
}

//Stock objects for testing reasons

var i75930k = new CPU(3.6, 6, 2011.3, "i7 5930k");
var gigabytex99mgaming5 = new Motherboard(2011.3, "mATX", 3, 1, 4, "Gigabyte X99m Gaming5");
var parvums2extended = new Case(0, ["mATX"], 4, [120, 120, 120, 120, 120, 80, 80, 80], "Parvum S2.0 Extended");
var msir9290 = new GPU("amd",2,90,0,"msi",1,0, "MSI R9 290 Reference");
var i54690k = new CPU(3.6, 4, 1150, "i5 4960k");
var asusmaximusviihero = new Motherboard(1150, "ATX", 2, 1, 6, "Asus Maxiums VII Hero");
var nzxtphantom410 = new Case(2, ["ATX", "mATX", "mITX"], 7, [120,120,120,120,120,120,120,120], "NZXT Phantom 410");
var evgagtx970acx20 = new GPU("nvidia", 9, 70, "", "EVGA", 0, "ACX2.0", "EVGA GTX970 ACX2.0");

function AppendThings(){
    $(cpuCollection).each(function() {
        $('#cpusel').append($("<option>" + this.name + "</option>"))
    });

    $('#cpusel').change(function() {
        myCPU = 0;
        $(cpuCollection).each(function(){
            var text = $('#cpusel :selected').text();
            if(this.name === text) {
                myCPU = this;
            }
        });
    });
    $(motherboardCollection).each(function() {
        $('#mobosel').append($("<option>" + this.name + "</option>"))
    });

    $('#mobosel').change(function() {
        myMotherboard = 0;
        $(motherboardCollection).each(function(){
            var selectedmobo = $('#mobosel :selected').text();
            if(this.name === selectedmobo) {
                myMotherboard = this;
            }
        });
    });
    $(gpuCollection).each(function() {
        $('#gpusel1').append($("<option>" + this.name + "</option>"))
    });

    $('#gpusel1').change(function() {
        myGPU1 = 0;
        $(gpuCollection).each(function(){
            if(this.name === $('#gpusel1 :selected').text()) {
                myGPU1 = this;
            }
        });
    });
    $(caseCollection).each(function() {
        $('#casesel').append($("<option>" + this.name + "</option>"))
    });

    $('#casesel').change(function() {
        myCase = 0;
        $(caseCollection).each(function(){
            var selectedcase = $('#casesel :selected').text();
            if(this.name == selectedcase) {
                myCase = this;
            }
        });
    });
}
var gpuCount;
function addGPU() {
    console.log(myGPU2.name, myGPU3.name, myGPU4.name);
    if($('#gpusel4 :selected').text() == ("None" || myGPU4.name)) {
        gpuCount = 4;
    }
    else if($('#gpusel3 :selected').text() == ("None" || myGPU3.name)) {
        gpuCount = 3;
    }
    else if($('#gpusel2 :selected').text() == ("None" || myGPU2.name)) {
        gpuCount = 2;
    }
    else {
        gpuCount = 1;
    }
    console.log(gpuCount);
    $('".GPU" + (gpuCount + 1)').after( "<tr class='GPU" + (gpuCount + 1) + "'> <td class='text-left'>GPU</td> <td class='text-left'> <span class='custom-dropdown custom-dropdown--white'> <select class='custom-dropdown__select custom-dropdown__select--white' id='gpusel" + (gpuCount + 1) + "'> <option>None</option> </select> </span> </td> <td class='text-left' id='gpupr'></td></tr>" );
    $(gpuCollection).each(function() {
        $('#gpusel' + (gpuCount + 1)).append($("<option>" + this.name + "</option>"))
    });
    $('#gpusel2').change(function() {
        myGPU2 = 0;
        $(gpuCollection).each(function(){
            if(this.name == $('#gpusel2 :selected').text()) {
                myGPU2 = this;
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
    $('#gpusel4').change(function() {
        myGPU4 = 0;
        $(gpuCollection).each(function(){
            if(this.name == $('#gpusel4 :selected').text()) {
                myGPU4 = this;
            }
        });
    });
}
var incomp = [];
function CompComp() {
    var isincomp = 0;
    if (myCPU.socket !== myMotherboard.socket) {
        incomp.push(" Your CPU and Motherboard are incompatible");
        isincomp += 1;
    }
    var casecomp = 0;
    var formcount = myCase.form;
    $(formcount).each(function() {
        if(this == myMotherboard.form) {
            casecomp += 1;
        }
    });
    var gpuErrors1;
    var gpuErrors2;
    var gpuErrors3;
    var gpuComp1 = 1;
    if(myGPU2 !== "") {
        if(myGPU1.brand == myGPU2.brand && myGPU1.series == myGPU2.series && myGPU1.cardNumber == myGPU2.cardNumber) {
            gpuComp1 = 1;
            gpuErrors1 = " Crossfire or SLI configured properly"
        }
        else {
            gpuComp1 = 0;
            gpuErrors1 = " Looks like your two card don't match"
        }
    }
    else {
        console.log("User only has one graphics card")
    }
    if(myGPU3 !== "") {
        if(myGPU1.brand == myGPU3.brand && myGPU1.series == myGPU3.series && myGPU1.cardNumber == myGPU2.cardNumber) {
            gpuErrors1 = "";
            gpuErrors2 = " Trifire or Tri-SLI configured properly";
        }
        else {
            gpuErrors2 = "Did you mean to add a third card that isn't compatible"
        }
    }
    if(myGPU4 !== "") {
        if(myGPU1.brand == myGPU4.brand && myGPU1.series == myGPU4.series && myGPU1.cardNumber == myGPU4.cardNumber) {
            gpuErrors3 = "Quadfire or Quad-SLI configured properly";
            gpuErrors2 = ""
        }
        else {
            gpuErrors3 = "Did you mean to add a fourth card that doesn't match the ones before"
        }
    }
    isincomp += (gpuErrors1 + gpuErrors3 + gpuErrors2);
    if (casecomp == 0) {
        incomp.push(" Your Motherboard and Case are incompatible");
        isincomp += 1;
    }
    if(isincomp == 0) {
        incomp.push(" Congratulations, everything is compatible");
    }
    document.getElementById("iscomp").innerHTML = (incomp + ".");
}
function Reset() {
    incomp = [];
    document.getElementById("iscomp").innerHTML = ""
}
function LCL() {

}