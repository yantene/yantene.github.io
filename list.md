---
layout: fixed
title: 全ての記事一覧
---

<ul id='article_list'>
{% for post in site.posts %}
  <li class='{{ post.tags | join: " " }}'>
    {{ post.date | date: "%Y-%m-%d" }} <a href='{{ post.url }}'>{{ post.title }}</a>
  </li>
{% endfor %}
</ul>

<script>
  let tag = window.location.search.toQueryParams().tag;
  if (tag != null) {
    for (articleTitle of document.getElementById('article_list').children) {
      if (articleTitle.className.split(' ').indexOf(tag) == -1) {
        articleTitle.style.display = 'none';
      }
    }
    document.title = document.title.replace('全て', '#' + tag + ' ');
    document.getElementById('article_title').innerHTML = document.getElementById('article_title').innerHTML.replace('全て', '#' + tag + ' ');
  }
</script>
