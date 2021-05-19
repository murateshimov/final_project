   var menuBtn = document.getElementyId("menuBtn")
	var sideNav = document.getElementyId("sideNav")
	var menu = document.getElementyId("menu")

	menuBtn.onclick = function(){
		if(sideNav.style.right == "-250px"){
			sideNav.style.right = "0";
		}
		else{
			sideNav.style.right = "=-250px";
		}
	}