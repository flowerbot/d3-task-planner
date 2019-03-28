var DialogReturnCode = {
    "OK" : true,
    "Cancel" : false
};



var hideOKBtn;

function DismissDlgWithCode(retCode) {
    var dlg = typeof window.top.g_childDialog != "undefined" ? window.top.g_childDialog : undefined;

    if (Boolean(dlg)) {
        dlg.close(retCode);
    }
}
function LaunchMessageDialogCoreWithData(dlgTitle, msg, isConfirmationDlg, hideOKBtn, dlgHandler) {

    if (hideOKBtn) {
      //var innerHtmlStr = "<div>{0}</div><div class='ms-dnd-dlg-buttonDiv'><button id='js-navedit-OKBtnDismissDlg' onclick='DismissDlgWithCode(DialogReturnCode.OK)'>{1}</button>";
          var innerHtmlStr = "<div>{0}</div><div class='ms-dnd-dlg-buttonDiv'>";

    } else {

      var innerHtmlStr = "<div>{0}</div><div class='ms-dnd-dlg-buttonDiv'><button id='js-navedit-OKBtnDismissDlg' onclick='DismissDlgWithCode(DialogReturnCode.OK)'>{1}</button>";

    }

    if (isConfirmationDlg == true) {
        innerHtmlStr += "<button id='js-navedit-CancelBtnDismissDlg' onclick='DismissDlgWithCode(DialogReturnCode.Cancel)'>{2}</button>";
    }
    innerHtmlStr += "</div>";
    var divElem = document.createElement("DIV");
//if (hideOKBtn == true) {

//} else {
    divElem.innerHTML = String.format(innerHtmlStr, msg, Strings.STS.L_OkButtonCaption, Strings.STS.L_CancelButtonCaption);
//

    var dopt = {
        html: divElem,
        title: dlgTitle,
        dialogReturnValueCallback: dlgHandler
    };
    var dlg = EnsureScriptParams("SP.UI.Dialog.js", "SP.UI.ModalDialog.showModalDialog", dopt);

    if (!isConfirmationDlg == false) {
        var okButton = document.getElementById('js-navedit-OKBtnDismissDlg');

        if (Boolean(okButton))
            okButton.focus();
    }
}


var item;
//var itemID;
//var siteUrl;
//var listName;
function LaunchConfirmDialogAndHandleData(dlgTitle, msg, dlgHandler, hideOKBtn) {
//  item = objItem;
//  listName = listName;
//  console.log(listName);
    LaunchMessageDialogCoreWithData(dlgTitle, msg, true, hideOKBtn, dlgHandler);
}






function closePopupAndPassData() {
       var popData = [];
      // console.log(item);
      /* popData[0] = document.getElementById('returnDate').value;
       popData[1] = document.getElementById('returnTime').value;
       popData[2] = document.getElementById('Description').value;
       */
       popData[0] = $("#numRows").val();
       popData[1] = $("#excludeUnassigned").prop("checked");
       popData[2] = $("#numRowsUnassigned").val();
  //     var parsedTime = parseTime($("#numRows").val());
       //console.log("parsed Time:" + parsedTime);
      // alert(parsedTime);
       //popData[1] = $("#returnTime").val();
    //   popData[1] = parsedTime;
    //   popData[2] = $("#Description").val();
       //console.log(popData);
       SP.UI.ModalDialog.commonModalDialogClose(SP.UI.DialogResult.OK, popData);
   }

   function closePopupAndPassData2() {
          var popData = [];
          popData[0] = $("#findRef").val();
          SP.UI.ModalDialog.commonModalDialogClose(SP.UI.DialogResult.OK, popData);
      }
