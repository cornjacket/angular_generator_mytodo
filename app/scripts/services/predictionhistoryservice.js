'use strict';

/**
 * @ngdoc service
 * @name mytodoApp.predictionHistoryService
 * @description
 * # predictionHistoryService
 * Factory in the mytodoApp.
 */
angular.module('mytodoApp')
  .factory('predictionHistoryService', function () {
    // Service logic
    // ...

    return {
      get: function (dailies) { // for now sending in dailies so that history is based on it, but i could use service so that API is consistent
        // for 30 days do the following
        //   iterate over each daily, 
        //     create a new history record and save each daily's values into new history record
        //     add i days to the new history record's date
        //     add new history record to the list of all histories
        console.log("Mocking history");
    
        var history = [];
        var next_day_history; // keep track of all the updates for the next day
        
        for (var day=1; day<29; day=day+1) {
          next_day_history = dailies.map(function(daily) {
            //var num = Number(daily.prediction1)+Math.random();
            //num = num.toFixed(2);
            var offset      = Number(Math.random());
            var prediction1 = Number(daily.prediction1)+offset;
            var prediction2 = Number(daily.prediction2)+offset;
            var prediction3 = Number(daily.prediction3)+offset;
            var prediction4 = Number(daily.prediction4)+offset;
            var fourDayETo_prediction = Number((prediction1+prediction2+prediction3).toFixed(2)); //(prediction1+prediction2+prediction3+prediction4);
            return {
              date:                  new Date().setFullYear(2016, 1, day),
              name:                  daily.name,
              prediction1:           prediction1,
              prediction2:           prediction2,
              prediction3:           prediction3,
              prediction4:           prediction4,
              fourDayETo_prediction: fourDayETo_prediction
              };
            });
            history = history.concat(next_day_history);
          console.log(next_day_history);
        }
        console.log("Full history");
        console.log(history);        
        
        return history;
      }
    };
  });
