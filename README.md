altcoin-google-spreadsheet
==========================

Altcoin price tracker into a google spreadsheet.

![Livedemoscreehshot](http://www.lize.it/up/altcoin_screenshot.png)

#How does it work?
Try the [Live Demo](http://goo.gl/RvCxne ) .

It scrapes data from http://coinmarketcap.com . The data is contained in the sheet called *Price Ticker*.

It all goes down to the magic done by importHtml() function with some tricks and parsing.
```
=importHtml("http://coinmarketcap.com/?"& year(now()) & month(now()) & day(now()) & hour(now()),"table",1)
```
Then I made some magic to be sure to keep coins in the same order and to parse the data.

#How to use it

There are a few steps needed for having this work on your own spreadsheet: 
- Make a copy of the [Live Demo](http://goo.gl/RvCxne )  and open it
- Past the content of [Code.gs](https://github.com/adv0r/altcoin-google-spreadsheet/blob/master/Code.gs) into a new script
- Create a new trigger that calls the function *transferValue()* every 5 minutes
- Done

If you need help in setting this up, I'll be glad to help. Mail *nico@botcoin.io* and attach some coins if you want to get out of the noise ;) .

#TIPS:	
## Help this project if you think that this project helps you
-  BTC	1NgDPjxNWxTUK9eUExEmAGj4mtiMLGFvYr

#Discuss it	
  
 [bitcointalk](https://bitcointalk.org/index.php?topic=368226) 
 
 [reddit](http://www.reddit.com/r/CryptoMarkets/comments/1spnk3/online_spreadsheet_with_altcoins_live_data/) 	
