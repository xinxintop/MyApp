regbtn.onclick=function(){
   
    
    let touxiang=touxiang1.value
    let real_name=real_name1.value
    let data=`oname=${nme.value}&upwd=${pwd.value}&phone=${tel.value}&email=${em.value}
&ogender=${sex1.value}&role=${role1.value}&real_name=${real_name}&touxiang=${touxiang}`
    console.log(data)
    let xhr=new XMLHttpRequest()
    let url='http://127.0.0.1:8080/v1/user/reg'
    xhr.open('POST',url)
    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded;charset=utf-8')
    xhr.onload=function(){
        let result=xhr.responseText
        let data=JSON.parse(result)
        
        alert(data.msg)
        window.location.href='http://127.0.0.1:8080/bg-main.html'
    }
    xhr.send(data)
}
nme.onblur=function(){
    let oname=nme.value
    let data=`oname=${oname}`
    let url='http://127.0.0.1:8080/v1/user/regpass'
    let xhr=new XMLHttpRequest()
    xhr.open('POST',url)
    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded;charset=utf-8')
    xhr.onload=function(){
        let result=xhr.responseText
        let r=JSON.parse(result)
        if(r.code==300){
            alert(r.msg)
        }
    }
    xhr.send(data)
}