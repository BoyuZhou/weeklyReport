//格式化日期为周的过滤器
mainModule.filter('xcjFormatDate', function(){
    return function (input, type) {
        var now = new Date(input);
        var nowDayOfWeek = now.getDay();
        var nowMonth = now.getMonth();
        var nowYear = parseInt(now.getYear()) + 1900;
        var nowDay = now.getDate();
        var lastMonthDate = new Date(); //上月日期
        lastMonthDate.setDate(1);
        lastMonthDate.setMonth(lastMonthDate.getMonth() - 1);
        var lastYear = parseInt(lastMonthDate.getYear()) + 1900;
        var lastMonth = lastMonthDate.getMonth();
        function formatDate(date){
            var mymonth = date.getMonth() + 1;
            var myweekday = date.getDate();
            if (myweekday < 10) {
                myweekday = "0" + myweekday;
            }
            return (mymonth + "." + myweekday);
        }

        function formatDay(date){
            var mymonth = date.getMonth() + 1;
            var myweekday = date.getDate();

            return (mymonth + "月" + myweekday + "日");
        }
        //获取当前周开始日期
        function getWeekStartDate() {
            var weekStartDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek + 1);
            return formatDate(weekStartDate);
        }
      //获得当前周的结束日期
        function getWeekEndDate() {
            var weekEndDate = new Date(nowYear, nowMonth, nowDay + (5 - nowDayOfWeek));
            return formatDate(weekEndDate);
        }
        //获得上周的开始日期
        function getLastWeekStartDate() {
            var weekStartDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek - 6);
            return formatDate(weekStartDate);
        }
        //获得上周的结束日期
        function getLastWeekEndDate() {
            var weekEndDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek - 2);
            return formatDate(weekEndDate);
        }
        //获得上周的开始日期
        function getPrevWeekStartDate() {
            var weekStartDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek + 8);
            return formatDate(weekStartDate);
        }
        //获得上周的结束日期
        function getPrevWeekEndDate() {
            var weekEndDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek + 12);
            return formatDate(weekEndDate);
        }
        function getLastTwoDay() {
           var FirstDay = new Date(nowYear, nowMonth, nowDay - 2);
            var SecondDay = new Date(nowYear, nowMonth, nowDay - 1);
            if(FirstDay.getDay() == 0){
                FirstDay = new Date(nowYear, nowMonth, nowDay - 3);
            }else if(FirstDay.getDay() == 6){
                FirstDay = new Date(nowYear, nowMonth, nowDay - 4);
            }
            if(SecondDay.getDay() == 0){
                SecondDay = new Date(nowYear, nowMonth, nowDay - 3);
            }else if(SecondDay.getDay() == 6){
                SecondDay = new Date(nowYear, nowMonth, nowDay - 2);
            }
            return [formatDay(FirstDay),formatDay(SecondDay)];
        }

        function getPrevTwoDay() {
            var FirstDay = new Date(nowYear, nowMonth, nowDay + 1);
            var SecondDay = new Date(nowYear, nowMonth, nowDay + 2);
            if(FirstDay.getDay() == 0){
                FirstDay = new Date(nowYear, nowMonth, nowDay + 2);
            }else if(FirstDay.getDay() == 6){
                FirstDay = new Date(nowYear, nowMonth, nowDay + 3);
            }
            if(SecondDay.getDay() == 0){
                SecondDay = new Date(nowYear, nowMonth, nowDay + 4);
            }else if(SecondDay.getDay() == 6){
                SecondDay = new Date(nowYear, nowMonth, nowDay + 4);
            }
            return [formatDay(FirstDay),formatDay(SecondDay)];
        }
        var ary = [];


        if(type == 'week'){
            ary[0] = getLastWeekStartDate()+"-"+getLastWeekEndDate();
            ary[1] = getWeekStartDate()+"-"+getWeekEndDate();
            ary[2] = getPrevWeekStartDate()+"-"+getPrevWeekEndDate();
        }else if(type == 'day'){
            ary = getLastTwoDay().concat(formatDay(now)).concat(getPrevTwoDay());
        }
        return ary;
    }
});
