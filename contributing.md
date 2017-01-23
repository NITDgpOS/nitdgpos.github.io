---
layout: default
title: Get Involved
permalink: get_involved
---
# Contributing to [NIT-dgp](https://github.com/NIT-dgp)
These are the overall guidelines for contributing to any Project in NIT-dgp. Please read this before you start contributing to any repo of our organization

## Code practices

Please help us follow the best practice to make it easy for the reviewer as well as the contributor.

- Always work on a new branch while working on an issue.

- Use Single commit per pull request unless it is a big feature you are working on.

- Use meaningful commit messages. Your commits in the PR should be in the form

  ```
  shortlog: commit message

  commit body

  Fixes #< issue_no >

  ```
  where **short log** is the area/filename where you make the change, **commit message** is the very brief description of the change made by you and any other additional details go into the **commit body**. The **Fixes #< issue_no >** is the issue you are working on.

- In case there are multiple commits on the PR for a small amount of change, the commit author should squash them.

- Rebase your branch on the latest master and resolve any merge conflicts that occur.

- Avoid duplicate PRs, if need be comment on the older PR with the PR number of the follow-up (new PR) and close the obsolete PR yourself.
