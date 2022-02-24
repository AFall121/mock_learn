//  basic use
const Mock = require('mockjs')

const students = Mock.mock({
	'list|1-10': [{
		'guid':'@guid',
		'id':'@id',
		'increment':'@increment',
		'grade|1-9':1,
		'class|1-5':1,
		'first_name': '@first',
		'last_name': '@last',
		'full_name': '@first @last',
		'define_name':'@name',
		'chineseName':'@cname',
		'age|10-20': 10,
		'area': '@area',
		'provience':'@region',
		'city':'@city',
		'boolean':'@boolean(1,9,false)',
		'character_default':'@character()',
		'character_dustom':'@character(number)',	
		'char':"@char(symbol)",
		'str1':'@str()',
		'str3':'@str(2,15)',
		'str4':'@str(lower,2,5)',
		'str5':'@str(woaini,1,3)',
		'range1':'@range(2)',
		'range2':'@range(2,10)',
		'range3':'@range(2,5,2)',
		'color0':'@hex()',
		'color1':"@color()",
		'color2':'@hsl()',
		'color3':'@rgb()',
		'color4':'@rgba()',
		'date':'@date()',
		'time':'@time()',
		'datetime':'@datetime',
		'now':'@now()',
		'image1':'@image',
		'image2':'@image(240x360,#02adea)',
		'image3':'@image(240x360,#02adea,hello)',
		'image4':'@image(360x360,#000000,#00f,world)',
		'image5':'@image(360x120,@color,@color,png,@last)',
		'image6':'@image(360x240,@color,@color,jpg,@first)',//不要用@cname

		// 'dataImage':'@dataImage',没有canvas没法用
		'capitalize':'@capitalize(@first)',
		'uppercase':'@upper(@first)',
		'lowercase':'@lower(@last)',
		'paragraph':'@paragraph',
		'sentence':'@sentence',
		'word':'@word',
		'title':'@title',
		'url':'@url',
		'domain':'@domain',
		'ip':'@ip',
		'email':'@email',
		'top_level_domain':'@tld',

	}]
})

console.log(students)