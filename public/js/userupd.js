
      var id = window.location.href.split("?")[1].split("=")[1];
      window.onload = function () {
        seluserbyid(id);
      };
      update1.onclick = function () {
        update(id);
      };

      function seluserbyid(id) {
        // 测试接口：http://127.0.0.1:8080/v1/user/selbyid?oid=4
        let url = `http://127.0.0.1:8080/v1/user/selbyid?oid=${id}`;

        let xhr = new XMLHttpRequest();

        xhr.open("GET", url);

        xhr.onload = function () {
          let result = JSON.parse(xhr.responseText);
          if (result.code == 200) {
            let r = result.data[0];
            nme.value = r.oname;
            real_name1.value = r.real_name;
            tel.value = r.phone;
            em.value = r.email;
            touxiang1.value = r.touxiang;
            if (parseInt(r.ogender) === 1) {
              sex1.innerHTML = `<option value="1" checked>男</option>
								                 <option value="0" >女</option>`;
            } else if (parseInt(r.ogender) == 0) {
              sex1.innerHTML = `<option value="1" >男</option>
								                <option value="0" checked>女</option>`;
            }
          } else {
            alert(result.msg);
          }
        };

        xhr.send();
      }

      function update(id) {
        let data = `oname=${nme.value}&real_name=${real_name1.value}&ogender=${sex1.value}&phone=${tel.value}&touxiang=${touxiang1.value}&oid=${id}`;
        let url = " http://127.0.0.1:8080/v1/user/update";
        let xhr = new XMLHttpRequest();
        xhr.open("PUT", url);
        xhr.setRequestHeader(
          "Content-type",
          "application/x-www-form-urlencoded;charset=utf-8"
        );
        xhr.onload = function () {
          let r = JSON.parse(xhr.responseText);
          console.log(r);
          if (r.code == 200) {
            alert("修改成功");
          } else {
            alert("修改失败");
          }
        };
        xhr.send(data);
      }
 