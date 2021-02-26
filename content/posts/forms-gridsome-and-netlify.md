---
description: How to set up a contact form on Netlify when you're using an Vue-based
  SSG like Gridsome.
icon: code
date: 2019-02-01
title: Forms, Gridsome, and Netlify
slug: forms-gridsome-and-netlify
tags:
- jamstack
- netlify
- javascript
- vue
image: "filling-form.jpg"

---
If you didn't notice already, I've added a [form](/contact) to this here site.
Since this is a JAMstack site, I have no server, per se, to process a form.
That's where Netlify's forms come in. If you poke around the documentation,
it'll say you just have to add the `netlify` attribute to any old HTML form.

```html
<form name="contact" method="post" netlify>

  <div>
    <label for="name" >Name</label>
	<input required name="name" type="text" />
  </div>

  <button type="submit">Send</button>
</form>
```

Sounds great, but not so fast. If you're uploading a pre-built folder of files,
this actually will work. Most people, I'd venture to say, are running a build
script on a `src` folder to build their site each time the `git push` happens.
In that case, Netlify doesn't seem to understand your form very well. If you
poke around the Vue-specific instructions, you'll see a line like this...

```html
<input type="hidden" name="form-name" value="contact" />
```

When I read this, I thought it was because SPAs wouldn't have the proper HTML
on build, but my static site builds full HTML, so I'm safe, right? Wrong. I
guess the build process messes with Netlify's form system, so you need to add
this extra hidden field if you're building your site with a static generator
like Gridsome. Just add this hidden field, and match the value in with the
`name` you put on the form itself. After that everything should work as
expected.
