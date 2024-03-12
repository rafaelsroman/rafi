---
title: Welcome to Quartz
---


[[Recipes]]


[[Tech Projects]]
[[Video Projects]]


[[Design]]


What is this website for? 
	Sharing my Projects. What they are and how I did them. So this is a publishing/archival of my work
- Mathematical Modelling Results
- 247 server 
- Are changes happening? 



>[!info] Recently Edited
>![[Recently edited]]


```dataview 
TABLE WITHOUT ID file.link AS Note, dateformat(file.mtime, "dd.MM.yyyy - HH-mm-ss") AS "Last modified" FROM "" WHERE publish="true" SORT file.mtime DESC LIMIT 10 
```



```dataview
TABLE WITHOUT ID file.link AS Note, dateformat(file.mtime, "dd.MM.yyyy - HH:mm:ss") AS "Last modified" FROM "" AND !"-hide" WHERE publish = true SORT file.mtime DESC LIMIT 7
```
