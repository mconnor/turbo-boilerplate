#!/usr/bin/env zsh
# With Yarn workspaces, you may need to# 
                    # delete node_modules in each workspace

find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +
find . -name 'build' -type d -prune -exec rm -rf '{}' +
find . -name 'dist' -type d -prune -exec rm -rf '{}' +

yarn cache clean
yarn
watchman watch-del-all

rm -fr $TMPDIR/haste-map-*
rm -rf $TMPDIR/metro-cache
