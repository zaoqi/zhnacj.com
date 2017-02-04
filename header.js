function header(){
	return hereDoc(function(){/*
<style type="text/css">
* {
	margin: 0px;
	padding: 0px;
}

.topbar {
	width: 100%;
	background-color: #000;
	display: inline-block;
}

.topbar li {
	float: left;
}

.toplist {
	display: inline-block;
	list-style-type: none;
}

.toplist a,.toplist input {
	color: #FFF;
	background-color: #000;
	border-left: 0;
   border-right: 0;
   border-top: 0;
	text-decoration: none;
	display: block;
	float: left;
	padding: 0.1cm 0.2cm 0.1cm 0.2cm;
	font-size: 0.6cm;
}

</style>
<div class="topbar">
    <ul class="toplist">
        <li><a href="">股票</a></li>
        <li><a href="">财经</a></li>
        <li><a href="">博客</a></li>
        <li><a href="">行情</a></li>
        <li><a href="">图片</a></li>
        <li><a href="">黄金网</a></li>
        <li><a href="">圈子</a></li>
        <li><a href="">直播</a></li>
        <li><a href="">市场</a></li>
        <li><a href="">视听</a></li>
        <li><a href="">财视</a></li>
        <li><a href="">自媒体</a></li>
        <li><input type="text" id="search" /><input type="button" onclick="javascript:search()" value="搜索" /></li>
    </ul>
</div>
*/})
}
function hereDoc(func) {
	return func.toString().split(/\n/).slice(1, -1).join('\n');
}