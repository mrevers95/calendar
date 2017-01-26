// month data for 2017
var monthDays = [31, 28, 31, 30];
var monthOffsets = [0, 3, 3, 6];

var WEEKS_IN_MONTH = 6;
var DAYS_IN_WEEK = 7;

$(document).ready(function() {
    var result = generateCalendar(31, 6);
    $(".month").html(result);
});

function generateCalendar(numDays, offset) {
    var html = '';
    var counter = 1;
    for (var i = 0; i < WEEKS_IN_MONTH; i++) {
        html += '<tr class="week">';
        for (var j = 0; j < DAYS_IN_WEEK; j++) {
            var day = counter - offset;
            if (day <= numDays && day > 0) {
                html += '<td class="day">' + day + '</td>';
            }
            else {
                html += '<td class="day"></td>';
            }
            counter++;
        }
        html += '</tr>';
    }
    return html;
}
