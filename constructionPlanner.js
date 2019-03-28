<script src="/SiteAssets/scripts/prettyGantt/d3.v4.min.js"></script>
<script src="/SiteAssets/scripts/prettyGantt/chartAlerts.js"></script>
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
<SCRIPT>
  /* https://d3js.org/d3.v4.min.js
  src = "/SiteAssets/scripts/prettyGantt/MatrixData.js"> < /script>
< SCRIPT src = "/SiteAssets/scripts/prettyGantt/d3v4-brush-lite.js">*/</script>


<style>
  <!--  SEE http://tscppm/Projects/Site%20Pages/Construction%20Planner.aspx  -->
  <!--  SEE also work-in-progress scripts start with words "timeline-snapshot"  -->
  <!--  SEE also http://tscppm/Projects/Site%20Pages/Construction%20Planner%20Mk%20III.aspx  -->



.chart {
margin: 0 auto;
width: 960px;
min-height: 8px;
/* height: 20px; */
/*   height: 100%; */
/* height: 8px; */
box-shadow: 0 0 3px 1px #eee;
/* overflow: hidden;*/
}

svg {
vertical-align: top;
width: 100%;
/*height: 100%; */
overflow: visible;
/* position: absolute; */
}

g {
vertical-align: top;
width: 100%;
height: 100%;
}

g.tick {
  vertical-align: inherit;
}

.group {
/*  background-color: rgba(255,0,0,0.6); */
/* position: absolute; */
}


.tooltip {
/* position: absolute; */
position: sticky;
bottom: -50;
left: 0%;
height: 120px;
/*  z-index: 1000; */
}
.axis {
/* height: 100%; */
height: 20px;
/* new stuff - SORTA WORKS BUT THE BODY DOESN'T RESIZE NOW  */
 position: sticky;
bottom: 0%;
left: 10%;
background: white;

}

.vertLabelContainer {
  position: absolute;
  /*  float: left; */
  top: 0%;
   left: 5%;
  background: none;
  /* width: 100px; */
  height: 100%;

}

.vertlabel {
  position: absolute;
  width: auto;
}

.yaxis {
/* height: 20px; */
/* new stuff - SORTA WORKS BUT THE BODY DOESN'T RESIZE NOW  */
position: absolute;
/*  float: left; */
 top: 0px;
 left: 5px;
background: none;
width: 100px;
height: 100%;

}

.axisYear { /* not used at present */
height: 20px;

 position: sticky;
bottom: 0%;
left: 0%;
color: white;

}

.axisWeek {
position: sticky;
bottom: 0%;
left: 0%;
background: white;

}


.axisWeekFloating, .axisWeekFloating3 {
position: sticky;
top: 0%;
left: 0%;
height: 20px;


}


.axisWeekFloating2 {
position: sticky;
bottom: 50%;
left: 0%;
height: 20px;
/* z-index: -9000; */
/* background: white; */

}

.axisWeekFloating g {
  color: lightgray;
    opacity: 0.3;
}

 .axisWeekFloating3 g {
  color: lightgray;
    opacity: 0.1;
}

 .axisWeekFloating2 g {
  color: lightgray;
    opacity: 0.1;
}



.axisWeekFloating text, .axisWeekFloating2 text {
  font-size: 20px;
  font-color: lightgray;
  z-order: -20000;
}

.axisWeekFloating path.domain, .axisWeekFloating2 path.domain {
  stroke-width: 0;
}

.axisWeekTopGrid {

/*   position: fixed; */

  /* position: absolute;
left: 0;
top 0; */
pointer-events: none;
path, line {
  shape-rendering: crispEdges;
  stroke: #eee;
  stroke-width: 1;

}

}


.axisWeekTopGrid >  .tick {
/*  stroke: silver; */
opacity: 0.3;
pointer-events: none;
line {
/*  opacity: 0.3; */
shape-rendering: crispEdges;
stroke: #eee !important;
}
}

.bars {
/*  min-height: 30px; */
cursor: grab;
cursor: -webkit-grab;
}
.zoom {
cursor: move;

/* pointer-events: none; */
position: absolute;
 top: 0;
left: 0;
fill: none;
pointer-events: all;
}

/*
.zoom rect {
  pointer-events: none;
}
*/
/* div#slider3 {
display: inline-block;
} */

.Remove {

}

.boxPrompt {
  color: blue;
}


.gangList {
  color: silver;
  font-style: italic;
}
.zoom {
/*  z-index:-9999; */
}

.nozoom {
/*  z-index:-9999; */
}


.active {
  stroke: #000;
  stroke-width: 2px;
}

.rect {
  pointer-events: all;
  stroke: none;
  stroke-width: 40px;
}

.labelText, .barsText, .dateText, .finDateText {
/*  cursor: default; */
cursor: grab;
cursor: -webkit-grab;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.dateText {
  fill: red;
}

.darker {
  opacity: 1;
  fill: gray;
}

.changed {
  stroke: red;
}

.moved {
  stroke: yellow;
  stroke-width: 3;
}

.completed {
  stroke: green;
}


.circHandle {
  color: red;
}

table.projectInfo tr th {
  text-align: right;
  padding-right: 10px;
  vertical-align: top;

}



table.projectInfo .warning {
  background-color: yellow;
}


 circle:hover {
        cursor: e-resize;
      }

      circle.circInfo:hover {
             cursor: help;
           }

           .circComplete:hover {
                  cursor: url('http://tscppm/SiteAssets/scripts/prettyGantt/greencheck36x36.png') 16 16, auto;
                }

                .circRemove:hover {
                       cursor: url('http://tscppm/SiteAssets/scripts/prettyGantt/redCrossSm.png') 16 16, auto;
                     }


.completedText{
  font-size:9px;
  font-color: blue;
  fill: purple;
/*  rx: -10;
  ry: -10;  */
}

.removeText{
  font-size:9px;
  font-color: red;
  fill: red;
/*  rx: -10;
  ry: -10;  */
}

rect.barGroup:hover {
  border: black;
  border-width: 1px;
}

.thickBorder {
  stroke: "black";
  stroke-width: "2px";

}


.AssignedGroup {
/*  position: sticky; */
cursor: ns-resize;
}


#circleKeyGreenSVG {
  r: 5;
  fill: lime;
  opacity: 0.5;
  display: inline;
  height: 20;
}

#circleKeyGreen {
     width: 10px;
     height: 10px;
     -webkit-border-radius: 5px;
     -moz-border-radius: 5px;
     border-radius: 5px;
     background: lime;
     opacity: 0.5;
     display: inline-block;
   }

   #circleKeyOrange {
        width: 10px;
        height: 10px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        background: DarkOrange;
        opacity: 0.5;
       display: inline-block;
      }

      #circleKeyAqua {
           width: 10px;
           height: 10px;
           -webkit-border-radius: 5px;
           -moz-border-radius: 5px;
           border-radius: 5px;
           background: aqua;
           opacity: 0.5;
          display: inline-block;
         }

         #circleKeySilver {
              width: 10px;
              height: 10px;
              -webkit-border-radius: 5px;
              -moz-border-radius: 5px;
              border-radius: 5px;
              background: Silver;
              opacity: 0.5;
             display: inline-block;

            }

.key{
  /* display: inline-block; */
  display: block;
  width: 100%;
  padding: 10px;
}

.hidden {
  display: none;
}

.addDef {
}
.GlossaryLink, .addDef {
cursor: help;
}



.finDateText {
  fill: gray;
}

.taskName {
  color: blue;
  font-weight: 200;
}


/* colors for text display */

.green {
  color: green;
}

.darkorange {
  color: orange;
}

.blue {
  color: blue;
}

.magenta {
  color: magenta;
  font-weight: 800;
}

.red {
  color: red;
}

.chartAxisSpacer {
  display:none;
}

@media print {

  .chartAxisSpacer {
    display: block;
    height: 30px;
  }

  .darker {

  }

#s4-titlerow, #suiteBar, #UnlockZoomBtn, #bw-help-tab, #updateChangedItemsBtn, .key, #clearOldBtn, #getDataBtn, #info, .removeText, .completedText, #DeltaTopNavigation {
  display: none !important;
}

.labelText {
  fill: gray;
}

  /*.axisWeekFloating {
    position: fixed;
    top: 0%;
    left: 0%; */
  /*  display: none; */
/*  }  */

  .axisWeekFloating2 {
    position: fixed;
    top: 3%;
    left: 0%;
  /*  display: none; */
  }

  .axisWeekFloating2 g {
  opacity: 0.6;
  /*  display: none; */
  }
  circle {
    display: none;
  }


  .axis {
    position: fixed;
    bottom: 0%;
    left: 0%;
  }

  .axisWeek {
  /*   display: none; */
    position: fixed;
    height:20px;
    bottom: 0px;
    left: 0%;
  /*  fill: 'none'; */
  /*  z-order: -10000; */
  }

  #chartContainer {
    overflow: hidden;
  }

  #instructions {
    display: none;
  }

}

.spacer{
  height: 25px;
  display: block;
}

#IEMessage{
  color: red;
  font-size: 20px;

}

#collisionBtn {
/*  display: none; */
}

.nobreak {
  white-space:nowrap;
}

#saveRevert {
  display: inline-block;
/*  width:200px; */
}

.fileicon {
  width: 30px;
  height: auto;

}

#ThreewayToggle {
  display: inline-block !important;
  width: auto;
}

/* fieldset {
    border: none;
    padding: 0;
    margin: 0;
} */
legend {
    padding: 0;
    margin: 0;
    display: block;
}
label {
    cursor: pointer;
    display: block;
    float: left;
    padding: .2em .4em;
    background-color: #ccc;
    border-style: solid;
    border-width: 1px 1px 1px 0;
    border-color: #666;
    background-image: -moz-linear-gradient(rgba(255,255,255,.2), rgba(0,0,0,.2));
    background-image: -webkit-linear-gradient(rgba(255,255,255,.2), rgba(0,0,0,.2));
    background-image: linear-gradient(rgba(255,255,255,.2), rgba(0,0,0,.2));
    box-shadow: 1px 1px 1px rgba(255,255,255,.2) inset, -1px -1px 1px rgba(0,0,0,.2) inset;
}
label:first-child {
    border-left-width: 1px;
    border-top-left-radius: .2em;
    border-bottom-left-radius: .2em;
}
label:last-child {
    border-top-right-radius: .2em;
    border-bottom-right-radius: .2em;
}
label.selected {
    background-color: #0066CC;
    color: white;
    border-color: darkblue;
    background-image: -moz-linear-gradient(rgba(0,0,0,.2), rgba(255,255,255,.2));
    background-image: -webkit-linear-gradient(rgba(0,0,0,.2), rgba(255,255,255,.2));
    background-image: linear-gradient(rgba(0,0,0,.2), rgba(255,255,255,.2));
    box-shadow: 1px 1px 1px rgba(0,0,0,.2) inset;
}
label.warning.selected {
    background-color: red;
    border-color: darkred;
}
input[type="radio"] {
   position: absolute;
   top: -9999px;
   left: -9999px;
}

.notice{
  color: red;
}

.highlight {
  fill: blue;
}

/*
.btn {
  background-color: DodgerBlue;
  border: none;
  color: white;
  padding: 12px 16px;
  font-size: 16px;
  cursor: pointer;
}
*/
/* Darker background on mouse-over */
/*.btn:hover {
  background-color: RoyalBlue;
}


.no-bullet{
  list-style-type: none
 }
*/
#liButtonDiv {
  display:block;
  width: 100%;
}
 #settingsButtons li {
  float: left;
  list-style: none;
  text-align: center;
  color: white;
  cursor: pointer;
  background-color: DodgerBlue;
  margin-right: 10px;
  width: 40px;
  line-height: 40px;
  font-size: 30px;
}



.overlayBtn{
  color: white;
  font-size: 30px;
  padding-top: 25px;
  position: absolute;
  top: 0;
  left: 98%;
  width: 30px;
  height: 78%;
  z-index: 10;
  background-color: rgba(0,0,0,0.5); /*dim the background*/
}



/* Darker background on mouse-over */
#settingsButtons li:hover {
  background-color: RoyalBlue;
}

 #settingsButtons li#dataInfoLi {
  background-color: white;
  cursor: default;
}
#standardButtons {
  display: none;
}


#chartSettings {
  display: inline-block;
  background-color: #ededed;
  padding: 8px;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 8px;
}

.about {
  z-index: 100;

  position: fixed;
  left 0px;
  width: 85%;
  background-color: #FFFFFF;
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 5px;
  transition: width 0.5s, left 0.5s;
}

#overlayBtn {
  cursor: pointer;
}
.aboutSpacer {
  width: 100%;
  /* height: 100px; */
  display: inline-block;
}


.hideMenu {
  display: none;

  }
.hugLeft {
  left -0px;
  width: 0px;
/*  transition: width 1s, left 1s; */
  height: 20px;
  border: none;
  /*transition: none; */
  box-shadow: none;

}

.hugLeftBtn {
  padding-top: 3px;
  padding-left:15px;
  width: 30px;
  left: -40px;
  transition: width 0.5s, left 0.5s;
  font-size: 20px;
  height: 35px;

}

#axisClone{
  position: fixed;
  top: 90px;
}


#axisClone.axisWeek {
  color: none;
}

#axisClone text {
  opacity: 0.5;
}

#axisClone.axisWeek path.domain {
  stroke: rgba(0,0,0,0);
}
/*.axisWeekFloating text {
  position: fixed;
} */

</style>
<div id="IEMessage">This chart will not function in Internet Explorer - if viewing in IE, please reopen it in Google Chrome</div>
<div id='info'>
  <div class="about">
    <div id="aboutInner">
  <div id="liButtonDiv">
  <ul id="settingsButtons">
        <li id="UnlockZoomBtn" title="Lock/unlock zoom"><i class="fa fa-arrows-alt"></i></li>
        <li id="updateResourcesBtn" title="Deactivate, add and remove resources"><i class="fa fa-users"></i></li>
      <li id="clearOldBtn" title="Remove all tasks from this chart which finish before today"><i class="fas fa-broom"></i></li>
      <li id="collisionBtn" title="Shrink assignee bars and compact tasks"><i class="fas fa-compress"></i></li>
      <li id="findBtn" title="Search chart for reference, words and phrases"><i class="fas fa-glasses"></i></li>
      <li id="dataInfoLi">                  <span id="dataInfo"></span></li>
      <li id="getDataBtn" title="Store current tasks and change status with this browser on this pc - recalled by F5 (refresh)"><i class="fas fa-save"></i></li>
      <li id="clearDataBtn" title="Discard changes and revert to latest XML data from file (CANNOT BE UNDONE)"><i class="fas fa-trash-restore"></i></li>
      <li id="addNewTaskBtn" title="Go to the miscellenous tasks tracker to add/update construction tasks not in BrightWork projects"><i class="fas fa-plus-square"></i></li>

      <li id="updateChangedItemsBtn" title="Send all changes back to BrightWork tasks (CANNOT BE UNDONE)"><i class="fas fa-upload"></i></li>
      <li id="getXMLDataBtn" title="Get updated XML data file from BrightWork report results"><i class="fas fa-download"></i></li>

    </ul></div>
    <div id="standardButtons">
  <input type="button" id="UnlockZoomBtn" name="UnlockZoomBtn" locked="false" value="Lock Zoom/Pan" />
  <input type="button" id="updateResourcesBtn" name="updateResourcesBtn" value="Update Resources"/>
  <input type="button" id="clearOldBtn" name="clearOldBtn" value="Clear Finish < Today"/>

  <input type="button" id="updateChangedItemsBtn" name="updateChangedItemsBtn" value="Update Changed Items"/>
    <input type="button" id="collisionBtn" name="collisionBtn" value="Compact Chart"/>
    <input type="button" id="findBtn" name="findBtn" value="Find project"/>
  <div id="saveRevert">

    <input type="button" id="getDataBtn" name="getDataBtn" value="Save" title="Click to store your current changes to be recalled on F5 refresh."/>
    <input type="button" id="clearDataBtn" name="clearDataBtn" value="Revert" title="Click to revert to original data-Updated changes will not appear unless the data XML has been refreshed."/>

    </div>
</div>
<div id="chartSettings">
  <input type="checkbox" name="MondayLock" id="MondayLock" checked='true' />Lock dragged Start to Monday ~
  <input type="checkbox" name="FridayLock" id="FridayLock" checked='true' />Lock dragged Finish to Friday ~
  <input type="checkbox" title="Check this to move bars without marking them for updating in BrightWork" name="dontMark" id="dontMark"  />Don't mark ~
  <input type="checkbox" name="trainingProjects" id="trainingProjects" checked='true' />Use Training Projects ~


<legend>
        Descriptions:
  </legend>

    <span id="ThreeWayToggle">

        <label class="selected">
          Full
          <input name="state" type="radio" value="Full" checked />
        </label>
        <label>
          Short
          <input name="state" type="radio" value="Short" />
        </label>
        <label class="warning">
          Ref
          <input name="state" type="radio" value="Ref" />
        </label>
    </span>
&nbsp; ~ &nbsp;
  <span class='nobreak'>Look <input type="text" name="yearsAheadTxt" id="yearsAheadTxt" size="3" value=2  /> years ahead</span> ~
  <a id="instructions" href="http://tscppm/Help%20Wiki/Construction%20Planner.aspx" target="_blank">Click for instructions</a></div>

  </div>


    <div class="overlayBtn" id="overlayBtn"><i id="pointLeft" class="fas fa-chevron-left"></i><i id="pointRight" class="hidden fas fa-chevron-right"></i></div>


  </div>


    <div class="aboutSpacer"></div>
<div class='key'>Key (top right circle):
  <div id='circleKeyGreen'> </div> <span class="addDef">Issued for Construction</span> ~
  <div id='circleKeyAqua'> </div> Design >75% Complete ~
  <div id='circleKeyOrange' > </div> Design Started ~
  <div id='circleKeySilver' > </div> Design NOT started
</div>
<div id="axisClone"></div>


<div class=".slider-holder"></div>
<div class="spacer"></div></div>
<div id='chartContainer'>
<div class="chartAxisSpacer"></div>
<div class="chart"></div>
</div>
<script type="text/javascript">

/*
  (function() {
     console.log('started f');
      var link = document.createElement('link');
      link.type = 'image/x-icon';
      link.rel = 'shortcut icon';
      link.href = '/siteassets/scripts/prettygantt/favicon.ico';
      document.getElementsByTagName('head')[0].appendChild(link);
  }());
*/

// data
var trainingProjects;

if (localStorage.getItem("trainingProjects") == null) {

 trainingProjects = true;
} else {
  console.log("training projects:" + localStorage.getItem("trainingProjects"));
  if(localStorage.getItem("trainingProjects") == "false") {
    trainingProjects = false;
  } else {
    trainingProjects = true;
  };
}

//var bwDataFolder = "/Data/";
var bwroot = "tscppm";

var XMLFileName = "/Data/Project Ready Matrix Data.xml"

var newName = "";

var pageX;

var useSavedData= false;




