window.onload=function(){
    showALL()
  }

  function  showALL(){
      let xhr=new XMLHttpRequest()
      let url=`http://127.0.0.1:8080/v1/course/showALL`
      xhr.open('GET',url)
      xhr.onload=function(){
          let result=JSON.parse(xhr.responseText)
          if(result.code===200){
            let html=''
           let data=result.data
            for(let i=0;i<data.length;i++){
                let cote=data[i].cote_id
                let state=data[i].state==0?'进行中':'已完结'
                if(cote==1){
                     cote='免费课'
                }else if(cote==2){
                     cote='直播课'
                }else if(cote==3){
                     cote='线上课'
                }else if(cote==4){
                     cote='线下课'
                }
                html+=`
                <tr>
                <td>${data[i].cour_id}</td>    
                <td>${data[i].cour_name}</td>  
                <td>${cote}</td>     
                <td>${data[i].content}</td>     
                <td>${state}</td>
                <td>
                <div class="btn-group btn-group-sm">
                    <a class="btn btn-outline-danger" href="javascript:del(${data[i].cour_id})">删除</a>
                    <a class="btn btn-outline-primary"  href="./courUpd.html?id=${data[i].cour_id}">修改</a>
                    </div>
                    </td>    
                </tr>
                `           
                tbody.innerHTML=html
            }
          }else{
                alert('查询失败')
          }
      }
      xhr.send()
  }
  
  function  del(cour_id){
      let url=`http://127.0.0.1:8080/v1/course/del?cour_id=${cour_id}`
      let xhr=new XMLHttpRequest()
       
      xhr.open('DELETE',url)
      xhr.onload=function(){
        let r=JSON.parse(xhr.responseText)
        if(r.code===200){
            showALL()
        }else{
            alert('删除失败')
        }
      }
      xhr.send()
  }