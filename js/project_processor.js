// Load project data from api.github.com

if("undefined" !== typeof jQuery) {
  project_url = "https://api.github.com/repos/nit-dgp/{{page.title}}";
  contributors_url = "https://api.github.com/repos/nit-dgp/{{page.title}}/contributors";

  function getData(url) {
    var promise = $.ajax({
      url: url,
      type: 'get',
    }).done((response, status, xhr) => {
      console.log(status);
    }).fail((xhr, status, err) => {
      console.error(err);
    });

    return promise;
  }

  // Fetch contributors info asynchronously
  getData(contributors_url).done((data) => {
    if(data.length <= 0) {
      console.error("Error processing contributors list.");
    }
    contributors_count = data.length;
    data.forEach((contributor) => {
      login = contributor['login'];
      avatar = contributor['avatar_url'];
      url = contributor['html_url'];
      contribution_count = contributor['contributions'];

      // setup the view data
    });
  });

  // Fetch repo info asynchronously
  getData(project_url).done((data) => {
    owner = data['owner'];
    haswiki = data['haswiki'];
    url = data['html_url'];
    desc = data['description'];
    lang = data['language'];
    issues_count = data['open_issues_count'];
    forks_count = data['forks_count'];

    // setup the view data
  });

}
