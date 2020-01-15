# tinyCrawlerjs

Purpose: 

A lightweight, cross-browser, no-install method for crawling websites in environments that offer limited tools & privileges.
I write custom web scraping scripts often, so I wanted a simple template to re-use for larger projects
where a simple browser-based web crawler would be useful.

How to use: 

Copy and paste this script into the console view of the browser and (press enter), then it will collect
links, docs, and response data for every page it crawls within the starting domain. It collects all links on each page it crawls, 
but do to security reasons, it will not follow the external links. 

The "links" variable stores a set of all the links that were found.

The "docs" variable stores an array of the visited docs with response data. 
I generally use the docs array to generate SEO reports and webpage audits.

Limits & Options:
 var crawlLimit = the number of pages to crawl. The crawler will stop once this limit is reached, or if it runs out links to crawl.
