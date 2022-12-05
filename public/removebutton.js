window.onload=function(){
    document.querySelector('body').addEventListener('click',async(e) => {
        if(e.target.id=='remove'){


        fetch('/brisi/'+e.target.dataset.id, {
            method: 'DELETE', // or 'PUT'
           
            })
            .then((response) => {console.log(response); return response.status})
            .then((data) => {
                console.log('Success:', data);
                let row = document.getElementById(e.target.dataset.id);
                row.parentNode.removeChild(row);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        
        
        //document.querySelector('table').removeChild(document.getElementById(e.target.dataset.id));
        }
    })
}
console.log(2)