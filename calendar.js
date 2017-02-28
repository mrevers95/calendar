// month data for 2017
var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var monthOffsets = [0, 3, 3, 6, 1, 4, 6, 3, 5, 0, 3, 5];
var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

var WEEKS_IN_MONTH = 6;
var DAYS_IN_WEEK = 7;

$(document).ready(function() {
    var date = new Date();
    var currMonth = date.getMonth();
    generateCalendarModel(currMonth);
    
    $('.nav-left').click(function() {
        if (currMonth - 1 >= 0) {
            currMonth = currMonth - 1;
            generateCalendarModel(currMonth);
        }
    });
    
    $('.nav-right').click(function() {
        if (currMonth + 1 < 12) {
            currMonth = currMonth + 1;
            generateCalendarModel(currMonth);
        }
    });
  
    $('.dates').click(function() {
        $('.calendar').removeClass('hidden');
    });
  
    $('.current-date').click(function() {
        $('.next-date').removeClass('selected');
        $('.current-date').addClass('selected');
        $('.calendar').removeClass('shifted');
    });
  
    $('.next-date').click(function() {
        $('.current-date').removeClass('selected');
        $('.next-date').addClass('selected');
        $('.calendar').addClass('shifted');
    });
    
    $('body').on('click', '.day', function(event) {
        if ($('.current-date').hasClass('selected')) {
            $('.day').removeClass('checkin');
            $(this).addClass('checkin');
            $('.current-date').html(currMonth+1 + '/' + this.innerHTML + '/2017');
            $('.current-date').removeClass('selected');
            $('.next-date').addClass('selected');
            $('.calendar').addClass('shifted');
        }
        else {
            $('.day').removeClass('checkout');
            $(this).addClass('checkout');
            $('.next-date').html(currMonth+1 + '/' + this.innerHTML + '/2017');
        }
    });
  
    $('.close').click(function() {
        $('.calendar').addClass('hidden');
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