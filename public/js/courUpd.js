var id = window.location.href.split("?")[1].split("=")[1]
			window.onload=function(){
                selByid(id)
			}
			couraddbtn.onclick=function(){				 
				update(id)
			}
             
			function selByid(id){
				let url=`http://127.0.0.1:8080/v1/course/showByID?cour_id=${id}`
				let xhr=new XMLHttpRequest()
				xhr.open('GET',url)
				xhr.onload=function(){
                     let result=JSON.parse(xhr.responseText)
					 courName.value=result[0].cour_name
					 cont.value=result[0].content
					 console.log(result[0].state)
					 if(result[0].state==0){
						state.innerHTML=` <option value="1">已完结</option>
			            <option value="0" selected>进行中</option>`
					 }else{
						state.innerHTML=`<option value="1" selected>已完结</option>
			          <option value="0">进行中</option>`
					 }
					 if(result[0].code_id==1){
						cotegory.innerHTML=`
						<option value="1" selected>免费课</option>
			            <option value="2">直播课</option>
                        <option value="3">线上课</option>
                        <option value="4">线下课</option>
						`
					 }else if(result[0].code_id==2){
						cotegory.innerHTML=`
						<option value="1">免费课</option>
			            <option value="2" selected>直播课</option>
                        <option value="3">线上课</option>
                        <option value="4">线下课</option>
						`
					 }else if(result[0].code_id==3){
						cotegory.innerHTML=`
						<option value="1">免费课</option>
			            <option value="2" >直播课</option>
                        <option value="3" selected>线上课</option>
                        <option value="4">线下课</option>
						`
					 }else {
						cotegory.innerHTML=`
						<option value="1">免费课</option>
			            <option value="2" >直播课</option>
                        <option value="3">线上课</option>
                        <option value="4" selected>线下课</option>
						`
					 }
				 
			          
				}
				xhr.send()
			}
            
			function update(id){
				
				 let data=`cour_name=${courName.value}&content=${cont.value}&cote_id=${cotegory.value}
				&state=${state.value}&cour_id=${id}`
				let url=' http://127.0.0.1:8080/v1/course/upd'
				let xhr=new XMLHttpRequest()
				xhr.open('PUT',url)
				xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded;charset=utf-8')
				xhr.onload=function(){
					let r=JSON.parse(xhr.responseText)
					console.log(r)
                    if(r.code==200){
						alert('修改成功')
					}else{
						alert('修改失败')
					}
				}
				xhr.send(data) 
			}