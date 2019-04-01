# d3-task-planner
# A task planner for multiple projects in BrightWork (SharePoint Project Management)

**The problem**
On any given day, a work team (resource) is responsible for a single task which comes from any one of a large number of projects.  Timing across multiple projects is critical to ensure teams are fully employed without downtime.  Resource planners needed a resource-focussed planning tool to focus on the resource programme, and found that other gantt applications, which are time-focussed, are not flexible enough for their needs. An Excel worksheet arranged by resource, using overlaid textboxes which could be moved not only left to right (time) but also up and down (resource) had been used for many years.  

**The approach**
Given that task dates and resource status were also being recorded in BrightWork projects (SharePoint task lists), this chart uses the same principles as the original Excel worksheet, with additional features that enable data to be read and saved back to the BrightWork project directly from the chart.

**This solution**

[Click here](https://flowerbot.github.io/d3-task-planner/planner.htm) to view an 'unSharePointed' version* of it.   

* There are a couple of extra js files that I need to copy over when I can, which handle the Dialogs within SharePoint. However if you are ok the w3schools version of the dialogs I put in to make it display without SP, you can probably keep them and it should still work.
* Some of the the dialog links do nothing and go nowhere, but you get the general idea.

This solution would not be possible without the open source and sharing ethos of the interwebs and uses: 
* D3 V4 and references its many examples, using https://codepen.io/jey/full/jmClJ/ as a starting point, thanks!  
* Besides the main inspiration above, where I learnt/borrowed most heavily there is a note in the code.
* The inspiration chart and others like it, calculate the Y axis and positions not using D3's Y scale.  I wanted to try and use yScale but couldn't get my head around the nesting/sub data required to make it work - when I got close it didn't look as pretty. 
* jQuery cos SharePoint 2013 has it built-in and doesn't yet support npm/React etc
* Font Awesome for the function button icons
* SharePoint custom column (lookup) value to determine which of the tasks to display
* BrightWork's reporter function > export as XML

**Observations**
* This could be rewritten to traverse a SharePoint site collection in real time, or alternatively use any other XML data source, etc
** Yeah the code could be better organised and more efficient, and I could delete all my console logging .. not 100% sorry about that :)


