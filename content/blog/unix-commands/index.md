---
title: Unix Commands I can't live without
date: "2020-11-08"
description: I love the command line. It was intimidating at first but now I don't know what I did without it.
---

I started a new job last year and it was my first time moving to a Windows environment. Believe me, I panicked. However, I knew that part of being a well rounded dev it's important to be comfortable in multiple environments. I can't feel limited by the tools I've been given to do the job.

Enter [Cygwin](https://www.cygwin.com/). It's like a linux/unix-y wrapper for Windows environments. It felt sort of like my Terminal, but in the same way a rental car *is* like my regular car but it's still unfamiliar.

I had to refresh my memory on commands that I used back on my old Mac so here's a few, documented and explained.

### Make directories and files

```bash
new-MBP:some-directory user$ mkdir new-directory
new-MBP:some-directory user$ cd new-directory
new-MBP:new-directory user$ touch index.html
```

Of course this is hella basic command line stuff, but definitely comes in handy when you're writing command line tools. `touch` creates a new file, and `mkdir` creates a new folder in your file system.

### Remove directories and files

```bash
new-MBP:new-directory user$ rm index.html ## remove a file
new-MBP:new-directory user$ cd ..
new-MBP:some-directory user$ rm -r new-directory ## remove a directory
```

Notice the `cd ..` command that just moved us backwards one directory. That's useful for moving back and forth in a directory structure, and can be combined with backslashes to quickly go through multiple directories.

```bash
new-MBP:some-directory user$ cd ../../
```

If you mess up/get lost and quickly want to move back to the last directory you were working in, use `cd -`

### See all files in a directory

```bash
new-MBP:some-directory user$ ls -aF
```

This is useful if I pulled down another project via Git and want to see everything in the project that's not shown in my file browser's GUI (such as the .gitignore).

`ls -t` will show files in the directory in the order of what was last modified, very handy if I don't have my file browser open.

### pwd, or print working directory

```bash
new-MBP:some-directory user$ pwd
/user/sites/some-directory
```

Simple yet powerful, this helps me when I'm in an unfamiliar server or elsewhere and just want to see the current directory structure I'm in.

### Find something with grep

```bash
new-MBP:some-directory user$ history | grep "npm install"
```

I use this a lot to search through commands I've made in my history, what's also cool is if there's a command in my history I want to run again all that needs to be called in the command line is "!" followed by the corresponding index.

```bash
new-MBP:some-directory user$ history | grep "xcode"
  169  xcode-selec --install
  170  xcode-select --install
  179  xcode-select -p
  181  xcode-select --install
  182  xcode-select p
  183  xcode-select -p
  185  xcode-select -print-path
  187  xcode-select --install
  541  history | grep "xcode"
new-user:~ !185
xcode-select -print-path
```

### Open the current directory in file browser

```bash
new-MBP:some-directory user$ open .
```

This just opens up my finder, and on Cygwin it's `cygstart .` to do the same thing.
