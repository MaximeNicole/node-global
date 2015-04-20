(function () {

  'use strict';

  var taskForm = $('#task-form input.date');
  taskForm.datepicker({
    format: "dd/mm/yyyy",
    todayBtn: "linked",
    language: "fr",
    orientation: "top right",
    autoclose: true,
    todayHighlight: true
  });

})();
