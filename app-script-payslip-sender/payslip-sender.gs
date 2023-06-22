function paySlipSender() {
  var spreadsheet = SpreadsheetApp.getActive().getSheetByName('List');
  var dataRange = spreadsheet.getRange("A2:D4").getValues();

  // dataRange = [
  //   [1, "Shisam", "shisamgyawali63@gmail.com", 100000],

  // ]
  
  Logger.log(dataRange);
  for(var i=0; i < dataRange.length; i++){
    var employeeData = dataRange[i];
    var employeeName = employeeData[1];
    var salary = employeeData[3];
    var email = employeeData[2];
    var payslipMessageContent = payslipMessage(employeeName, salary);
    // Logger.log(dataRange[i]);
    //Logger.log(email);
    MailApp.sendEmail(email, 'Payslip', payslipMessageContent);

    var statusCell = spreadsheet.getRange("E" + (i + 2));
    statusCell.setValue('Success');

  }
}

function payslipMessage(employeeName, salary){
  var message = "Hi" + employeeName + "\n";
  message += "Your salary for the month of May has been deposited!\n";
  message += "Payable: " + salary + "\n";

  message += "Thanks";
  return message;
}







