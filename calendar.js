// month data for 2017
var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var monthOffsets = [0, 3, 3, 6, 1, 4, 6, 3, 5, 0, 3, 5];
var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

var WEEKS_IN_MONTH = 6;
var DAYS_IN_WEEK = 7;

$(document).ready(function() {
    var date = new Date();
    var curr = date.getMonth();
    generateCalendarModel(curr);
    
    $('.nav-left').click(function() {
        if (curr - 1 >= 0) {
            curr = curr - 1;
            generateCalendarModel(curr);
        }
    });
    
    $('.nav-right').click(function() {
        if (curr + 1 < 12) {
            curr = curr + 1;
            generateCalendarModel(curr);
        }
    });
});

function generateCalendarModel(index) {
    var result = generateMonthModel(monthDays[index], monthOffsets[index]);
    $('.month').html(result);
    $('.header').html(monthNames[index] + ' 2017');
}

function generateMonthModel(days, offset) {
    var html = '';
    var counter = 1;
    for (var i = 0; i < WEEKS_IN_MONTH; i++) {
        html += '<tr class="week">';
        for (var j = 0; j < DAYS_IN_WEEK; j++) {
            var day = counter - offset;
            if (day <= days && day > 0) {
                html += '<td class="day">' + day + '</td>';
            }
            else {
                html += '<td></td>';
            }
            counter++;
        }
        html += '</tr>';
    }
    return html;
}