function runAfterEverythingElse() {
/* sliders */

$("link[rel='shortcut icon']").attr("href","http://tscppm/siteassets/scripts/prettygantt/favicon.ico");

var aboutHeight = $(".about").height();
$(".aboutSpacer").css('height', aboutHeight+'px');




var browser=get_browser();

if (browser.name != "Chrome") {
  alert("Incompatible browser detected ("+ browser.name+") - please reopen this chart in Chrome for full functionality.");

}



// if viewing in IE, code doesn't even get this far:
  $("#IEMessage").remove();

  $("#s4-workspace").scroll(function() { // when the page is scrolled run this
      console.log($(this).scrollTop());
      if($(this).scrollTop() >= 300) { // if you're NOT at the top
          $("#axisClone").fadeIn("fast"); // fade in
          $(".about").css("top","90px");
      } else { // else
          //$("#axisClone").fadeOut("fast"); // fade out
            $(".about").css("top","auto");
              $("#axisClone").hide(); // fade out
      }
  });




if (localStorage.getItem("YearsAhead") != null) {
  $("#yearsAheadTxt").val(localStorage.getItem("YearsAhead"));
}

function recallToggle() {
  if (localStorage.getItem("threeWayToggle") != null) {
    //  d3.select(this.parentNode.parentNode).selectAll('label').classed('selected', false);
    //  d3.select(this.parentNode.parentNode).selectAll('label').classed('selected', false);
    d3.select("#ThreeWayToggle").selectAll('input').each(function(d) {
      d3.select(this.parentNode).classed('selected', false);
       var checkedValue = localStorage.getItem("threeWayToggle");
       var selectedValue = this.value;
      if (checkedValue === selectedValue) {
        //  console.log("selected:" + selectedValue + ", checked:" + checkedValue);
        d3.select(this.parentNode).classed('selected', true);
        threeWT(selectedValue);
      //  d3.select(this.node)
      //  d3.select(this).node().dispatch("change");

  //    this.on("change")();
      }
    })

            //d3.select("#ThreeWayToggle").selectAll('input').node().dispatch("change");

  //  d3.select("#ThreeWayToggle").selectAll('input').dispatch("change");
  }


}

  // add custom namespace with jQuery
// workaround, because of D3 bug: https://github.com/mbostock/d3/issues/1935
$('svg').attr('xmlns:svg', 'http://www.w3.org/2000/svg');
//console.log(d3.ns.prefix);

//var theFromSlider = d3.select('#slider6').call(d3.slider().axis(false).min(startYear).max(maxYear).step(1).value(thisYear).on("slide", function(evt, value) {

// GLOSSARY DEFINITION POPUP
jQuery(".addDef").addClass("ms-rteStyle-Accent1");

jQuery(".addDef").click(function() {
  var term = jQuery(this).text();
  var url = "/SitePages/ViewGlossary.aspx?Term="+term;
    OpenDialog(url);
  });

//////
//get currentUser up front because it can't be done fast enough during updates

var userid= _spPageContextInfo.userId;
var currentUser;
 var requestUri = _spPageContextInfo.webAbsoluteUrl + "/_api/web/getuserbyid(" + userid + ")";
 var requestHeaders = { "accept" : "application/json;odata=verbose" };
 $.ajax({
   url : requestUri,
   contentType : "application/json;odata=verbose",
   headers : requestHeaders,
   success : onSuccess,
   error : onError
 });

 function onSuccess(data, request){
   var loginName = data.d.Title;
   currentUser = loginName;

 }

 function onError(error) {
//   alert("error");
 }




$(document).mousemove(function(event) {
  pageX = event.pageX;

})




  var wrapper = document.querySelector('.chart');
  const width = wrapper.clientWidth;
//  var width = wrapper.clientWidth;
  const parser = d3.isoParse;
//  var parser = d3.isoParse;
  // stuff for resizing bars

const height = 35; //25 // BAR ITSELF
var GROUP_HANDLE_H = 6;
var BAR_H = 40; //30 // BAR INC HANDLES ETC
var BAR_INDENT = 3;
var BAR_FIN_OFFSET = 8;

  var MAP_WIDTH = clWidth;
  var MAP_HEIGHT = clHeight;

  var MAX_TRANSLATE_X = MAP_WIDTH / 2;
  var MIN_TRANSLATE_X = -MAX_TRANSLATE_X;

  var MAX_TRANSLATE_Y = MAP_HEIGHT / 2;
  var MIN_TRANSLATE_Y = -MAX_TRANSLATE_Y;

  var MIN_RECT_WIDTH = 100;
   var MIN_RECT_HEIGHT = 100;


    var HANDLE_R = 5;
    var HANDLE_R_ACTIVE = 12;

    var WARNING_DAYS = 10;

    var activeNameGroupId = "";






if (localStorage.getItem("chartData") == null) {

  /*  var symbolAssignees = d3.nest()
      .key(d => d.AssignedToName).sortKeys(d3.ascending)
      .key(d => d.UID).sortKeys(d3.ascending)
      .entries(MATRIXDATA); */

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
      var timeStampPromise = Promise.resolve(getTimeLastModifiedMx(XMLFileName));
      timeStampPromise.then(function(data){
        console.log(data);
        try {
        var prettyDate = new Date(data.d.TimeLastModified).toLocaleString();
        $("#dataInfo").html("<img class='fileicon' src='/SiteAssets/scripts/prettyGantt/Xml file.svg' title='Using XML file data dated:" + prettyDate+"' />");
      } catch(ex) {
        $("#dataInfo").html("<img class='fileicon' src='/SiteAssets/scripts/prettyGantt/Xml file.svg' title='Using XML file, data date not known' />");
      }
      });



} else {
   //window.MATRIXDATA = JSON.parse(localStorage.getItem("chartData"));
//var symbolAssignees = JSON.parse(localStorage.getItem("chartData"));
useSavedData = true;
window.MATRIXDATA = JSON.parse(localStorage.getItem("chartData"));
  /* symbolAssignees = d3.nest()
    .key(d => d.AssignedToName).sortKeys(d3.ascending)
    .key(d => d.UID).sortKeys(d3.ascending)
    .entries(MATRIXDATA); */
  //  console
  var dataDate = localStorage.getItem("chartDataDate");
$("#dataInfo").html("<img class='fileicon' src='/SiteAssets/scripts/prettyGantt/googleIcon.png' title='Using data saved in local storage on "+dataDate+"' />");

  var flattenedData = [];
/*
  symbolAssignees.forEach(function(assignee, i) {
      var projects = assignee.values;
      projects.forEach(function(project, k) {
        flattenedData.push(project.values[0]);
      })
  }) */
  MATRIXDATA.forEach(function(project, k) {
        flattenedData.push(MATRIXDATA[k].values[0]);
    //  })
  }) ;
  window.MATRIXDATA = flattenedData;
//  console.log(MATRIXDATA);
}



var symbolAssignees = d3.nest()
  .key(d => d.AssignedToName).sortKeys(d3.ascending)
  .key(d => d.UID).sortKeys(d3.ascending)
  .entries(MATRIXDATA);


  var symbolServices = d3.nest()
    .key(d => d.DeliveryProgramService["#text"]).sortKeys(d3.ascending)
    .key(d => d.UID).sortKeys(d3.ascending)
    .entries(MATRIXDATA);



//const minX = d3.min(MATRIXDATA, d => parser(convertSPDateOnly(d.StartDateExpression["#text"])));
//const maxX = d3.max(MATRIXDATA, d => parser(convertSPDateOnly(d.FinishDateExpression["#text"])));


const minX = d3.min(MATRIXDATA, d => parser(d.currentStartDate));
const maxX = d3.max(MATRIXDATA, d => parser(d.currentFinishDate));

//var spanX = d => x(parser(convertSPDateOnly(d.StartDateExpression["#text"])));
//var spanW = d => x(parser(convertSPDateOnly(d.FinishDateExpression["#text"]))) - x(parser(convertSPDateOnly(d.StartDateExpression["#text"])));

var spanX = d => x(parser(d.currentStartDate));
var spanW = d => x(parser(d.currentFinishDate)) - x(parser(d.currentStartDate));



// --- X scale (nb: was const)
var x = d3.scaleTime()
  .domain([minX, maxX])
  .rangeRound([0, width]);







  var colorScale = d3.scaleLinear()
    //  .domain([0, 6, symbolServices.length])
      .domain([0, symbolServices.length])
      .interpolate(d3.interpolateHcl)
  //    .range(["#ffbfba","#ffffba","#bae1ff"]);
      //   .range([d3.rgb("#89c2ff"), d3.rgb('#FFFa89')]);
        .range(['rgba(137,194,255, 0.9)', 'rgba(255,250,137,0.9)']);
      // .range([d3.rgb("#007AFF"), d3.rgb('#FFF500')]);
    //.range(['rgba(255,191,186,0.7)','rgba(255,255,186,0.7)','rgba(186,255,255,0.7)']);

    var colorScaleNewSection = d3.scaleLinear()
        .domain([0, 3, 5])
        .interpolate(d3.interpolateHcl)
    //    .range(["#ffbfba","#ffffba","#bae1ff"]);
      .range(['rgba(255,255,204,0.7)','rgba(204,204,0,0.7)','rgba(173,255,47,0.7)']);


    var backColorScale = d3.scaleLinear()
        .domain([0, 4, 12])
//        .domain([0, 4, MATRIXDATA.length])
        .interpolate(d3.interpolateHcl)
    //    .range(["#ffbfba","#ffffba","#bae1ff"]);
      .range(['rgba(255,191,186,0.4)','rgba(255,255,186,0.4)','rgba(186,255,255,0.4)']);







const label = function(symbol) {
  const svgL = d3.select(this.parentNode).selectAll('.AssignedGroup').append('g');
  //console.log(svgL)

  var lblText = symbol.key;

//console.log("got this far, name:" + lblText);


  svgL
  .attr("class", "labelGroup")
  .append('text')
  .text(lblText)
  .attr('class','labelText')
  .attr('width', '100')
  .attr("y", 20)
  .attr("font-size", 20)
  .attr("font-family", "sans-serif")
    .attr("font-weight", "bold")
  .attr('fill',function(d, i) {

        for (var i = 0; i < symbolAssignees.length; i++) {
          if (d.key.localeCompare(symbolAssignees[i].key) == 0) {
        return d3.rgb(backColorScale(i)).darker(2);

      }
    }
  })
  .attr('opacity', '0.9');



svgL.append('line')
  .attr("class","divider")
  .attr("x1", x(minX))
  .attr("x2", x(maxX))
  .attr("stroke", "silver")
  .attr("stroke-width", 1)
  .attr("opacity", 0.5);



  return svgL;
}



const groupDragHandle = function(symbol) {
  var gpDim =computeDimensions(d3.select(this.parentNode).select('.AssignedGroup'));
  const svgDL = d3.select(this.parentNode).select('.AssignedGroup').append("rect"); //.append('g');

  svgDL.attr("class", "dragbottom")
      .attr("height", GROUP_HANDLE_H)
      .attr('x', 0)
      .attr('y', function (d,i) {
        return height*(i)+gpDim.height;
      })
      .attr('width', '100%')
      .attr("fill", "blue")
      .attr("fill-opacity", .4)
      .attr("cursor", "ns-resize")
      .on("drag", d3.drag());

  return svgDL;
}



var previousBar;

/*pack = () => d3.pack()
    .size([width, height])
    .padding(1)
  (d3.hierarchy(symbolAssignees)
    .sum(d => d.value)) */
// WHERE TO BREAK THIS UP
function drawChart() {

//https://bl.ocks.org/shimizu/e6209de87cdddde38dadbb746feaf3a3
//https://observablehq.com/@mbostock/clustered-bubbles-2 // better

//const nodes = pack().leaves();


//console.log(nodes);

console.log('redrawing the chart')
//console.log(symbol);
var chart =  function(symbol) {
  var svgB = d3.select(this);


var dindex=0;
var bindex=0;
   svgB.selectAll('rect')
    .data(symbol)

    .enter()
    .append('g')
    .attr('class', 'projectBar')
  //  .attr('dataIndex',function(a,k){ return k;})
    .data(symbol.values)

    .enter()

    .selectAll('rect')

   .data(function(d,i) {
      return d.values
    })

    .enter()

    .append('g')
    .attr('class', 'GBarGroup')
    //    .attr('x', d => spanX(d)) //adding x to the group so maybe it will help me later
  //  .attr('bar-data-index', function(d,i) {return i;})
      .attr('bar-data-index', function() {
        return bindex++;
      })

    .attr("startDate", function(d) {
      //console.log(d.StartDateExpression["#text"])
      if(d.hasOwnProperty("newStartDateScript")) {

          return d.newStartDate;
        } else {
          return d.StartDateExpression["#text"]
        }
    })
    .append('svg')
     .attr("rx", 6)
    .attr("ry", 6)
    .attr('x', d => spanX(d))
   .attr('y', function (d, i) {
     //space out the bars

      if (dindex == 0) { // first one
        dindex++;
      } else {
  if (i > 0) {
    //console.log(d[i].DueDate, d[i-1].DueDate);
//    console.log(d.FinishDateExpression);
    try {
    //  console.log(d[i-1].FinishDateExpression);
    } catch (ex) {
    //  console.log('previous data not found');
    }
  }
    dindex++;
      }
    //  return height*(dindex-1);
      return BAR_H*(dindex-1);

    })
    //.attr('width', d => spanW(d))
    .attr('width', d => spanW(d))
//    .attr('height', height)
//  .attr('height', (d, i) => 25*i)

    .attr('class','barGroup')
      .on("mouseenter mouseleave", groupHover)
      .call(d3.drag())
    .append('rect')

      .attr("class", "bars")
  //    .attr("overflow", "visible")
      .attr("rx", 6)
      .attr("ry", 6)
      .attr('width', d => spanW(d))
      .attr('height', height)
    /*  .attr('fill',  d => d.color || '#ddf') */
    .attr('fill', function(d) {
      var color = "#E8E8E8";
      for (var i = 0; i < symbolServices.length; i++) {
  //  if (d.DeliveryProgramService["#text"] == MATRIXDATA[i].UniqueReference["#text"]) {
  if (d.DeliveryProgramService["#text"] == symbolServices[i].key) {
      return d3.rgb(colorScale(i));
    }
    };
    return color; // only returns if scale item not found
    } )
     .attr('stroke', function(d) {
  //     for (var i = 0; i < MATRIXDATA.length; i++) {
      var color = "silver";
       for (var i = 0; i < symbolServices.length; i++) {
         if (d.DeliveryProgramService["#text"] == symbolServices[i].key) {
  //   if (d.UniqueReference["#text"] == MATRIXDATA[i].UniqueReference["#text"]) {
       return d3.rgb(colorScale(i)).darker(0.7);
     }
     };
     return color;
     })
   .on("mousedown.zoom", null);


svgB.selectAll('.bars').each(
  function(d) {
  //  console.log(d);
    var assToName = d.AssignedToName;
    var origAssTo = "";
    try { origAssTo = d.AssignedTo["#text"].split("#")[1]; } catch (ex) {
      // no value3
    //  console.log(ex);
      origAssTo = "ZZ Not assigned"
     };
    if(d.hasOwnProperty("newStartDateScript") || d.AssignedToName != origAssTo){

      //var markStatus = d3.select("#dontMark").property("checked");
      if (d3.select("#dontMark").property("checked") == true)
      {
        d3.select(this).classed('moved',true);
        d3.select(this).classed('changed',false);
      //   d3.select(this).classed('changed',true);
      } else {
     d3.select(this).classed('moved',false);
      d3.select(this).classed('changed',true);
    }
    }
//    console.log("startdates:" + d.newStartDateScript);
  }
);

   svgB.selectAll('.barGroup')
   .append('text')
   .text(function (d) {
   //  return d.UniqueReference["#text"] + "-" + d.AssignedTo["#text"];
    //     return d.UniqueReference["#text"] + "-" + d.AssignedToName  + " ("+ d.OwnerName + ")-" + d.WebName["#text"];
  //  var shortTitle  =
         return d.UniqueReference["#text"] + "-" + d.AssignedToName  + " ("+ d.OwnerName + ")-" + d.projectTitle;
 //    return d.UniqueReference["#text"] + "-" + d.WebName["#text"];
   })
   .attr("longTitle", function(d) {
     return d.UniqueReference["#text"] + "-" + d.AssignedToName  + " ("+ d.OwnerName + ")-" + d.projectTitle;
   })
   .attr("shortTitle", function (d) {
     var abbrev = Initials2(d.projectTitle,2);
     return d.UniqueReference["#text"] + "-" + d.projectTitle.split(' ').slice(0,2).join(' ')+ " " + abbrev;
   })
   .attr("refOnly", function (d) {
  //   var abbrev = Initials2(d.projectTitle,2);
    if (d.UniqueReference.hasOwnProperty("#text"))
    {
     return d.UniqueReference["#text"];
   } else {
     return "Noref-"+Initials2(d.projectTitle,0) ;
   }
   })
   .attr("class", "barsText")
     .attr("rx", 6)
     .attr("ry", 6)
     .attr("x", BAR_INDENT)
     .attr('y', 12)
     .attr("font-size", 10)
     .attr("font-family", "sans-serif")
     .attr('width', width)
     .attr('fill', function(d) {
  //       for (var i = 0; i < MATRIXDATA.length; i++) {
      var color = "#686868";
         for (var i = 0; i < symbolServices.length; i++) {
  //     if (d.UniqueReference["#text"] == MATRIXDATA[i].UniqueReference["#text"]) {
     if (d.DeliveryProgramService["#text"] == symbolServices[i].key) {
       return d3.rgb(colorScale(i)).darker(3);
     }
   }
   return color;
 });


     svgB.selectAll('.barGroup')
     .append('circle')
     .attr('cx',  d => spanW(d))
     .attr('class','circHandle')

     //.attr('cy', 6)
     .attr('cy', height )
     .attr('y', 20)
      .attr('r', HANDLE_R)
      .on("mouseenter mouseleave", resizerHover)
      .on('click', function() {
        alert('resize handle clicked')
      })
      .on('drag', rectResizing)
     .attr('fill', 'pink')
     .attr('opacity','0.5');
//     .call(d3.drag());


      svgB.selectAll('.barGroup')
      .append('text')
      .attr('class','completedText')
      .attr('x',-HANDLE_R+1)
      .attr('y',HANDLE_R)
      .html('&#10004;'); // tick character
      svgB.selectAll('.barGroup')
      .append('circle')
      .attr('cx', 0 )
      .attr('class','circComplete')
      .attr('cy', 0)
      .attr('y', 20)
      .attr('r',HANDLE_R)
      .on("mouseenter mouseleave", finishHover)
      .on('click', function() {
        d3.event.stopPropagation();

        var resp = confirm("Click OK mark this construction job as Completed.\n\nCompleted items have a green border\n\nClick the 'Update Changed Items' button to send all changes to BrightWork.\n\nNB: Completed items ignore mark/don't mark status.");

        if (resp == 1) {

        //alert('coming soon:finish clicked');
      //  var closeBar = $(this).closest("g.GBarGroup");  //WORKS
          var closeBar = d3.select(this.parentNode);  //WORKS
        console.log("closeBar data ...: ");
            var closeData = closeBar.data();
          //  var closeData = d3.select(closeBar).data();
            console.log(closeData);
            closeData[0].newCompletion = "1";

              d3.select(this.parentNode).select('rect').classed("changed", true); // to pick it up in the update part of the code
            d3.select(this.parentNode).select('rect').classed("completed", true);  // to show it as green not red
          //closeBar.classed("changed", true);
        } //end resp =1

      })
      .attr("fill","#dda0dd")
      .attr("opacity",0.5);



      svgB.selectAll('.barGroup')
      .append('text')
      .attr('class','removeText')
      .attr('x',-HANDLE_R+1)
      .attr('y',height+HANDLE_R/2)
      /*.attr('height',0)
      .attr('width', 0) */
      .html('&#10008;'); // tick character
      svgB.selectAll('.barGroup')
      .append('circle')
      .attr('cx', 0 )
      .attr('class','circRemove')
      .attr('cy', height)
      .attr('y', height)
      .attr('r',HANDLE_R)
      .on("mouseenter mouseleave", finishHover)
      .on('click', function() {
        d3.event.stopPropagation();

        var resp = confirm("Click OK to remove this task from the chart.");

        if (resp == 1) {

        var closeBar = this.closest("g.GBarGroup").remove();  //WORKS

        } //end resp =1

      })
      .attr("fill","silver")
      .attr("opacity",0.5);




     svgB.selectAll('.barGroup')
     .append('circle')
     .attr('cx',  d => spanW(d))
     .attr('class','circInfo')
     .attr('cy', 0 )
     .attr('y', 20)
      .attr('r', HANDLE_R)
      .on("mouseenter mouseleave", infoHover)
      .on('click', function() {
        d3.event.stopPropagation();
        var theData = d3.select(this.parentNode).datum();

        newStart = "";
        newFinish = "";
        newDurationText="";

      if (theData.hasOwnProperty("newStartDate")) {
        newStart = " (changed to: "+ theData.newStartDate+")"
      };

      if (theData.hasOwnProperty("newFinishDate")) {
        newFinish = " (changed to: "+ theData.newFinishDate+")"
      };

      if (theData.hasOwnProperty("newDuration")) {
        newDurationText = " (changed to: "+ theData.newDuration+")"
      };


        console.log("newfinish:" + theData.newFinishDate);
        delete theData["#text"];
      var thetitle = theData.UniqueReference["#text"];
      var brieflink;
      if (thetitle != null) {
          brieflink =  "<a href='http://tscps/support/design/Lists/Design%20Briefs/Brief%20Details.aspx?FilterField1=ProjectLookup&FilterValue1="+thetitle+"' target='_blank'>related design brief(s)</a>";

        } else {
          brieflink =  "<a href='http://tscps/support/design/Lists/Design%20Briefs/Brief%20Details.aspx' target='_blank'>all design briefs (no Reference recorded for this task)</a>";

        }
        var startWarning = 0;
        var customerReqDateWarning;
        var custreqWarningClass = "";
        var startWarningClass = "";

        customerReqDateWarning = theData.CustomerReqDateWarning;
        if(customerReqDateWarning < WARNING_DAYS) {
          custreqWarningClass = " class=\"warning\" ";
        }

        try {
          startWarning = theData.StartWarning;
        } catch (ex) {}

        if(startWarning <0) {
          startWarningClass = " class=\"warning\" ";
        }


var cData = "";
if (theData.Body["#cdata-section"] != undefined) cData = theData.Body["#cdata-section"];
var theBody =  "<tr><th>Description:</th><td><span class='taskName'>" +
                theData.Title["#text"] +
                "</span>: <br />" +
                          cData +
                          "</td></tr>";

        var theString =
        "<table class='projectInfo'>" +
        "<tr><th>Project:</th><td>" +
        theData.projectTitle + "</td></tr>" +
        "<tr"+
          startWarningClass+">" +
                  "<th>Start:</th><td>" +
        convertSPDateOnly(theData.StartDateExpression["#text"])+newStart + "</td></tr>" +
  "<tr"+
    custreqWarningClass+">" +
  "<th>Finish:</th><td>" +
        convertSPDateOnly(theData.FinishDateExpression["#text"])+newFinish + "</td></tr>" +
        "<tr><th>Duration:</th><td>" +
              theData.EstDurationAtCompletion["#text"] + newDurationText + "</td></tr>" +
              "<tr"+
                custreqWarningClass+">" +
              "<th nowrap>Cust Req Date:</th><td>" +
        theData.CustomerReqDate + " ("+theData.CustomerReqDateWarning+")</td></tr>" +
        "<tr><th>Design status:</th><td>" +
              theData.DesignStatus+ "</td></tr>" +
              "<tr><th>Approval status:</th><td>" +
                    theData.ApprovalStatus+ "</td></tr>" +
                              "<tr><th>Assigned to:</th><td>" +
        theData.AssignedToName + "</td></tr>" +
                theBody +
                        "<tr><th>Links:</th><td><ul>" +
        "<li><a href='"+theData.ItemHref["#text"]+"' target='_blank'>construction task item</a></li>" +
        "<li>"+ brieflink + "</li>"+
                 "</ul></td></tr>" +
        "</table>";
        ;

        //NB: bELOW COMES FROM SPAlerts.js which is embedded as a SP ScriptLink on this site
        LaunchMessageDialog(thetitle,theString, null);
      })
     .attr('fill', function(d) {
       var statusInt = parseFloat(d.DesignStatus);
       var statusIntAppr = parseFloat(d.ApprovalStatus);
       if (statusIntAppr > -1 && statusIntAppr < 1 && statusInt == 1) {
         statusInt = 0.85;
       }
       if (statusIntAppr == 1) {
         statusInt = (statusInt + statusIntAppr)/2;
       }
       //console.log(d.esignStatus);
       if(statusInt == 1) {
         return "lime";
       } else
       if (statusInt >= 0.75 && statusInt < 1 ){
         return "aqua";
       }
       if (statusInt > 0 && statusInt < 0.75 ){
         return "DarkOrange";
       } else {
         return "Silver";
       }

     })
     .attr('opacity','0.4');
      //   .call(d3.drag()); //this is only circinfo, don't want to be able to drag this corner

  return svgB;
};






function length(obj) {
    return Object.keys(obj).length;
}










  // --- add all charts


//const
// allCharts = d3.select(wrapper).selectAll('.AssignedGroup')
//spacer for header
d3.select('.chart').select('svg').append('svg')
.attr('height', weekLabelHeight);

  allCharts = d3.select(wrapper)
    .selectAll('g')
      .data(symbolAssignees)
      .enter()
      .append('g')
      .attr('class','assignedGroupGp')
      .attr('id', function(d,i) {
        return "assignedto-"+d.key;
      })
     .append('svg')
      .attr('class','AssignedGroup')
      .on("click", function(d) {
          //  d3.event.stopPropagation();
            var gpDim = computeDimensions(d3.select(this));
            var gpHeight = d3.select(this).attr("height");
              gpY = gpDim.y;
            var gpName = d3.select(this).attr("assignedName");

                d3.select(this).lower();
                newName = gpName;
                activeNameGroup = this.closest("g.assignedGroupGp");
                activeNameGroupId = d3.select(activeNameGroup).attr("ID");

            var closeBar = this.closest("g.GBarGroup");
           d3.select("g.GBarGroup").sort(function (a, b) { // select the parent and sort the path's
             if (a != closeBar) return -1;               // a is not the hovered element, send "a" to the back
             else return 1;                             // a is the hovered element, bring "a" to the front


         });
//} // end of checking the class

      } )
  //    .on('mouseover', function() { return d3.select(this).lower();})
      .attr('assignedName', function(d) {
    //    console.log(d);
        return d.key;
      })
    //  .attr('height', 'auto')
     .attr('height', function(d, i){
        return d.values.length*BAR_H;
    })
    .attr('x',"0")
    .attr('y', function(d, i) {
      if (i > 0)
      {
        return symbolAssignees[i-1].values.length*BAR_H+1;
      } else {
        return 0;
      }
    })
     .attr('data-length', function (d, i)
      { return d.values.length; })
      .attr('name-data-index', function (d, i)
       { return i; })
      .style("background-color", function(d, i) {
        for (var i = 0; i < symbolAssignees.length; i++) {
          if (d.key.localeCompare(symbolAssignees[i].key) == 0) {

        return backColorScale(i);
      }
      }
      })
      .each(chart)
      .each(label);



      // FROM http://bl.ocks.org/cpbotha/5205319
      // AND https://stackoverflow.com/questions/33878292/d3-set-filter-flood-color-based-on-data
      // adds shadow on date warning

          // filter chain comes from:
          // https://github.com/wbzyl/d3-notes/blob/master/hello-drop-shadow.html
          // cpbotha added explanatory comments
          // read more about SVG filter effects here: http://www.w3.org/TR/SVG/filters.html

          // filters go in defs element
          var defs = allCharts.append("defs");

          // create filter with id #drop-shadow
          // height=130% so that the shadow is not clipped
          var filter = defs.append("filter")
              .attr("id", "yellow-drop-shadow")
              .attr("height", "150%");



          // SourceAlpha refers to opacity of graphic that this filter will be applied to
          // convolve that with a Gaussian with standard deviation 3 and store result
          // in blur
          filter.append("feGaussianBlur")
              .attr("in", "SourceAlpha")
              .attr("stdDeviation", 5)
              .attr("result", "blur");

          // translate output of Gaussian blur to the right and downwards with 2px
          // store result in offsetBlur
        //  var feOffset =
          filter.append("feOffset")
              .attr("in", "blur")
              .attr("dx", 5)
              .attr("dy", 5)
              .attr("result", "offsetBlur");


              filter.append('feFlood')
              .attr("in", "offsetBlur")
              .attr("flood-color","yellow")
              .attr("flood-opacity","1")
              .attr("result", "offsetColor");

              filter.append("feComposite")
                  .attr("in", "offsetColor")
                  .attr("in2", "offsetBlur")
                  .attr("operator", "in")
                  .attr("result", "offsetBlur");

              // overlay original SourceGraphic over translated blurred opacity by using
              // feMerge filter. Order of specifying inputs is important!
              var feMerge = filter.append("feMerge");

              feMerge.append("feMergeNode")
                  .attr("in", "offsetBlur")
              feMerge.append("feMergeNode")
                  .attr("in", "SourceGraphic");


              var filter2 = defs.append("filter")
                      .attr("id", "red-drop-shadow")
                      .attr("height", "150%");

                  filter2.append("feGaussianBlur")
                      .attr("in", "SourceAlpha")
                      .attr("stdDeviation", 5)
                      .attr("result", "blur");

                  // translate output of Gaussian blur to the right and downwards with 2px
                  // store result in offsetBlur
                //  var feOffset =
                  filter2.append("feOffset")
                      .attr("in", "blur")
                      .attr("dx", 5)
                      .attr("dy", 5)
                      .attr("result", "offsetBlur");


                      filter2.append('feFlood')
                      .attr("in", "offsetBlur")
                      .attr("flood-color","red")
                      .attr("flood-opacity","1")
                      .attr("result", "offsetColor");

                      filter2.append("feComposite")
                          .attr("in", "offsetColor")
                          .attr("in2", "offsetBlur")
                          .attr("operator", "in")
                          .attr("result", "offsetBlur");



                      // overlay original SourceGraphic over translated blurred opacity by using
                      // feMerge filter. Order of specifying inputs is important!
                      var feMerge2 = filter2.append("feMerge");

                      feMerge2.append("feMergeNode")
                          .attr("in", "offsetBlur")
                      feMerge2.append("feMergeNode")
                          .attr("in", "SourceGraphic");




                          var filter3 = defs.append("filter")
                                  .attr("id", "blue-drop-shadow")
                                  .attr("height", "150%");
                                //  .attr("x",-5);

                              filter3.append("feGaussianBlur")
                                  .attr("in", "SourceAlpha")
                                  .attr("stdDeviation", 5)
                                  .attr("result", "blur");

                              // translate output of Gaussian blur to the right and downwards with 2px
                              // store result in offsetBlur
                            //  var feOffset =
                              filter3.append("feOffset")
                                  .attr("in", "blur")
                                  .attr("dx", 5)
                                  .attr("dy", 5)
                                  .attr("result", "offsetBlur");


                                  filter3.append('feFlood')
                                  .attr("in", "offsetBlur")
                                  .attr("flood-color","aqua")
                                  .attr("flood-opacity","1")
                                  .attr("result", "offsetColor");

                                  filter3.append("feComposite")
                                      .attr("in", "offsetColor")
                                      .attr("in2", "offsetBlur")
                                      .attr("operator", "in")
                                      .attr("result", "offsetBlur");



                                  // overlay original SourceGraphic over translated blurred opacity by using
                                  // feMerge filter. Order of specifying inputs is important!
                                  var feMerge3 = filter3.append("feMerge");

                                  feMerge3.append("feMergeNode")
                                      .attr("in", "offsetBlur")
                                  feMerge3.append("feMergeNode")
                                      .attr("in", "SourceGraphic");






        allCharts.on("mouseover", function(d) {
      //    console.log('moused over');
            var closeBar = this.closest("g.GBarGroup");
          //  console.log(closeBar);
          //  d3.selectAll("path").sort(function (a, b) { // select the parent and sort the path's
            d3.select("g.GBarGroup").sort(function (a, b) { // select the parent and sort the path's
              if (a != closeBar) return -1;               // a is not the hovered element, send "a" to the back
              else return 1;                             // a is the hovered element, bring "a" to the front
          });
        });





//https://bl.ocks.org/d3indepth/9f6c5dc874d6f21462f308f9e11ebf3c

        var root = d3.hierarchy(symbolAssignees);
        const nodes = root.links();
        console.log(root.leaves());


        recallToggle();

} //END DRAWCHART

var allCharts;


drawChart();








var numIncreases = 0;




function dragstarted() {
  console.log("drag started");
}

function dragged() {
  // does work but the location is off
  console.log("draged");
  // console.log(d3.select(this.closest('svg')));
//  d3.select(this).selectAll('path').attr("x", d.x = d3.event.x).attr("y", d.y = d3.event.y);
d3.select(this.closest('g')).selectAll("text").attr("x", d.x = d3.event.x).attr("y", d.y = d3.event.y);
d3.select(this.closest('g')).selectAll("rect").attr("x", d.x = d3.event.x).attr("y", d.y = d3.event.y);


}


function dragended() {
  console.log("drag ended");
}


















// slider
//var data3 = d3.range(0, 10).map(function (d) { return new Date(1995 + d, 10, 3); });
//const dataYears = d3.nest()
/*
const dataYears = d3.nest()
.key(function(d) { return parser(convertSPDateOnly(d.StartDateExpression["#text"]));})
.value(function(d) { return parser(convertSPDateOnly(d.StartDateExpression["#text"]));})
.rollup(function(d) {
return d3.sum(d, function(g) {return g.value ; });
}).entries(MATRIXDATA);
*/
/*
var yearData = [];
symbols.forEach(function(d){
try {
//console.log(d.values[0]);
var dateVal = d.values[0].StartDateExpression["#text"];
var year = dateVal.substring(0,4);
console.log(year);

yearData.indexOf(year) === -1 ? yearData.push(year) : console.log("This item already exists");
} catch (ex) {}
});

console.log(yearData);
const minYear = new Date(parseInt(d3.min(yearData)),1,1);
const maxYear = new Date(parseInt(d3.max(yearData)),12,31);

console.log(minYear);
console.log(maxYear);
var slider3 = d3.sliderHorizontal()
.min(minYear)
.max(maxYear)

//.step(24 * 365)
.step(1000 * 60 * 60 * 24 * 365)
.width(400)
.tickFormat(d3.timeFormat('%Y'))
//  .tickValues(yearData)
//  .ticks(d3.timeYear.every(1))
//.tickValues(MATRIXDATA, d => parser(convertSPDateOnly(d.StartDateExpression["#text"])))
.on('onchange', val => {
  d3.select("span#value3").text(d3.timeFormat('%Y')(val));
});

var group3 = d3.select("div#slider3").append("svg")
.attr("width", 500)
.attr("height", 20)
.append("g")
.attr("transform", "translate(30,30)");

group3.call(slider3);

d3.select("span#value3").text(d3.timeFormat('%Y')(slider3.value()));
d3.select("a#setValue3").on("click", () => { slider3.value(new Date()); d3.event.preventDefault(); });
*/

var v1=3,
v2=7;

//setupSlider(v1, v2, updateGraph, color);
setupSlider(v1, v2);

//function setupSlider(v1, v2, updateGraph, color){
function setupSlider(v1, v2){

var sliderVals=[v1, v2],
  width = 400,
  svg = d3.select(".slider-holder").append("svg")
//  svg = d3.select(wrapper).append("svg")
    .attr('width', width+30)
    .attr('height', 50);

var x = d3.scaleLinear()
  .domain([0, 10])
  .range([0, width])
  .clamp(true);

var xMin=x(0),
  xMax=x(10)

var slider = svg.append("g")
  .attr("class", "slider")
  .attr("transform", "translate(5,20)");

slider.append("line")
  .attr("class", "track")
  .attr("x1", 10+x.range()[0])
  .attr("x2", 10+x.range()[1])

var selRange = slider.append("line")
  .attr("class", "sel-range")
  .attr("x1", 10+x(sliderVals[0]))
  .attr("x2", 10+x(sliderVals[1]))

slider.insert("g", ".track-overlay")
  .attr("class", "ticks")
  .attr("transform", "translate(10,24)")
.selectAll("text")
.data(x.ticks(10))
.enter().append("text")
  .attr("x", x)
  .attr("text-anchor", "middle")
  .style("font-weight", "bold")
  .style("fill", "blue")
//  .style("fill", function(x){return color(x);})
  .text(function(d) { return d; });

var handle = slider.selectAll("rect")
.data([0, 1])
.enter().append("rect", ".track-overlay")
  .attr("class", "handle")
  .attr("y", -8)
  .attr("x", function(d) { return x(sliderVals[d]); })
  .attr("rx", 3)
  .attr("height", 16)
  .attr("width", 20)
  .call(
      d3.drag()
        .on("start", startDrag)
        .on("drag", drag)
        .on("end", endDrag)
  );

function startDrag(){
d3.select(this).raise().classed("active", true);
}

function drag(d){
var x1=d3.event.x;
if(x1>xMax){
  x1=xMax
}else if(x1<xMin){
  x1=xMin
}
d3.select(this).attr("x", x1);
var x2=x(sliderVals[d==0?1:0])
selRange
    .attr("x1", 10+x1)
    .attr("x2", 10+x2)
}

function endDrag(d){
var v=Math.round(x.invert(d3.event.x))
var elem=d3.select(this)
sliderVals[d] = v
var v1=Math.min(sliderVals[0], sliderVals[1]),
    v2=Math.max(sliderVals[0], sliderVals[1]);
elem.classed("active", false)
  .attr("x", x(v));
selRange
    .attr("x1", 10+x(v1))
    .attr("x2", 10+x(v2))

//  updateGraph(v1, v2);
}

}






var clHeight = wrapper.clientHeight;
var clWidth = wrapper.clientWidth;
//var clHeight2 = wrapper.attr("height");
var bBoxHeight = wrapper.getBoundingClientRect().height;
var bBoxTop = wrapper.getBoundingClientRect().top;
//console.log(wrapper.getBoundingClientRect());
var yearFormat = d3.timeFormat("%Y");
var weekFormat = d3.timeFormat('%y-%W');
//var weekNumFormat = d3.timeFormat('%W');

/*
var customTimeFormat = d3.timeFormat.multi([
  [".%L", function(d) { return d.getMilliseconds(); }],
  [":%S", function(d) { return d.getSeconds(); }],
  ["%I:%M", function(d) { return d.getMinutes(); }],
  ["%I %p", function(d) { return d.getHours(); }],
  ["%a %d", function(d) { return d.getDay() && d.getDate() != 1; }],
  ["%b %d", function(d) { return d.getDate() != 1; }],
  ["%B", function(d) { return d.getMonth(); }],
  ["%Y", function() { return true; }]
]);
*/

var formatMillisecond = d3.timeFormat(".%L"),
    formatSecond = d3.timeFormat(":%S"),
    formatMinute = d3.timeFormat("%I:%M"),
    formatHour = d3.timeFormat("%I %p"),
    formatDay = d3.timeFormat("%a %d"),
//    formatWeek = d3.timeFormat("%b %d"),
  //  formatWeek = d3.timeFormat("%y-%W"),
    formatWeek = d3.timeFormat("%W"),
    formatMonth = d3.timeFormat("%y-%W"),
    //formatMonth = d3.timeFormat("%B"),
    formatYear = d3.timeFormat("%Y");

// Define filter conditions
function multiFormat(date) {
  return (d3.timeSecond(date) < date ? formatMillisecond
    : d3.timeMinute(date) < date ? formatSecond
    : d3.timeHour(date) < date ? formatMinute
    : d3.timeDay(date) < date ? formatHour
    : d3.timeMonth(date) < date ? (d3.timeWeek(date) < date ? formatDay : formatWeek)
    : d3.timeYear(date) < date ? formatMonth
    : formatYear)(date);
}


var weekOnlyFormat = d3.timeFormat('%W');
//var weekFormat = d3.timeFormat()

var wHeight = window.innerHeight;

//console.log(bBoxHeight);
//console.log(clHeight);
//console.log(wrapper);


//CUSTOM TICK FUNCTION from
// https://stackoverflow.com/questions/20010864/d3-axis-labels-become-too-fine-grained-when-zoomed-in

function preventTooSmallWeekIntervals(period) {
    console.log(period);
    //    var tickSeconds = (new Date(xAxisWeek.ticks()[1]) - new Date(xAxisWeek.ticks()[0])) / 1000;
        var tickSeconds = (period[1] - period[0]) / 1000;
        var tickDays = tickSeconds/60/60/24;
        var maxDays = 770;

        console.log(tickSeconds);
        console.log(tickDays);
        //var minSecondsPerInterval = period.seconds;
        //console.log(minSecondsPerInterval);

      //  var tickWeeks = (x.ticks()[1] - x.ticks()[0]);
        //console.log(tickWeeks);
    //    var maxtickWeeks = 26;
        //var minSecondsPerInterval = period.seconds;
        if (tickDays < maxDays) {
            xAxisWeek.ticks(d3.timeWeek);
        } else {
            xAxisWeek.ticks(d3.timeMonth);
        }
    }

/*
    function preventTimeIntervalsSmallerThanADay() {
         var tickSeconds = (xScale.ticks()[1] - xScale.ticks()[0]) / 1000;
         var secondsPerDay = 86400;
         if (tickSeconds < secondsPerDay) {
             xAxis.ticks(d3.time.day, 1);
         } else {
             xAxis.ticks(6);
         }
     }
*/
//AXES
/*
const axisWrapper = d3.select(wrapper)
.append('g')
.attr('class', 'axisWrapper');
*/
// --- add X axis
var xAxis = d3.axisBottom(x)
      .ticks(width / 100);

var xAxisYear = d3.axisBottom(x)
          .ticks(d3.timeYear.every(1))
          .tickFormat(yearFormat);


  var xAxisWeek = d3.axisBottom(x)
        //  .ticks(d3.fridayOfYear)
        .ticks(d3.timeWeek)
          .tickFormat(multiFormat);
                  /*    .tickFormat(function(d) {
                        getFiscalWeekNumber(d3.time.week(day));
                      }); */


//xAxis code to give ticks every N-th day: .ticks(d3.timeDay.filter(d=>d3.timeDay.count(0, d) % N === 0))
var weekLabelHeight = 0;

var xAxisWeekFloating = d3.axisTop(x)
//.ticks(d3.timeWeek)
// nb % 2 means display every second week
.ticks(d3.timeWeek.filter(d=>d3.timeWeek.count(0, d) % 2 === 0))
.tickSize(clHeight - weekLabelHeight)
.tickFormat(weekOnlyFormat);

var xAxisWeekFloating3 = d3.axisTop(x)
//.ticks(d3.timeWeek)
// nb % 2 means display every second week
.ticks(d3.timeWeek.filter(d=>d3.timeWeek.count(0, d) % 2 === 1))
//.tickSize(clHeight - weekLabelHeight)
.tickSize(bBoxHeight+20)
.tickFormat(weekOnlyFormat);

var xAxisWeekFloating2 = d3.axisTop(x)
//.ticks(d3.timeWeek)
// nb % 2 means display every second week
.ticks(d3.timeWeek.filter(d=>d3.timeWeek.count(0, d) % 2 === 0))
.tickSize(0)
.tickFormat(weekOnlyFormat);


var axisCont = d3.select('.chart')
.append('g')
.attr('class', 'axisContainer');

var globalXWeekFloating = axisCont //d3.select('.chart.axisContainer')
.append('svg')
.attr('class', 'axisWeekFloating')
//.attr('height', 20)
//   .style('fill', 'white')

//.attr("transform",  "translate(0, -"+weekLabelHeight+")")
.call(xAxisWeekFloating);


var globalXWeekFloating3 = axisCont //d3.select('.chart.axisContainer')
.append('svg')
.attr('class', 'axisWeekFloating3')
.call(xAxisWeekFloating3);

globalXWeekFloating3.selectAll("text").remove();

/*
var globalXWeekFloating2 = axisCont //d3.select('.chart.axisContainer')
.append('svg')
.attr('class', 'axisWeekFloating2')
//.attr('height', 20)
//   .style('fill', 'white')

// .attr("transform",  "translate(0, -"+weekLabelHeight+")")
.call(xAxisWeekFloating2);
*/


var globalX = axisCont //d3.select('.chart.axisContainer')
      .append('svg')
      .attr('class', 'axis')
      .call(xAxis);


var globalXWeek = axisCont // d3.select('.chart.axisContainer')
      .append('svg')
      .attr('class', 'axisWeek')
      .attr('height', 20)
      .attr("transform",  "translate(0, -20)")
      .call(xAxisWeek);

$("#axisClone").html("");
$("#axisClone").hide();
$(".axisWeek").clone().appendTo("#axisClone");

/// END OF AXIS



function calculateAndApplyHeight(extra) {
  wrapper = document.querySelector('.chart');
  infowrapper = document.querySelector('.aboutSpacer');

  d3.select(".aboutSpacer").attr("height", infowrapper.height);

  wrapperDetails = wrapper.getBoundingClientRect();
  infoDetails = infowrapper.getBoundingClientRect();

  bBoxHeight = wrapperDetails.height;

//  xAxisWeekFloating.tickSize((bBoxHeight-infoDetails.height+300));
//xAxisWeekFloating3.tickSize((bBoxHeight-infoDetails.height-30-20));

//xAxisWeekFloating.tickSize((bBoxHeight-infoDetails.height));
//xAxisWeekFloating3.tickSize((bBoxHeight-infoDetails.height));


xAxisWeekFloating.tickSize((bBoxHeight-infoDetails.height+(5*oldScale)));
xAxisWeekFloating3.tickSize((bBoxHeight-infoDetails.height+(20*oldScale)));


console.log('recalculating and applying height');

//xAxisWeekFloating.tickSize((bBoxHeight+20));
//xAxisWeekFloating3.tickSize((bBoxHeight+20));



  globalXWeekFloating3.call(xAxisWeekFloating3);
  globalXWeekFloating.call(xAxisWeekFloating);


//  globalXWeekFloating3.call(xAxisWeekFloating3.scale(transform.rescaleX(x)));
//globalXWeekFloating.call(xAxisWeekFloating.scale(transform.rescaleX(x)));


//  xAxis.scale(transform.rescaleX(x));

//  globalXWeekFloating3.call(xAxisWeekFloating3.scale(transform.rescaleX(x)));
//globalXWeekFloating.call(xAxisWeekFloating.scale(transform.rescaleX(x)));
}





//var bars = allCharts.selectAll('rect');
var bars = allCharts.selectAll('rect');
var barGroups = allCharts.selectAll('.barGroup');
var nameGroups = d3.selectAll('.AssignedGroup');
var circles = allCharts.selectAll('circle');



var deltaX, deltaY, deltaW;
var parentSvg;
var thisOffsetX, thisOffsetY;


var current, currentParent;


var dragHandler = d3.drag()
    .on("start", function (d) {

      console.log("dragging");
    //  var current=d3.select(this);
        var current=d3.select(this);
      var currentParent=d3.select(this.parentNode);
  //    console.log("this class:" + current.attr("class"));
  //    console.log("parent class:" + currentParent.attr("class"));


        if (d3.select(this).classed("AssignedGroup") == true) {

          thisOffsetY = current.attr("height") - d3.event.y;
        } else {


          thisDimensions = computeDimensions(currentParent);
          console.log(thisDimensions);
          thisOffsetX = d3.event.x - thisDimensions.x-HANDLE_R;
          thisOffsetY = d3.event.y - thisDimensions.y-HANDLE_R;

        var newX = d3.event.x - thisOffsetX;


        //      console.log("d3.event.x at start:"+d3.event.x);
        //      console.log("d3.event.y at start:"+d3.event.y);

        //      console.log("offset x at start:"+thisOffsetX);
        //      console.log("offset y at start:"+thisOffsetY);

        }


    })
    // no need, dragging the copy NOW (not a copy, have put the node back on top actually)

    .on("drag", function () {
  //getAllElementsFromPoint(d3.event.x, d3.event.y);

//pageX = d3.event.pageX;
//if (d3.select(this).classed("AssignedGroup") == true || d3.select(this).classed("dragbottom") == true) {
  if (d3.select(this).classed("AssignedGroup") == true) { // dragbottom gone for now .. may not bring back
  //console.log("true dragbottom");
      d3.select(this).attr("height", d3.max([BAR_H,d3.event.y+thisOffsetY]));

    } else {

    d3.select(this)
          .attr("x", d3.event.x-thisOffsetX)//restore without + deltaX if can't make ot work
          .attr("y", d3.event.y-thisOffsetY);// - deltaY); //restore without +deltaY if can't make ot work

         } // end if not dragbottom
    })
    .on("end", function(d){


      // find the new bar locations
    //  passThruEvents(d3.select(this.parentNode));
  // ALL DATA:
//  console.log(d.x)
//   passThruToGroup(deltaX, deltaY);


//   d3.select(this)
//   .moveToFront()




  //if (d3.select(this).classed("AssignedGroup") == true || d3.select(this).classed("dragbottom") == true) {
  if (d3.select(this).classed("AssignedGroup") == true) {   // || d3.select(this).classed("dragbottom") == true) {

    d3.selectAll('.labelGroup').select('text').classed("darker", false);
    d3.select(this).select('.labelGroup').select('text').classed("darker", true);

    var gpName = d3.select(this).attr("assignedName");

  //d3.select(this).lower();
    newName = gpName;
    activeNameGroup = this.closest("g.assignedGroupGp");
    activeNameGroupId = d3.select(activeNameGroup).attr("ID");
    //var thisNode = d3.select(this.parentNode);  // actualy its the assigned group thats being dragged
    // console.log("assname:" + thisNode.attr("assignedName"));
    console.log("yes this is dragbottom");
    //console.log("oldScale:" + oldScale)
    var trimmedHeight;
    d3.select(this).attr("height", function(d) {
      untrimmedHeight = parseInt(d3.select(this).attr("height"));
      trimmedHeight = parseInt(untrimmedHeight -untrimmedHeight%(BAR_H/oldScale));
      return trimmedHeight;
    });
    d3.select(this).select('.today').attr('y2', trimmedHeight);
    var newDataLength = parseInt(trimmedHeight/BAR_H/oldScale);
    d3.select(this).attr("data-length", newDataLength);

    calculateAndApplyHeight(BAR_H);
    //d3.select(this).moveToFront();

   } else {

      console.log("drag ended, get a new date");

  //    d3.select(this).select('rect').classed("changed", true);

  if (d3.select("#dontMark").property("checked") == true)
  {
    d3.select(this).select('rect').classed('moved',true);
    d3.select(this).select('rect').classed('changed',false);
  //   d3.select(this).classed('changed',true);
  } else {
 d3.select(this).select('rect').classed('moved',false);
  d3.select(this).select('rect').classed('changed',true);
}
      //   d3.selectAll(groups.parentNode).moveToBack();
      d3.select(this).moveToFront();

//    console.log(d3.selectAll('.GBarGroup').data()); // WORKS
    // THIS BAR'S DATA
      //var closeBar = this.closest("g.GBarGroup");  //WORKS, however 'closest doesn't work outside of SP for some reason
      var closeBar = d3.select(this.parentNode);
      console.log("closeBar class:" + closeBar.attr("class"));
    //  var closeBarParent = d3.select(closeBar.parentNode);
    //  console.log("closebarparent class:" + closeBarParent.attr("class"));
      //var parentData = d3.select(closeBar.parentNode.parentNode).data();
  //    d3.select(closeBar).remove();
  //    console.log("parent class:" + d3.select(closeBar.parentNode).attr("class"));
      //console.log("parentData:");
    //  console.log(parentData);
    //  var valueCtr = parentData[0].values.length;
      /* console.log("valueCtr:" + valueCtr);
      console.log("closeBar data ...: ");
      console.log(d3.select(closeBar).data()); */
      var closeData = closeBar.data();
      console.log("closeDatax:")
      console.log(closeData);

  // THE BIT THAT MOVES MY BAR INTO THE CORRECT GROUP SO I CAN KEEP SELECTING IT AFTER I'VE CHANGED THE NAME ON IT
  if (activeNameGroupId != "") {
    console.log("actGroupID:" + activeNameGroupId);
  //  d3.select(closeBar).select(".barGroup").attr("y", 0);
   //$("[id='"+activeNameGroupId+"']").find(".AssignedGroup").prepend(closeBar);
  //    d3.select("[id='"+activeNameGroupId+"']").select(".AssignedGroup").append(closeBar);
    //var newParent = $("[id='"+activeNameGroupId+"']").find(".AssignedGroup");
    var newParent = d3.select("[id='"+activeNameGroupId+"']").select(".AssignedGroup");
//$("[id='"+activeNameGroupId+"']").find(".AssignedGroup").prepend(closeBar);
    newParentFirstChild = newParent.node().firstChild;
    newParent.node().insertBefore(closeBar.node(), newParentFirstChild);
    //newParent.node().appendChild(closeBar.node());
    //var newParentData = d3.select(closeBar.parentNode).data();
    //  var newParentData = d3.select("[id='"+activeNameGroupId+"']").select(".AssignedGroup").data();
      var newParentData = newParent.data();
    console.log("new parent data:");
    console.log(newParentData);
    var newParentValueCtr = newParentData[0].values.length;
//    console.log("newParentValueCtr:" + newParentValueCtr);
// now going in by itself
    //newParentData[0].values[newParentValueCtr] = { key: closeData[0].UID, values: closeData };
//    $("[id='"+activeNameGroupId+"']").find(".AssignedGroup").prepend(closeBar);
   //d3.select(closeBar).attr("y",function(d){
      closeBar.select("svg").attr("y",function(d){
        console.log("class:" + d3.select(this).attr("class"));
    console.log("class:" + d3.select(this).attr("class"));
      var groupHeight = parseFloat(newParent.attr("height"));
      var adjustedGroupHeight = groupHeight-(BAR_H+2)*oldScale;
     console.log("groupHeight:" + groupHeight + ", adjusted:" +adjustedGroupHeight);
     var currY = d3.select(this).attr("y");
  //   console.log("currY:" + currY);
    var newY = d3.min([parseFloat(groupHeight)-(BAR_H+2)*oldScale, currY-(BAR_H+2)*oldScale]);
       newY = d3.max([0, newY]);

     return newY;

   });

  }
  //  d3.select(closeBar).attr("y", 0);


      if(closeData.length > 0) {
      if(closeData[0].hasOwnProperty("UID")) {
        var projectKey = closeData[0].UID;

      var oldName = closeData[0].AssignedToName;
      var uniqueRef = closeData[0].UniqueReference["#text"];
      var ownerName = closeData[0].OwnerName;
    //  var projTitle = closeData[0].WebName["#text"];
      var projTitle = closeData[0].projectTitle;
      var duration;
      if (closeData[0].hasOwnProperty("newDuration")){
        duration = closeData[0].newDuration;
        } else {
         duration = closeData[0].EstDurationAtCompletion["#text"];
        }
      }
  } // end size closedata
  //    console.log(closeData);


/*
//TODO:  keep this for future reference
      let tempX = d3.scaleTime()
      .domain(xAxis.scale().domain());  // OF NO USE ??
console.log(xAxis.scale().domain());


console.log(xAxis.scale().range());
*/

//**************************************************//
// *****       this is it                 ***********//
// **************************************************//

  var dateFormat = d3.timeFormat("%a %d/%m/%Y");
  var scriptDateFormat = d3.timeFormat("%Y,%m,%d");
  var spDateFormat = d3.timeFormat("%Y-%m-%d");
  var newX = d3.event.x - thisOffsetX;
  var xPosition = dateFormat(x.invert(newX));
  var scriptDate = scriptDateFormat(x.invert(newX));


    if (d3.select("#MondayLock").attr('checked') == 'true') {
            scriptDate = scriptDateFormat(nearestMonday(scriptDate));
            xPosition = dateFormat(new Date(scriptDate));
    }

    // console.log("duration:" + duration);
   var newFinish = addBusinessDays(new Date(scriptDate), parseFloat(duration));
   var scriptFinishDate = scriptDateFormat(new Date(newFinish));

   if (d3.select("#FridayLock").attr('checked') == 'true') {
      scriptFinishDate = scriptDateFormat(nearestFriday(scriptFinishDate));
      newFinish = dateFormat(new Date(scriptFinishDate));
   }


  closeData[0].newStartDate = xPosition;
  closeData[0].currentStartDate = spDateFormat(new Date(scriptDate));
  closeData[0].newStartDateScript= scriptDate;
  closeData[0].newFinishDate = newFinish;
  closeData[0].currentFinishDate = spDateFormat(new Date(scriptFinishDate));
  closeData[0].newFinishDateScript = scriptFinishDate;




//**************************************************//

  var custReqDate = closeData[0].CustomerReqDate;
  console.log("customerReqDate:" + custReqDate);
  var dateWarning = calcBusinessDays(new Date(scriptFinishDate), parser(custReqDate), holidays);
  var startWarning = calcBusinessDays(new Date(parser(closeData[0].originalStartDate)), new Date(scriptDate), holidays);

  //console.log("custReqDateWarn:" + dateWarning);
  //console.log("startWarning:" + startWarning);

  // its always -1 if it goes under, stops calculating negative days

  closeData[0].CustomerReqDateWarning = dateWarning;
  closeData[0].StartWarning = startWarning;

  if (startWarning <0 && dateWarning > WARNING_DAYS) {

    //d3.select(closeBar).selectAll('rect')
    closeBar.selectAll('rect')
        .style("filter", "url(#blue-drop-shadow)");
  }
  else if (dateWarning < 1) {
  //  d3.select(closeBar).selectAll('rect').classed("warning", true);
  //  d3.select(closeBar).selectAll('rect')
    closeBar.selectAll('rect')
        .style("filter", "url(#red-drop-shadow)");

  }
    else if (dateWarning >= 1 && dateWarning < WARNING_DAYS) {
    //d3.select(closeBar).selectAll('rect')
  closeBar.selectAll('rect')
        .style("filter", "url(#yellow-drop-shadow)");
  } else {
    //  d3.select(closeBar).selectAll('rect')
    //  d3.select(closeBar).selectAll('rect')
      closeBar.selectAll('rect')
          .style("filter", null);
      //.classed("warning", false);
  }
// **************************************************//


//  var formattedFinishDate = new Date(convertSPDate(closeData[0].FinishDateExpression["#text"]));

  var formattedFinishDate = newFinish;




//var holidays = [];
var newDuration = calcBusinessDays(new Date(scriptDate), new Date(scriptFinishDate), holidays);

//console.log("formfinishdate:" + formattedFinishDate);
//console.log("new duration:" + newDuration);

  closeData[0].newDuration = parseInt(newDuration);




  //    console.log("class:" +  d3.select(this).attr("class"));

  //    d3.select(this)
//d3.select(closeBar).selectAll(".dateText").remove();
  closeBar.selectAll(".dateText").remove();



//  d3.select(closeBar).select('svg')
closeBar.select('svg')
      .insert("text")
      .attr('x', BAR_INDENT)
      .attr('y', 22)
      .attr("font-size", 9)
      .attr("font-family", "sans-serif")
      .attr('width', width)
      .attr("class","dateText")
      .text("new start:" + xPosition);



  //d3.select(closeBar).selectAll(".finDateText").remove();
          closeBar.selectAll(".finDateText").remove();

    //  tempFinText =    d3.select(closeBar).select('svg')
    tempFinText =   closeBar.select('svg')
            .insert("text")
            .attr("x", BAR_INDENT)
            .attr('y', BAR_H-BAR_FIN_OFFSET)
            .attr("font-size", 9)
            .attr("font-family", "sans-serif")
            .attr('width', width)
            .attr("class","finDateText")
        //    .text("fin:" + newFinish + " / dur:" + newDuration);
          .text("fin:" + formattedFinishDate + " / dur:" + newDuration);

tempFinText.moveToBack();


    console.log("oldname: "+ oldName + "; assigned Name:" + newName);

    try {
    if (newName != "") {

    closeData[0].AssignedToName = newName;



    //  function updateObject(obj, newNameKey, ProjectKey, oldName) {
    // NB:  xPosition = new start date
//    symbolAssignees = updateObject(symbolAssignees, newName, projectKey,oldName);
  // updateObjectDataNew(newName, projectKey,oldName);
  //  console.log(symbolAssignees);
    var newText = uniqueRef + "-" + newName + " (" + ownerName + ")-" + projTitle;
    var longTitle = d3.select(this.parentNode).select("text.barsText").attr("longTitle");
      d3.select(this.parentNode).select("text.barsText")
      .text(newText);

    //  .update();
//  console.log(updateObject(symbolAssignees, newName, projectKey,oldName))
    //console.log(d3.select('.projectBars').datum());


    //circles = allCharts.selectAll('circle.circHandle'); // get them afresh .. don't now if i need to do that
    //    circles.moveToFront();


    //  document.querySelector("[longTitle*='"+newText+"' i]").scrollIntoView();


      const checkElement = async selector => {

      while ( document.querySelector(selector) === null) {

          await new Promise( resolve =>  requestAnimationFrame(resolve) )
      }
        console.log(selector);
      return document.querySelector(selector).scrollIntoView(); };


    //  checkElement("[refOnly*='"+uniqueRef+"' i]");
      checkElement("[longTitle='"+longTitle+"']");


      // MAYBE ADD A CHECKBOX TO TOGGLE THIS OPTION ON/OFF
      d3.selectAll('.labelGroup').select('text').classed("darker", false);
      newName = "";
      activeNameGroupId = "";


      }

    } catch (ex) {

      console.log(ex);
    //  console.log(ex);
      //alert("AssignedToName not found");
    }


    //drawChart();
      //  bars = allCharts.selectAll('rect'); // get them afresh .. don't now if i need to do that
      //   dragHandler(bars);
         barGroups = allCharts.selectAll('.barGroup'); // get them afresh .. don't now if i need to do that
          dragHandler(barGroups);


          nameGroups = allCharts.selectAll('.AssignedGroup'); // get them afresh .. don't now if i need to do that
           dragHandler(nameGroups);

    } // END OF IF NOT dragbottom rect


});


// END OF 'DRAG END'

//dragHandler(bars);
dragHandler(barGroups);
dragHandler(nameGroups);



bars.on("mouseover",  function(d, i) {
//  console.log("mouseover happened");
    var wholeNode = d3.select(this.parentNode);
    var thisBar = d3.select(this);

  });



bars.on("click",  function(d, i) {
//  console.log("click happened");
    var wholeNode = d3.select(this.parentNode);
    var thisBar = d3.select(this);
  });





// for detecting underlying group

    function collide(node) {
      var r = node.radius + 16,
          nx1 = node.x - r,
          nx2 = node.x + r,
          ny1 = node.y - r,
          ny2 = node.y + r;
      return function(quad, x1, y1, x2, y2) {
        if (quad.point && (quad.point !== node)) {
          var x = node.x - quad.point.x,
              y = node.y - quad.point.y,
              l = Math.sqrt(x * x + y * y),
              r = node.radius + quad.point.radius;
          if (l < r) {
            l = (l - r) / l * .5;
            node.x -= x *= l;
            node.y -= y *= l;
            quad.point.x += x;
            quad.point.y += y;
          }
        }
        return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
      };
    }



//    function updateObject(obj, key1, key2, name, UID, val, newVal) {
    function updateObject(obj, newNameKey, ProjectKey, oldName) {
    //    var obj = newVal;
    //var obj=obj;

    console.log("new name:" + newNameKey + "; old name:" + oldName);
    console.log("ProjectKey:" + ProjectKey);
  //  var obj = object;

      var tempObj = {};
      var newArray = [];
//TODO: nb also have to update dates
// find the right record, and update the name into a temp obj, delete the object from the data
  /*var testObj = obj[oldName];
  console.log(testObj);
  $.each(testObj, function(i,entry) {
      console.log(entry.key);
  }); */
      $.each(obj,function(i,entry) {
          // for each name, look for the project
           newArray = entry.values;  // why is this not active? do i not need it?
          $.each(newArray, function(k, proj) {
            console.log(proj.key +" - " + ProjectKey);
            if (proj.key == ProjectKey) {
              console.log(proj);
              tempObj = proj;
            //  try {
                //proj. //removed
                tempObj.values[0].AssignedToName = newNameKey;
                tempObj.key = ProjectKey;
                tempObj.values = [proj.values[0]];
              //  delete proj.values[0];
                delete obj[i].newArray[k];//.values[0];
                console.log(obj[i].key);
            //    obj[i].values.push(tempObj);
              //  tempObj = {};
          //    console.log("found");
            //  console.log(proj.values[0]);
          /*    $.each(obj, function(i, e2){
                  if(e2.key == newNameKey) {

                    newArray.push(tempObj);
                  }
              }); */
        /*    } catch (ex) {
              console.log("assigntoname not found");
                console.log(proj.value[0]);
                console.log(ex);
              } */
            }


          })


          //console.log(entry.name + " : " + entry.value)
//   }
});



      $.each(obj,function(i,entry) {
        if(entry.key == newNameKey) {
          obj[i].values.push(tempObj);
        }

      });
    //  console.log(newArray);
    //  console.log(obj);
        return obj;

}


function nearestMonday(date) { //1=Monday //5=Friday

  var m = new Date(date); //work out nearest MOnday // use scroptdate
  //var mday = m.getDay();
  if (m.getDay() == 1) { // MOnday
    // do nothing
  } else
  if (m.getDay() >=6 || m.getDay() == 0) { //if Friday, Saturday or Sunday, next MOnday
     m.setDate(m.getDate() + (1 + 7 - m.getDay()) % 7);
   } else { // tuesday, wednesday, thursday, last monday
     m.setDate(m.getDate() + (1 - m.getDay()) % 7);
   }

  // console.log("returned date:" + m);
   console.log("returned monday:" + m + "; original monday" + new Date(date));

   return m;

}

function nearestFriday(date) { //1=Monday //5=Friday

  var f = new Date(date); //work out nearest MOnday // use scroptdate
  //var mday = m.getDay();
  if (f.getDay() == 5) { // Friday
    // do nothing
  } else
  if (f.getDay() >=2 && f.getDay() <=4) { //if tue, Wed or Thur, next Friday
     f.setDate(f.getDate() + (5 + 7 - f.getDay()) % 7);
   } else { // mon,sat,sun , last friday
    //  f.setDate(f.getDate() - (5 + 7 - f.getDay()) % 7);
     while (f.getDay() != 5){
        f.setDate(f.getDate()-1);
        }
    // f.setDate(f.getDate() + (5 - f.getDay()) % 7);
   }

  // console.log("returned date:" + m);
   console.log("returned friday:" + f + "; original date:" + new Date(date));

   return f;

}




//function getChangedItems(obj, newNameKey, ProjectKey, oldName)
function getChangedItems() {
// obj should always be d3.selectAll("g.GBarGroup") I think - search 'closeData[0]' for some example
    var itemCount = d3.selectAll(".changed").size();

  d3.selectAll("g.GBarGroup").each(function (d,i) {
    if(d.hasOwnProperty("newStartDate") || d.hasOwnProperty("newFinishDate") || d.hasOwnProperty("newCompletion")) {
    console.log(d);
    var webUrl = d.WebHref["#text"];
    var listName = d.ListName["#text"];
//  var listName = "ProjectTaskList";
    var listInternalName = "ProjectTaskList"; //hard to get by code
    var listGuid = d.ListGuid["#text"];
    var itemId = d.ID["#text"];
    var assToName = d.AssignedToName;
    var origAssTo = "";
    try { origAssTo = d.AssignedTo["#text"].split("#")[1]; } catch (ex) {
      // no value3
      console.log(ex);
     };
    console.log("new name:" + assToName + ", oldName:" + origAssTo);
    console.log("webUrl:" + webUrl);







  //  var itemProps = {};
        var url = webUrl;// + "/_api/web/lists/getbytitle('" + listName + "')/items?$filter=ID eq " + itemId + "";
        console.log("url: " + url);


        var itemType =  GetItemTypeForListName(listInternalName);


            var itemProps = {};
            itemProps['__metadata'] = {
  							'type': itemType
  						};

              //var nameProps = {};
            //  itemProps['__metadata'] = {
              //    'type': itemType
              //  };

              var clearPredecessors = false;
              //var userName;

              //var curUserId = _spPageContextInfo.userId;
            //  console.log(d.Body);
              var itemDesc;
              try {

                var currentBody = "";
                if (d.Body["#cdata-section"] != undefined) currentBody = d.Body["#cdata-section"];

//var currentBody = d.Body["#cdata-section"];

               itemDesc = currentBody + "<br />Updated by "+ currentUser + " via Construction Planner " + new Date();

            } catch (ex) {
              itemDesc = "Updated by "+ currentUser + " via Construction Planner " + new Date();

            }
                    itemProps["Body"] = itemDesc;
              //sp format of date: "2018-10-11T15:00:00"
              if(d.hasOwnProperty("newStartDate")) {
                    var updatedStartDate =  new Date(d.newStartDateScript).toISOString().split(".")[0];
                    itemProps["StartDate"] = updatedStartDate;
                    clearPredecessors = true;
              }

              if (d.hasOwnProperty("newFinishDate")) {
                    var updatedFinDate = new Date(d.newFinishDateScript).toISOString().split(".")[0];
                      itemProps["DueDate"] = updatedFinDate;
                      clearPredecessors = true;
              }

              if (d.hasOwnProperty("newDuration")) {
                    var updatedDuration = d.newDuration;
                    itemProps["EstimatedDurationAtCompletion"] = updatedDuration;
                    clearPredecessors = true;
            }

            if (d.hasOwnProperty("newCompletion"))  {
                  var updatedCompletion = d.newCompletion;
                  itemProps["PercentComplete"] = updatedCompletion;
            }

            if (clearPredecessors == true) {
              itemProps["PredecessorsId"] = { type: "Collection(Edm.Int32)", "results":[]};
            }

              console.log("localeCompare names:" + assToName.localeCompare(origAssTo));

              if (assToName.localeCompare(origAssTo) != 0) {
              //  console.log("need to get the new name ID somehow or otherwise update a name - yikes");
                try {

                  if (assToName == "ZZ Not assigned") {
                    itemProps["AssignedToId"] = {"results":[]};
                    updateListItem(url, listName, listGuid, listInternalName, itemId, itemProps, itemCount, "Construction Planner");
                    //d3.select(closeBar).data()
                  } else {
                    if (assToName.startsWith("Gang-"))
                    {
                      console.log(getGroupId(assToName, webUrl));
                      var grpPromise = Promise.resolve(getGroupId(assToName, webUrl));
                      grpPromise.then(function(groupObj){
                        itemProps["AssignedToId"] = {"results":[groupObj.d.results[0].Id]};
                        updateListItem(url, listName, listGuid, listInternalName, itemId, itemProps, itemCount, "Construction Planner");

                      }); //end resolved promise

                    } else {
                      var userPromise = Promise.resolve(getUserId(assToName, webUrl));
                     userPromise.then(function(userObj){
                      console.log("assignedToId:")
                      console.log(userObj.d.results[0].Id);
                      console.log(userObj);
                      itemProps["AssignedToId"] = {"results":[userObj.d.results[0].Id]};
                      updateListItem(url, listName, listGuid, listInternalName, itemId, itemProps, itemCount, "Construction Planner");

                    }); //end resolved
                  }


                  }


                    // = [getUserId(assToName, webUrl)];
                  //  console.log("AssignedTo id:" + getUserId(assToName, webUrl));
                  //console.log()
                  } catch(ex){
                    //couldn't get a user id somehow, update without it
                    console.log(ex);
                    updateListItem(url, listName, listGuid, listInternalName, itemId, itemProps, itemCount, "Construction Planner");
                  }
              } else {
                //update without getting a user name id
                updateListItem(url, listName, listGuid, listInternalName, itemId, itemProps, itemCount, "Construction Planner");
              }



    //itemProps
    //updateListItem(thisUrl, listName, elementId, thisItem, numItems, calltype);
  }
  });



}


function getUserId(displayName, web){

  //http://tscps/support/_api/web/siteUsers
	var accountName="";

  var requestUri = web +
  "/_api/web/siteusers?$select=*&$filter=Title eq '"+displayName+"'";

  console.log(requestUri);

	//			  "/_api/web/siteusers?$select=LoginName&$filter=Title eq '"+displayName+"'";

	//execute AJAX request
  return getFormDigest(web).then(function(digestData){

   return $.ajax({
		url: requestUri,
		type: "GET",
		headers: {
    //  "X-RequestDigest": $("#__REQUESTDIGEST").val(),
   "X-RequestDigest": digestData.d.GetContextWebInformation.FormDigestValue,
      "ACCEPT": "application/json;odata=verbose" },
		async: false,
		success: function (data) {
  //    console.log(data.d.results);
			if(data.d.results.length>0){
				accountName=data.d.results[0].LoginName.replace("#","%23");
        userId=data.d.results[0].Id;


			}

		},
		error: function () {
			//alert("Failed to get details");
		}
	});
}); // end then
//  console.log('returned userId:' + userId);


}



function getGroupId(displayName, web){

  //http://tscps/support/_api/web/siteUsers
	var accountName="";
//	var requestUri = _spPageContextInfo.webAbsoluteUrl +
//  "/_api/web/siteusers?$select=*&$filter=Title eq '"+displayName+"'";

  var requestUri = web +
  "/_api/web/sitegroups?$select=*&$filter=Title eq '"+displayName+"'";

  console.log(requestUri);

	//			  "/_api/web/siteusers?$select=LoginName&$filter=Title eq '"+displayName+"'";

  return getFormDigest(web).then(function(digestData){

  return  $.ajax({
		url: requestUri,
		type: "GET",
		headers: {
    "X-RequestDigest": digestData.d.GetContextWebInformation.FormDigestValue,
    //"X-RequestDigest": $("#__REQUESTDIGEST").val(),
    "ACCEPT": "application/json;odata=verbose" },
		async: false,
		success: function (data) {
			if(data.d.results.length>0){
			//	accountName=data.d.results[0].LoginName.replace("#","%23");
        groupId=data.d.results[0].Id;
	      return groupId;
      /*  ensureUser(web, accountName) // doesn't work, think its blocked by IT
        .done(function(data) {
          return userId;
        }) */

//        console.log(userId)
			}

		},
		error: function () {
			//alert("Failed to get details");
		}
	});
  }); // end then
//  console.log('returned userId:' + userId);

}




/*
function ensureUser(webUrl,loginName)
{
   var payload = { 'logonName': loginName };
   return $.ajax({
      url: webUrl + "/_api/web/ensureuser",
      type: "POST",
      contentType: "application/json;odata=verbose",
      data: JSON.stringify(payload),
      headers: {
         "X-RequestDigest": $("#__REQUESTDIGEST").val(),
         "accept": "application/json;odata=verbose"
      }
   });
}
*/
function GetItemTypeForListName(name) {

    var itemType = "SP.Data." + name + "ListItem";

    var encItemType = itemType.replace(/ /g,'_x0020_');
    return encItemType;
}

function getFormDigest(webUrl) {
    return $.ajax({
        url: webUrl + "/_api/contextinfo",
        method: "POST",
        headers: { "Accept": "application/json; odata=verbose" }
    });
}

//https://stackoverflow.com/questions/32435432/sharepoint-2013-via-rest-api-error-403-forbidden-when-trying-to-create-item


function updateListItem(webUrl,listName, listGuid, listInternalName, itemID, itemProperties, numitems, calltype)
{
  console.log("itemCount:" + numitems);

      console.log("updateListItem("+webUrl+","+ listName +","+ itemID +","  + itemProperties +","+ numitems +"," + calltype +")");
//  console.log("calltype at updateListItem:" + calltype);
console.log(itemProperties);
  var thisUrl = webUrl;
  var thisId = itemID;
  var thisUrlList = thisUrl + "/Lists/" + listInternalName; //so annoying
  var itemData = JSON.stringify(itemProperties);
  var formFolder = "";

  console.log(JSON.stringify(itemProperties));

  // make a path for document libraries
  if (itemData.indexOf("ListItem") < 0)
  {
    thisUrlList = thisUrl + "/" + listName;
    formFolder = "/Forms";
  }

  return getFormDigest(webUrl).then(function(data){

  return  $.ajax({
       url: thisUrl + "/_api/web/lists/getbytitle('" + listName + "')/items(" + itemID + ")",
      //  url: thisUrl + "/_api/web/lists('" + listGuid + "')/items(" + itemID + ")",
       type: "POST",
       /*processData: false, */
       contentType: "application/json;odata=verbose",
       data: JSON.stringify(itemProperties),
       headers: {
             "Accept": "application/json;odata=verbose",
          "content-type": "application/json; odata=verbose",
          //"X-RequestDigest": $("#__REQUESTDIGEST").val(),
          "X-RequestDigest": data.d.GetContextWebInformation.FormDigestValue,
          "X-HTTP-Method": "MERGE",
          "If-Match": "*"

       },
       success: function (err) {
         closeMessage();
         var handler = null;
			//$("#Results").prepend("<div class='updated'><p class='updatedh'>UPDATED <a href='"+thisUrlList+"' target='_blank'>"+thisUrlList+"</a>:</p><div class='updatedb'>"+JSON.stringify(itemProperties)+"</div></div>");


        statusMessage = "<div class='updated'><p class='updatedh'>UPDATED <a href='"+thisUrlList+formFolder +"/DispForm.aspx?ID="+thisId+"' target='_blank'>"+thisUrlList+formFolder+"/DispForm.aspx?ID="+thisId+"</a>:</p><div class='updatedb'>"+
      itemData+"</div></div>" + statusMessage;
      itemCtr++;
      statusHeader = "Updating item " + (itemCtr) + " of " + numItems + " " + itemsDesc;
      if (calltype == "PowerShell") {
        $("#spDlgMirror").append("<div>"+itemData+"<div>");
      }
      if (itemCtr >= numItems) {
        itemsDesc = itemsDesc.toUpperCase();
        //handler = RefreshOnDialogClose; // NOO!!!
        handler = null;
        statusHeader = "*** JOB COMPLETE - PROCESSED " + (itemCtr) + " OF " + numitems + " " + itemsDesc + " *** (" + calltype + ")";
        if (calltype == "PowerShell") {
          //$("#spDlgMirror").html($("#spDlg").html());
            $("#spDlgMirror").append("<div>"+itemData+"<div>");
              $("#spDlgMirror").prepend("<div>"+statusHeader+"<div>");
        }
      }

    //  statusMessage = "<div>*** JOB COMPLETE - PROCESSED " + (itemCtr) + " OF " + numItems + " ITEMS *** </div>" + statusMessage;
            if (calltype != "PowerShell") {
            DismissDlgWithCode(null);
            LaunchMessageDialog(statusHeader,statusMessage, handler);
          }
       },
       error: function (err) {
       		//console.log("failure");
          closeMessage();
       		console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
       		//$("#Results").prepend("<div class='error'>ERROR:<div>"+ JSON.stringify(err, null, 2) +"</div></div>");
          statusMessage = "<div class='error'>ERROR:<div>"+ JSON.stringify(err, null, 2) +"</div></div>"+statusMessage;
          DismissDlgWithCode(null);
          if(calltype != "PowerShell")
          {
          LaunchMessageDialog("Updating progress ...",statusMessage);
          }


           //failure(itemProperties);
         //  failure(data);
       }
    });

  }); // end then
}


function ExecuteOnFailure(sender, args) {
  closeMessage();
 alert('Error in Getting List ID');
 }





// not used at present

function updateObjectDates(obj, ProjectKey, newStart, newFinish) {

  var tempObj = {};
  var newArray = [];
//TODO: nb also have to update dates
// find the right record, and update the dates into a temp obj, delete the object from the data
  $.each(obj,function(i,entry) {

       newArray = entry.values;
      $.each(newArray, function(k, proj) {
            if (proj.key == ProjectKey) {
                proj.values[0].StartDateExpression["#text"] = Date(newStart).toISOString();
                tempObj.key = ProjectKey;
                tempObj.values = [proj.values[0]];
                delete proj.values[0];
                obj[i].values.push(tempObj);

            }
        })
          //console.log(entry.name + " : " + entry.value)
    //}
    });

    return obj;
}






var relBarDim;


  var resizeHandler = d3.drag()
      .on("start", function (d) {

        console.log("resizing");
      //  var current=d3.select(this);

        if (d3.select(this).classed("circHandle") == true) {
          var current=d3.select(this);
          var relatedBar = d3.select(this.parentNode).select('rect');
            //   relatedBar.classed("changed", true);
            if (d3.select("#dontMark").property("checked") == true)
            {
              relatedBar.classed('moved',true);
              relatedBar.classed('changed',false);
            //   d3.select(this).classed('changed',true);
            } else {
              relatedBar.classed('moved',false);
              relatedBar.classed('changed',true);
            }


            //   var projectKey = closeData[0].UID;
          //     var oldName = closeData[0].AssignedToName;
            //   var uniqueRef = closeData[0].UniqueReference["#text"];
          //     var ownerName = closeData[0].OwnerName;
          //     var projTitle = closeData[0].WebName["#text"];




          var relatedInfoCirc = d3.select(this.ParentNode).select("circle.circInfo");
        //    parentInfoCirc.attr("cx", d3.event.x);
          relBarDim = computeDimensions(relatedBar);
        //  console.log(relatedBar.attr("x"));
          deltaX = relBarDim.x - d3.event.x;
          deltaY = relBarDim.y - d3.event.y;
          deltaCx = current.cx - d3.event.y - height/2;
          deltaW = relBarDim.width;

    } // end of if class is circhandle

      })
      // no need, dragging the copy NOW

      .on("drag", function () {

      //  var current=d3.select(this);
//var relatedBar = current.select(this.parentNode).select('rect');
  if (d3.select(this).classed("circHandle") == true) {
  //console.log("deltaW:" + deltaW);
          d3.select(this)
        //  .moveToFront()


              .attr("cx", d3.event.x)

          d3.select(this.parentNode).select("rect")
        //  .moveToFront()
          .attr("width", d3.event.x-relBarDim.x);
          d3.select(this.parentNode).select("circle.circInfo")
         .attr("cx", d3.event.x);
        //  relatedInfoCirc
        // .attr("y", d3.event.y + deltaY + 12);

        // d3.select(this.parentNode).select("circle")
      //   .moveToFront()

      } //end if circlhandle
      })
      .on("end", function(d){
        // find the new bar locations
      //  console.log(d.StartDateExpression['#text'])
    //  console.log(d);
      if (d3.select(this).classed("circHandle") == true) {

  var relatedBar = d3.select(this.parentNode); //.select('rect');
        //  deltaX = relBarDim.x - d3.event.x;

    var closeBar = this.closest("g.GBarGroup");  //WORKS
    console.log("closeBar data ...: ");
 //   console.log(d3.select(closeBar).data());
    var closeData = d3.select(closeBar).data();

    var dateFormat = d3.timeFormat("%a %d/%m/%Y");
    var scriptDateFormat = d3.timeFormat("%Y,%m,%d");

    var newX = parseFloat(d3.select(this).attr("cx")) + parseFloat(d3.select(this.parentNode).attr("x"));  //svg + event //drag circle position

/*
    console.log("class:" + d3.select(this.parentNode).attr("class"));
    console.log("parentX:" + d3.select(this.parentNode).attr("x"));
    console.log("circ cx:" + d3.select(this).attr("cx"));
*/
    console.log(newX);

   var newFinish = dateFormat(x.invert(newX));
   var scriptFinishDate = scriptDateFormat(x.invert(newX));
   //now check for Monday

   if (d3.select("#FridayLock").attr('checked') == 'true') {
           scriptFinishDate = scriptDateFormat(nearestFriday(scriptFinishDate));
           newFinish = dateFormat(new Date(scriptFinishDate));
   }



   closeData[0].newFinishDate = newFinish;
    closeData[0].newFinishDateScript = scriptFinishDate;

    var duration = closeData[0].EstDurationAtCompletion["#text"];
    var newDuration;

    //if (duration = -1


        if (closeData[0].hasOwnProperty("newStartDateScript"))
        {

          console.log("newSDScript:" + new Date(closeData[0].newStartDateScript) +  ", new scriptFinishDate:" + new Date(scriptFinishDate));
          newDuration = calcBusinessDays(new Date(closeData[0].newStartDateScript), new Date(scriptFinishDate), holidays);
        } else {

        /*  if(closeData[0].hasOwnProperty("newFinishDateScript"))
          {
            console.log("new start date:" + new Date(parser(convertSPDateOnly(d.StartDateExpression["#text"]))) +  ", new scriptFinishDate:" + new Date(scriptFinishDate));
            newDuration = calcBusinessDays(new Date(parser(convertSPDateOnly(d.StartDateExpression["#text"]))), new Date(scriptFinishDate), holidays);

          } else { */
          console.log("start expression date:" + new Date(parser(convertSPDateOnly(d.StartDateExpression["#text"]))) +  ", new scriptFinishDate:" + new Date(scriptFinishDate));
          newDuration = calcBusinessDays(new Date(parser(convertSPDateOnly(d.StartDateExpression["#text"]))), new Date(scriptFinishDate), holidays);
        /*  } */

        }

        console.log("newDuration:" + newDuration);
        closeData[0].newDuration = parseInt(newDuration);



        d3.select(closeBar).selectAll(".finDateText").remove();
          d3.select(closeBar).select('svg')
              .append("text")
              .attr("x", BAR_INDENT)
              .attr('y', BAR_H-BAR_FIN_OFFSET)
              .attr("font-size", 9)
              .attr("font-family", "sans-serif")
              .attr('width', width)
              .attr("class","finDateText")
              .text("fin:" + newFinish + " / dur:" + newDuration);


/*
          d3.select(closeBar).selectAll(".durationText").remove();
            d3.select(closeBar).select('svg')
                .append("text")
            //    .attr('x', d3.select(this).attr('cx')-30)
                .attr('y', 42)
                .attr("font-size", 9)
                .attr("font-family", "sans-serif")
                .attr('width', width)
                .attr("class","durationText")
                .text("duration:" + newDuration);
*/
  //              d3.select(this).moveToFront();

      circles = allCharts.selectAll('circle.circHandle'); // get them afresh .. don't now if i need to do that
      circles.moveToFront();
       resizeHandler(circles);
     } // end of if circHandle = true
      })
      ;


resizeHandler(circles);

      var newStart, newFinish, newDuration, newDurationText;

function infoHover() {
var el = d3.select(this), isEntering = d3.event.type === "mouseenter";
el
  .classed("hovering", isEntering)
  .attr(
    "r",
    isEntering || el.classed("hovering") ?
      HANDLE_R_ACTIVE : HANDLE_R
  );
}


function groupHover() {
var el = d3.select(this), isEntering = d3.event.type === "mouseenter";
el
  .classed("hovering", isEntering)
  .attr(
    "r",
    isEntering || el.classed("hovering") ?
      HANDLE_R_ACTIVE : HANDLE_R
  );
}

function finishHover() {
var el = d3.select(this), isEntering = d3.event.type === "mouseenter";

el
  .classed("hovering", isEntering)
  .attr(
    "width",
    isEntering || el.classed("hovering") ?
      HANDLE_R_ACTIVE : HANDLE_R
  )
  .attr(
    "height",
    isEntering || el.classed("hovering") ?
      HANDLE_R_ACTIVE : HANDLE_R
  );
  d3.event.stopPropagation();
}



  function computeDimensions(selection) {
    var dimensions = null;
    var node = selection.node();

    if (node instanceof SVGElement) { // check if node is svg element
      dimensions = node.getBBox();
    } else { // else is html element
      dimensions = node.getBoundingClientRect();
    }
    //console.log(dimensions);
    return dimensions;
  }



  function resizerHover() {
  var el = d3.select(this), isEntering = d3.event.type === "mouseenter";
  el
    .classed("hovering", isEntering)
    .attr(
      "r",
      isEntering || el.classed("resizing") ?
        HANDLE_R_ACTIVE : HANDLE_R
    );
}



function rectResizeStartEnd() {
    var el = d3.select(this), isStarting = d3.event.type === "start";
    d3.select(this)
      .classed("resizing", isStarting)
      .attr(
        "r",
        isStarting || el.classed("hovering") ?
          HANDLE_R_ACTIVE : HANDLE_R
      );
          //  console.log(getNewData);

      //    mydata=  getNewData();
  }

  function rectResizing(d) {
//console.log(d);
    var dragX = Math.max(
      Math.min(d3.event.x, MAX_TRANSLATE_X),
      MIN_TRANSLATE_X
    );

    var dragY = Math.max(
      Math.min(d3.event.y, MAX_TRANSLATE_Y),
      MIN_TRANSLATE_Y
    );


      d.width = Math.max(dragX - d.x, MIN_RECT_WIDTH);


  }


  function intersectRect(r1, r2) {
      var r1 = r1.getBoundingClientRect();    //BOUNDING BOX OF THE FIRST OBJECT
      var r2 = r2.getBoundingClientRect();    //BOUNDING BOX OF THE SECOND OBJECT

      //CHECK IF THE TWO BOUNDING BOXES OVERLAP
    return !(r2.left > r1.right ||
             r2.right < r1.left ||
             r2.top > r1.bottom ||
             r2.bottom < r1.top);
  }

function intersectRect2(rec1, rec2) {

  //console.log(rec1.class)

var r1, r2;
    if (rec1 instanceof SVGElement) { // check if node is svg element
      r1 = rec1.getBBox();
    } else { // else is html element
        //r1 = r1.getBBox();
      r1 = rec1.getBoundingClientRect();
    }

    if (rec2 instanceof SVGElement) { // check if node is svg element
      r2 = rec2.getBBox();
    } else { // else is html element
      r2 = rec2.getBoundingClientRect();
    }

    //  var r1 = r1.getBoundingClientRect();    //BOUNDING BOX OF THE FIRST OBJECT
    //  var r2 = r2.getBoundingClientRect();    //BOUNDING BOX OF THE SECOND OBJECT

      //CHECK IF THE TWO BOUNDING BOXES OVERLAP
    return !(r2.left > r1.right ||
             r2.right < r1.left ||
             r2.top > r1.bottom ||
             r2.bottom < r1.top);
  }


// OK, SO **** EVERYTHING **** SVG RELATED IS NOT GOING TO WORK DUE TO VARIOUS QUIRKS
//

/*function computeD3Intersect(selection1, selection2) {
  var r1 = null;
  var r2 = null;

  var node1 = selection1;
  var node2 = selection2;

  r1 = node1.getBBox();
  r2 = node2.getBBox();
} */

    function computeDimIntersect(selection1, selection2) {
      var r1 = null;
      var r2 = null;
      var node1 = selection1.node();
      var node2 = selection2.node();

    //  var node1 = makeAbsoluteContext(selection1, d3.select(".chart")); //.node();
  //    var node2 = makeAbsoluteContext(selection2, d3.select('.chart')); //.node();

    ////  console.log(node1.x);
  //    console.log(node2.y);

//      if (node1 instanceof SVGElement) { // check if node is svg element
//https://stackoverflow.com/questions/24174975/document-createelementsvg-instanceof-svgelement-is-false
  //    if (node1 instanceof SVGElement) { // check if node is svg element
        r1 = node1.getBBox();
      //  console.log(d3.select(node1).attr("x"));
        r1.xAttr = parseFloat(d3.select(node1).attr("x"));
        r1.yAttr = parseFloat(d3.select(node1).attr("y"));
        r1.xright = parseFloat(d3.select(node1).attr("x")) + r1.width;
        r1.ybottom = parseFloat(d3.select(node1).attr("y")) + r1.height;
  //    } else { // else is html element
  //      r1 = node1.getBoundingClientRect();
  //    }


  //    r1 = computeDimensions(node1);

    //  if (node2 instanceof SVGElement) { // check if node is svg element
        r2 = node2.getBBox();
        r2.xAttr = parseFloat(d3.select(node2).attr("x"));
        r2.yAttr = parseFloat(d3.select(node2).attr("y"));
        r2.xright = parseFloat(d3.select(node2).attr("x")) + r2.width;
        r2.ybottom = parseFloat(d3.select(node2).attr("y")) + r2.height;
  //    } else { // else is html element
  //      r2 = node2.getBoundingClientRect();
  //    }

    //  r2 = computeDimesions(node2);
      //console.log(dimensions);
    //  return dimensions;
    //}
  //  console.log("set:");
  //  console.log(r1);
  //  console.log(r2);
    //  var r1 = r1.getBoundingClientRect();    //BOUNDING BOX OF THE FIRST OBJECT
    //  var r2 = r2.getBoundingClientRect();    //BOUNDING BOX OF THE SECOND OBJECT

      //CHECK IF THE TWO BOUNDING BOXES OVERLAP
/*    return !(r2.left > r1.right ||
             r2.right < r1.left ||
             r2.top > r1.bottom ||
             r2.bottom < r1.top); */
     return (r2.xAttr < r1.xright   ||
              r2.xright < r1.xAttr ||
              r2.yAttr > r1.ybottom ||
              r2.ybottom < r1.yAttr);
  }


  function makeAbsoluteContext(element, svgDocument) {
    return function(x,y) {
      var offset = svgDocument.getBoundingClientRect();
      var matrix = element.getScreenCTM();
      console.log(matrix);
      return {
        x: (matrix.a * x) + (matrix.c * y) + matrix.e - offset.left,
        y: (matrix.b * x) + (matrix.d * y) + matrix.f - offset.top
      };
    };
  }


  function intersectFutureRect(r1, r2, width) {
      var r1 = r1.getBoundingClientRect();    //BOUNDING BOX OF THE FIRST OBJECT
      var r2 = r2.getBoundingClientRect();    //BOUNDING BOX OF THE SECOND OBJECT

      //CHECK IF THE TWO BOUNDING BOXES OVERLAP
    return !(r2.left > r1.right ||
             r2.right < r1.left ||
             r2.top > r1.bottom ||
             r2.bottom < r1.top);
  }



// HERE'S THE 'TODAY' LINE

  var today = new Date();
  var xNow = x(today);
    allCharts.append("line").attr("class","today").attr("x1", xNow) //<<== change your code here
//  d3.select('.chart').append("line").attr("class","today").attr("x1", xNow) //<<== change your code here
    .attr("y1", 0).attr("x2", xNow) //<<== and here
/*    .attr("y2", bBoxHeight) */
    .attr("y2", function(d) {
      console.log('y2 height:' + d3.select(this.parentNode).attr('class'));
      return d3.select(this.parentNode).attr('height');
    })

    .style("stroke-width", 2)
    .style("stroke", "red")
    .style("fill", "none");




//bars.on("dblclick",function(d){ alert("node was double clicked"); });  //dblclick doesn't work

//bars.on("click",function(d){ alert("node was SINGLE clicked"); });




//dragHandler(svg.selectAll("use"));




// SETTING UP THE ZOOM - DO THIS 'AFTER ALL OTHER CLICK EVENTS'

//   const catchAll = d3.select('.chart') //changed to var so that the 'reopen in chrome' msg would work in IE *sighs*
   var catchAll = d3.select('.chart')

    .append('svg')
  //  .attr('position', 'relative')
    .attr('id','zoomOverlay')
      .attr('class', 'zoom')
      //.attr("top", bBoxTop)
    .append('rect')
      .attr('fill', 'none')
//        .attr('width', width)
      .attr('width', '100%')
    //  .attr('height', wrapper.getBoundingClientRect().bottom);
    .attr('height', bBoxHeight+bBoxTop)
    //.attr("top", bBoxTop)
//    .attr("transform-origin", "0,20,-50")

    ;




//see  http://jsfiddle.net/armensg/8Agje/3/

var panMeasure = 0;
var oldScale = 1;

var zoomable = true;


function getTranslation(transform) {
  // Create a dummy g for calculation purposes only. This will never
  // be appended to the DOM and will be discarded once this function
  // returns.
  var g = document.createElementNS("http://www.w3.org/2000/svg", "g");

  // Set the transform attribute to the provided string value.
  g.setAttributeNS(null, "transform", transform);

  // consolidate the SVGTransformList containing all transformations
  // to a single SVGTransform of type SVG_TRANSFORM_MATRIX and get
  // its SVGMatrix.
  var matrix = g.transform.baseVal.consolidate().matrix;

  // As per definition values e and f are the ones for the translation.
  return [matrix.e, matrix.f];
}

//  var zoom = d3.zoom()//.on('zoom', zoomed);
//var savedTransformEvent;

var catchAllZoom =   catchAll.call(d3.zoom()
  //.x(x)
//var catchAllZoom =   catchAll.call(zoom
//   .scaleExtent([0.05, 20])
        .scaleExtent([0.5, 4])
//   .translateExtent([[-20,-20], [width, Infinity]])
   .translateExtent([[-100,-100], [width*2, Infinity]])
    .on("start", function() {

        const { transform } = d3.event;
    //  console.log("zoom started");

    })
    .on("end", function() {
      const { transform } = d3.event;
      console.log("zoom ended");

    })
    .on("zoom", function() {
      if (zoomable == true)
      {
        //console.log("zooming")
        const { transform } = d3.event;

        zoomChart(transform);



} // end of zoomable true



  }));

  var parentBox;
var tempTrans = [0, 0];
function zoomChart(transform) {
  tempTrans = getTranslation(transform);

  //console.log(t)

   tempTrans[1] = 0;
    console.log(tempTrans);

      d3.select('.chart').selectAll('g')
        /*  .attr("transform-origin", "0,20,-50") */
      //.attr("transform", function(d) {
      //return "translate(" + tempTrans + ")scale(" + transform.applyX(x(d)) + ")")};
      .attr("transform", "translate(" + tempTrans + ")scale(" + transform.k + ")");
    //  .attr("transform", "translate(" + tempTrans + ")"); //scale(" + transform.k + ")");



      xNow = x(today);
    //  yNow = y(today);
  //    allCharts.select("line.today")
    d3.selectAll("line.today")
      .attr("x1", transform.applyX(xNow))
      .attr("x2", transform.applyX(xNow))
      .attr("y2", function(d) {
          return d3.select(this.parentNode).attr('height');
      });


       parentBox = wrapper.getBoundingClientRect();
//var barGroupHeight = computeDimensions(d3.select("barGroup")[0]); //only need 1, the first one

//  d3.selectAll(".AssignedGroup").each(function(d) {
    d3.selectAll(".labelText").each(function(d) {
    //box =  d3.select(this + "> text.labelText").getBoundingClientRect();
        //box = this.getBBox();
          box = this.getBoundingClientRect();

        //  console.log(box);
          newY = parentBox.y - box.y;
          var groupBox = d3.select(this.parentNode.parentNode);

           groupBox.attr("height", function(d) {
        //   console.log(groupBox.attr("data-length"));

            return parseInt(groupBox.attr("data-length"))*BAR_H  *transform.k;
            //  return parseInt(groupBox.attr("height"))  *transform.k;
           })
           groupBox.attr("y", function(d) {
      //     console.log(groupBox.attr("data-length"));
            return parseInt(groupBox.attr("data-length")-1)*BAR_H;
          //  return parseInt(groupBox.attr("height")-1)*transform.k;
           })
        }
      );



    oldScale = transform.k;


    wrapper = document.querySelector('.chart');
    infowrapper = document.querySelector('.aboutSpacer');
    clHeight = wrapper.clientHeight;
    wrapperDetails = wrapper.getBoundingClientRect();
    infoDetails = infowrapper.getBoundingClientRect();
    bBoxHeight = wrapperDetails.height;
    bBoxTop = wrapperDetails.top;//-infoDetails.top;


    xAxisWeekFloating.tickSize((bBoxHeight-infoDetails.height+(5*oldScale)));
    xAxisWeekFloating3.tickSize((bBoxHeight-infoDetails.height+(20*oldScale)));



    globalX.call(xAxis.scale(transform.rescaleX(x)));
    globalXWeek.call(xAxisWeek.scale(transform.rescaleX(x)));
    $("#axisClone").html("");
    $(".axisWeek").clone().appendTo("#axisClone");
  //globalXWeekFloating2.call(xAxisWeekFloating2.scale(transform.rescaleX(x)));
    globalXWeekFloating3.call(xAxisWeekFloating3.scale(transform.rescaleX(x)));
    globalXWeekFloating.call(xAxisWeekFloating.scale(transform.rescaleX(x)));

    xAxis.scale(transform.rescaleX(x));



    // this bit moves the name labels to be always visible
    var visibleDomain = (xAxis.scale().domain());
    //console.log(visibleDomain);
    //shift name textlabels  along ...
    d3.selectAll(".labelText").attr("x", d => x(visibleDomain[0]));

    //preventTooSmallWeekIntervals(visibleDomain[1]-visibleDomain[2]);
    preventTooSmallWeekIntervals(visibleDomain);
    }





    d3.select("#overlayBtn").on("click", function(){
      console.log("Overlay clicked;")
      if(d3.select("#aboutInner").classed("hideMenu")) {
        d3.select("#aboutInner").classed("hideMenu", false);
        d3.select(".about").classed("hugLeft", false);
          d3.select("#overlayBtn").classed("hugLeftBtn", false);
          d3.select("#pointLeft").classed("hidden", false);
          d3.select("#pointRight").classed("hidden", true);


      } else {
        d3.select("#aboutInner").classed("hideMenu", true);
        d3.select(".about").classed("hugLeft", true);
          d3.select("#overlayBtn").classed("hugLeftBtn", true);
          d3.select("#pointLeft").classed("hidden", true);
          d3.select("#pointRight").classed("hidden", false);
      }
    });
// ZOOMING ISN'T WORKING PROPERLY
// LOOK AT THIS:  https://bl.ocks.org/SevenChan07/3fbb45be891cc3fda3bf139e4853535b
    d3.select("#UnlockZoomBtn").on("click", function() {

    d3.event.stopPropagation();
  //alert("button clicked");
// nb don't have to worry about true/false cos button is unclickable, under zoom box, when unlocked
    d3.select("#UnlockZoomBtn").attr("value", "Lock Zoom/Pan").attr("locked","false");

  /*$("#instructions").text("Use scrollwheel to zoom width, hold click and drag to pan. Click the Zoom/Pan button to lock/unlock the viewport."); */


    zoomable=true;
    d3.select('#zoomOverlay').classed('zoom', true);
    d3.select('#zoomOverlay').classed('hidden', false);

    catchAllZoom =   catchAll.call(d3.zoom()
        .scaleExtent([0.05, 20])
        .on("zoom", function() {
            const { transform } = d3.event;

    zoomChart(transform);


      //    var today = new Date();

            //style("stroke-width", 2).style("stroke", "red").style("fill", "none");


    }));

});


d3.select("#addNewTaskBtn").on("click", function(){

  var dlgText = "<a target='_blank' href='http://tscppm/Projects/built/materials/cop/BrightWork%20Pages/Selected%20Project%20Open%20Work.aspx?project=2#InplviewHash6e3a3cd7-2060-40e0-9477-74bc78f3dac9=CascDelWarnMessage%3D1-FilterField1%3DbwProjectItemID-FilterValue1%3DMiscellaneous%2520Jobs'>Click here</a> ...<br /><br />"+
  " to open the miscellaneous construction tasks Project and Work tracker in BrightWork.  Here you can add and/or edit any construction work that is not related to an existing BrightWork project.<br /><br /> "+
  "To display the new or updated data in this chart, ensure you have cleared any saved data by clicking the <i class='fas fa-trash-restore'></i> button, then click F5 refresh.</em>";
  LaunchMessageDialog("Open  BrightWork Project and Work Tracker", dlgText);
});


d3.select('#getXMLDataBtn').on("click", function() {
  var dlgText = "<a target='_blank' href='http://tscppm/projects/_layouts/15/BrightWork/ExportReport.aspx?pageUrl=http%3A%2F%2Ftscppm%2FProjects%2FBrightWork%2520Pages%2FProject%2520Ready%2520Matrix%2520Tasks%2Easpx&wpGUID=c7514c5e%2D11a7%2D4670%2D9967%2D305966e50d54&exportFormat=XML'>Click here</a> to grab the latest data as an XML file. "+
  " Save this file over the existing XML file called <strong>'Project Ready Matrix Data.xml'</strong> at <a target='_blank' href='http://tscppm/data'>http://tscppm/data.'</a><br /><br /> " +
  "<em>NB: You will have to wait for the report to finish running, before being prompted to save it, this could take some time.<br /><br />" +
  "To display the updated data in this chart, ensure you have cleared any saved data by clicking the <i class='fas fa-trash-restore'></i> button, then click F5 refresh.</em>";
  LaunchMessageDialog("Get updated XML file", dlgText);
});

d3.select('#updateChangedItemsBtn').on("click", function() {

  var changedCount = d3.selectAll(".changed").size();
  var itemCountText = "There are " + changedCount + " changed items.";
  if (changedCount  == 1 ) { itemCountText = "There is 1 changed item."};

  var resp = confirm("Click OK to update changed task items in BrightWork.  Only tasks on projects you have authority to update will be changed.\n\n "+itemCountText+"\n\nChanged Items are marked with a red or green border.");

  if (resp == 1) {

    getChangedItems();
  } else {
    console.log("nothing changed");
  }
});


d3.select("#trainingProjects").on("click", function(){
  console.log('traning projects clicked');
  console.log(d3.select("#trainingProjects").attr('checked'));
  //var trainCheck = d3.select("#trainingProjects").attr('checked');
    var trainCheck = d3.select("#trainingProjects").property('checked');
  if (trainCheck != true) {
    console.log("training projects: no")
    trainingProjects = false;
    localStorage.setItem("trainingProjects","false");
    d3.select('.chart').selectAll('*').remove();
  //  d3.selectAll(".Axis").remove();
    initSomething();
  } else {
    var rwrresp = confirm("Rewrite chart?\n\nAny unsaved changes will be lost.");
    if (rwrresp == true)
    {
      trainingProjects = true;
      localStorage.setItem("trainingProjects","true");
      d3.select('.chart').selectAll('*').remove();
    //  d3.selectAll(".Axis").remove();
      initSomething();

    } else {
      d3.select("#trainingProjects").property('checked',false);
    }
  }
});


d3.select('#clearOldBtn').on("click", function() {

  var resp = confirm("Click Ok to remove all items with a finish date prior to 'today' from this planner (does not affect the original BrightWork tasks in any way).  "+
  "\n\nAlternatively, to ensure completed work is not displayed in future, mark the task as 'complete' and click 'Update Changed Items'.  \n\n"+
  "To use updated data immediately, open and save the data report and save the data report as described on the instructions page.  Then click F5 refresh on this page to show the updated data.");

  if (resp == 1) {

    clearOldItems();

  //  getChangedItems();
  } else {
    console.log("nothing changed");
  }
});

//var removeArr = [];

function getGangList(btnEvent) {
  var requestUri = "/_api/web/SiteGroups";
  var gangArr = [];
          $.ajax({
              url: requestUri,
              type: "GET",
              headers: {
                   "X-RequestDigest": $("#__REQUESTDIGEST").val(),
                   "ACCEPT": "application/json;odata=verbose"
                 },
              success: function (data) {
                  $.each(data.d.results, function (i, item){
                      var title = item.Title;
                    //  console.log(title);
                      if(title.startsWith("Gang-")) {
                        gangArr.push(title);
                      }
                  })
                  updateResourcesBtnClickContinued(btnEvent, gangArr);
              },
              error: function () {
                  console.log("Error getting items");
              }
          });
}





d3.select('#updateResourcesBtn').on("click", function() {
    newName = "";
  activeNameGroupId = "";
  getGangList(this);

}); //end on click

var newItemCtr = -1;

function updateResourcesBtnClickContinued(bntEvent, gangArr) {
  var dlgText = "";

  d3.selectAll(".labelText").classed("darker", false);
  //  d3.select(".AssignedGroup").attr("pointer-events",null); //restore pointer events

        d3.selectAll('g.assignedGroupGp').each(function(d,i) {
          dlgText += "<input type='checkbox' class='resourceCheckbox' name='remResource' resource='"+d.key+"' id='"+d.key.replace(/\s/g, '')+" checked='false' onclick='javascript:alterResourceStatus(this)'/>  "+d.key +"<br />";

        });
        dlgText = //"<div><span class='boxPrompt'>Deactivate All</span><input box id='deactivateNamesChk' type='checkbox' checked='false' /></div>" +
        "<div><span class='boxPrompt'>Check names to remove from the Planner:</span></div>" + dlgText;
        dlgText = dlgText + "<span class='boxPrompt'>Add a name: </span><input box id='newResource' placeholder='A Full Username known to SP' size='30' onchange='javascript:addResource(this)' />";
        dlgText = dlgText += "<div><span class='gangList boxPrompt'>Gang names available:</span><ul class='gangList'><li> " + gangArr.join('</li><li>') +"</li></ul></div>";
        LaunchConfirmDialog("Update Resources",dlgText, function(result){
             if (result == true) {
                //deal with new person
                console.log("newName:" + newName);
            if(deactivateNames == true)  {
              d3.selectAll(".labelText").classed("darker", false);

            }
            if(newName != "") {
            //  d3.select("g.assignedGroupGp")  // 1 only??
            newId = "assignedto-"+newName;

  // BEGINNING OF CREATION
  symbolAssignees.push({key: newName, values:[]});

//  groupCtr = symbolAssignees.length-1;
  groupCtr = symbolAssignees.length;
//  console.log(symbolAssignees[groupCtr]);
//  console.log(symbolAssignees);


        var newSection = d3.select(wrapper)
      //  allCharts
          .insert('g', ":first-child")
          .attr('class', 'assignedGroupGp new')
          .attr('id', newId)
          .datum({key: newName, values:[]})
          .enter();

          d3.select('.new').append('svg')
          .attr('height', BAR_H)
          .attr('class','AssignedGroup')

          .attr('assignedName', newName)
        //  .append('rect')
          .attr('height', BAR_H)
          .attr('x', 0)
          .attr('y', 0)
          .attr('width', '100%')
        /*  .attr('background-color', function(d,i) {

          return d3.rgb(colorScaleNewSection(i))
        } ) */
          .attr('style', function(d,i) {
            console.log(d3.rgb(colorScaleNewSection(i)));
            newItemCtr++;
          return 'background-color: '  + d3.rgb(colorScaleNewSection(newItemCtr));
        })
          .attr('opacity', '0.7')
          .attr('data-length',1)
          .call(dragHandler)
        //  .call()
          ;


          var today = new Date();
          var xNow = x(today)*oldScale+tempTrans[0];
        //  console.log("newSection classs:" +newSection.attr("class"));
            d3.select('.new').select('.AssignedGroup').append("line").attr("class","today")
            .attr("x1", xNow) //<<== change your code here
          //  d3.select('.chart').append("line").attr("class","today").attr("x1", xNow) //<<== change your code here
            .attr("y1", 0)
            .attr("x2", xNow) //<<== and here
            .attr("y2", function(d) {
    //       console.log('y2 height:' + d3.select(this).attr('class'));
            //  return d3.select('.new').select('.AssignedGroup').attr('height');
                return d3.select(this.parentNode).attr('height');
            })

            .style("stroke-width", 2)
            .style("stroke", "red")
            .style("fill", "none");
//newSection.append


      var newLabel =  d3.select('[assignedName="'+newName+'"]')
        .append('g')
        .attr("class", "labelGroup")
        .append('text')
        .text(newName)
        .attr('class','labelText')
        .attr('width', '100')
        .attr("y", 20)
        .attr("font-size", 20)
        .attr("font-family", "sans-serif")
          .attr("font-weight", "bold")
          .attr('fill', 'silver')
          .attr('opacity', '0.9');

          newLabel.append('line')
            .attr("class","divider")
            .attr("x1", x(minX))
            .attr("x2", x(maxX))
            .attr("stroke", "silver")
            .attr("stroke-width", 1)
              .attr("opacity", 0.5);
          //    .call();

              //above line not showing, why??
        //  newGroup = newSection.select('.AssignedGroup'); // get them afresh .. don't now if i need to do that
        //   dragHandler(newGroup);


      calculateAndApplyHeight(BAR_H);



  // END OF CREATION

            };

var dataLength = 0;
            /// deal with removals
            d3.selectAll("g.assignedGroupGp")
               .each(function(d,i){
              //   console.log(d3.select(this).attr('class'));
                 if (d3.select(this).classed("Remove")){
                  // console.log(d3.select(this));
                   console.log(d.key);
                    dataLength = dataLength + parseInt(d3.select(this).select(".AssignedGroup").attr("data-length"));
                   d3.select(this).remove();
                 }

               }); // end each
            // }; //end if classed
        if (dataLength > 0) {

          calculateAndApplyHeight();

        }


             } //end if result
           }); //end launchconfirm
}


function clearOldItems() {
//  var beforeTodayDomain = ([minX]);
  d3.selectAll("g.GBarGroup").each(function(d) {
    var finishDate;
    var today = new Date();
    if(d.hasOwnProperty("newFinishDateScript")) {
      finishDate = new Date(d.newFinishDateScript);
    } else {
      finishDate = new Date(parser(convertSPDateOnly(d.FinishDateExpression["#text"])));
    }

    if (finishDate < today)
    {
      d3.select(this).remove();
    }
  });
  //reset heights
  d3.selectAll("g.assignedGroupGp").each(function() {
    console.log("num items for:" + d3.select(this).attr("id") + ":- " + d3.select(this).selectAll(".GBarGroup").size());
    var numItems = d3.select(this).selectAll(".GBarGroup").size();
    d3.select(this).select(".AssignedGroup").attr("data-length",numItems);
    if (numItems == 0) { numItems = 1; };
  //  barCtr = -1;
    d3.select(this).selectAll(".barGroup")
    .attr('y', function(d, i) {

        return i*BAR_H;

    })
    var newHeight = height*numItems*oldScale;
    d3.select(this).select(".AssignedGroup").attr("height", newHeight );

  });
  calculateAndApplyHeight();
}

d3.select("#yearsAheadTxt").on("change", function(d) {
  localStorage.setItem("YearsAhead",$("#yearsAheadTxt").val());
});
//d3.select('input[name="group-stack"]:checked').node().value
  d3.select("#ThreeWayToggle").selectAll('input').on("change", function(d) {


    console.log('clicked');
    d3.select(this.parentNode.parentNode).selectAll('label').classed('selected', false);
  //  console.log(d3.select(this);
    var selectedValue = this.value;
    console.log();
    localStorage.setItem("threeWayToggle", selectedValue);
        d3.select("#ThreeWayToggle").selectAll('input').each(function(d) {
          var checkedValue = this.value;

          if (checkedValue === selectedValue) {
              console.log("selected:" + selectedValue + ", checked:" + checkedValue);
            d3.select(this.parentNode).classed('selected', true);

          }
        })

        threeWT(selectedValue);

});

function threeWT(selectedValue) {


      if(selectedValue == "Short") {
        d3.selectAll(".barsText")
        .text(function(d) {
          return d3.select(this).attr("shortTitle");
        });
        d3.selectAll(".dateText").classed("hidden", false);
        d3.selectAll(".finDateText").classed("hidden", false);
      }
        else
        if (selectedValue == "Ref") {
          d3.selectAll(".barsText")
          .text(function(d) {
            return d3.select(this).attr("refOnly");
          });
          d3.selectAll(".dateText").classed("hidden", true);
            d3.selectAll(".finDateText").classed("hidden", true);
        } else
        if (selectedValue == "Full") {
          d3.selectAll(".barsText")
          .text(function(d) {
            return d3.select(this).attr("longTitle");

          });
          d3.selectAll(".dateText").classed("hidden", false);
          d3.selectAll(".finDateText").classed("hidden", false);
        }

}



/*
d3.select("#dontMark").on("click", function() {

//  console.log(d3.select(this).property("checked"));
});
*/
deactivateNames = false;

//compactRows = 2;

d3.select("#deactivateNamesChk").on("click", function(){
//  d3.selectAll(".labelText").classed("darker", false);
  deactivateNames = true;
});




d3.select("#findBtn").on("click", function() {
  var nameText = "";
  if (newName == "") {
    nameText = "<span class='notice'><em>(none selected)<br />CLICK ON A CHART SECTION TO ACTIVATE A NAME BEFORE CLICKING A BAR TO MOVE IT</em></span>";
  } else {
    nameText = "click the highlighted bar to move it to the current active resource: <strong>" + newName + "</strong>";
  }
  var findTitle = "Find a project";
  var findText = "Enter the project reference or description phrase:  <input type='text' id='findRef' /> "+
  "<div>" + nameText + "</div>"+
  "<div class='ms-dnd-dlg-buttonDiv'>"+
 " <input id=\"btnClientOk2\" type=\"button\" value=\"OK\" onclick=\"closePopupAndPassData2()\" /></div>";
  hideOKButton = true;
    LaunchConfirmDialogAndHandleData(findTitle,findText, onPopUpCloseCallBackWithData2, hideOKButton); //enddlg
});



function onPopUpCloseCallBackWithData2(result, returnValue) {

//console.log(returnValue);
         if(result== SP.UI.DialogResult.OK)
         {
           closePopupAndPassData2();
           console.log("returned value:" + returnValue[0]);
           var retLowerCase = returnValue[0].toLowerCase();
           var retValue = returnValue[0];
           var resultCtr = 0;
           var currentItem = 0;
           var resp = true;
           var conf = true;
      //     var myNode = d3.select("[refOnly='"+returnValue[0]+"']");
            d3.selectAll(".barsText").classed("highlight",false);
      try {


        //  console.log(d3.select("[refOnly='"+returnValue[0]+"'i]").attr("class"));

          d3.selectAll("[refOnly='"+retValue+"' i]").classed("highlight",true);
          resultCtr = d3.selectAll("[refOnly='"+retValue+"' i]").size();
        var thisObjParent = d3.selectAll("[refOnly='"+retValue+"' i]").parentNode.parentNode;
        console.log($(thisObjParent).html());
        thisObjParent.parentNode.appendChild(thisObjParent);
      //  thisObj.parentNode().parentNode().moveToFront();
          document.querySelector("[refOnly='"+retValue+"' i]").scrollIntoView();
          currentItem=1;
            while (currentItem <= resultCtr && conf == true) {
              console.log(currentItem);
            //  var conf = false;
              if (resultCtr > 1) {
               conf = confirm("Found " + resultCtr + " tasks.\\n\\nCurrently viewing result "+ currentItem +", continue?");
             }
            //  LaunchConfirmDialog("Update Resources",dlgText, function(result){
            //       if (result == true) {
            //  console.log("conf:" + conf);
            if (conf == true || resultCtr == 1)
              {
                    d3.selectAll("[refOnly*='"+retValue+"' i]").classed("highlight",true);
                  //    d3.selectAll("[refOnly='"+returnValue[currentItem]+"' i]").select(this.parentNode.parentNode).moveToFront();

                    document.querySelector("[refOnly*='"+retValue+"' i]")[0].scrollIntoView();
                    currentItem++;
              } else {
                currentItem = resultCtr;
                  document.querySelector("[refOnly*='"+retValue+"' i]")[resultCtr].scrollIntoView();
                //resp = false;
                return;
              }
            }
          } catch (ex) {
                try {
                    d3.selectAll("[longTitle*='"+retValue+"' i]").classed("highlight",true);
                    resultCtr = d3.selectAll("[longTitle*='"+retValue+"' i]").size();
                  //    d3.selectAll("[longTitle*='"+returnValue[0]+"' i]").select(this.parentNode.parentNode).moveToFront();
                  d3.selectAll("[longTitle*='"+retValue+"' i]").each(function(d, i) {
                    //    currentItem=1;

                          document.querySelector("[longTitle*='"+retValue+"' i]").scrollIntoView();
                            if(currentItem != resultCtr) {

                        //  while (currentItem <= resultCtr && conf == true ) {
                            //console.log(i);
                            var theText = d3.select(this).text();
                          //  console.log("thetext:" + theText);
                          var conf;
                          if (resultCtr > 1)
                          {
                             conf = confirm("Found " + resultCtr + " tasks.\n\nCurrently viewing result "+ parseInt(currentItem+1) +" ("+theText+"), continue?");
                          }
                            if (conf == true || resultCtr == 1)
                            {
                                  d3.selectAll("[longTitle*='"+retValue+"' i]").classed("highlight",true);
                            //      d3.selectAll("[longTitle*='"+returnValue[currentItem]+"' i]").select(this.parentNode.parentNode).moveToFront();
                                  document.querySelector("[longTitle*='"+retValue+"' i]").scrollIntoView();
                                  currentItem++;
                            } else {
                              currentItem = resultCtr;
                              return;
                            }

                      //    if(currentItem == resultCtr) { return; };
                          }
                  })
                }
                catch (ex2) {
                  alert(returnValue[0] + " not found.");
                }
          }

            // document.getElementById('<%= txtData1.ClientID %>').value = returnValue[0];
             //document.getElementById('<%= txtData2.ClientID %>').value = returnValue[1];
         }else if(result== SP.UI.DialogResult.cancel)
         {
           //cancelCounter ++;
          //   SP.UI.Status.removeAllStatus(true);
          //   var sId = SP.UI.Status.addStatus("Resize cancelled");
          //   SP.UI.Status.setStatusPriColor(sId, 'yellow');
         }
     }



     function scrollToElement(element, duration = 400, delay = 0, easing = 'cubic-in-out', endCallback = () => {}) {
       var offsetTop = window.pageYOffset || document.documentElement.scrollTop
       d3.transition()
      //   .each("end", endCallback)
         .delay(delay)
         .duration(duration)
//         .ease(easing)
         .tween("scroll", (offset => () => {
           var i = d3.interpolateNumber(offsetTop, offset);
           return t => scrollTo(0, i(t))
         })(offsetTop + element.getBoundingClientRect().top));
     }





d3.select("#collisionBtn").on("click", function(){
//  compactChart();
var rowTitle = "Compact this chart"
var inputText = "<table>"+
      "<tr><td>Enter max rows per resource:  </td>" +
      "<td><input type='text' id='numRows' value='3' />"+
      "</td></tr>"+
      "<tr><td>Enter max rows per unassigned:  </td>" +
      "<td><input type='text' id='numRowsUnassigned' value='15' />"+
      "</td></tr>"+

      "<tr><td> Leave unassigned untouched: </td>" +
        "<td><input type='checkbox' id='excludeUnassigned' checked />" +
          "</td></tr></table>"+
    "<div class='ms-dnd-dlg-buttonDiv'>"+
    " <input id=\"btnClientOk2\" type=\"button\" value=\"OK\" onclick=\"closePopupAndPassData()\" /></div>";
  hideOKButton = true;
  // var resp = LaunchConfirmDialogAndHandleData("Change item",msg, onPopUpCloseCallBackWithData, processedItem, itemIDVar, siteUrl, listName); //enddlg
  LaunchConfirmDialogAndHandleData(rowTitle,inputText, onPopUpCloseCallBackWithData, hideOKButton); //enddlg


});


function onPopUpCloseCallBackWithData(result, returnValue) {

//console.log(returnValue);
         if(result== SP.UI.DialogResult.OK)
         {
           closePopupAndPassData();
          //   SP.UI.Status.removeAllStatus(true);
          //   var sId = SP.UI.Status.addStatus("Rows compacted x " + returnValue[0]);
          //   SP.UI.Status.setStatusPriColor(sId, 'green');

          compactChart(parseInt(returnValue[0]), returnValue[1], parseInt(returnValue[2]));

          //     updateListItem(siteUrl, listName, itemIDVar, processedItem);


            // document.getElementById('<%= txtData1.ClientID %>').value = returnValue[0];
             //document.getElementById('<%= txtData2.ClientID %>').value = returnValue[1];
         }else if(result== SP.UI.DialogResult.cancel)
         {
           //cancelCounter ++;
          //   SP.UI.Status.removeAllStatus(true);
          //   var sId = SP.UI.Status.addStatus("Resize cancelled");
          //   SP.UI.Status.setStatusPriColor(sId, 'yellow');
         }
     }






function compactChart(compactRows, excludeUnassigned, compactRowsUnassigned) {

  console.log("compactRowsUnassigned:" + compactRowsUnassigned);
  console.log("excludeUnassigned:" + excludeUnassigned);
d3.selectAll(".AssignedGroup").each(function(d, i) {

  if(excludeUnassigned == true && d3.select(this).attr('assignedName') == "ZZ Not assigned") {
      return;
    } else {
//  console.log("hit it");
      var previousObj;
      var newHeight = BAR_H;
      var newY = 0;
      var hitadjusted = false;
      var testCtr = -1;
      var maxRows = compactRows;

      if (d3.select(this).attr('assignedName') == "ZZ Not assigned") {
        maxRows = compactRowsUnassigned;
      }
        newHeight = (BAR_H*oldScale+2)*(maxRows);
      var size = d3.select(this).selectAll(".barGroup").size();
    //  console.log("size:" + size);
      d3.select(this).selectAll(".barGroup")
      .each(function(d, i) {

        testCtr = -1;
      //  if ((i+1) % 2 == 0 )
        //  if ((i+1) % compactRows != 0 )
      //  {
            //d3.select(this).attr("y", (BAR_H*(compactRows-(i+1)%compactRows)));
            d3.select(this).attr("y", (BAR_H+2)*(i%maxRows));
    //    } else {


    //    d3.select(this).attr("y", 0);
    //  }


      })
    //});


      d3.select(this).select('.today').attr('y2', newHeight);
     d3.select(this).attr("height",newHeight)

   .attr('y', function (d,i) {
    var gpDim =computeDimensions(d3.select(this));
     return newHeight+gpDim.height;
   })

 } // end if not excluding unassigned
  })
   calculateAndApplyHeight();
//d3.select("[assignedName='"+testName+"']").attr("height",newHeight);

console.log("finished");
}//);


d3.select('#getDataBtn').on("click", function() {
  localStorage.setItem('chartData',JSON.stringify(getUnnestedData()));
//  localStorage.setItem('chartData',JSON.stringify(getData()));
  localStorage.setItem('chartDataDate',new Date());
  var extraMessage = "<div>Data changes in this chart have been saved in local storage on this browser and will be recalled upon F5 refresh.</div>&nbsp;<div></div>"+
"<button onclick=\"hideShowData()\">Show Data</button><div id='dataDiv' style='display: none;'>";
//  LaunchMessageDialog("Data Saved",extraMessage + JSONstringify(getUnnestedData()));
    LaunchMessageDialog("Data Saved",extraMessage + JSONstringify(getData())+"</div>");
});

d3.select('#clearDataBtn').on("click", function() {

/*  var extraMessage = "<div>Data changes in this chart have been saved in local storage on this browser and will be recalled upon F5 refresh.</div>"+
  "<div>Saved data below FYI:</div>"; */
/*  LaunchMessageDialog("Data Saved",extraMessage + JSONstringify(getUnnestedData())); */
  var clearResp = confirm("Click Ok to clear stored data, chart will refresh with latest saved XML data.\n\nNote: This cannot be undone.");
  if (clearResp == 1) {
    localStorage.removeItem('chartData');
    location.reload(true);
  }
});


function updateObjectDataNew(newNameKey, ProjectKey, oldName){
  var myDataGroups = d3.selectAll('g.assignedGroupGp');//.data();
  var tempObj = {};
  d3.select(myDataGroups)
    .each(function(group,i){
      mydata = group.data();
      mydata.values.forEach(function(project, k) {
        if(project.values[0].key == ProjectKey) {
          tempObj = project;
          console.log(tempObj);
          delete project;
        }
      })
    //  console.log(mydata);
    /*
    var projects = group.values;
    projects.forEach(function(project, k) {
  //  delete  myData[i].values[k].values[0]["#text"];
    if(project.key == ProjectKey) {
      tempObj = project;

    }
  }); */
  });
  return;
}


function getData() {

//  console.log(d3.selectAll('g.assignedGroupGp').data());
  var myData = d3.selectAll('g.assignedGroupGp').data();
  myData.forEach(function(group,i){
    var projects = group.values;
    projects.forEach(function(project, k) {
    delete  myData[i].values[k].values[0]["#text"];
    })
  });
  return myData;
}


function getUnnestedData() {

//  console.log(d3.selectAll('g.assignedGroupGp').data());
  var myData = d3.selectAll('g.assignedGroupGp').data();
  var out = [];

      myData.forEach(function(group,i){
        var projects = group.values;
        projects.forEach(function(project, k) {
        delete  myData[i].values[k].values[0]["#text"];
        out.push(project);
        })
      });
        return out;

}





function JSONstringify(json) {
    if (typeof json != 'string') {
        json = JSON.stringify(json, undefined, '');
    }

    var
        arr = [],
  /*      _string = 'color:green',
        _number = 'color:darkorange',
        _boolean = 'color:blue',
        _null = 'color:magenta',
        _key = 'color:red'; */

        _string = 'blue',
        _number = 'orange',
        _boolean = 'green',
        _null = 'magenta',
        _key = 'red';

    json = json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var style = _number;
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                style = _key;
            } else {
                style = _string;
            }
        } else if (/true|false/.test(match)) {
            style = _boolean;
        } else if (/null/.test(match)) {
            style = _null;
        }
      //  arr.push(style);
      //  arr.push('');
        if (match == '"key":') {
        return '<br /><span class=magenta><mark>' + match + '</mark></span>';

      } else {
        return '<span class='+style +">" + match + '</span>';
      }
        //return match;
    });

    arr.unshift(json);

  //  console.log.apply(console, arr);
    return(arr.toString(""));
}

