## Goals for this blog

1. Quickly setup - want to start outputting content quickly
1. Minimal & handspun - want to start simple and add features as I see fit
1. Learning opportunity / project - a little challenge for myself
1. Design project - want to have complete control over the styling of the blog because that's fun for me

## Architecture Notes

Using a file to be like a key of all blog posts with their file name, title, and date. This made it easier to have access to a file's metadata without having to figure out markdown custom properties (which I think I've seen done before at RokkinCat but 30m of figuring it out didn't cut it, so I opted for the table of contents route).

## Design Notes

I prioritized having an obvious sorting order, and something easy to scroll quickly or simply CTRL-F.

In the future, I plan to expand the capabilities to include filtering by topic. Because of this, I tried really hard to hold back on over-designing it for the time being. The result is a simple, dated list of titles.

## Relevant links used during development

Links from setting up the blog

* https://stackoverflow.com/questions/44678315/how-to-import-markdown-md-file-in-typescript
* https://www.npmjs.com/package/simple-markdown?activeTab=readme
* https://dev.to/anobjectisa/how-to-dynamically-load-markdown-files-in-react-markdown-to-jsx-53fl