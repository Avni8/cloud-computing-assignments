function sendEmail() {
  const formResponsesSheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const dataRange = formResponsesSheet.getDataRange();
  const data = dataRange.getValues();

  const lastRowIndex = dataRange.getLastRow();
  const lastResponse = data[lastRowIndex - 1];

  const name = lastResponse[1]; 
  const email = lastResponse[4]; 

  const subject = "Form Submission Confirmation";
  const body = "Dear" +  name + ",\n\nThank you for submitting the form. Your participation is highly valued and appreciated.\n\nBest Regards,\nAvni Ghimire";

  MailApp.sendEmail(email, subject, body);
  Logger.log(email, subject, body)
  
}