/*
d3.select('#instructions').on("click", function() {
  alert("coming soon");
}) */

  catchAllZoom.on("click", function() {
  //  alert("clicked");
  //  alert('zoom clicked')
  console.log("catchall clicked, class:"+d3.select(this).attr("class"));
  d3.event.stopPropagation();
  if(zoomable == true) {

    var r = confirm("Lock zoom and pan here?");
      if (r == true) {
      //  this.call(catchAllNoZoom);
    //  catchAllZoom =  catchAll.call(d3.zoom().on("zoom", null));



      //  disableZoom();

    //  d3.select('.chart svg')
    //catchAll.attr("display", "none");
              zoomable = false;
      d3.selectAll('#zoomOverlay').classed('zoom', false)
          d3.selectAll('#zoomOverlay').classed('hidden', true)
      .attr("pointer-events", "false");

      d3.select("#UnlockZoomBtn").attr("value", "Unlock Zoom/Pan").attr("locked","true");
      //$("#instructions").text("Drag bars, use the lower pink circle to resize, the upper circle to view information");


  /*    catchAllZoom =  catchAll.on("zoom", null); */



    } else {
      // do nothing
    }
  } else {
    // zoomable not true
  //  alert("zoomable not true");
  }
    //disableZoom();
  })





/* add a button to rezooom things */




