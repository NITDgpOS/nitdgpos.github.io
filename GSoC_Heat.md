---
layout: default
title: GSoC Heat
permalink: gsoc_heat
---

# **Timeline**
![image-title-here](/images/timeline.png)

# **Contest Rules and Guidelines**
1. Stick to the timeline. We are very strict about timeline since GSoC is very strict at its timeline too and no requests for extension is entertained.
2. You must have solved atleast one issue in the project you are applying for
3. You can submit maximum of 2 proposals
4. Follow the application template as provided
5. You are free to discuss about the proposal and take feedback from the maintainers before submission. Make a google doc and give permissions to the specific maintainer of the project to comment on it and give feedback for your proposal.
6. Share the link of your google doc in our mailing list to make it easier to review it. Create a new thread with topic `GSoC Heat proposal by <your_name>`
7. Submit the final proposal in pdf format. No changes can be done to your proposal once submitted and you can't resubmit the same proposal. So be sure before you submit the final link.
8. You can submit the links to the work done during the coding period in a blog post, gist or google doc.

# **Proposal Template**
Find the Proposal template [at this link](https://github.com/NIT-dgp/Guidelines/wiki/Application-Template-for-%22The-GSoC-Heat%22)

# **Proposal Submission**
Submit your proposals [in this google form](https://goo.gl/forms/GWr62rt9ejmZvp0n2)

# **Ideas**

# [UIP](https://github.com/NIT-dgp/UIP)
___
<br/>

## Minimize To System Tray
We need to UIP to be unobstrusive and minimize to system tray instead of always staying at the taskbar and have options like `next` `previous` from the system Tray itself. This adaptation should work for Ubuntu and Windows atleast.
Related issues: [https://github.com/NIT-dgp/UIP/issues/197](https://github.com/NIT-dgp/UIP/issues/197)

## Automate Deployment and creation of executables:
we have some executables and know of a general way(contact us at gitter) to create execs but it isn't done automatically. Would love it if we could create a script to autogenerate execs for each release.
Related issues: [https://github.com/NIT-dgp/UIP/issues/205](https://github.com/NIT-dgp/UIP/issues/205)

## Delete old Wallpapers:
Delete wallpapers that get too old. These can be done in the following ways:
1. download only one wallpaper at a time and delete it, when it is removed as the wallpaper.
2. Delete old wallpapers after x days.
3. Download multiple delete once changed.

Related Issues: [https://github.com/NIT-dgp/UIP/issues/120](https://github.com/NIT-dgp/UIP/issues/120)


# [cat-forum](https://github.com/NIT-dgp/cat-forum)
___
<br/>

## Tagging system for threads
Tags are a great way to classify contents in a blog/forum. It will greatly serve users to find specific type of content. cat-forum needs a tagging system that can serve this purpose. Look at [NIT-dgp/cat-forum#38](https://github.com/NIT-dgp/cat-forum/issues/38) for details.

## email notification system
We want users to get regular email notifications for threads and replies so that they get informed via mail when their content is liked/disliked or when a new answer is posted. Refer to [NIT-dgp/cat-forum#40](https://github.com/NIT-dgp/cat-forum/issues/40) for details.

## A full fledged test suite
cat-forum really lacks a good test suite. We want to have a 100% test coverage for cat-forum. We are using [rspec](http://rspec.info/) for writing tests. Read the [rspec docs](http://rspec.info/documentation/) and start writing good tests. Refer to [NIT-dgp/cat-forum#39](https://github.com/NIT-dgp/cat-forum/issues/39) for details.

# [Festcms](https://github.com/NIT-dgp/festcms)
___
<br/>

## Template editing from admin panel
Currently for editing the templates and styling pages, users need to edit the template files manually. But popular content management systems support theming from the admin panel. Festcms currently lacks this feature. Read issue [#33](https://github.com/NIT-dgp/festcms/issues/33) for details.

## Build a custom admin panel with flexible permissions
Currently django's default admin panel is used to enter data into the site. However that is only accessible to the super user. We need a custom admin panel that can be used by different members of the fest organizing committee to edit different contents. Eg: the sponsorship head will only be able to edit the Sponsor model. The super user can define these permissions from the django admin panel.

## Build a basic generic UI
Build a clean and simple theme for all views using Bootstrap only. Design proper 404 and 500 pages. Also style the admin panel according to the theme. Check issues [#64](https://github.com/NIT-dgp/festcms/issues/64) and [#62](https://github.com/NIT-dgp/festcms/issues/62).


# [contribute](https://github.com/NIT-dgp/contribute)
___
<br/>

## Report number of new comer issues
[`Finder` methods](https://github.com/NIT-dgp/contribute#finding-repos) returns an array of `repo`s user is interested in. We want to be able to report number of new comer issues of returned repos. First, you should [list all the labels](https://developer.github.com/v3/issues/labels/#list-all-labels-for-this-repository) in a given repo and find which ones are tagged for new comers. They are generally named as `new comer`, `new contributor`, `up for grabs`, `starter` etc. Check [this repo](https://github.com/up-for-grabs/up-for-grabs.net/search?utf8=%E2%9C%93&q=upforgrabs&type=Code) for a more comprehensive list. Next, you should make a request to [github issue search api](https://developer.github.com/v3/search/#search-issues) and find out number of such issues. Example query: [https://api.github.com/search/issues?q=repo:rubygems/rubygems.org%20label:starter%20state:open](https://api.github.com/search/issues?q=repo:rubygems/rubygems.org%20label:starter%20state:open)

## Sort by weekly commit count
[`Finder` methods](https://github.com/NIT-dgp/contribute#finding-repos) returns an array of `repo`s user is interested in. We want to be able to sort repos by number of commits made in a specified number of weeks. You can get number of commits made in last 52 weeks using [github statics api](https://developer.github.com/v3/repos/statistics/#get-the-weekly-commit-count-for-the-repository-owner-and-everyone-else). You would need to sum commits made in the given number of weeks and sort repos accordingly. Have a look at [`ExtendedSort`](https://github.com/NIT-dgp/contribute/blob/master/lib/contribute/extended_sort.rb).

## Write tests

[#16](https://github.com/NIT-dgp/contribute/pull/16) had setup vcr and rspec, however most of our methods are untested. [How to Stub External Services in Tests](https://robots.thoughtbot.com/how-to-stub-external-services-in-tests#) is a nice blog on this topic. You should also read documentation of [vcr](https://github.com/vcr/vcr), [rspec](https://github.com/rspec/rspec) and [webmock](https://github.com/bblimke/webmock).


# [Fearch](https://github.com/NIT-dgp/chrome-search-extension)
___
<br/>

## Add Download all button to ftp sites

Issue is to inject js into an ftp page to add a "download all" button which automatically downloads all links on the page. Related Issue: [https://github.com/NIT-dgp/chrome-search-extension/issues/61](https://github.com/NIT-dgp/chrome-search-extension/issues/61)

## Automatically preview download file:

Whenever user stops typing, automatically crawl first ftp server on the results page and get the link of the file that matches the user input and preview the link, even before the user presses search. Related Issue: [https://github.com/NIT-dgp/chrome-search-extension/issues/36](https://github.com/NIT-dgp/chrome-search-extension/issues/36)

# [manga](https://github.com/NIT-dgp/manga)
___
<br/>

## Build GUI using Gtk
GUI is a high priority requirement for manga. Check out [https://github.com/NIT-dgp/manga/issues/4](https://github.com/NIT-dgp/manga/issues/4) for more info.

[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)
