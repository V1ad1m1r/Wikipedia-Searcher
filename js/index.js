  // API- https://www.mediawiki.org/wiki/API:Main_page
  $(document).ready(function() {
    var jsondata = [];
    var div = document.createElement("div");
    var resultNumber = 6;

    $("#search_form").submit(function(e) {
      e.preventDefault();
      var input = document.getElementById("title").value;
      var link = 'https://en.wikipedia.org//w/api.php?action=opensearch&format=json&search=' + input + '&limit=' + resultNumber + '&callback=';

      $.ajax({
        url: link,
        type: 'GET',
        dataType: 'jsonp',
        success: function(json) {
          jsondata = json;

          document.getElementById("result").innerHTML = "";

          for (x = 0; x < jsondata[1].length; x++) {
            var divI = document.createElement('div');
            var h4 = document.createElement('h4');
            var p = document.createElement('p');
            var t = document.createTextNode(JSON.stringify(jsondata[1][x]));
            var t2 = document.createTextNode(JSON.stringify(jsondata[2][x]));
            var a = document.createElement('a');

            a.href = jsondata[3][x];
            h4.appendChild(t);
            a.appendChild(h4);
            p.appendChild(t2);
            a.appendChild(p);
            divI.appendChild(a);
            divI.setAttribute("class", "rclass");
            divI.setAttribute("id", "result" + [x]);
            divI.setAttribute("href", jsondata[3][x]);

            $(".results").append(divI);
          }

        }
      });
    });

  });