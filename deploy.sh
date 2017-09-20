#!/bin/sh

ssh yantene.net 'source $ZDOTDIR/.zshrc && cd /home/web/blog && git pull && bundle exec jekyll build'
