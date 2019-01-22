# Nano Interactive
## General Compatibility
|Feature|  |
|---|---|
| Consent | N |
| Native Ad Support | N |
| SafeFrame Support | Y |
| PMP Support | N|
 
## Browser Compatibility
| Browser |  |
|--- |---|
| Chrome | Y |
| Edge | Y |
| Firefox | Y |
| Internet Explorer 9 |  N|
| Internet Explorer 10 | Y |
| Internet Explorer 11 | Y |
| Safari | Y |
| Mobile Chrome | Y|
| Mobile Safari | Y |
| UC Browser | N|
| Samsung Internet |Y |
| Opera |Y |
 
## Adapter Information
| Info | |
|---|---|
| Partner Id | NanoInteractiveHtb |
| Ad Server Responds in (Cents, Dollars, etc) | EUR |
| Bid Type (Gross / Net) | Net|
| GAM Key (Open Market) | ix_nano_cpm |
| GAM Key (Private Market) |ix_nano_cpm |
| Ad Server URLs | ad.audiencemanager.de/hb|
| Slot Mapping Sytle (Size / Multiple Sizes / Slot) | Multiple Sizes|
| Request Architecture (MRA / SRA) | SRA |
 
## Currencies Supported
 EUR
## Bid Request Information
### Parameters
| Key | Required | Type | Description |
|---|---|---|---|
|pid|Yes|String|Placement id|
|nq|No|String|User's search query|
|name|No|String|name of the query param extracted from the url of the search. For example: if your web page url is http://some-domain.dev/?search=some_search the value of the name param will be “search”|
|category|No|String|IAB Category of the web page. Please check category under https://www.iab.com/wp-content/uploads/2016/07/IABTechLab_Content_Taxonomy_2016-07.xls |
|subId|No|String|Sub ID or Label provided by the Publisher, it can be any string value. Most common use is on Reporting, where you can group by subId string value.|

 
### Example
```javascript
 
```
 
## Bid Response Information
### Bid Example
```javascript
 
```
### Pass Example
```javascript
 
```
 
## Configuration Information
### Configuration Keys
| Key | Required | Type | Description |
|---|---|---|---|
| | | | |
### Example
```javascript
 
```
