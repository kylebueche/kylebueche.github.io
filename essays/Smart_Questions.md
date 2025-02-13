---
layout: essay
type: essay
title: "Ask To Learn, Not To Leave"
# All dates must be YYYY-MM-DD format!
date: 2023-09-05
published: true
labels:
  - Computer Science
  - Stack Exchange
---

<img width="300px" class="rounded float-start pe-4" src="../img/essays/query.png">
#### How to Ask Questions in Help Forums:


When asking questions on support forums, it is best to make your queries look well structured and organized so that people who know how to help you can waste little effort in doing so. In "[How To Ask Questions The Smart Way](http://www.catb.org/esr/faqs/smart-questions.html)," Eric Raymond details the best way to format your queries so that helpers are more likely to take notice. According to Raymond, the best queries have titles that use "Object - Deviation." "Object" refers to the specific circumstances in which the issue takes place. "Deviation" refers to the specific issue or abnormality that you're facing. Put together, this can be something like "Spotify Version 1.2 on Windows 11 with Steelseries headset - Sound Distorted." This lets helpers know about the software and hardware components that you're dealing with, as the issue could lie in any one of these components. Seperating the problem from the components allows helpers to easily see what the problem is that they are searching for. This title structure also helps eliminate hunch biases that could point helpers in the wrong direction based on a guess.


#### Here's a Good Example of What Raymond Calls a "Smart Question":


"[Scilab Java Integration: Exception Handling?](https://stackoverflow.com/questions/77049920/scilab-java-integration-exception-handling)"

```
I am working with Scilab Java integration. I am using Scilab 2023.1.0 and OpenJDK jdk8u352-b08 to compile the java classes.
When my Java code causes an exception, I do not get the information about what is wrong.

Example java code:

public class DScope
{

    public void exceptiontest(int val) throws Exception
    {
        System.err.println("Inspecting: '" + val + "'");
        if (val < 0)
        {
            throw new Exception("value is <0");
        }
        
    }
}...
```
This post has a pretty good name format, but it can be improved. A better name according to Raymond might be "Scilab Java Integration 2023.1.0 Exception Handling - Error Message Lost." The current title, however, is a lot better than many other queries on StackExchange. Thes post is concise and detailed enough to be pleasant to those who read it, while also informing them exactly what the issue is and what the asker already knows. It's great that the user provides an exerpt of their code, and the actual results of it in contrast to their expected results. As of the publishing date of this essay, the post was posted today (exact time unknown), and has received a reply which could help the user to identify the source of their issue.


#### Here's an Example of a Not-So-Smart Question:


"[whats problem?? i'am learning installation valet in laravel](https://stackoverflow.com/questions/77050128/whats-problem-iam-learning-installation-valet-in-laravel)"

```
Your requirements could not be resolved to an installable set of packages.

Problem 1 - cretueusebiu/valet-windows[v0.1.0, ..., v0.1.2] require symfony/process ^3.0 -> found symfony/process[v3.0.0, ..., v3.4.47]
but the package is fixed to v6.3.4 (lock file version) by a partial update and that version does not match. Make sure you list it as an
argument for the update command. - cretueusebiu/valet-windows[v0.1.3, ..., v0.1.8, v1.0.0, ..., v1.0.8] require symfony/process
~2.7|~3.0 -> found symfony/process[v2.7.0, ..., v2.8.52, v3.0.0, ..., v3.4.47] but the package is fixed to v6.3.4 (lock file version) by
a partial update and that version does not match. Make sure you list it as an argument for the update command. -
cretueusebiu/valet-windows[2.0.3, ..., 2.1.2] require illuminate/container ~5.1 ->...
```

I feel that I don't need to explain the issue with the title, but we've seen that there is room for improvement in both good and bad post titles. This is just unreadable, and no one in their right mind is going to try to make sense of it (for good reason). This user posted copy-pasted error jargon without even trying to understand it themselves, instead opting to end their jargon query with "how to solve this problem??" This post will probably make some people mad, and has an incredibly low chance of ever receiving a helpful response.

I hope this helps illustrate the difference between different kinds of questions. While terms like good and bad are subjective, there are types of questions that are more likely to be answered, and asking these questions will help you learn. On the contrary, there are other types that will likely never be answered, and the people who ask them typically aren't putting in any effort to learn. You have a choice in how you learn, but good answers are earned.
