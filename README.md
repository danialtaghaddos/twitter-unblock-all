# unblock-all
A javascript script that unblocks all of a Twitter user's blocked Twitter accounts

# Overview
Unblocking everyone blocked on Twitter involves navigating to the blocked accounts (https://twitter.com/settings/blocked) page, finding the block buttons, and automatically clicking them, removing each row, rinse and repeat.

The `unblock.js` script performs each of those tasks, also waiting a certain amount of time before going for the next one. This is more efficient than previous methods of loading all the accounts first. It also avoids rate limits.

# Usage
1. Open Google Chrome
1. Navigate to https://twitter.com/settings/blocked
 * Sign in, if necessary
1. Open the Javascript Console:
 * Windows/Linux: ``Ctrl + Shift + J``
 * OS X: ``Cmd + Option +J``
1. Paste the contents of ``unblock.js`` into the Console window. Press `Enter`.
1. Type `main()`. Press `Enter`. 
1. Let it chooch

*If you see errors in the console log, refresh the page and repeat the above steps.*
