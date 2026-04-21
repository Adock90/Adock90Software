function GetUserDownloads(){
    let UserConfig = localStorage.getItem("Adock90Downloads");
    if (UserConfig === null || UserConfig === NaN || UserConfig === undefined || UserConfig === "undefined"){
        UserConfig = 0;
    }
    return UserConfig;
}


function SetUserDownload(amount){
    localStorage.setItem("Adock90Downloads", amount.toLocaleString());
}


function GetUserVisits(){
    let ReturnInteger;
    let NumOfVisits = localStorage.getItem("Adock90Visits");
    console.log(NumOfVisits);
    if (NumOfVisits === "NaN" || NumOfVisits === null || NumOfVisits === NaN || NumOfVisits === undefined || NumOfVisits === "undefined"){
        ReturnInteger = 0;
        NumOfVisits = 0;
        localStorage.setItem("Adock90Visits", NumOfVisits);
    }
    ReturnInteger = parseInt(NumOfVisits);
    if (ReturnInteger === "NaN" || ReturnInteger === null || NumOfVisits === NaN || NumOfVisits === undefined || NumOfVisits === "undefined"){
        ReturnInteger = 0;
    }
    return ReturnInteger;
}

function SetUserVisits(num){
    let UserVal = num;
    console.log(UserVal);
    if (UserVal === null || UserVal === 'NaN' || UserVal === NaN || UserVal === undefined || UserVal === "undefined"){
        localStorage.setItem("Adock90Visits", 1);
    } else {
        UserVal++;
        localStorage.setItem("Adock90Visits", UserVal.toLocaleString());
    }
}

function GetLastVisit(){
    return localStorage.getItem("Adock90LastVisit");
}

function TranslateLVLSToLVI(params){
    return parseInt(params);
}

function SetLastVisit(){
    localStorage.setItem("Adock90LastVisit", GetTime());
}

function GetTime(){
    const dateObj = new Date();
    return dateObj.getTime();
}