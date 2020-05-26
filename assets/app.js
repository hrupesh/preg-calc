var d = new Date();

// var default_date = Date(d.getDate(), (d.getMonth()+1), d.getFullYear());
// console.log(default_date);

Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}


var default_date = new Date(d.toDateString());
var default_date1 = (d.getMonth() + 1) + '/' + (default_date.getDate() - 7) + '/' + d.getFullYear();
var default_date2 = (d.getMonth() + 1) + '/' + (default_date.getDate() - 1) + '/' + d.getFullYear();
var default_date3 = (d.getMonth() + 1) + '/' + (default_date.getDate() - 7) + '/' + d.getFullYear();
var default_date4 = (d.getMonth() + 1) + '/' + (default_date.getDate()) + '/' + d.getFullYear();
// console.log(default_date);
// default_date.setDate(default_date.getDate(-7));
console.log(default_date);

$(window).on('load', function () {
    $('#date-input').val(default_date1);
    $('#date-input2').val(default_date2);
    $('#date-input3').val(default_date3);
    $('#date-input4').val(default_date4);
})

function calculate_last_peroid() {
    // alert('calcluating.........');
    // console.log(event.target);

    var ftd = document.getElementById('f-t-date');
    var std = document.getElementById('s-t-date');
    var ttd = document.getElementById('t-t-date');
    var due_date = document.getElementById('c-due-date');
    ftd.style.transform = 'rotate3d(1, 1, 1, 145deg) translate3d(1260px, 1000px, 1000px) scale(5.5)';
    std.style.transform = 'rotate3d(1, 1, 1, 145deg) translate3d(1260px, 1000px, 1000px) scale(5.5)';
    ttd.style.transform = 'rotate3d(1, 1, 1, 145deg) translate3d(1260px, 1000px, 1000px) scale(5.5)';
    due_date.style.transform = 'rotate3d(1, 1, 1, 145deg) translate3d(1260px, 1000px, 1000px) scale(5.5)';

    var lpdate = document.getElementById('date-input').value;

    var lp_date = new Date(lpdate);


    var month_name = function (dt) {
        mlist = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];
        return mlist[dt.getMonth()];
    };

    due_date_uf = lp_date.addDays(280);

    console.log(month_name(new Date(due_date_uf)));

    due_date_f = (month_name(new Date(due_date_uf))) + ' ' + due_date_uf.getDate() + ', <br> ' + due_date_uf.getFullYear();

    console.log("Due Date is: " + due_date_f);


    var result_box = document.getElementById('result');
    var c_due_date = document.getElementById('c-due-date');

    result_box.style.display = 'block';
    c_due_date.innerHTML = due_date_f;

    var first_trimester = lp_date.addDays(90);
    var second_trimester = lp_date.addDays(188);
    var third_trimester = lp_date.addDays(280);

    console.log(first_trimester);
    console.log(second_trimester);
    console.log(third_trimester);

    var pgbar = document.getElementById('progress-bar');

    cur_date = new Date();
    var diffrence_time = due_date_uf.getTime() - cur_date.getTime();
    // console.log(cur_date);
    // console.log(diffrence_time);
    var diffrence_date = diffrence_time / (1000 * 3600 * 24);
    diffrence_date = Math.round(diffrence_date);
    console.log("Days Left : " + diffrence_date);
    var days_elapsed = 280 - diffrence_date;
    console.log("Days Elapsed : " + days_elapsed);

    progress_percentage = days_elapsed * 100 / 280;
    progress_percentage = Math.round(progress_percentage);


    if (progress_percentage > 85) {
        progress_percentage -= 3;
    }
    var w = screen.width;
    if(w < 600){
        if (progress_percentage > 85) {
            progress_percentage -= 3;
        }
    }

    console.log(progress_percentage);

    var i = 0;
    var width = -1;
    var id = setInterval(frame, 70);

    function frame() {
        if (progress_percentage <= 0){
            pgbar.style.width = 0 + "%";
            clearInterval(id);
        }
        if (width >= progress_percentage) {
            clearInterval(id);
            i = 0
        }
        else {
            width++;
            pgbar.style.width = width + "%";
        }

    }

    var datesInterval = setInterval(setDates,1000);

    function setDates(){
        var ftd = document.getElementById('f-t-date');
        var std = document.getElementById('s-t-date');
        var ttd = document.getElementById('t-t-date');
        var due_date = document.getElementById('c-due-date');
        ftd.style.transform = 'translateX(0)';
        ftd.innerHTML = "1st Trimester <br> Ends at " + first_trimester.getDate() + ", " + (month_name(new Date(first_trimester)));
        std.style.transform = 'translateX(0)';
        std.innerHTML = "2nd Trimester <br> Ends at " + second_trimester.getDate() + ", " + (month_name(new Date(second_trimester)));
        ttd.style.transform = 'translateX(0)';
        ttd.innerHTML = "3rd Trimester <br> Ends at " + third_trimester.getDate() + ", " + (month_name(new Date(third_trimester)));
        due_date.style.transform = 'translateX(0)';
        clearInterval(datesInterval);
    }

}

