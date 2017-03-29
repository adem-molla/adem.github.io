
  var idea = document.getElementById("idea").value;
      var url = "https://api.tenor.co/v1/search?key=LIVDSRZULELA&tag=" + idea + "&locale=en_US&safesearch=moderate&amount=3";
      console.log(url);
      $.ajax({
        type: "GET",
        url: url,
        dataType: 'json',
        success: Render
      });


  var getItem = document.getElementById("getItem")
  getItem.onclick = function (e) {
      e.preventDefault();
      var idea = document.getElementById("idea").value;
      var url = "https://api.tenor.co/v1/search?key=LIVDSRZULELA&tag=" + idea + "&locale=en_US&safesearch=moderate&amount=3";
      console.log(url);
      $.ajax({
        type: "GET",
        url: url,
        dataType: 'json',
        success: Render
      });
    };


  var idea2 = document.getElementById("idea");
  idea2.onkeypress = function(event) {
      if(event.which==13) {
        event.preventDefault();
        var idea = document.getElementById("idea").value;
        var url = "https://api.tenor.co/v1/search?key=LIVDSRZULELA&tag=" + idea + "&locale=en_US&safesearch=moderate";
        console.log(url);
        $.ajax({
          type: "GET",
          url: url,
          dataType: 'json',
          success: Render
        });
      }

    };﻿


  function Render(response)
  {

        var ul = $(".grid");
        ul.empty();
        var arr = response.results;
        var $idea = $("#idea").val();
        var $url = "https://api.tenor.co/v1/search?key=LIVDSRZULELA&tag=" + $idea + "&locale=en_US&safesearch=moderate";
        for (i = 0; i < 20; i++)
          {
          var data = arr[i];
          var result = data.title;
          var image = data.media[0].gif.preview;
          var p = $("<p>").append(result);
          var li = $("<li>").append(p);
          li.addClass('grid-item');
          $("<img>")
            .attr("src", image)
            .appendTo(li);
              ul.append(li);
          }

        $('.grid').masonry({
          itemSelector:'.grid-item',
          columnWidth: 10
        });
  }
