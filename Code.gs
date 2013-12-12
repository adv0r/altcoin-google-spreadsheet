// mail nico@botcoin.io

function parseUsd(raw) //parse the value of 1 coin
{
  var endindex= raw.lastIndexOf(".") -1;
  
  return raw.substring(1,endindex);
}

function parseBtc(raw) //parse the value of 1 coin
{
  var startindex = raw.lastIndexOf(".") -1;
  var endindex = raw.length -3;
  return raw.substring(startindex,endindex);
}

function getLineOf(coin)  //Gets the line at which to look at the price of the coin from coinmarketcap html scrape
{
 var rowNumber = -1;
 var sheetCoinMarket = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('CoinmarketCapHTML');

 var dataCoinMarket = sheetCoinMarket.getDataRange().getValues(); // read all data in the sheet

 for(n=1;n<dataCoinMarket.length;++n){ // iterate row by row and examine data in column B
   if(dataCoinMarket[n][1].toString().match(coin)==coin){  // if column B contains 'coin' 
     rowNumber = n+1;
     break;
   }
 }
 return rowNumber;
}

function transferValues()
{
   var sheet1 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('CoinmarketCapHTML');
   var sheet2 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('CoinmarketCAPtemporized');
  
   var dataCoinMarket = sheet1.getDataRange().getValues(); // read all data in the sheet

   var destRange = sheet2.getRange("A1:J50");
   sheet1.getRange("A1:J50").copyTo(destRange,{contentsOnly:true});
}