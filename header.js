function hereDoc(func) {
	return func.toString().split(/\n/).slice(1, -1).join('\n');
}
document.write(hereDoc(function(){/*
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
        <li><a href="index.html">首页</a></li>
        <li><a href="gp.html">股票</a></li>
        <li><a href="cj.html">财经</a></li>
        <li><a href="bk.html">博客</a></li>
        <li><a href="hq.html">行情</a></li>
        <li><a href="tp.html">图片</a></li>
        <li><a href="hjw.html">黄金网</a></li>
        <li><a href="qz.html">圈子</a></li>
        <li><a href="zb.html">直播</a></li>
        <li><a href="sc.html">市场</a></li>
        <li><a href="st.html">视听</a></li>
        <li><a href="cs.html">财视</a></li>
        <li><a href="zmt.html">自媒体</a></li>
        <li>    <div>
      <script type="text/javascript">(function() {
          document.write(unescape('%3Cdiv id="bdcs"%3E%3C/div%3E'));
          var bdcs = document.createElement('script');
          bdcs.type = 'text/javascript';
          bdcs.async = true;
          bdcs.src = 'http://znsv.baidu.com/customer_search/api/js?sid=13511023196162293292&plate_url=http%3A%2F%2Fwww.zhnacj.com%2Findex.html&t=' + Math.ceil(new Date() / 3600000);
          var s = document.getElementsByTagName('script')[0];
          s.parentNode.insertBefore(bdcs, s);
        })();</script>
    </div></li>
    </ul>
</div>
*/}));