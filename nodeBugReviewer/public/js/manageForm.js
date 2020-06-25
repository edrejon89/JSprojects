"use strict";   
window.onload = function(){

    document.getElementById("table-hidden").style.display = "none";
}


var btnCreateTable = document.getElementsByClassName("create-table")[0];
btnCreateTable.addEventListener("click", () => {
    let obj = getData();
    document.getElementsByClassName("content")[0].style.display = "none";
    document.getElementById("table-hidden").style.display = "block";  
    document.getElementById("td-project").innerHTML = obj.project;    
    document.getElementById("td-issueType").innerHTML = obj.issueType;
    document.getElementById("td-summary").innerHTML = obj.summary;
    document.getElementById("td-description").innerHTML = obj.description;
    document.getElementById("td-affectsVersion").innerHTML = obj.affectsVersion;
    document.getElementById("td-buildFoundIn").innerHTML = obj.buildFoundIn;
    document.getElementById("td-activity").innerHTML = obj.activity;
    document.getElementById("td-customerImpact").innerHTML = obj.customerImpact;
    document.getElementById("td-platform").innerHTML = obj.platform;
    console.log(obj.platform);

});


var btnbackForm = document.getElementsByClassName("go-back")[0];
btnbackForm.addEventListener("click", () => {
  document.getElementsByClassName("content")[0].style.display = "block";
  document.getElementById("table-hidden").style.display = "none";  
});


function getData(){
    // let dataBug = [];
    let project =document.getElementById("project-input").value;
    let issueType = document.getElementById("issue-type-input").value;
    let summary =document.getElementById("summary-input").value;
    let description = document.getElementById("description-input").value;
    let affectsVersion = document.getElementById("affects-version-input").value;
    let buildFoundIn = document.getElementById("build-foundin-input").value;
    let activity = document.getElementById("activity-input").value;
    let customerImpact = document.getElementById("customer-impact-input").value
    let platform = getSelectValues(document.getElementById("platform-input"));

    // dataBug.push(project)
    let dataBug = {
        project: project,
        issueType: issueType,
        summary: summary,
        description: description,
        affectsVersion: affectsVersion,
        buildFoundIn: buildFoundIn,
        activity: activity,
        customerImpact: customerImpact,
        platform: platform
    }
    return dataBug;
}



// Return an array of the selected opion values
// select is an HTML select element
function getSelectValues(select) {
    var result = [];
    var options = select && select.options;
    var opt;
  
    for (var i=0, iLen=options.length; i<iLen; i++) {
      opt = options[i];
  
      if (opt.selected) {
        result.push(opt.value || opt.text);
      }
    }
    return result;
  }