//************************************
// BROWSER DETECTION

function get_browser() {
    var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=/\brv[ :]+(\d+)/g.exec(ua) || [];
        return {name:'IE',version:(tem[1]||'')};
        }
    if(M[1]==='Chrome'){
        tem=ua.match(/\bOPR|Edge\/(\d+)/)
        if(tem!=null)   {return {name:'Opera', version:tem[1]};}
        }
    M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}
    return {
      name: M[0],
      version: M[1]
    };
 }
/*
//*************************************************
// STUFF TO TRY AND GET THE UNDERLYING group (selecting lower SVG objects)

//https://medium.com/@jstubblefield7939/collision-detection-in-d3-js-502fb01290ed
var collisionCount;
var colliding = false;
var collisionDetection = function(bar, i) {
  console.log('col detect:');
  console.log(bar.attr('class'));

//  var radius = 1;
    var radius = BAR_H;
  var collision = false;
  //var hero = bar;
  d3.selectAll(".barGroup").each(function(d, k) {
    if (i !== k) {
    var groupX = d3.select(this).attr('x');
    var groupY = d3.select(this).attr('y');
    var groupW = d3.select(this).attr('width');
    var barX = bar.attr('x');
    var barY = bar.attr('y');
    var barW = bar.attr('width');

  //  console.log(this.x);
  //  console.log("gpx:" + groupX + "; gpy:" + groupY + "; gpW:" + groupW);
  //  console.log("barx:" + barX + "; barY:" + barY);

  //  var barW =
    var a = barX - groupX;
    var b = barY - groupY;
    var c = Math.sqrt(a * a + b * b);
    var distance = b;
  //  var distance = radius;
    if (distance < radius) {

      collision = true;
      console.log("collision:" + this);

      return this;
    }
    } // end if i!=k;
  }); // end enemies.each

  if (collision && collision !== colliding) {
    collisionCount++;
  }
  colliding = collision;
  return colliding;
}; // end collisionDetection

*/
/*
var simpleCollisionDetection = function(bar, i, groupClass) {
//  console.log('col detect:');
//  console.log(d3.select(bar).attr('class'));
//      var collisions = simpleCollisionDetection(mainObjNode, i, testName);

//  var radius = 1;
  //  var radius = BAR_H;
  var newY = 0;
  var collision = false;
  var collisionCtr = 0;
  var testY = 0;
  //var barNode = d3.select(bar).node();
  //var hero = bar;
  d3.select("[assignedName="+groupClass+"]").selectAll(".barGroup").each(function(d, k) {
//    if (collision == false) {
  //    collisionCtr = 0;
//      newY = 0;
//    };
//    collisionCtr = 0;

    if (i !== k) {

    //  testObj = d3.select(this).node();
        testObj = d3.select(this); //.node();
    //  console.log(bar);
  //    console.log(testObj);
      var x = computeDimIntersect(bar, testObj);
      console.log(x);

      if(x == true)
      {
        collision = true;
        newY = parseFloat(d3.select(testObj).node().attr("y"))+BAR_H;
        collisionCtr++;
      //  return;
      } else {

      //  newY = collisionCtr*BAR_H;
        return;
      }

    //  return;
    } // end if i!=k;
      collision = false;

//    return;
  }); // end enemies.each

//console.log("i:" + i + ", class:" + groupClass + ", ctr:" + collisionCtr);
  return newY;

}; // end collisionDetection
*/
/*
var svgns = "http://www.w3.org/2000/svg";

function svgHitTest(bar, testObj) {
  //var r = evt.target.getBBox();
//  var root = document.documentElement;
//  var rpos = root.createSVGRect();
//  rpos.x = groupX;
  //rpos.y = groupY;
//rpos.width = groupW;
  //rpos.height = BAR_H;

    var list = bar.getIntersectionList(testObj, null);
      ilist = createList();
    return ilist;

}

function createList()
{
  var gtop = document.createElementNS(svgns, "g");
  var g = document.createElementNS(svgns, "g");
  g.setAttribute("id", "ilist");
  gtop.setAttribute("pointer-events", "none");
  var relm = document.createElementNS(svgns, "rect");
  relm.setAttribute("style", "fill-opacity:0.8");
  relm.setAttribute("rx", 4);
  gtop.appendChild(relm);
  gtop.appendChild(g);
  ilistbg = relm;
  document.documentElement.appendChild(gtop);
  return g;
}
*/
/*
//https://bl.ocks.org/mbostock/1747543
//http://bl.ocks.org/natebates/273b99ddf86e2e2e58ff


var force = d3.layout.force()
	.gravity(0.05)
	.charge(function(d, i) { return i ? -30 : -2000; })
	.nodes(symbolAssignees)
	.size([clWidth, bBoxHeight]);

force.on('tick', function(e) {
	var q = d3.geom.quadtree(symbolAssignees),
		i = 0,
		n = symbolAssignees.length;

	while (++i < n) {
		q.visit(collide(symbolAssignees[i]));
	}

	svg.selectAll('rect')
		.attr('x', function(d) { return d.x; })
		.attr('y', function(d) { return d.y; });
});

force.start();
*/
/*
function collide(node) {
	return function(quad, x1, y1, x2, y2) {
		var updated = false;
		if (quad.point && (quad.point !== node)) {

			var x = node.x - quad.point.x,
				y = node.y - quad.point.y,
				xSpacing = (quad.point.width + node.width) / 2,
				ySpacing = (quad.point.height + node.height) / 2,
				absX = Math.abs(x),
				absY = Math.abs(y),
				l,
				lx,
				ly;

			if (absX < xSpacing && absY < ySpacing) {
				l = Math.sqrt(x * x + y * y);

				lx = (absX - xSpacing) / l;
				ly = (absY - ySpacing) / l;

				// the one that's barely within the bounds probably triggered the collision
				if (Math.abs(lx) > Math.abs(ly)) {
					lx = 0;
				} else {
					ly = 0;
				}

				node.x -= x *= lx;
				node.y -= y *= ly;
				quad.point.x += x;
				quad.point.y += y;

				updated = true;
			}
		}
		return updated;
	};
}

function collide2(node) {
  var nx1, nx2, ny1, ny2, padding;
  padding = 32;
  nx1 = node.x - padding;
  nx2 = node.x2 + padding;
  ny1 = node.y - padding;
  ny2 = node.y2 + padding;
  return function(quad, x1, y1, x2, y2) {
    var dx, dy;
    if (quad.point && (quad.point !== node)) {
      if (overlap(node, quad.point)) {
        dx = Math.min(node.x2 - quad.point.x, quad.point.x2 - node.x) / 2;
        node.x -= dx;
        quad.point.x += dx;
        dy = Math.min(node.y2 - quad.point.y, quad.point.y2 - node.y) / 2;
        node.y -= dy;
        quad.point.y += dy;
      }
    }
    return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
  };
};






hitTest = function(o, l){
    function getOffset(o){
        for(var r = {l: o.offsetLeft, t: o.offsetTop, r: o.offsetWidth, b: o.offsetHeight};
            o = o.offsetParent; r.l += o.offsetLeft, r.t += o.offsetTop);
        return r.r += r.l, r.b += r.t, r;
    }
    var a = arguments, j = a.length;
    j > 2 && (o = {offsetLeft: o, offsetTop: l, offsetWidth: j == 5 ? a[2] : 0,
    offsetHeight: j == 5 ? a[3] : 0, offsetParent: null}, l = a[j - 1]);
    for(var b, s, r = [], a = getOffset(o), j = isNaN(l.length), i = (j ? l = [l] : l).length; i;
        b = getOffset(l[--i]), (a.l == b.l || (a.l > b.l ? a.l <= b.r : b.l <= a.r))
        && (a.t == b.t || (a.t > b.t ? a.t <= b.b : b.t <= a.b)) && (r[r.length] = l[i]));
    return j ? !!r.length : r;
};

*/

