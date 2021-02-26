---
title: Learning Functional Programming
slug: learning-functional-programming
description: 'How I started with functional programming. '
image: "victor-garcia-3YW2jxSblE8-unsplash.jpg"
date: 2020-04-11T00:00:00+09:00
tags:
- purescript
- elm
- reason
- javascript
- fp

---
Functional programming has always been one of those things that at once intrigued and terrified me. Something about the word “monad” sends shivers through OO people. But the allure of simple unary functions entices us. Having given up Ruby for JavaScript, I found myself in a language that seemed more welcoming of FP. There are a number of FP libraries written in JavaScript and people like Brian Lonsdoef are out there teaching and spreading the gospel.

So that’s how I got my feet wet. I got more familiar with map and reduce. I started writing simpler functions. I played with Ramda and curried functions. I took Brian’s Frontend Masters courses. This led to late nights reading the docs for Ramda, Folktale, Fantasy Land, Sanctuary, and Fluture. I was hooked. I wanted to use Maybes, Tasks, and immutable data structures.

But something wasn’t right. I didn’t want to grab third-party libraries to do this stuff. As much as I love JS and what it can do in the browser, I had fallen in love with FP, types, and immutable data. As nice as TypeScript is, it wasn’t going to cut it.

My first thought was [Haskell](https://haskell.org). I was ready to start learning Haskell when someone online suggested [PureScript](https://purescript.org), a Haskell-like language that compiles to JS. It sounded great. I started reading the docs. Seemed to make sense. The workflow getting to JS that could run in the browser wasn’t ideal, but it seemed doable.

I got curious, wondering if other languages did this. I remembered [Elm](https://elm-lang.org), which I had attempted learning briefly back in 2016 or so. It didn’t click and I forgot about it. But that got me thinking that there must be other languages doing similar stuff. That’s when I discovered [ReasonML](https://reasonml.github.io).

I spent the last week digging into Reason and its sister project, BuckleScript. Reason is an alternative syntax for OCaml. It’s got a great type system, basic support of Maybe, and the capabilities needed to build monads, even if they aren’t in the standard library. It compiles to JS or native assembly thanks to OCaml. It’s being used to build desktop and web apps. It’s an easy to learn language and the build tools are pretty good.

My next two weeks will be spent getting up to speed with Elm and PureScript. If I can get to the same level with those two as I have with Reason in seven days, I’ll be happy. I’ll then be able to decide which of the three I really wanna dig into as my main FP language. I’ll be back with follow posts about my experiences with Elm and PureScript soon. See you then!
