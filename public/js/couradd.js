couraddbtn.onclick=function(){
    let data=`cour_name=${courName.value}&content=${cont.value}&cote_id=${cotegory.value}
    &state=${state.value}`
    let url=' http://127.0.0.1:8080/v1/course/add'
    let xhr=new XMLHttpRequest()
    xhr.open('POST',url)
    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded;charset=utf-8')
    xhr.onload=function(){
        let r=JSON.parse(xhr.responseText)
        if(r.code==200){
            alert('添加成功')
        }else{
            alert('添加失败')
        }
    }
    xhr.send(data)
}