# 字段用占位符说明
## Alert
	占位符不要与前面的属性名相同，否则会直接调用前面相同属性名的值。for example:{
	'str':'@str(lower,2,5)', // 返回 ’abc‘
	’str2':'@str(symbol)'   //@str直接调用前面的‘str’对应的值
	}.另外，占位符其实就是函数，如果不传参数可以不写().
## Basic

|占位符|Description|
|--------|---------|
|@boolean(min,max,cur)|生成cur（true或false）的概率为min/min+max|
|@bool(min,max,cur)|@bool是@boolean的简写形式|
|@natural(min,max)|随机生成一个自然数|
|@integer(min,max)|随机生成一个整数|
|@int(min,max)|@int是@integer的简写形式|
|@float(min,max,dmin,dmax)|随机生成一个浮点数,min<=整数部分<=max,dmin<=小数位数<=dmax|
|@character(pool)|pool有四种lower,upper,number,symbol，随机返回相应的一个字符，否则随机返回四种其中一种字符，例如@character(number)只能返回数字。|
|@char(pool)|@char是@character的简写|
|@string(pool,min,max)|随机生成一个字符串|
|@str(pool,min,max)|@str为@string的简写形势|
|@str()|返回一个3~7长度的字符串'pJjDud'|
|@str(symbol)|返回一个symbol类型的字符串，长度默认3～7|
|@str(lower,3)|返回一个小写的最小长度为3的字符串|
|@str(2,15)|返回一个2~15长度的字符串'pJjDuddfdfdfge'|
|@str(upper,3,5)|返回一个3到5长度的大写字符串|
|@range(start,stop,step)|返回一个从start开始（>=)，结束（<）于stop，每次递增step的整型数组，start必选|

## Name
|占位符|Description|
|--------|--------|
|@first|英文 名|
|@last|英文 姓|
|@name|英文 全名|
|@cname|中文姓名|

## Text
|占位符|Description|
|--------|--------|
|@paragraph|返回一个段落字符串|
|@sentence|返回一句话|
|@word|返回一个单词|
|@title|返回一个标题|

## Helper
|占位符|Description|
|--------|--------|
|@capitalize|将首写字母大写，比如 @capitalize(@first)|
|@upper|转换为大写,比如: @upper(@word)|
|@lower|转换为小写，比如： @lower(@word)|

## Color
|占位符|Description|
|--------|--------|
|@hex()|返回一个16进制的颜色|
|@color()|调用@hex()返回一个16进制的颜色|
|@rgb()|返回rgb模式的颜色|
|@rgba()|返回rgba模式的颜色|
|@hsl()|返回hue,saturation,lightness模式的颜色|

## Image
|占位符|Description|
|--------|--------|
|@image|生成一个随机大小，背景色默认为#000000,前景色默认为#ffffff,格式（png，jpg，gif）随机，文本内容为尺寸的图片。|
|@image(size,background,foreground,format,text)|全参数 例如@image(120x120,#e0f,#eee,png,@word)|
|@dataImage(size,text)|参数都是可选的。返回一个base64编码的图片|

## Date&Time
|占位符|Description|
|--------|--------|
|@date|返回一个随机日期字符串|
|@time|返回一个随机时间字符串|
|@datetime|返回一个随机日期+时间字符串|
|@now|返回现在的日期时间字符串|

## Address

|占位符 |Description|
|--------|--------|
|@region|随机生成中国大区|
|@province|随机生成一个中国省（直辖市、自治区|
|@city|随机生成(中国)市|
|@county|随机生成一个（中国）县|
|@zip|随机生成一个邮政编码（六位数字）|

## Web
|占位符|Description|
|--------|--------|
|@url|生成一个url 例如： http://www.baidu.com/resource.jpg |
|@domain|生成一个域名|
|@ip|生成一个ip地址|
|@tld|生成一个顶级域名（top level domain）例如 net 或者 com|
|@email|生成一个邮箱地址|

## Miscellaneous
|占位符|Description|
|--------|--------|
|@guid|生成一个guid（global unique identifier）全局唯一标识符|
|@id|生成一个身份证号|
|@increment(step)|生成一个全局自增的数，step是可选的|