//**********************************************************






} // end d3 inclusions

d3.selection.prototype.moveToFront = function() {
    return this.each(function() {
       this.parentNode.appendChild(this);
    });
   };

   d3.selection.prototype.moveToBack = function() {
       return this.each(function() {
         const firstChild = this.parentNode.firstChild;
         if(firstChild) {
          this.parentNode.insertBefore(this, firstChild);
        }
       });
      };



Date.prototype.getWeekNumber = function(weekstart) {
  var target = new Date(this.valueOf());

  // Set default for weekstart and clamp to useful range
  if (weekstart === undefined) weekstart = 1;
  weekstart %= 7;

  // Replaced offset of (6) with (7 - weekstart)
  var dayNr = (this.getDay() + 7 - weekstart) % 7;
  target.setDate(target.getDate() - dayNr + 3);

  var firstThursday = target.valueOf();

  target.setMonth(0, 1);
  if (target.getDay() !== 4) {
      target.setMonth(0, 1 + ((4 - target.getDay()) + 7) % 7);
  }

  return 1 + Math.ceil((firstThursday - target) / 604800000);
};

Date.prototype.getFiscalWeekNumber = function(weekstart) {
  var target = new Date(this.valueOf());

  // Set default for weekstart and clamp to useful range
  if (weekstart === undefined) weekstart = 1;
  weekstart %= 7;

  // Replaced offset of (6) with (7 - weekstart)
  var dayNr = (this.getDay() + 7 - weekstart) % 7;
  var halfYear = 182; // days
  if (dayNr > halfYear) {
    dayNr = dayNr-halfYear;
  } else {
    dayNr = dayNr+halfYear;
  }
  target.setDate(target.getDate() - dayNr + 3);



  var firstThursday = target.valueOf();

  target.setMonth(0, 1);
  if (target.getDay() !== 4) {
      target.setMonth(0, 1 + ((4 - target.getDay()) + 7) % 7);
  }

  return 1 + Math.ceil((firstThursday - target) / 604800000);
};



