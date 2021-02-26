---
date: 2019-02-02
title: Vue Watchers and SSR
slug: vue-watchers-and-ssr
image: "sad-cat.jpg"
description: "How to handle Vue watchers with Gridsome."
tags: ['javascript','vue','gridsome']
icon: code
---

I have a little bit of code that handles the mobile menu on this site. It needs
to modify the `body` to add an `overflow-hidden` class from Tailwind. You can't
touch the body with reactive data in Vue, so you're stuck calling regular
browser APIs.

```javascript
document.body.classList.add('overflow-hidden')
document.body.classList.add('scrolling-auto')
document.body.classList.add('fixed')
document.body.classList.add('pin')
```

My first attempt was to use a Vue watcher on the `isOpen` data property.

```javascript
watch: {
  open(isOpen) {
    if (isOpen) {
      document.body.classList.add('overflow-hidden')
      document.body.classList.add('scrolling-auto')
      document.body.classList.add('fixed')
      document.body.classList.add('pin')
    } else {
      document.body.classList.remove('overflow-hidden')
      document.body.classList.remove('scrolling-auto')
      document.body.classList.remove('fixed')
      document.body.classList.remove('pin')
    }
  }
}
```
That worked, but I realized that when I switched routes, the overflow was still being
hidden. So I created a `handler` method.

```javascript
watch: {
  open: {
    immediate: true,
    handler(isOpen) {
      if (isOpen) {
        document.body.classList.add('overflow-hidden')
        document.body.classList.add('scrolling-auto')
        document.body.classList.add('fixed')
        document.body.classList.add('pin')
      } else {
        document.body.classList.remove('overflow-hidden')
        document.body.classList.remove('scrolling-auto')
        document.body.classList.remove('fixed')
        document.body.classList.remove('pin')
      }
    }
  }
}
```

This was perfect. Everything worked great.

Then I ran my Gridsome build script and...

```bash
'document' is undefined.
```

Well, shit.

Completely forgot that `document` wouldn't be available during server-side rendering. It's ugly, but if you're gonna use a watcher, with `immediate: true`, you're gonn have to give up on that in favor of doing janky stuff in your `mounted()` hook. It isn't ideal (and if anyone has a better option, hit me on on [Twitter](http://twitter.com/brandonpittman)), but I settled on this.

```javascript
methods: {
  toggle() {
    this.open = !this.open
  },
  addOverflowHidden() {
    document.body.classList.add('overflow-hidden')
    document.body.classList.add('scrolling-auto')
    document.body.classList.add('fixed')
    document.body.classList.add('pin')
  },
  removeOverflowHidden() {
    document.body.classList.remove('overflow-hidden')
    document.body.classList.remove('scrolling-auto')
    document.body.classList.remove('fixed')
    document.body.classList.remove('pin')
  }
},
// better to break it out into its own function, I suppose
mounted() {
  this.removeOverflowHidden()
}
```

Pretty icky-feeling, but it works. Gonna roll with this for now.

**Update: 2019-02-02**

Turns out, you can access Gridsome's `isServer` clientAPI context property with
`process.isClient`, so you can still use watchers the way they are meant to be
used pretty easily. My current implementation looks like this.

```javascript
watch: {
  open: {
    immediate: true,
    handler(isOpen) {
      if (process.isClient) {
        if (isOpen) {
          this.addOverflowHidden()
        } else {
          this.removeOverflowHidden()
        }
      }
    }
  }
}
```
