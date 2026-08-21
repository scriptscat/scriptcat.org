---
title: UserConfig
---

`==UserConfig==`-এর ভিতরের বিষয়বস্তু `==UserScript==`-এর পরে আসে এবং স্ক্রিপ্টের জন্য কিছু ব্যবহারকারী-কনফিগারযোগ্য বিকল্প বর্ণনা করে। কনফিগারেশনটি [YAML](https://yaml.org/) ফরম্যাটে লেখা হয়:

```js
/* ==UserConfig==
group1:
  configA:                                # কী হল group.config, যেমন এই কীটি group1.configA
    title: কনফিগারেশন A                   # কনফিগারেশনের শিরোনাম
    description: এটি একটি টেক্সট-টাইপ কনফিগারেশন # কনফিগারেশনের বর্ণনা
    type: text                            # বিকল্পের ধরন; বাদ দিলে ডেটা থেকে স্বয়ংক্রিয়ভাবে সনাক্ত হয়
    default: ডিফল্ট মান                   # কনফিগারেশনের ডিফল্ট মান
    min: 2                                # সর্বনিম্ন ২ অক্ষর
    max: 18                               # সর্বোচ্চ ১৮ অক্ষর
    password: true                        # পাসওয়ার্ড ক্ষেত্র হিসাবে চিহ্নিত করে
  configB:
    title: কনফিগারেশন B
    description: এটি একটি চেকবক্স কনফিগারেশন
    type: checkbox
    default: true
  configC:
    title: কনফিগারেশন C
    description: এটি একটি নির্বাচন-তালিকা কনফিগারেশন
    type: select
    default: 1
    values: [1,2,3,4,5]
  configD:
    title: কনফিগারেশন D
    description: এটি একটি গতিশীল নির্বাচন-তালিকা কনফিগারেশন
    type: select
    bind: $cookies                       # গতিশীলভাবে আবদ্ধ মান; কীটি $ দিয়ে শুরু হয় এবং মানটি অবশ্যই একটি অ্যারে হতে হবে
  configE:
    title: কনফিগারেশন E
    description: এটি একটি মাল্টি-নির্বাচন-তালিকা কনফিগারেশন
    type: mult-select
    default: [1]
    values: [1,2,3,4,5]
  configF:
    title: কনফিগারেশন F
    description: এটি একটি গতিশীল মাল্টি-নির্বাচন-তালিকা কনফিগারেশন
    type: mult-select
    bind: $cookies
  configG:
    title: কনফিগারেশন G
    description: এটি একটি সংখ্যাগত কনফিগারেশন
    type: number
    default: 1
    min: 10  # সর্বনিম্ন মান
    max: 16  # সর্বোচ্চ মান
    unit: min # একক লেবেল
  configH:
    title: কনফিগারেশন H
    description: এটি একটি দীর্ঘ-টেক্সট কনফিগারেশন
    type: textarea
    default: ডিফল্ট মান
  configI:
    title: কনফিগারেশন I
    description: এটি একটি সময়-টাইপ কনফিগারেশন
    type: time
    default: "12:00"
---
group2: # দ্বিতীয় কনফিগারেশন গ্রুপ
  configX:
    title: কনফিগারেশন X
    description: এটি একটি টেক্সট-টাইপ কনফিগারেশন
    default: ডিফল্ট মান
 ==/UserConfig== */
```

এখানে সংজ্ঞায়িত হওয়ার পরে, ব্যবহারকারীর কনফিগার করার জন্য ড্যাশবোর্ডে একটি কনফিগারেশন বাটন দেখা যায়। ডেভেলপাররা কনফিগারেশনের মান পড়তে `GM_getValue` ব্যবহার করে, কীটি `group.config` হিসাবে প্রকাশ করা হয়।

![](@site/docs/dev/config.assets/image-20210621213013631.png)