//from this stackexchange question: http://stackoverflow.com/questions/1890203/unique-for-arrays-in-javascript
function checkUnique(arr) {
    var hash = {}, result = [];
    for ( var i = 0, l = arr.length; i < l; ++i ) {
        if ( !hash.hasOwnProperty(arr[i]) ) { //it works with objects! in FF, at least
            hash[ arr[i] ] = true;
            result.push(arr[i]);
        }
    }
    return result;
}







function getAllData() {
  d3.selectAll('chart')
}


function addBusinessDays(d,n) {
    d = new Date(d.getTime());
    var day = d.getDay();
    d.setDate(d.getDate() + n + (day === 6 ? 2 : +!day) + (Math.floor((n - 1 + (day % 6 || 1)) / 5) * 2));
    return d;
}


function calcBusinessDays(dDate1, dDate2, holidays) { // input given as Date objects
    //console.log("dDate1:" + dDate1 + ", dDate2:" + dDate2);
    var iWeeks, iDateDiff, iAdjust = 0, i;
    if (dDate2 < dDate1) return -1; // error code if dates transposed
    var iWeekday1 = dDate1.getDay(); // day of week
    var iWeekday2 = dDate2.getDay();
    iWeekday1 = (iWeekday1 == 0) ? 7 : iWeekday1; // change Sunday from 0 to 7
    iWeekday2 = (iWeekday2 == 0) ? 7 : iWeekday2;
    if ((iWeekday1 > 5) && (iWeekday2 > 5)) iAdjust = 1; // adjustment if both days on weekend
    iWeekday1 = (iWeekday1 > 5) ? 5 : iWeekday1; // only count weekdays
    iWeekday2 = (iWeekday2 > 5) ? 5 : iWeekday2;

    // calculate differnece in weeks (1000mS * 60sec * 60min * 24hrs * 7 days = 604800000)
    iWeeks = Math.floor((dDate2.getTime() - dDate1.getTime()) / 604800000)
    //console.log("iWeeks:" + iWeeks);
    if (iWeekday1 <= iWeekday2) {
      iDateDiff = (iWeeks * 5) + (iWeekday2 - iWeekday1)
    } else {
      iDateDiff = ((iWeeks + 1) * 5) - (iWeekday1 - iWeekday2)
    }

    iDateDiff -= iAdjust; // take into account both days on weekend

    for(i = 0; i < holidays.length; i++) {
      if(holidays[i] >= dDate1 && holidays[i] <= dDate2 && holidays[i].getDay() != 0 && holidays[i].getDay() != 6) {
        iDateDiff--;
      }
    }

    return (iDateDiff + 1); // add 1 because dates are inclusive
    //return (iDateDiff); // add 1 because dates are inclusive
  }