function calculate_conception_date() {
    // alert('calcluating.........');
    // console.log(event.target);

    var ftd = document.getElementById('f-t-date');
    var std = document.getElementById('s-t-date');
    var ttd = document.getElementById('t-t-date');
    var due_date = document.getElementById('c-due-date');
    ftd.style.transform = 'rotate3d(1, 1, 1, 145deg) translate3d(1260px, 1000px, 1000px) scale(5.5)';
    std.style.transform = 'rotate3d(1, 1, 1, 145deg) translate3d(1260px, 1000px, 1000px) scale(5.5)';
    ttd.style.transform = 'rotate3d(1, 1, 1, 145deg) translate3d(1260px, 1000px, 1000px) scale(5.5)';
    due_date.style.transform = 'rotate3d(1, 1, 1, 145deg) translate3d(1260px, 1000px, 1000px) scale(5.5)';

    var lpdate = document.getElementById('date-input2').value;

    var lp_date = new Date(lpdate);


    var month_name = function (dt) {
        mlist = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];
        return mlist[dt.getMonth()];
    };

    due_date_uf = lp_date.addDays(266);

    console.log(month_name(new Date(due_date_uf)));

    due_date_f = (month_name(new Date(due_date_uf))) + ' ' + due_date_uf.getDate() + ', <br> ' + due_date_uf.getFullYear();

    console.log("Due Date is: " + due_date_f);


    var result_box = document.getElementById('result');
    var c_due_date = document.getElementById('c-due-date');

    result_box.style.display = 'block';
    c_due_date.innerHTML = due_date_f;

    var first_trimester = lp_date.addDays(76);
    var second_trimester = lp_date.addDays(174);
    var third_trimester = lp_date.addDays(266);

    console.log(first_trimester);
    console.log(second_trimester);
    console.log(third_trimester);

    var pgbar = document.getElementById('progress-bar');

    cur_date = new Date();
    var diffrence_time = due_date_uf.getTime() - cur_date.getTime();
    // console.log(cur_date);
    // console.log(diffrence_time);
    var diffrence_date = diffrence_time / (1000 * 3600 * 24);
    diffrence_date = Math.round(diffrence_date);
    console.log("Days Left : " + diffrence_date);
    var days_elapsed = 280 - diffrence_date;
    console.log("Days Elapsed : " + days_elapsed);

    progress_percentage = days_elapsed * 100 / 280;
    progress_percentage = Math.round(progress_percentage);


    if (progress_percentage > 85) {
        progress_percentage -= 3;
    }
    var w = screen.width;
    if(w < 600){
        if (progress_percentage > 85) {
            progress_percentage -= 3;
        }
    }

    console.log(progress_percentage);

    var i = 0;
    var width = -1;
    var id = setInterval(frame, 70);

    function frame() {
        if (progress_percentage <= 0){
            pgbar.style.width = 0 + "%";
            clearInterval(id);
        }
        if (width >= progress_percentage) {
            clearInterval(id);
            i = 0
        }
        else {
            width++;
            pgbar.style.width = width + "%";
        }

    }

    var datesInterval = setInterval(setDates,1000);

    function setDates(){
        var ftd = document.getElementById('f-t-date');
        var std = document.getElementById('s-t-date');
        var ttd = document.getElementById('t-t-date');
        var due_date = document.getElementById('c-due-date');
        ftd.style.transform = 'translateX(0)';
        ftd.innerHTML = "1st Trimester <br> Ends at " + first_trimester.getDate() + ", " + (month_name(new Date(first_trimester)));
        std.style.transform = 'translateX(0)';
        std.innerHTML = "2nd Trimester <br> Ends at " + second_trimester.getDate() + ", " + (month_name(new Date(second_trimester)));
        ttd.style.transform = 'translateX(0)';
        ttd.innerHTML = "3rd Trimester <br> Ends at " + third_trimester.getDate() + ", " + (month_name(new Date(third_trimester)));
        due_date.style.transform = 'translateX(0)';
        clearInterval(datesInterval);
    }

}


