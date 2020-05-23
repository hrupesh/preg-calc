
var d = new Date();

// var default_date = Date(d.getDate(), (d.getMonth()+1), d.getFullYear());
// console.log(default_date);

var default_date = new Date(d.toDateString());
default_date =  (d.getMonth()+1) + '/' + default_date.getDate() + '/' + d.getFullYear();
console.log(default_date);

$(window).on('load',function(){
    $('#date-input').val(default_date);
})

function calculate(){
    // alert('calcluating.........');
    // console.log(event.target);

    var lpdate = document.getElementById('date-input').value;

    var lp_date = new Date(lpdate);

    Date.prototype.addDays = function(days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
    }

    
    var month_name = function(dt){
        mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
        return mlist[dt.getMonth()];
    };

    due_date_uf = lp_date.addDays(280);

    console.log(month_name(new Date(due_date_uf)));

    due_date_f = (month_name(new Date(due_date_uf))) + ' ' + due_date_uf.getDate() + ', <br> ' + due_date_uf.getFullYear();

    console.log("Due Date is: "+due_date_f);

    
    var result_box = document.getElementById('result');
    var c_due_date = document.getElementById('c-due-date');

    result_box.style.display = 'block';
    c_due_date.innerHTML = due_date_f;

}

$(document).on('keydown', function(event) {
    if (event.key == "Escape") {
        $('#result').css('display','none');
    }
});

