/* Author : nico@botcoin.io

The MIT License (MIT)

Copyright (c) 2013 Nicolò Paternoster

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

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