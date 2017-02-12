// Load project data from api.github.com

if("undefined" !== typeof jQuery) {
  project_name = $('meta[name=project-title]').attr('content');
  project_url = "https://api.github.com/repos/nit-dgp/" + project_name;
  contributors_url = "https://api.github.com/repos/nit-dgp/" + project_name + "/contributors";

  function getData(url) {
    var promise = $.ajax({
      url: url,
      type: 'get',
    }).fail((xhr, status, err) => {
      console.error(err);
    });

    return promise;
  }

  $(document).ready(function(){
    // Fetch contributors info asynchronously
    getData(contributors_url).done((data) => {
      if(data.length <= 0) {
        console.error("Error processing contributors list.");
      }
      contributors_count = data.length;
      data.forEach((contributor) => {
        var login = contributor['login'];
        var avatar = contributor['avatar_url'];
        var url = contributor['html_url'];
        var contribution_count = contributor['contributions'];

        // Add contributor info
        var $column_div = $("<div />", {"class": "col s6 m3"});
        var $card = $("<div />", {
          "class": "noselect card hoverable contributor"
        });
        var $card_image = $("<div />", {"class": "card-image"});
        var $img = $("<img />", {"class": "circle", "src": avatar});
        var $card_content = $("<div />", {"class": "card-content"});
        var $name = $("<a />", {"href":url, "class": "contributor-name"})
          .text('@'+login);
        var $contributions = $("<p />", {"class": "grey-text"})
          .text(contribution_count);

        $card.click(() => {
          window.open(url);
        });

        $name.appendTo($card_content);
        $contributions.appendTo($card_content);
        $img.appendTo($card_image);
        $card_image.appendTo($card);
        $card_content.appendTo($card);
        $card.appendTo($column_div);


        $column_div.appendTo("#contributors");
      });
    });

    // Fetch repo info asynchronously
    getData(project_url).done((data) => {
      var owner = data['owner'];
      var url = data['html_url'];
      var lang = data['language'];
      var issues_count = data['open_issues'];
      var forks_count = data['forks_count'];
      var issues_url = [url,'issues'].join('/').replace(/\/{2,}/, '/');
      var created_at = data['created_at'].substr(0,4);
      var updated_at = data['updated_at'].substr(0,4);

      // Add the repository info
      $('#owner').attr('href', owner['html_url']);
      $('#owner').html(owner['login']);
      $('#main-title').attr('href', url);
      $('#language').html(lang);
      $('#issues-count').html(issues_count);
      $('#forks-count').html(forks_count);
      $('#issues-url').attr('href', url+"/issues");
      $('#created').html(created_at);
      $('#updated').html(updated_at);
    });

    $('.materialboxed').materialbox();
    $(".button-collapse").sideNav();
  });
}
