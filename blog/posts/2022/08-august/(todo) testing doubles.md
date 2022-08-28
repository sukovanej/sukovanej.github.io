---
title: "Test doubles and their usage in respect to test code fragility"
tags: ["Python", "Testing"]
created_at: 2022-08-28
---

I started worrying about testing approximately 6 years ago. At the time, I was honestly mostly into getting tests running for whatever price. I introduced tests into two already existing projects without a single test. Retrospectively, what I did was simply a mess! I was forced to update existing tests even in case of a slight modification of the codebase. And lot of my code stood there as a confirmation for other people that are against the testing.

It got much better over the years. Often, I've let my tests drive the design of particular implementation so I inherently received pretty well testable and reasonable code and structure. I started using mocks instead of monkey-patching because at some point I finally started writing code I didn't need to test using such an obscure technique. Still, from time to time, I'm creating tests that are closely coupled to inner working of the tested entity. Lately, I've done a lot of property-based testing and it simply feels so right in comparison to usual "example"-like unit tests.

So, what's the catch? What is the thing that makes some tests brittle and prone to never-ending 

# Test doubles

Test double is a name introduced by (TODO: find on Martin Fowler's page) and then described by Martin Fowler on the page [TODO page name](TODO url) or By Robert C. Martin in his very last book [Clean craftsmanship](TODO link). 

## Dummy

## Stub

## Mock

## Spy

## 
