function LaunchMessageDialog(dlgTitle,dlgText,action) {
// Get the modal

  $(".modal-body").html(dlgText);
  $(".modal-header h2").html(dlgTitle);
  //$("").css("display", "block");
  var modal = document.getElementById('myModal');
      modal.style.display="block";
  // Get the button that opens the modal
  //  var btn = document.getElementById(btnID);

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  var footer = document.getElementById('modal-footer');

  footer.style.display = "none";

  // When the user clicks on the button, open the modal
  //  btn.onclick = function() {
  //    modal.style.display = "block";
  //    }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
  modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";

    }
  }
}


function LaunchConfirmDialog(dlgTitle,dlgText, action) {
// Get the modal

  $(".modal-body").html(dlgText);
  $(".modal-header h2").html(dlgTitle);
  var modal = document.getElementById('myModal');
      modal.style.display="block";
      var footer = document.getElementById('modal-footer');
      footer.style.display = "block";

      var okBtn = document.getElementById('modal-footer-Okbtn');
      var cclBtn = document.getElementById('modal-footer-Cancelbtn');


cclBtn.onclick = function() {
  modal.style.display = "none";
}

okBtn.onclick = function() {
  modal.style.display = "none";
  if (dlgTitle == "Update Resources") {
    //call a function
    updateResources();
  //  return true;
  } else {
    // do some other stuff
  }
}

  // Get the button that opens the modal
  //  var btn = document.getElementById(btnID);

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  //  btn.onclick = function() {
  //    modal.style.display = "block";
  //    }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
  modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

function LaunchConfirmDialogAndHandleData(dlgTitle,dlgText, action) {
// Get the modal

  $(".modal-body").html(dlgText);
  $(".modal-header h2").html(dlgTitle);
  var modal = document.getElementById('myModal');
      modal.style.display="block";
      var footer = document.getElementById('modal-footer');
      footer.style.display = "block";

      var okBtn = document.getElementById('modal-footer-Okbtn');
      var cclBtn = document.getElementById('modal-footer-Cancelbtn');


cclBtn.onclick = function() {
  modal.style.display = "none";
}

okBtn.onclick = function() {
  modal.style.display = "none";
  if (dlgTitle == "Compact this chart") {

    var popData = [];
    popData[0] = $("#numRows").val();
    popData[1] = $("#excludeUnassigned").prop("checked");
    popData[2] = $("#numRowsUnassigned").val();

    compactChart(parseInt(popData[0]), popData[1], parseInt(popData[2]));

  //  onPopUpCloseCallBackWithData(Sp.UI.DialogResult.OK, popData);
    //call a function
//    updateResources();
  //  return true;
} else if (dlgTitle = "Find a project") {
    var popData = [];
      popData[0] = $("#findRef").val();
      onPopUpCloseCallBackWithData2(true, popData);
  } else {
    // do some other stuff
  }
}

  // Get the button that opens the modal
  //  var btn = document.getElementById(btnID);

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  //  btn.onclick = function() {
  //    modal.style.display = "block";
  //    }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
  modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}
