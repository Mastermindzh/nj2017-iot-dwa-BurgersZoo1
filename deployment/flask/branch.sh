#!/bin/bash

cd $1

git branch | grep "*"
git show | grep Date
