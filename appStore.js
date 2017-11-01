		result=document.getElementById('result');
		table=document.getElementById('table');
		var u = '';
		var v = '';
		function button(u)
		{
			if (result.innerHTML==0) 
			{
				result.innerHTML = u;
			}
			else 
			{
				result.innerHTML = parseInt(result.innerHTML) +u; 
			}
		}
		function app1()
		{
				table.style.borderColor = "purple";
			
		}
		function app2()
		{
				table.style.borderColor = "orange";
			
		}
		function app3()
		{
				table.style.borderColor = "green";
			
		}