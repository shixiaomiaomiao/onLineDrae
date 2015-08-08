window.onload = function()
{
	/*给颜色工具栏添加颜色*/
	var oColor = document.getElementById("color");
	var colorLi = oColor.getElementsByTagName("li");
	for ( var i = 0 ; i < colorLi.length ; i++ )
	{
		colorLi[i].style.background = colorLi[i].getAttribute("id") ;
	}
	/*****给所有的li加上hover事件********/
	var section = document.getElementsByTagName("section")[0];
	var liArr = document.getElementsByTagName("li");
	for ( var i = 0 ; i < liArr.length ; i++ )
	{
		liArr[i] function() {
			
		}
	}
}
		