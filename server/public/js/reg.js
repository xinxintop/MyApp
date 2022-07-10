regbtn.onclick=function(){
    let oname=nme.value
    let upwd=pwd.value
    let phone=tel.value
    let email=em.value
    
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
    }
    xhr.send(data)
}