//var holidays = [ new Date(2017, 5, 2), new Date(2017, 5, 3), new Date(2017, 5, 4), new Date(2017, 5, 5) ];
var holidays = [];








function convertSPDate(d) {
/*
*  A function to convert a standard SharePoint
*  date/time field (YYYY-MM-DD HH:MM:SS) to a
*  javascript Date() object
*
*  Author: Ben Tedder (www.bentedder.com)
*/
  // split apart the date and time
  try {
  var xDate = d.split("T")[0];
  var xTime = d.split("T")[1];

  // split apart the hour, minute, & second
  var xTimeParts = xTime.split(":");
  var xHour = xTimeParts[0];
  var xMin = xTimeParts[1];
  var xSec = xTimeParts[2];

  // split apart the year, month, & day
  var xDateParts = xDate.split("-");
  var xYear = xDateParts[0];
  var xMonth = xDateParts[1];
  var xDay = xDateParts[2];

  var dDate = new Date(xYear, xMonth, xDay, xHour, xMin, xSec);
  return dDate;
} catch (ex) {
  return null;
}
}

function convertSPDateOnly(d) {
/*
*  A function to convert a standard SharePoint
*  date/time field (YYYY-MM-DD HH:MM:SS) to a
*  javascript Date() object
*
*  Author: Ben Tedder (www.bentedder.com)
*/
  // split apart the date and time
  try {
  var xDate = d.split("T")[0];
  var xTime = d.split("T")[1];

  // split apart the hour, minute, & second
  var xTimeParts = xTime.split(":");
  var xHour = xTimeParts[0];
  var xMin = xTimeParts[1];
  var xSec = xTimeParts[2];

  // split apart the year, month, & day
  var xDateParts = xDate.split("-");
  var xYear = xDateParts[0];
  var xMonth = xDateParts[1];
  var xDay = xDateParts[2];

  //var dDate = new Date(xYear, xMonth, xDay, xHour, xMin, xSec);
  //var dDate =
  return xDate;
} catch (ex) {
  return null;
}
}






