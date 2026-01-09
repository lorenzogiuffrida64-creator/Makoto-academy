// ===========================================
// GOOGLE APPS SCRIPT - Makoto Jujitsu Academy
// ===========================================
//
// SETUP INSTRUCTIONS:
// 1. Go to https://script.google.com
// 2. Click "New Project"
// 3. Delete any existing code and paste ALL of this code
// 4. Click on "Services" (+ icon) → Add "Google Sheets API"
// 5. Save the project (Ctrl+S)
// 6. Click "Deploy" → "New deployment"
// 7. Select type: "Web app"
// 8. Set "Execute as": Me
// 9. Set "Who has access": Anyone
// 10. Click "Deploy" and authorize when prompted
// 11. Copy the Web App URL and update your .env.local file
//
// ===========================================

// Replace this with your Google Sheet ID
// (The ID is in the URL: https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID_HERE/edit)
const SPREADSHEET_ID = '1fRVj9t075tKspDtS-xIxX2OodND1LsRit7-_9t8RU9E';

function doPost(e) {
  try {
    // Open the spreadsheet
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = spreadsheet.getSheetByName('Richieste');

    // Create the sheet if it doesn't exist
    if (!sheet) {
      sheet = spreadsheet.insertSheet('Richieste');
      // Add headers
      sheet.appendRow([
        'Data/Ora',
        'Nome',
        'Email',
        'Telefono',
        'Corso',
        'Messaggio',
        'Stato'
      ]);
      // Format headers
      sheet.getRange(1, 1, 1, 7).setFontWeight('bold').setBackground('#D4AF37');
    }

    // Get form data
    const data = e.parameter;

    // Append the new row
    sheet.appendRow([
      data.data || new Date().toLocaleString('it-IT'),
      data.nome || '',
      data.email || '',
      data.telefono || '',
      data.corso || '',
      data.messaggio || '',
      'Nuova'
    ]);

    // Return success
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Return error
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function - run this to verify setup
function testSetup() {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  Logger.log('Spreadsheet found: ' + spreadsheet.getName());

  let sheet = spreadsheet.getSheetByName('Richieste');
  if (!sheet) {
    sheet = spreadsheet.insertSheet('Richieste');
    sheet.appendRow(['Data/Ora', 'Nome', 'Email', 'Telefono', 'Corso', 'Messaggio', 'Stato']);
    sheet.getRange(1, 1, 1, 7).setFontWeight('bold').setBackground('#D4AF37');
  }

  Logger.log('Sheet ready: ' + sheet.getName());
  Logger.log('Setup complete! You can now deploy the web app.');
}

function doGet(e) {
  return ContentService
    .createTextOutput('Makoto Academy Form Handler is active!')
    .setMimeType(ContentService.MimeType.TEXT);
}