function calculate_ultrasound_date() {
    // alert('calcluating.........');
    // console.log(event.target);

    var ftd = document.getElementById('f-t-date');
    var std = document.getElementById('s-t-date');
    var ttd = document.getElementById('t-t-date');
    var due_date = document.getElementById('c-due-date');
    ftd.style.transform = 'rotate3d(1, 1, 1, 145deg) translate3d(1260px, 1000px, 1000px) scale(5.5)';
    std.style.transform = 'rotate3d(1, 1, 1, 145deg) translate3d(1260px, 1000px, 1000px) scale(5.5)';
    ttd.style.transform = 'rotate3d(1, 1, 1, 145deg) translate3d(1260px, 1000px, 1000px) scale(5.5)';
    due_date.style.transform = 'rotate3d(1, 1, 1, 145deg) translate3d(1260px, 1000px, 1000px) scale(5.5)';

    var lpdate = document.getElementById('date-input4').value;

    var lp_date = new Date(lpdate);

    var weeks = document.getElementById('weeks').value;
    weeks = parseInt(weeks);
    var days = document.getElementById('days').value;
    days = parseInt(days);

    var total_days = parseInt((weeks * 7) + days);

    console.log(lp_date)
    console.log(weeks)
    console.log(days)
    console.log(total_days)

    var month_name = function (dt) {
        mlist = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];
        return mlist[dt.getMonth()];
    };

    var days_left = parseInt(280 - total_days);

    due_date_uf = lp_date.addDays(days_left);

    console.log(month_name(new Date(due_date_uf)));

    due_date_f = (month_name(new Date(due_date_uf))) + ' ' + due_date_uf.getDate() + ', <br> ' + due_date_uf.getFullYear();

    console.log("Due Date is: " + due_date_f);


    var result_box = document.getElementById('result');
    var c_due_date = document.getElementById('c-due-date');

    result_box.style.display = 'block';
    c_due_date.innerHTML = due_date_f;

    var conceived_date = new Date(lp_date);
    conceived_date.setDate(conceived_date.getDate() - total_days);
    console.log('Concieved On : '+conceived_date);

    var first_trimester = conceived_date.addDays(90);
    var second_trimester = conceived_date.addDays(188);
    var third_trimester = conceived_date.addDays(280);

    console.log(first_trimester);
    console.log(second_trimester);
    console.log(third_trimester);

    var pgbar = document.getElementById('progress-bar');

    cur_date = new Date();
    var diffrence_time = due_date_uf.getTime() - cur_date.getTime();
    // console.log(cur_date);
    // console.log(diffrence_time);
    var diffrence_date = diffrence_time / (1000 * 3600 * 24);
    diffrence_date = Math.round(diffrence_date);
    console.log("Days Left : " + diffrence_date);
    var days_elapsed = 280 - diffrence_date;
    console.log("Days Elapsed : " + days_elapsed);

    progress_percentage = days_elapsed * 100 / 280;
    progress_percentage = Math.round(progress_percentage);


    if (progress_percentage > 85) {
        progress_percentage -= 3;
    }
    var w = screen.width;
    if(w < 600){
        if (progress_percentage > 85) {
            progress_percentage -= 3;
        }
    }

    console.log(progress_percentage);

    var i = 0;
    var width = -1;
    var id = setInterval(frame, 70);

    function frame() {
        if (progress_percentage <= 0){
            pgbar.style.width = 0 + "%";
            clearInterval(id);
        }
        if (width >= progress_percentage) {
            clearInterval(id);
            i = 0
        }
        else if (width >= 99) {
            clearInterval(id);
            i = 0
        }
        else {
            width++;
            pgbar.style.width = width + "%";
        }

    }

    var datesInterval = setInterval(setDates,1000);

    function setDates(){
        var ftd = document.getElementById('f-t-date');
        var std = document.getElementById('s-t-date');
        var ttd = document.getElementById('t-t-date');
        var due_date = document.getElementById('c-due-date');
        ftd.style.transform = 'translateX(0)';
        ftd.innerHTML = "1st Trimester <br> Ends at " + first_trimester.getDate() + ", " + (month_name(new Date(first_trimester)));
        std.style.transform = 'translateX(0)';
        std.innerHTML = "2nd Trimester <br> Ends at " + second_trimester.getDate() + ", " + (month_name(new Date(second_trimester)));
        ttd.style.transform = 'translateX(0)';
        ttd.innerHTML = "3rd Trimester <br> Ends at " + third_trimester.getDate() + ", " + (month_name(new Date(third_trimester)));
        due_date.style.transform = 'translateX(0)';
        clearInterval(datesInterval);
    }

}

$(document).on('keydown', function (event) {
    if (event.key == "Escape") {
        $('#result').css('display', 'none');
    }
});


$('#ddtype').on('change',function(){
    var type = $('#ddtype').val();
    var lp = document.getElementById('last_peroid_form');
    var cd = document.getElementById('conception_date_form');
    var ivf = document.getElementById('ivf_form');
    var us = document.getElementById('ultrasound_form');
    if(type == 'last_period'){
        lp.style.display = 'block';
        cd.style.display = 'none';
        ivf.style.display = 'none';
        us.style.display = 'none';
    }
    if(type == 'conception_date'){
        lp.style.display = 'none';
        cd.style.display = 'block';
        ivf.style.display = 'none';
        us.style.display = 'none';
    }
    if(type == 'ivf'){
        lp.style.display = 'none';
        cd.style.display = 'none';
        ivf.style.display = 'block';
        us.style.display = 'none';
    }
    if(type == 'ultrasound'){
        lp.style.display = 'none';
        cd.style.display = 'none';
        ivf.style.display = 'none';
        us.style.display = 'block';
    }
});