function xmlToJson(xml) {

// Create the return object
var obj = {};

if (xml.nodeType == 1) { // element
  // do attributes
  if (xml.attributes.length > 0) {
  obj["@attributes"] = {};
    for (var j = 0; j < xml.attributes.length; j++) {
      var attribute = xml.attributes.item(j);
      obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
    }
  }
} else if (xml.nodeType == 3) { // text
  obj = xml.nodeValue;
} else if (xml.nodeType == 4) {  //#cdata-section
    obj = xml.nodeValue;
}

// do children
if (xml.hasChildNodes()) {
  for(var i = 0; i < xml.childNodes.length; i++) {
    var item = xml.childNodes.item(i);
    var nodeName = item.nodeName;
    if (typeof(obj[nodeName]) == "undefined") {
      obj[nodeName] = xmlToJson(item);
    } else {
      if (typeof(obj[nodeName].push) == "undefined") {
        var old = obj[nodeName];
        obj[nodeName] = [];
        obj[nodeName].push(old);
      }
      obj[nodeName].push(xmlToJson(item));
    }
  }
}
return obj;
};





function OpenDialog(strPageURL)

{

  var dialogOptions = SP.UI.$create_DialogOptions();
      dialogOptions.url = strPageURL;// URL of the Page
      dialogOptions.title = 'Glossary Definition'
      dialogOptions.allowMaximize= true
      dialogOptions.width = 650; // Width of the Dialog
      dialogOptions.height = 500; // Height of the Dialog
      dialogOptions.dialogReturnValueCallback = Function.createDelegate( null, CloseCallback); // Function to capture dialog closed event

  SP.UI.ModalDialog.showModalDialog(dialogOptions); // Open the Dialog

  return false;

}




// Dialog close event capture function

function CloseCallback(strReturnValue, target)

{

  if (strReturnValue === SP.UI.DialogResult.OK) // Perform action on Ok.

    {

   alert("User clicked Ok!");

    }

  if (strReturnValue === SP.UI.DialogResult.cancel) // Perform action on Cancel.

   {

 //  alert( "User clicked Cancel!");

   }

}

function addResource(input) {
  //console.log($(input).val());
   newName = $(input).val();


}




function alterResourceStatus(checkbox) {
//  console.log(checkbox);
//  console.log($(checkbox).is(':checked'));
  var checkedStatus = $(checkbox).is(':checked');
  var keyName = $(checkbox).attr('id');
  var resName = $(checkbox).attr('resource');
  if(checkedStatus == true)
  {
  d3.select("[id='assignedto-"+resName+"']").classed("Remove", true);

} else {
//  $("[id='assignedto-"+resName+"']").removeClass("Remove");
  d3.select("[id='assignedto-"+resName+"']").classed("Remove",false);
}

wrapper = document.querySelector('.chart');
infowrapper = document.querySelector('.aboutSpacer');

wrapperDetails = wrapper.getBoundingClientRect();
infoDetails = infowrapper.getBoundingClientRect();

bBoxHeight = wrapperDetails.height;

console.log('bboxheight:' + bBoxHeight);

$(".axisWeekFloating3.tick > line").attr("y2",-(wrapperDetails.height));

  //d3.select("[]")
  //  console.log($("[id='assignedto-"+resName+"']").html());
//  console.log(d3.select("[id='assignedto-"+resName+"']").html());
//  return d3.select("[id='assignedto-"+resName+"']").html();
}



function getTimeLastModifiedMx(folderIncSlashesAndFileName) {
  //http://sp-prod-app:93/_api/Web/GetFolderByServerRelativeUrl('Data')/Files?$filter=Name eq 'Projects.xml'
  //http://sp-prod-app:93/_api/Web/GetFileByServerRelativeUrl('/Data/Projects.xml')/ListItemAllFields //(better)

var filePath = "http://"+bwroot +"/_api/Web/GetFileByServerRelativeUrl('"+folderIncSlashesAndFileName+"')?$expand=Author";


return      $.ajax({

          method: "GET",
          url: filePath, //"http://"+supportURL+ciDataFolder+ciFileName,
          headers: { "Accept": "application/json; odata=verbose" },
          success: function (data) {
          },
          error: function() {
          }
      });

}




function hideShowData() {
  var x = document.getElementById("dataDiv");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}



function initials(cString, startingWord) {
var sInitials = "";
var wordArray = cString.split(" ");
for( i = startingWord; i<wordArray.length; i++) {
    sInitials += wordArray[i].substring(0,1).toUpperCase();
    } // end loop name words;
    return sInitials; // return initials;
} // end Initials function;

function Initials2(cString, startingWord) {
  var allInitials = cString.replace(/\W*(\w)\w*/g, '$1').toUpperCase();
  return allInitials.substr(startingWord);
} // end Initials function;



 window.MATRIXDATA = [];


Sys.Application.add_load(initSomething);
function initSomething() {
 console.log("page reloaded");



//TRAINING DATA
// NB Also find and change const trainingProjects = false if you want to disable training
 d3.xml(XMLFileName, function(error, data) {
// REGULAR data
 //d3.xml("/Data/Project Ready Matrix Data.xml", function(error, data) {
 //d3.json("deliverables.json", function(error, json) {
   if (error) return console.warn(error);

       const parser = d3.isoParse;
    //   console.log("data:");

         var json = xmlToJson(data);
    //          console.log(json);
         itemData = json.Items.Item;
         itemDataCopy = itemData;
         itemDataCopy2 = itemData;

    //     console.log(itemDataCopy);

         itemData = $(itemData).filter(function(i, n) {return n.FinishDateExpression != null ; });
         itemData = $(itemData).filter(function(i, n) {return n.FinishDateExpression["#text"] != null ; });
         itemData = $(itemData).filter(function(i, n) {return n.StartDateExpression != null ; });
         itemData = $(itemData).filter(function(i, n) {return n.StartDateExpression["#text"] != null ; });

        itemData = $(itemData).filter(function(i, n) {return n.WebHref["#text"].toUpperCase().indexOf("/TEMPLATES/") < 0 ; });
         itemData = $(itemData).filter(function(i, n) {return n.TSCProjectReadyMatrix["#text"] == "300-Construction" ; });
         itemData = $(itemData).filter(function(i, n) {return parseFloat(n.PercentComplete["#text"]) < 1 ; });


if (trainingProjects == true) {

           itemData = $(itemData).filter(function(i, n) {return n.WebHref["#text"].toUpperCase().indexOf("TRAINING") >= 0 ; });
} else {
          d3.select("#trainingProjects").property("checked", false);
           itemData = $(itemData).filter(function(i, n) {return n.WebHref["#text"].toUpperCase().indexOf("TRAINING") < 0 ; });
}

var yearsAhead = 2;

if (parseInt($('#yearsAheadTxt').val())) {
  yearsAhead = parseInt($('#yearsAheadTxt').val());
} else {
  alert ("Look x years ahead must be a number, using 2 years");
}
//*/
              // RETURN ONLY 1 YEAR IN ADVANCE (try 2)
              itemData=$(itemData).filter(function(i, n) {

                var startDate = convertSPDateOnly(n.StartDateExpression["#text"]);
                var finDate = convertSPDateOnly(n.FinishDateExpression["#text"]);
              //  var dateArr = n.StartDateExpression["#text"].split("-");
                n["originalStartDate"] = startDate;
                n["currentStartDate"] = startDate;
                n["currentFinishDate"] = finDate;
              //  var year = dateArr[0];
                var d = new Date();
                var yearFromNow = new Date(d.getFullYear()+yearsAhead, d.getMonth(), d.getDate());
                //var thisYear = d.getFullYear();
              //  console.log(thisYear);
              //  if (parseInt(year) > 2020) {
                  return new Date(startDate) < yearFromNow;
              //  }
              });


            var designMatrixtext = "040-Project Design";
                var approvalMatrixtext = "060-Approvals";

          itemData = $.map(itemData, function (item, i){

              var startDate = convertSPDateOnly(item.StartDateExpression["#text"]);
              var UniqueReference = item.UniqueReference["#text"];
              var listName = item.ListName["#text"];
              var projectTitle;

              if (listName == "Project Tracker Tasks") {
                projectTitle = item.Title["#text"];

              } else {
                projectTitle = item.WebName["#text"];
              }

              item["projectTitle"] = projectTitle;

      //// NEW STUFF RE DESIGN STATUS

              var designStatus = -1;

          //    try{
                 $(itemDataCopy).filter(function(k, desItem) {
                  // console.log(desItem.TSCProjectReadyMatrix["#text"]);
                   try {
                     thisItemMatrixText = desItem.TSCProjectReadyMatrix["#text"];
                     thisItemReference = desItem.UniqueReference["#text"];
            //     console.log("desItem PRM:" + desItem.ProjectReadyMatrix["#text"] + "desItemRef:" + desItem.Reference["#text"] + "thisItemRef:" + n.Reference["#text"]);
                    if ( designMatrixtext.localeCompare(thisItemMatrixText) == 0 && UniqueReference.localeCompare(thisItemReference) == 0) {
                      designStatus = desItem.PercentComplete["#text"];
                      return;
                      }
                  } catch(ex) {};
              });


              item["DesignStatus"] = designStatus;

  //////////////


  //// NEW STUFF RE approvalstatus

          var approvalStatus = -1;

      //    try{
             $(itemDataCopy).filter(function(j, appItem) {
              // console.log(desItem.TSCProjectReadyMatrix["#text"]);
               try {
                 thisItemMatrixText = appItem.TSCProjectReadyMatrix["#text"];
                 thisItemReference = appItem.UniqueReference["#text"];
        //     console.log("desItem PRM:" + desItem.ProjectReadyMatrix["#text"] + "desItemRef:" + desItem.Reference["#text"] + "thisItemRef:" + n.Reference["#text"]);
                if ( approvalMatrixtext.localeCompare(thisItemMatrixText) == 0 && UniqueReference.localeCompare(thisItemReference) == 0) {
                  approvalStatus = appItem.PercentComplete["#text"];
                  return;
                  }
              } catch(ex) {};
          });


          item["ApprovalStatus"] = approvalStatus;

  ////////////////////////
      var customerReqDate = "";
      var dateWarning = 0;
      try{
        customerReqDate = convertSPDateOnly(item.CustomerRequiredDateMetric["#text"]);
        var finDate = parser(convertSPDateOnly(item.FinishDateExpression["#text"]));
      //  console.log("customReqDate:" + customerReqDate + ", finDate:" +  finDate);
        dateWarning = calcBusinessDays(finDate, parser(customerReqDate), holidays);
    //    console.log("dateWarning:" + dateWarning);
      } catch (ex) {}
      item["CustomerReqDate"] = customerReqDate;
      item["CustomerReqDateWarning"] = dateWarning;

//////////////
              if(item.hasOwnProperty("assignedToName")) {
                item["AssignedToAndStartDate"] = item.assignedToName + startDate;
                item["UID"] = startDate + "_" +item.UniqueReference["#text"] + "_" + item.ID["#text"];
              } else
              if(item.AssignedTo.hasOwnProperty("#text")) {
                var splitAssTo = item.AssignedTo["#text"].split(";#");

                item["AssignedToName"] = splitAssTo[1];
                item["AssignedToId"] = splitAssTo[0];
                item["AssignedToAndStartDate"] = splitAssTo[1] + startDate;
                item["UID"] = startDate + "_" +item.UniqueReference["#text"] + "_" + item.ID["#text"];
              //  item["AssignedToName"] = item.AssignedTo["#text"];
              //  return item;
              } else {
                item.AssignedToName = "ZZ Not assigned";
                item.AssignedtoId = "0";
                item.AssignedToAndStartDate = "ZZ Not assigned"+startDate;
                item["UID"] = startDate + "_" +item.UniqueReference["#text"] + "_" + item.ID["#text"];
            //    return item;
              }

              if(item.Owner.hasOwnProperty("#text")) {
                var splitOwner = item.Owner["#text"].split(";#");

                item["OwnerName"] = splitOwner[1];
                item["OwnerId"] = splitOwner[0];
              //  item["AssignedToAndStartDate"] = splitAssTo[1] + startDate;
              //  item["UID"] = startDate + "_" +item.UniqueReference["#text"] + "_" + item.ID["#text"];
              //  item["AssignedToName"] = item.AssignedTo["#text"];
              //  return item;
              } else {
                item.OwnerName = "No owner";
                item.OwnerId = "0";
              //  item.AssignedToAndStartDate = "ZZ Not assigned"+startDate;
              //  item["UID"] = startDate + "_" +item.UniqueReference["#text"] + "_" + item.ID["#text"];
              //  return item;
              }
              return item;


          });



         itemData.sort(function (x, y) {
            //return x.AssignedTo["#text"] - y.AssignedTo["#text"];
            return x.AssignedToAndStartDate - y.AssignedToAndStartDate;

         });





 window.MATRIXDATA = itemData;
//console.log(MATRIXDATA);

   runAfterEverythingElse();


          //numberofTasks = itemData.length;
 });


}


</script>