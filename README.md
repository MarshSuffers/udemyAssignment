# udemyAssignment
 Yet another repo for the typescript course(many bugged files)

# sections 1-2 summary

In this module I learned why typescript is(javascript with types), why you'd want to use it(types are useful), and how to install it(via npm). I learned that types already exist in hjavascript(numbers and such), but they aren't strict like typescript. I learned about generic types, how to create my own, and some basic things to do to/with types(type narrowing, optional chaining, etc).

# sections 3-4 summary

This module was mostly about leanring how to configure the tsconfig file. We learned how to target specific versions of javascript, what other things were possible to configure(tyoe checking, quality checks, etc), and why you would use that versus just tsc. We also made a demo calculator, which let us see what actually developing with typescript is like.

# sections 5-6 summary

A class is a vanilla javascript feature that lets you essentially create objects, while an Interface is a typescript feature that lets you force a shape and/or type onto a class. The key difference is that classes have logic, while interfaces just assign a shape/promise.

# sections 7-8 summary

Generic types allow you to take advantage of some things the any type doesn't, like type gaurds. The any type is basically garbage data in typescript, outside of a few niche scenarios, because you can'treally use typescript features with it. Generic types also let you write way less code than the any type if you reuse it a bunch.

# sections 9-10 summary

The purpose of a singleton pattern is to make sure that there's only one instance, that all clients could look at at the same time. In this demo, that would be the linked list numlist. It makes your code way more effient, and makes sure that multiple things looking at it at once dont mess anything up.

# sections 11-12 summary

A decorator is basically code that edits other code - like decorating a room, i'd imagine(or maybe that ISNT why its named that who knows).  Using one you can do all sorts of stuff, add types, classes, whatever. There is a pretty big difference between new and old decorators, but I only used the one. One practical use for them would be a video game ai, maybe? Edit the code as time goes on, adding or taking away behavoirs?