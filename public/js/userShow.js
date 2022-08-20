window.onload=function(){
    showALL()
}
function showALL(){
    let xhr=new XMLHttpRequest()
    xhr.open('GET','http://127.0.0.1:8080/v1/user/showAll')
    xhr.onload=function(){
        let html=''
        let result=JSON.parse(xhr.responseText)
        for(let i=0;i<result.length;i++){
            let role=parseInt(result[i].role)==0?'教师':'学员'
            let sex=parseInt(result[i].ogender)==1?'男':'女'
            html+=`
            <tr>
                <td>${result[i].oid}</td>
                <td>${result[i].oname}</td>
                <td>${sex}</td>
                <td>${result[i].email}</td>
                <td>${result[i].phone}</td>
                <td>${role}</td>
                <td >
                    <div class="btn-group btn-group-sm">
                    <a class="btn btn-outline-danger " href="javascript:delbyID(${result[i].oid})">删除</a>
                    <a class="btn btn-outline-success "  href="./userUpd.html?id=${result[i].oid}">编辑</a>   
                    </div>
                    </td>
            </tr>
            `
            tbody.innerHTML=html
        }
    }
    xhr.send()
}

function delbyID(oid){
    
    let xhr=new XMLHttpRequest()
    xhr.open('DELETE','http://127.0.0.1:8080/v1/user/del/'+oid)
    xhr.onload=function(){
        let result=JSON.parse(xhr.responseText)
        console.log(result.code)
        if(Number(result.code==200)){
            showALL()
        }else{
            alert('删除失败')
        }
    }
    xhr.send()
}

