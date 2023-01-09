window.addEventListener('DOMContentLoaded',(event) => {
      createInnerHtml();
});

const createInnerHtml=() => {
    const headerHtml=" <th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th>"+
                     "<th>Start Date</th><th>Actions</th>"
    const innerHtml= `${headerHtml}
   
        <tr>
            <td><img class="profile" alt="profile1" src="Photo/Profile4.png"></td>
            <td>Saptarshi Biswas</td>
            <td>Male</td>
            <td><div class="dept-label">Engineering</div>
                <div class="dept-label">HR</div></td>
            <td>400000</td>
            <td>1 Jul 2019</td>  
            <td>
                <img id="1" onclick="remove(this)" alt="delete"
                     src="Photo/delete.png">
                <img id="1" onclick="update(this)" alt="edit"
                     src="Photo/Update1.png">     
            </td>  
           
        </tr>
        <tr>
            <td><img class="profile" alt="profile1" src="Photo/Profile1.png"></td>
            <td>Shreya Ghosh</td>
            <td>Female</td>
            <td><div class="dept-label">Finance</div>
                <div class="dept-label">HR</div></td>
            <td>300000</td>
            <td>1 Jan 2020</td>  
            <td>
                <img id="1" onclick="remove(this)" alt="delete"
                     src="Photo/delete.png">
                <img id="1" onclick="update(this)" alt="edit"
                     src="Photo/Update1.png">     
            </td>  
           
        </tr>
       

        `
        ;
        document.querySelector('#table-display').innerHTML=innerHtml;
}