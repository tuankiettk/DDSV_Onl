

function addRowHandlers() {
     var table = document.getElementById("tbSubject");
     var rows = table.getElementsByTagName("tr");
     for (i = 1; i < rows.length; i++) {
         row = table.rows[i];
         row.onclick = function(){
                           var cell = this.getElementsByTagName("td")[0];
                           var id = cell.innerHTML;
                           alert("id:" + id);
                       };
    }
}


//Đăng nhập
//const account = require("../../app/models/account")

$.ajax({
     type: 'POST',
     url: '/cookies',
     success: (data) => {
         var account = ``;
          if(data != 'false') {
               account = `<a class="dropdown-acc nav-link dropdown-toggle" href="/login" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" style="color: white;">
               `+ data.username +`
             </a>
             <ul class="dropdown-menu dropdown-menu-light" aria-labelledby="navbarDarkDropdownMenuLink">
               <li><a class="dropdown-item" href="/login">Đăng nhập</a></li>
               <li><a class="dropdown-item" href="/logout">Đăng xuất</a></li>
             </ul>`;
             $('#user_login').html(account);
          }
     }
})

$('#btn_search').click(function(){
     var mssv = $('#name_search').val();
     var data = {
          name_search: mssv
     };
     fetch('/statistical/search', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
     })
     .then(function(response){
          return response.json()
     })
     .then(function(response){
          var sv=``;
          var tb=``;
          for(var i =0; i<response.sv.length; i++){
               sv= sv+`
               <option value="${response.sv[i].mssv}">${response.sv[i].hoten}</option>
               `;
          }
          for(var i =0; i<response.data.length; i++){
               tb= tb+`
               <tr>
                    <td>${response.data[i].mssv}</td>
                    <td>${response.data[i].hoten}</td>
                    <td>${response.data[i].malop}</td>
                    <td>${response.data[i].tenmon}</td>
                    <td>${response.data[i].ngay}</td>
               </tr>
               `;
          }
          $('#name_search').html(sv);
          $('#myTable').html(tb);
     })
})
