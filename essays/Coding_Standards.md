---
layout: essay
type: essay
title: "Coding Standards"
# All dates must be YYYY-MM-DD format!
date: 2023-09-20
published: false
labels:
  - Computer Science
---

<img width="300px" class="rounded float-start pe-4" src="../img/essays/ESLint_logo.png">

#### The Good:
Over the last few days, my course in Software Engineering I has required the use of ESLint in order to enforce someone's idea of 'best' coding style and practices. Almost every coding assignment we do for this class is self-timed, and we try to come up with solutions to a given problem in the fastest possible time. The past few assignments have shown me how helpful a style enforcer can be when writing code in a major time crunch. Sometimes there just isn't enough time to worry about how it looks or how readable it is, and a simple ESLint fix file command can take care of that in less than a second. For these reasons Tools like ESLint have become very appealing to me. Despite this, I have come not to like the 'best practice' enforcement that comes with ESLint.

#### The Bad and the Ugly:
There are certain times when ESLint just annoys me. I don't want to write "this" in each and every function. I think that rule is just silly. And it may even contribute to worse code. Sometimes when I create a class, I only want to use the functions in it. I don't want to actually store things in it. But I find myself using "this.x = " to define a variable x in functions. I feel like it defeats the point of having local variables, because if I accidentally repeat a variable name between functions, I could screw up the program. Of course, I can always use let and const, but "this" must be used at least once per function according to ESLint. I may be overlooking the intended use case for "this" in Javascript functions, but I'm new to Javascript. For these reasons I do not find ESLint to be enjoyable, helpful, or beginner-friendly when it comes to enforcing 'best practices.'


#### The Takeaway:
I think the best style enforcer is one that allows you to input a specific example of your style for several different cases. It should be easy enough for an IDE to ask the user to rewrite a sample code doc in their own style for reference. I also think that IDEs in general should have less buttons. The point of an IDE is to make it easier to write code, but it's overwhelming to have a million different settings when all I really use is the file manager, console, and run button. I find that any piece of consumer software that needs a tutorial for each feature is really unpleasant to use, to the point that I'd rather just build my own software from the ground up.
