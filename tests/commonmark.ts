// prettier-ignore
export default [
  {
    "markdown": "\tfoo\tbaz\t\tbim\n",
    "html": "<pre><code>foo\tbaz\t\tbim\n</code></pre>\n",
    "example": 1,
    "start_line": 356,
    "end_line": 361,
    "section": "Tabs"
  },
  {
    "markdown": "  \tfoo\tbaz\t\tbim\n",
    "html": "<pre><code>foo\tbaz\t\tbim\n</code></pre>\n",
    "example": 2,
    "start_line": 363,
    "end_line": 368,
    "section": "Tabs"
  },
  {
    "markdown": "    a\ta\n    ὐ\ta\n",
    "html": "<pre><code>a\ta\nὐ\ta\n</code></pre>\n",
    "example": 3,
    "start_line": 370,
    "end_line": 377,
    "section": "Tabs"
  },
  {
    "markdown": "  - foo\n\n\tbar\n",
    "html": "<ul>\n<li>\n<p>foo</p>\n<p>bar</p>\n</li>\n</ul>\n",
    "example": 4,
    "start_line": 383,
    "end_line": 394,
    "section": "Tabs"
  },
  {
    "markdown": "- foo\n\n\t\tbar\n",
    "html": "<ul>\n<li>\n<p>foo</p>\n<pre><code>  bar\n</code></pre>\n</li>\n</ul>\n",
    "example": 5,
    "start_line": 396,
    "end_line": 408,
    "section": "Tabs"
  },
  {
    "markdown": ">\t\tfoo\n",
    "html": "<blockquote>\n<pre><code>  foo\n</code></pre>\n</blockquote>\n",
    "example": 6,
    "start_line": 419,
    "end_line": 426,
    "section": "Tabs"
  },
  {
    "markdown": "-\t\tfoo\n",
    "html": "<ul>\n<li>\n<pre><code>  foo\n</code></pre>\n</li>\n</ul>\n",
    "example": 7,
    "start_line": 428,
    "end_line": 437,
    "section": "Tabs"
  },
  {
    "markdown": "    foo\n\tbar\n",
    "html": "<pre><code>foo\nbar\n</code></pre>\n",
    "example": 8,
    "start_line": 440,
    "end_line": 447,
    "section": "Tabs"
  },
  {
    "markdown": " - foo\n   - bar\n\t - baz\n",
    "html": "<ul>\n<li>foo\n<ul>\n<li>bar\n<ul>\n<li>baz</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n",
    "example": 9,
    "start_line": 449,
    "end_line": 465,
    "section": "Tabs"
  },
  {
    "markdown": "#\tFoo\n",
    "html": "<h1>Foo</h1>\n",
    "example": 10,
    "start_line": 467,
    "end_line": 471,
    "section": "Tabs"
  },
  {
    "markdown": "*\t*\t*\t\n",
    "html": "<hr />\n",
    "example": 11,
    "start_line": 473,
    "end_line": 477,
    "section": "Tabs"
  },
  {
    "markdown": "\\!\\\"\\#\\$\\%\\&\\'\\(\\)\\*\\+\\,\\-\\.\\/\\:\\;\\<\\=\\>\\?\\@\\[\\\\\\]\\^\\_\\`\\{\\|\\}\\~\n",
    "html": "<p>!&quot;#$%&amp;'()*+,-./:;&lt;=&gt;?@[\\]^_`{|}~</p>\n",
    "example": 12,
    "start_line": 490,
    "end_line": 494,
    "section": "Backslash escapes"
  },
  {
    "markdown": "\\\t\\A\\a\\ \\3\\φ\\«\n",
    "html": "<p>\\\t\\A\\a\\ \\3\\φ\\«</p>\n",
    "example": 13,
    "start_line": 500,
    "end_line": 504,
    "section": "Backslash escapes"
  },
  {
    "markdown": "\\*not emphasized*\n\\<br/> not a tag\n\\[not a link](/foo)\n\\`not code`\n1\\. not a list\n\\* not a list\n\\# not a heading\n\\[foo]: /url \"not a reference\"\n\\&ouml; not a character entity\n",
    "html": "<p>*not emphasized*\n&lt;br/&gt; not a tag\n[not a link](/foo)\n`not code`\n1. not a list\n* not a list\n# not a heading\n[foo]: /url &quot;not a reference&quot;\n&amp;ouml; not a character entity</p>\n",
    "example": 14,
    "start_line": 510,
    "end_line": 530,
    "section": "Backslash escapes"
  },
  {
    "markdown": "\\\\*emphasis*\n",
    "html": "<p>\\<em>emphasis</em></p>\n",
    "example": 15,
    "start_line": 535,
    "end_line": 539,
    "section": "Backslash escapes"
  },
  {
    "markdown": "foo\\\nbar\n",
    "html": "<p>foo<br />\nbar</p>\n",
    "example": 16,
    "start_line": 544,
    "end_line": 550,
    "section": "Backslash escapes"
  },
  {
    "markdown": "`` \\[\\` ``\n",
    "html": "<p><code>\\[\\`</code></p>\n",
    "example": 17,
    "start_line": 556,
    "end_line": 560,
    "section": "Backslash escapes"
  },
  {
    "markdown": "    \\[\\]\n",
    "html": "<pre><code>\\[\\]\n</code></pre>\n",
    "example": 18,
    "start_line": 563,
    "end_line": 568,
    "section": "Backslash escapes"
  },
  {
    "markdown": "~~~\n\\[\\]\n~~~\n",
    "html": "<pre><code>\\[\\]\n</code></pre>\n",
    "example": 19,
    "start_line": 571,
    "end_line": 578,
    "section": "Backslash escapes"
  },
  {
    "markdown": "<http://example.com?find=\\*>\n",
    "html": "<p><a href=\"http://example.com?find=%5C*\">http://example.com?find=\\*</a></p>\n",
    "example": 20,
    "start_line": 581,
    "end_line": 585,
    "section": "Backslash escapes"
  },
  {
    "markdown": "<a href=\"/bar\\/)\">\n",
    "html": "<a href=\"/bar\\/)\">\n",
    "example": 21,
    "start_line": 588,
    "end_line": 592,
    "section": "Backslash escapes"
  },
  {
    "markdown": "[foo](/bar\\* \"ti\\*tle\")\n",
    "html": "<p><a href=\"/bar*\" title=\"ti*tle\">foo</a></p>\n",
    "example": 22,
    "start_line": 598,
    "end_line": 602,
    "section": "Backslash escapes"
  },
  {
    "markdown": "[foo]\n\n[foo]: /bar\\* \"ti\\*tle\"\n",
    "html": "<p><a href=\"/bar*\" title=\"ti*tle\">foo</a></p>\n",
    "example": 23,
    "start_line": 605,
    "end_line": 611,
    "section": "Backslash escapes"
  },
  {
    "markdown": "``` foo\\+bar\nfoo\n```\n",
    "html": "<pre><code class=\"language-foo+bar\">foo\n</code></pre>\n",
    "example": 24,
    "start_line": 614,
    "end_line": 621,
    "section": "Backslash escapes"
  },
  {
    "markdown": "&nbsp; &amp; &copy; &AElig; &Dcaron;\n&frac34; &HilbertSpace; &DifferentialD;\n&ClockwiseContourIntegral; &ngE;\n",
    "html": "<p>  &amp; © Æ Ď\n¾ ℋ ⅆ\n∲ ≧̸</p>\n",
    "example": 25,
    "start_line": 650,
    "end_line": 658,
    "section": "Entity and numeric character references"
  },
  {
    "markdown": "&#35; &#1234; &#992; &#0;\n",
    "html": "<p># Ӓ Ϡ �</p>\n",
    "example": 26,
    "start_line": 669,
    "end_line": 673,
    "section": "Entity and numeric character references"
  },
  {
    "markdown": "&#X22; &#XD06; &#xcab;\n",
    "html": "<p>&quot; ആ ಫ</p>\n",
    "example": 27,
    "start_line": 682,
    "end_line": 686,
    "section": "Entity and numeric character references"
  },
  {
    "markdown": "&nbsp &x; &#; &#x;\n&#87654321;\n&#abcdef0;\n&ThisIsNotDefined; &hi?;\n",
    "html": "<p>&amp;nbsp &amp;x; &amp;#; &amp;#x;\n&amp;#87654321;\n&amp;#abcdef0;\n&amp;ThisIsNotDefined; &amp;hi?;</p>\n",
    "example": 28,
    "start_line": 691,
    "end_line": 701,
    "section": "Entity and numeric character references"
  },
  {
    "markdown": "&copy\n",
    "html": "<p>&amp;copy</p>\n",
    "example": 29,
    "start_line": 708,
    "end_line": 712,
    "section": "Entity and numeric character references"
  },
  {
    "markdown": "&MadeUpEntity;\n",
    "html": "<p>&amp;MadeUpEntity;</p>\n",
    "example": 30,
    "start_line": 718,
    "end_line": 722,
    "section": "Entity and numeric character references"
  },
  {
    "markdown": "<a href=\"&ouml;&ouml;.html\">\n",
    "html": "<a href=\"&ouml;&ouml;.html\">\n",
    "example": 31,
    "start_line": 729,
    "end_line": 733,
    "section": "Entity and numeric character references"
  },
  {
    "markdown": "[foo](/f&ouml;&ouml; \"f&ouml;&ouml;\")\n",
    "html": "<p><a href=\"/f%C3%B6%C3%B6\" title=\"föö\">foo</a></p>\n",
    "example": 32,
    "start_line": 736,
    "end_line": 740,
    "section": "Entity and numeric character references"
  },
  {
    "markdown": "[foo]\n\n[foo]: /f&ouml;&ouml; \"f&ouml;&ouml;\"\n",
    "html": "<p><a href=\"/f%C3%B6%C3%B6\" title=\"föö\">foo</a></p>\n",
    "example": 33,
    "start_line": 743,
    "end_line": 749,
    "section": "Entity and numeric character references"
  },
  {
    "markdown": "``` f&ouml;&ouml;\nfoo\n```\n",
    "html": "<pre><code class=\"language-föö\">foo\n</code></pre>\n",
    "example": 34,
    "start_line": 752,
    "end_line": 759,
    "section": "Entity and numeric character references"
  },
  {
    "markdown": "`f&ouml;&ouml;`\n",
    "html": "<p><code>f&amp;ouml;&amp;ouml;</code></p>\n",
    "example": 35,
    "start_line": 765,
    "end_line": 769,
    "section": "Entity and numeric character references"
  },
  {
    "markdown": "    f&ouml;f&ouml;\n",
    "html": "<pre><code>f&amp;ouml;f&amp;ouml;\n</code></pre>\n",
    "example": 36,
    "start_line": 772,
    "end_line": 777,
    "section": "Entity and numeric character references"
  },
  {
    "markdown": "&#42;foo&#42;\n*foo*\n",
    "html": "<p>*foo*\n<em>foo</em></p>\n",
    "example": 37,
    "start_line": 784,
    "end_line": 790,
    "section": "Entity and numeric character references"
  },
  {
    "markdown": "&#42; foo\n\n* foo\n",
    "html": "<p>* foo</p>\n<ul>\n<li>foo</li>\n</ul>\n",
    "example": 38,
    "start_line": 792,
    "end_line": 801,
    "section": "Entity and numeric character references"
  },
  {
    "markdown": "foo&#10;&#10;bar\n",
    "html": "<p>foo\n\nbar</p>\n",
    "example": 39,
    "start_line": 803,
    "end_line": 809,
    "section": "Entity and numeric character references"
  },
  {
    "markdown": "&#9;foo\n",
    "html": "<p>\tfoo</p>\n",
    "example": 40,
    "start_line": 811,
    "end_line": 815,
    "section": "Entity and numeric character references"
  },
  {
    "markdown": "[a](url &quot;tit&quot;)\n",
    "html": "<p>[a](url &quot;tit&quot;)</p>\n",
    "example": 41,
    "start_line": 818,
    "end_line": 822,
    "section": "Entity and numeric character references"
  },
  {
    "markdown": "- `one\n- two`\n",
    "html": "<ul>\n<li>`one</li>\n<li>two`</li>\n</ul>\n",
    "example": 42,
    "start_line": 841,
    "end_line": 849,
    "section": "Precedence"
  },
  {
    "markdown": "***\n---\n___\n",
    "html": "<hr />\n<hr />\n<hr />\n",
    "example": 43,
    "start_line": 880,
    "end_line": 888,
    "section": "Thematic breaks"
  },
  {
    "markdown": "+++\n",
    "html": "<p>+++</p>\n",
    "example": 44,
    "start_line": 893,
    "end_line": 897,
    "section": "Thematic breaks"
  },
  {
    "markdown": "===\n",
    "html": "<p>===</p>\n",
    "example": 45,
    "start_line": 900,
    "end_line": 904,
    "section": "Thematic breaks"
  },
  {
    "markdown": "--\n**\n__\n",
    "html": "<p>--\n**\n__</p>\n",
    "example": 46,
    "start_line": 909,
    "end_line": 917,
    "section": "Thematic breaks"
  },
  {
    "markdown": " ***\n  ***\n   ***\n",
    "html": "<hr />\n<hr />\n<hr />\n",
    "example": 47,
    "start_line": 922,
    "end_line": 930,
    "section": "Thematic breaks"
  },
  {
    "markdown": "    ***\n",
    "html": "<pre><code>***\n</code></pre>\n",
    "example": 48,
    "start_line": 935,
    "end_line": 940,
    "section": "Thematic breaks"
  },
  {
    "markdown": "Foo\n    ***\n",
    "html": "<p>Foo\n***</p>\n",
    "example": 49,
    "start_line": 943,
    "end_line": 949,
    "section": "Thematic breaks"
  },
  {
    "markdown": "_____________________________________\n",
    "html": "<hr />\n",
    "example": 50,
    "start_line": 954,
    "end_line": 958,
    "section": "Thematic breaks"
  },
  {
    "markdown": " - - -\n",
    "html": "<hr />\n",
    "example": 51,
    "start_line": 963,
    "end_line": 967,
    "section": "Thematic breaks"
  },
  {
    "markdown": " **  * ** * ** * **\n",
    "html": "<hr />\n",
    "example": 52,
    "start_line": 970,
    "end_line": 974,
    "section": "Thematic breaks"
  },
  {
    "markdown": "-     -      -      -\n",
    "html": "<hr />\n",
    "example": 53,
    "start_line": 977,
    "end_line": 981,
    "section": "Thematic breaks"
  },
  {
    "markdown": "- - - -    \n",
    "html": "<hr />\n",
    "example": 54,
    "start_line": 986,
    "end_line": 990,
    "section": "Thematic breaks"
  },
  {
    "markdown": "_ _ _ _ a\n\na------\n\n---a---\n",
    "html": "<p>_ _ _ _ a</p>\n<p>a------</p>\n<p>---a---</p>\n",
    "example": 55,
    "start_line": 995,
    "end_line": 1005,
    "section": "Thematic breaks"
  },
  {
    "markdown": " *-*\n",
    "html": "<p><em>-</em></p>\n",
    "example": 56,
    "start_line": 1011,
    "end_line": 1015,
    "section": "Thematic breaks"
  },
  {
    "markdown": "- foo\n***\n- bar\n",
    "html": "<ul>\n<li>foo</li>\n</ul>\n<hr />\n<ul>\n<li>bar</li>\n</ul>\n",
    "example": 57,
    "start_line": 1020,
    "end_line": 1032,
    "section": "Thematic breaks"
  },
  {
    "markdown": "Foo\n***\nbar\n",
    "html": "<p>Foo</p>\n<hr />\n<p>bar</p>\n",
    "example": 58,
    "start_line": 1037,
    "end_line": 1045,
    "section": "Thematic breaks"
  },
  {
    "markdown": "Foo\n---\nbar\n",
    "html": "<h2>Foo</h2>\n<p>bar</p>\n",
    "example": 59,
    "start_line": 1054,
    "end_line": 1061,
    "section": "Thematic breaks"
  },
  {
    "markdown": "* Foo\n* * *\n* Bar\n",
    "html": "<ul>\n<li>Foo</li>\n</ul>\n<hr />\n<ul>\n<li>Bar</li>\n</ul>\n",
    "example": 60,
    "start_line": 1067,
    "end_line": 1079,
    "section": "Thematic breaks"
  },
  {
    "markdown": "- Foo\n- * * *\n",
    "html": "<ul>\n<li>Foo</li>\n<li>\n<hr />\n</li>\n</ul>\n",
    "example": 61,
    "start_line": 1084,
    "end_line": 1094,
    "section": "Thematic breaks"
  },
  {
    "markdown": "# foo\n## foo\n### foo\n#### foo\n##### foo\n###### foo\n",
    "html": "<h1>foo</h1>\n<h2>foo</h2>\n<h3>foo</h3>\n<h4>foo</h4>\n<h5>foo</h5>\n<h6>foo</h6>\n",
    "example": 62,
    "start_line": 1113,
    "end_line": 1127,
    "section": "ATX headings"
  },
  {
    "markdown": "####### foo\n",
    "html": "<p>####### foo</p>\n",
    "example": 63,
    "start_line": 1132,
    "end_line": 1136,
    "section": "ATX headings"
  },
  {
    "markdown": "#5 bolt\n\n#hashtag\n",
    "html": "<p>#5 bolt</p>\n<p>#hashtag</p>\n",
    "example": 64,
    "start_line": 1147,
    "end_line": 1154,
    "section": "ATX headings"
  },
  {
    "markdown": "\\## foo\n",
    "html": "<p>## foo</p>\n",
    "example": 65,
    "start_line": 1159,
    "end_line": 1163,
    "section": "ATX headings"
  },
  {
    "markdown": "# foo *bar* \\*baz\\*\n",
    "html": "<h1>foo <em>bar</em> *baz*</h1>\n",
    "example": 66,
    "start_line": 1168,
    "end_line": 1172,
    "section": "ATX headings"
  },
  {
    "markdown": "#                  foo                     \n",
    "html": "<h1>foo</h1>\n",
    "example": 67,
    "start_line": 1177,
    "end_line": 1181,
    "section": "ATX headings"
  },
  {
    "markdown": " ### foo\n  ## foo\n   # foo\n",
    "html": "<h3>foo</h3>\n<h2>foo</h2>\n<h1>foo</h1>\n",
    "example": 68,
    "start_line": 1186,
    "end_line": 1194,
    "section": "ATX headings"
  },
  {
    "markdown": "    # foo\n",
    "html": "<pre><code># foo\n</code></pre>\n",
    "example": 69,
    "start_line": 1199,
    "end_line": 1204,
    "section": "ATX headings"
  },
  {
    "markdown": "foo\n    # bar\n",
    "html": "<p>foo\n# bar</p>\n",
    "example": 70,
    "start_line": 1207,
    "end_line": 1213,
    "section": "ATX headings"
  },
  {
    "markdown": "## foo ##\n  ###   bar    ###\n",
    "html": "<h2>foo</h2>\n<h3>bar</h3>\n",
    "example": 71,
    "start_line": 1218,
    "end_line": 1224,
    "section": "ATX headings"
  },
  {
    "markdown": "# foo ##################################\n##### foo ##\n",
    "html": "<h1>foo</h1>\n<h5>foo</h5>\n",
    "example": 72,
    "start_line": 1229,
    "end_line": 1235,
    "section": "ATX headings"
  },
  {
    "markdown": "### foo ###     \n",
    "html": "<h3>foo</h3>\n",
    "example": 73,
    "start_line": 1240,
    "end_line": 1244,
    "section": "ATX headings"
  },
  {
    "markdown": "### foo ### b\n",
    "html": "<h3>foo ### b</h3>\n",
    "example": 74,
    "start_line": 1251,
    "end_line": 1255,
    "section": "ATX headings"
  },
  {
    "markdown": "# foo#\n",
    "html": "<h1>foo#</h1>\n",
    "example": 75,
    "start_line": 1260,
    "end_line": 1264,
    "section": "ATX headings"
  },
  {
    "markdown": "### foo \\###\n## foo #\\##\n# foo \\#\n",
    "html": "<h3>foo ###</h3>\n<h2>foo ###</h2>\n<h1>foo #</h1>\n",
    "example": 76,
    "start_line": 1270,
    "end_line": 1278,
    "section": "ATX headings"
  },
  {
    "markdown": "****\n## foo\n****\n",
    "html": "<hr />\n<h2>foo</h2>\n<hr />\n",
    "example": 77,
    "start_line": 1284,
    "end_line": 1292,
    "section": "ATX headings"
  },
  {
    "markdown": "Foo bar\n# baz\nBar foo\n",
    "html": "<p>Foo bar</p>\n<h1>baz</h1>\n<p>Bar foo</p>\n",
    "example": 78,
    "start_line": 1295,
    "end_line": 1303,
    "section": "ATX headings"
  },
  {
    "markdown": "## \n#\n### ###\n",
    "html": "<h2></h2>\n<h1></h1>\n<h3></h3>\n",
    "example": 79,
    "start_line": 1308,
    "end_line": 1316,
    "section": "ATX headings"
  },
  {
    "markdown": "Foo *bar*\n=========\n\nFoo *bar*\n---------\n",
    "html": "<h1>Foo <em>bar</em></h1>\n<h2>Foo <em>bar</em></h2>\n",
    "example": 80,
    "start_line": 1351,
    "end_line": 1360,
    "section": "Setext headings"
  },
  {
    "markdown": "Foo *bar\nbaz*\n====\n",
    "html": "<h1>Foo <em>bar\nbaz</em></h1>\n",
    "example": 81,
    "start_line": 1365,
    "end_line": 1372,
    "section": "Setext headings"
  },
  {
    "markdown": "  Foo *bar\nbaz*\t\n====\n",
    "html": "<h1>Foo <em>bar\nbaz</em></h1>\n",
    "example": 82,
    "start_line": 1379,
    "end_line": 1386,
    "section": "Setext headings"
  },
  {
    "markdown": "Foo\n-------------------------\n\nFoo\n=\n",
    "html": "<h2>Foo</h2>\n<h1>Foo</h1>\n",
    "example": 83,
    "start_line": 1391,
    "end_line": 1400,
    "section": "Setext headings"
  },
  {
    "markdown": "   Foo\n---\n\n  Foo\n-----\n\n  Foo\n  ===\n",
    "html": "<h2>Foo</h2>\n<h2>Foo</h2>\n<h1>Foo</h1>\n",
    "example": 84,
    "start_line": 1406,
    "end_line": 1419,
    "section": "Setext headings"
  },
  {
    "markdown": "    Foo\n    ---\n\n    Foo\n---\n",
    "html": "<pre><code>Foo\n---\n\nFoo\n</code></pre>\n<hr />\n",
    "example": 85,
    "start_line": 1424,
    "end_line": 1437,
    "section": "Setext headings"
  },
  {
    "markdown": "Foo\n   ----      \n",
    "html": "<h2>Foo</h2>\n",
    "example": 86,
    "start_line": 1443,
    "end_line": 1448,
    "section": "Setext headings"
  },
  {
    "markdown": "Foo\n    ---\n",
    "html": "<p>Foo\n---</p>\n",
    "example": 87,
    "start_line": 1453,
    "end_line": 1459,
    "section": "Setext headings"
  },
  {
    "markdown": "Foo\n= =\n\nFoo\n--- -\n",
    "html": "<p>Foo\n= =</p>\n<p>Foo</p>\n<hr />\n",
    "example": 88,
    "start_line": 1464,
    "end_line": 1475,
    "section": "Setext headings"
  },
  {
    "markdown": "Foo  \n-----\n",
    "html": "<h2>Foo</h2>\n",
    "example": 89,
    "start_line": 1480,
    "end_line": 1485,
    "section": "Setext headings"
  },
  {
    "markdown": "Foo\\\n----\n",
    "html": "<h2>Foo\\</h2>\n",
    "example": 90,
    "start_line": 1490,
    "end_line": 1495,
    "section": "Setext headings"
  },
  {
    "markdown": "`Foo\n----\n`\n\n<a title=\"a lot\n---\nof dashes\"/>\n",
    "html": "<h2>`Foo</h2>\n<p>`</p>\n<h2>&lt;a title=&quot;a lot</h2>\n<p>of dashes&quot;/&gt;</p>\n",
    "example": 91,
    "start_line": 1501,
    "end_line": 1514,
    "section": "Setext headings"
  },
  {
    "markdown": "> Foo\n---\n",
    "html": "<blockquote>\n<p>Foo</p>\n</blockquote>\n<hr />\n",
    "example": 92,
    "start_line": 1520,
    "end_line": 1528,
    "section": "Setext headings"
  },
  {
    "markdown": "> foo\nbar\n===\n",
    "html": "<blockquote>\n<p>foo\nbar\n===</p>\n</blockquote>\n",
    "example": 93,
    "start_line": 1531,
    "end_line": 1541,
    "section": "Setext headings"
  },
  {
    "markdown": "- Foo\n---\n",
    "html": "<ul>\n<li>Foo</li>\n</ul>\n<hr />\n",
    "example": 94,
    "start_line": 1544,
    "end_line": 1552,
    "section": "Setext headings"
  },
  {
    "markdown": "Foo\nBar\n---\n",
    "html": "<h2>Foo\nBar</h2>\n",
    "example": 95,
    "start_line": 1559,
    "end_line": 1566,
    "section": "Setext headings"
  },
  {
    "markdown": "---\nFoo\n---\nBar\n---\nBaz\n",
    "html": "<hr />\n<h2>Foo</h2>\n<h2>Bar</h2>\n<p>Baz</p>\n",
    "example": 96,
    "start_line": 1572,
    "end_line": 1584,
    "section": "Setext headings"
  },
  {
    "markdown": "\n====\n",
    "html": "<p>====</p>\n",
    "example": 97,
    "start_line": 1589,
    "end_line": 1594,
    "section": "Setext headings"
  },
  {
    "markdown": "---\n---\n",
    "html": "<hr />\n<hr />\n",
    "example": 98,
    "start_line": 1601,
    "end_line": 1607,
    "section": "Setext headings"
  },
  {
    "markdown": "- foo\n-----\n",
    "html": "<ul>\n<li>foo</li>\n</ul>\n<hr />\n",
    "example": 99,
    "start_line": 1610,
    "end_line": 1618,
    "section": "Setext headings"
  },
  {
    "markdown": "    foo\n---\n",
    "html": "<pre><code>foo\n</code></pre>\n<hr />\n",
    "example": 100,
    "start_line": 1621,
    "end_line": 1628,
    "section": "Setext headings"
  },
  {
    "markdown": "> foo\n-----\n",
    "html": "<blockquote>\n<p>foo</p>\n</blockquote>\n<hr />\n",
    "example": 101,
    "start_line": 1631,
    "end_line": 1639,
    "section": "Setext headings"
  },
  {
    "markdown": "\\> foo\n------\n",
    "html": "<h2>&gt; foo</h2>\n",
    "example": 102,
    "start_line": 1645,
    "end_line": 1650,
    "section": "Setext headings"
  },
  {
    "markdown": "Foo\n\nbar\n---\nbaz\n",
    "html": "<p>Foo</p>\n<h2>bar</h2>\n<p>baz</p>\n",
    "example": 103,
    "start_line": 1676,
    "end_line": 1686,
    "section": "Setext headings"
  },
  {
    "markdown": "Foo\nbar\n\n---\n\nbaz\n",
    "html": "<p>Foo\nbar</p>\n<hr />\n<p>baz</p>\n",
    "example": 104,
    "start_line": 1692,
    "end_line": 1704,
    "section": "Setext headings"
  },
  {
    "markdown": "Foo\nbar\n* * *\nbaz\n",
    "html": "<p>Foo\nbar</p>\n<hr />\n<p>baz</p>\n",
    "example": 105,
    "start_line": 1710,
    "end_line": 1720,
    "section": "Setext headings"
  },
  {
    "markdown": "Foo\nbar\n\\---\nbaz\n",
    "html": "<p>Foo\nbar\n---\nbaz</p>\n",
    "example": 106,
    "start_line": 1725,
    "end_line": 1735,
    "section": "Setext headings"
  },
  {
    "markdown": "    a simple\n      indented code block\n",
    "html": "<pre><code>a simple\n  indented code block\n</code></pre>\n",
    "example": 107,
    "start_line": 1753,
    "end_line": 1760,
    "section": "Indented code blocks"
  },
  {
    "markdown": "  - foo\n\n    bar\n",
    "html": "<ul>\n<li>\n<p>foo</p>\n<p>bar</p>\n</li>\n</ul>\n",
    "example": 108,
    "start_line": 1767,
    "end_line": 1778,
    "section": "Indented code blocks"
  },
  {
    "markdown": "1.  foo\n\n    - bar\n",
    "html": "<ol>\n<li>\n<p>foo</p>\n<ul>\n<li>bar</li>\n</ul>\n</li>\n</ol>\n",
    "example": 109,
    "start_line": 1781,
    "end_line": 1794,
    "section": "Indented code blocks"
  },
  {
    "markdown": "    <a/>\n    *hi*\n\n    - one\n",
    "html": "<pre><code>&lt;a/&gt;\n*hi*\n\n- one\n</code></pre>\n",
    "example": 110,
    "start_line": 1801,
    "end_line": 1812,
    "section": "Indented code blocks"
  },
  {
    "markdown": "    chunk1\n\n    chunk2\n  \n \n \n    chunk3\n",
    "html": "<pre><code>chunk1\n\nchunk2\n\n\n\nchunk3\n</code></pre>\n",
    "example": 111,
    "start_line": 1817,
    "end_line": 1834,
    "section": "Indented code blocks"
  },
  {
    "markdown": "    chunk1\n      \n      chunk2\n",
    "html": "<pre><code>chunk1\n  \n  chunk2\n</code></pre>\n",
    "example": 112,
    "start_line": 1840,
    "end_line": 1849,
    "section": "Indented code blocks"
  },
  {
    "markdown": "Foo\n    bar\n\n",
    "html": "<p>Foo\nbar</p>\n",
    "example": 113,
    "start_line": 1855,
    "end_line": 1862,
    "section": "Indented code blocks"
  },
  {
    "markdown": "    foo\nbar\n",
    "html": "<pre><code>foo\n</code></pre>\n<p>bar</p>\n",
    "example": 114,
    "start_line": 1869,
    "end_line": 1876,
    "section": "Indented code blocks"
  },
  {
    "markdown": "# Heading\n    foo\nHeading\n------\n    foo\n----\n",
    "html": "<h1>Heading</h1>\n<pre><code>foo\n</code></pre>\n<h2>Heading</h2>\n<pre><code>foo\n</code></pre>\n<hr />\n",
    "example": 115,
    "start_line": 1882,
    "end_line": 1897,
    "section": "Indented code blocks"
  },
  {
    "markdown": "        foo\n    bar\n",
    "html": "<pre><code>    foo\nbar\n</code></pre>\n",
    "example": 116,
    "start_line": 1902,
    "end_line": 1909,
    "section": "Indented code blocks"
  },
  {
    "markdown": "\n    \n    foo\n    \n\n",
    "html": "<pre><code>foo\n</code></pre>\n",
    "example": 117,
    "start_line": 1915,
    "end_line": 1924,
    "section": "Indented code blocks"
  },
  {
    "markdown": "    foo  \n",
    "html": "<pre><code>foo  \n</code></pre>\n",
    "example": 118,
    "start_line": 1929,
    "end_line": 1934,
    "section": "Indented code blocks"
  },
  {
    "markdown": "```\n<\n >\n```\n",
    "html": "<pre><code>&lt;\n &gt;\n</code></pre>\n",
    "example": 119,
    "start_line": 1984,
    "end_line": 1993,
    "section": "Fenced code blocks"
  },
  {
    "markdown": "~~~\n<\n >\n~~~\n",
    "html": "<pre><code>&lt;\n &gt;\n</code></pre>\n",
    "example": 120,
    "start_line": 1998,
    "end_line": 2007,
    "section": "Fenced code blocks"
  },
  {
    "markdown": "``\nfoo\n``\n",
    "html": "<p><code>foo</code></p>\n",
    "example": 121,
    "start_line": 2011,
    "end_line": 2017,
    "section": "Fenced code blocks"
  },
  {
    "markdown": "```\naaa\n~~~\n```\n",
    "html": "<pre><code>aaa\n~~~\n</code></pre>\n",
    "example": 122,
    "start_line": 2022,
    "end_line": 2031,
    "section": "Fenced code blocks"
  },
  {
    "markdown": "~~~\naaa\n```\n~~~\n",
    "html": "<pre><code>aaa\n```\n</code></pre>\n",
    "example": 123,
    "start_line": 2034,
    "end_line": 2043,
    "section": "Fenced code blocks"
  },
  {
    "markdown": "````\naaa\n```\n``````\n",
    "html": "<pre><code>aaa\n```\n</code></pre>\n",
    "example": 124,
    "start_line": 2048,
    "end_line": 2057,
    "section": "Fenced code blocks"
  },
  {
    "markdown": "~~~~\naaa\n~~~\n~~~~\n",
    "html": "<pre><code>aaa\n~~~\n</code></pre>\n",
    "example": 125,
    "start_line": 2060,
    "end_line": 2069,
    "section": "Fenced code blocks"
  },
  {
    "markdown": "```\n",
    "html": "<pre><code></code></pre>\n",
    "example": 126,
    "start_line": 2075,
    "end_line": 2079,
    "section": "Fenced code blocks"
  },
  {
    "markdown": "`````\n\n```\naaa\n",
    "html": "<pre><code>\n```\naaa\n</code></pre>\n",
    "example": 127,
    "start_line": 2082,
    "end_line": 2092,
    "section": "Fenced code blocks"
  },
  {
    "markdown": "> ```\n> aaa\n\nbbb\n",
    "html": "<blockquote>\n<pre><code>aaa\n</code></pre>\n</blockquote>\n<p>bbb</p>\n",
    "example": 128,
    "start_line": 2095,
    "end_line": 2106,
    "section": "Fenced code blocks"
  },
  {
    "markdown": "```\n\n  \n```\n",
    "html": "<pre><code>\n  \n</code></pre>\n",
    "example": 129,
    "start_line": 2111,
    "end_line": 2120,
    "section": "Fenced code blocks"
  },
  {
    "markdown": "```\n```\n",
    "html": "<pre><code></code></pre>\n",
    "example": 130,
    "start_line": 2125,
    "end_line": 2130,
    "section": "Fenced code blocks"
  },
  {
    "markdown": " ```\n aaa\naaa\n```\n",
    "html": "<pre><code>aaa\naaa\n</code></pre>\n",
    "example": 131,
    "start_line": 2137,
    "end_line": 2146,
    "section": "Fenced code blocks"
  },
  {
    "markdown": "  ```\naaa\n  aaa\naaa\n  ```\n",
    "html": "<pre><code>aaa\naaa\naaa\n</code></pre>\n",
    "example": 132,
    "start_line": 2149,
    "end_line": 2160,
    "section": "Fenced code blocks"
  },
  {
    "markdown": "   ```\n   aaa\n    aaa\n  aaa\n   ```\n",
    "html": "<pre><code>aaa\n aaa\naaa\n</code></pre>\n",
    "example": 133,
    "start_line": 2163,
    "end_line": 2174,
    "section": "Fenced code blocks"
  },
  {
    "markdown": "    ```\n    aaa\n    ```\n",
    "html": "<pre><code>```\naaa\n```\n</code></pre>\n",
    "example": 134,
    "start_line": 2179,
    "end_line": 2188,
    "section": "Fenced code blocks"
  },
  {
    "markdown": "```\naaa\n  ```\n",
    "html": "<pre><code>aaa\n</code></pre>\n",
    "example": 135,
    "start_line": 2194,
    "end_line": 2201,
    "section": "Fenced code blocks"
  },
  {
    "markdown": "   ```\naaa\n  ```\n",
    "html": "<pre><code>aaa\n</code></pre>\n",
    "example": 136,
    "start_line": 2204,
    "end_line": 2211,
    "section": "Fenced code blocks"
  },
  {
    "markdown": "```\naaa\n    ```\n",
    "html": "<pre><code>aaa\n    ```\n</code></pre>\n",
    "example": 137,
    "start_line": 2216,
    "end_line": 2224,
    "section": "Fenced code blocks"
  },
  {
    "markdown": "``` ```\naaa\n",
    "html": "<p><code> </code>\naaa</p>\n",
    "example": 138,
    "start_line": 2230,
    "end_line": 2236,
    "section": "Fenced code blocks"
  },
  {
    "markdown": "~~~~~~\naaa\n~~~ ~~\n",
    "html": "<pre><code>aaa\n~~~ ~~\n</code></pre>\n",
    "example": 139,
    "start_line": 2239,
    "end_line": 2247,
    "section": "Fenced code blocks"
  },
  {
    "markdown": "foo\n```\nbar\n```\nbaz\n",
    "html": "<p>foo</p>\n<pre><code>bar\n</code></pre>\n<p>baz</p>\n",
    "example": 140,
    "start_line": 2253,
    "end_line": 2264,
    "section": "Fenced code blocks"
  },
  {
    "markdown": "foo\n---\n~~~\nbar\n~~~\n# baz\n",
    "html": "<h2>foo</h2>\n<pre><code>bar\n</code></pre>\n<h1>baz</h1>\n",
    "example": 141,
    "start_line": 2270,
    "end_line": 2282,
    "section": "Fenced code blocks"
  },
  {
    "markdown": "```ruby\ndef foo(x)\n  return 3\nend\n```\n",
    "html": "<pre><code class=\"language-ruby\">def foo(x)\n  return 3\nend\n</code></pre>\n",
    "example": 142,
    "start_line": 2292,
    "end_line": 2303,
    "section": "Fenced code blocks"
  },
  {
    "markdown": "~~~~    ruby startline=3 $%@#$\ndef foo(x)\n  return 3\nend\n~~~~~~~\n",
    "html": "<pre><code class=\"language-ruby\">def foo(x)\n  return 3\nend\n</code></pre>\n",
    "example": 143,
    "start_line": 2306,
    "end_line": 2317,
    "section": "Fenced code blocks"
  },
  {
    "markdown": "````;\n````\n",
    "html": "<pre><code class=\"language-;\"></code></pre>\n",
    "example": 144,
    "start_line": 2320,
    "end_line": 2325,
    "section": "Fenced code blocks"
  },
  {
    "markdown": "``` aa ```\nfoo\n",
    "html": "<p><code>aa</code>\nfoo</p>\n",
    "example": 145,
    "start_line": 2330,
    "end_line": 2336,
    "section": "Fenced code blocks"
  },
  {
    "markdown": "~~~ aa ``` ~~~\nfoo\n~~~\n",
    "html": "<pre><code class=\"language-aa\">foo\n</code></pre>\n",
    "example": 146,
    "start_line": 2341,
    "end_line": 2348,
    "section": "Fenced code blocks"
  },
  {
    "markdown": "```\n``` aaa\n```\n",
    "html": "<pre><code>``` aaa\n</code></pre>\n",
    "example": 147,
    "start_line": 2353,
    "end_line": 2360,
    "section": "Fenced code blocks"
  },
  {
    "markdown": "<table><tr><td>\n<pre>\n**Hello**,\n\n_world_.\n</pre>\n</td></tr></table>\n",
    "html": "<table><tr><td>\n<pre>\n**Hello**,\n<p><em>world</em>.\n</pre></p>\n</td></tr></table>\n",
    "example": 148,
    "start_line": 2432,
    "end_line": 2447,
    "section": "HTML blocks"
  },
  {
    "markdown": "<table>\n  <tr>\n    <td>\n           hi\n    </td>\n  </tr>\n</table>\n\nokay.\n",
    "html": "<table>\n  <tr>\n    <td>\n           hi\n    </td>\n  </tr>\n</table>\n<p>okay.</p>\n",
    "example": 149,
    "start_line": 2461,
    "end_line": 2480,
    "section": "HTML blocks"
  },
  {
    "markdown": " <div>\n  *hello*\n         <foo><a>\n",
    "html": " <div>\n  *hello*\n         <foo><a>\n",
    "example": 150,
    "start_line": 2483,
    "end_line": 2491,
    "section": "HTML blocks"
  },
  {
    "markdown": "</div>\n*foo*\n",
    "html": "</div>\n*foo*\n",
    "example": 151,
    "start_line": 2496,
    "end_line": 2502,
    "section": "HTML blocks"
  },
  {
    "markdown": "<DIV CLASS=\"foo\">\n\n*Markdown*\n\n</DIV>\n",
    "html": "<DIV CLASS=\"foo\">\n<p><em>Markdown</em></p>\n</DIV>\n",
    "example": 152,
    "start_line": 2507,
    "end_line": 2517,
    "section": "HTML blocks"
  },
  {
    "markdown": "<div id=\"foo\"\n  class=\"bar\">\n</div>\n",
    "html": "<div id=\"foo\"\n  class=\"bar\">\n</div>\n",
    "example": 153,
    "start_line": 2523,
    "end_line": 2531,
    "section": "HTML blocks"
  },
  {
    "markdown": "<div id=\"foo\" class=\"bar\n  baz\">\n</div>\n",
    "html": "<div id=\"foo\" class=\"bar\n  baz\">\n</div>\n",
    "example": 154,
    "start_line": 2534,
    "end_line": 2542,
    "section": "HTML blocks"
  },
  {
    "markdown": "<div>\n*foo*\n\n*bar*\n",
    "html": "<div>\n*foo*\n<p><em>bar</em></p>\n",
    "example": 155,
    "start_line": 2546,
    "end_line": 2555,
    "section": "HTML blocks"
  },
  {
    "markdown": "<div id=\"foo\"\n*hi*\n",
    "html": "<div id=\"foo\"\n*hi*\n",
    "example": 156,
    "start_line": 2562,
    "end_line": 2568,
    "section": "HTML blocks"
  },
  {
    "markdown": "<div class\nfoo\n",
    "html": "<div class\nfoo\n",
    "example": 157,
    "start_line": 2571,
    "end_line": 2577,
    "section": "HTML blocks"
  },
  {
    "markdown": "<div *???-&&&-<---\n*foo*\n",
    "html": "<div *???-&&&-<---\n*foo*\n",
    "example": 158,
    "start_line": 2583,
    "end_line": 2589,
    "section": "HTML blocks"
  },
  {
    "markdown": "<div><a href=\"bar\">*foo*</a></div>\n",
    "html": "<div><a href=\"bar\">*foo*</a></div>\n",
    "example": 159,
    "start_line": 2595,
    "end_line": 2599,
    "section": "HTML blocks"
  },
  {
    "markdown": "<table><tr><td>\nfoo\n</td></tr></table>\n",
    "html": "<table><tr><td>\nfoo\n</td></tr></table>\n",
    "example": 160,
    "start_line": 2602,
    "end_line": 2610,
    "section": "HTML blocks"
  },
  {
    "markdown": "<div></div>\n``` c\nint x = 33;\n```\n",
    "html": "<div></div>\n``` c\nint x = 33;\n```\n",
    "example": 161,
    "start_line": 2619,
    "end_line": 2629,
    "section": "HTML blocks"
  },
  {
    "markdown": "<a href=\"foo\">\n*bar*\n</a>\n",
    "html": "<a href=\"foo\">\n*bar*\n</a>\n",
    "example": 162,
    "start_line": 2636,
    "end_line": 2644,
    "section": "HTML blocks"
  },
  {
    "markdown": "<Warning>\n*bar*\n</Warning>\n",
    "html": "<Warning>\n*bar*\n</Warning>\n",
    "example": 163,
    "start_line": 2649,
    "end_line": 2657,
    "section": "HTML blocks"
  },
  {
    "markdown": "<i class=\"foo\">\n*bar*\n</i>\n",
    "html": "<i class=\"foo\">\n*bar*\n</i>\n",
    "example": 164,
    "start_line": 2660,
    "end_line": 2668,
    "section": "HTML blocks"
  },
  {
    "markdown": "</ins>\n*bar*\n",
    "html": "</ins>\n*bar*\n",
    "example": 165,
    "start_line": 2671,
    "end_line": 2677,
    "section": "HTML blocks"
  },
  {
    "markdown": "<del>\n*foo*\n</del>\n",
    "html": "<del>\n*foo*\n</del>\n",
    "example": 166,
    "start_line": 2686,
    "end_line": 2694,
    "section": "HTML blocks"
  },
  {
    "markdown": "<del>\n\n*foo*\n\n</del>\n",
    "html": "<del>\n<p><em>foo</em></p>\n</del>\n",
    "example": 167,
    "start_line": 2701,
    "end_line": 2711,
    "section": "HTML blocks"
  },
  {
    "markdown": "<del>*foo*</del>\n",
    "html": "<p><del><em>foo</em></del></p>\n",
    "example": 168,
    "start_line": 2719,
    "end_line": 2723,
    "section": "HTML blocks"
  },
  {
    "markdown": "<pre language=\"haskell\"><code>\nimport Text.HTML.TagSoup\n\nmain :: IO ()\nmain = print $ parseTags tags\n</code></pre>\nokay\n",
    "html": "<pre language=\"haskell\"><code>\nimport Text.HTML.TagSoup\n\nmain :: IO ()\nmain = print $ parseTags tags\n</code></pre>\n<p>okay</p>\n",
    "example": 169,
    "start_line": 2735,
    "end_line": 2751,
    "section": "HTML blocks"
  },
  {
    "markdown": "<script type=\"text/javascript\">\n// JavaScript example\n\ndocument.getElementById(\"demo\").innerHTML = \"Hello JavaScript!\";\n</script>\nokay\n",
    "html": "<script type=\"text/javascript\">\n// JavaScript example\n\ndocument.getElementById(\"demo\").innerHTML = \"Hello JavaScript!\";\n</script>\n<p>okay</p>\n",
    "example": 170,
    "start_line": 2756,
    "end_line": 2770,
    "section": "HTML blocks"
  },
  {
    "markdown": "<textarea>\n\n*foo*\n\n_bar_\n\n</textarea>\n",
    "html": "<textarea>\n\n*foo*\n\n_bar_\n\n</textarea>\n",
    "example": 171,
    "start_line": 2775,
    "end_line": 2791,
    "section": "HTML blocks"
  },
  {
    "markdown": "<style\n  type=\"text/css\">\nh1 {color:red;}\n\np {color:blue;}\n</style>\nokay\n",
    "html": "<style\n  type=\"text/css\">\nh1 {color:red;}\n\np {color:blue;}\n</style>\n<p>okay</p>\n",
    "example": 172,
    "start_line": 2795,
    "end_line": 2811,
    "section": "HTML blocks"
  },
  {
    "markdown": "<style\n  type=\"text/css\">\n\nfoo\n",
    "html": "<style\n  type=\"text/css\">\n\nfoo\n",
    "example": 173,
    "start_line": 2818,
    "end_line": 2828,
    "section": "HTML blocks"
  },
  {
    "markdown": "> <div>\n> foo\n\nbar\n",
    "html": "<blockquote>\n<div>\nfoo\n</blockquote>\n<p>bar</p>\n",
    "example": 174,
    "start_line": 2831,
    "end_line": 2842,
    "section": "HTML blocks"
  },
  {
    "markdown": "- <div>\n- foo\n",
    "html": "<ul>\n<li>\n<div>\n</li>\n<li>foo</li>\n</ul>\n",
    "example": 175,
    "start_line": 2845,
    "end_line": 2855,
    "section": "HTML blocks"
  },
  {
    "markdown": "<style>p{color:red;}</style>\n*foo*\n",
    "html": "<style>p{color:red;}</style>\n<p><em>foo</em></p>\n",
    "example": 176,
    "start_line": 2860,
    "end_line": 2866,
    "section": "HTML blocks"
  },
  {
    "markdown": "<!-- foo -->*bar*\n*baz*\n",
    "html": "<!-- foo -->*bar*\n<p><em>baz</em></p>\n",
    "example": 177,
    "start_line": 2869,
    "end_line": 2875,
    "section": "HTML blocks"
  },
  {
    "markdown": "<script>\nfoo\n</script>1. *bar*\n",
    "html": "<script>\nfoo\n</script>1. *bar*\n",
    "example": 178,
    "start_line": 2881,
    "end_line": 2889,
    "section": "HTML blocks"
  },
  {
    "markdown": "<!-- Foo\n\nbar\n   baz -->\nokay\n",
    "html": "<!-- Foo\n\nbar\n   baz -->\n<p>okay</p>\n",
    "example": 179,
    "start_line": 2894,
    "end_line": 2906,
    "section": "HTML blocks"
  },
  {
    "markdown": "<?php\n\n  echo '>';\n\n?>\nokay\n",
    "html": "<?php\n\n  echo '>';\n\n?>\n<p>okay</p>\n",
    "example": 180,
    "start_line": 2912,
    "end_line": 2926,
    "section": "HTML blocks"
  },
  {
    "markdown": "<!DOCTYPE html>\n",
    "html": "<!DOCTYPE html>\n",
    "example": 181,
    "start_line": 2931,
    "end_line": 2935,
    "section": "HTML blocks"
  },
  {
    "markdown": "<![CDATA[\nfunction matchwo(a,b)\n{\n  if (a < b && a < 0) then {\n    return 1;\n\n  } else {\n\n    return 0;\n  }\n}\n]]>\nokay\n",
    "html": "<![CDATA[\nfunction matchwo(a,b)\n{\n  if (a < b && a < 0) then {\n    return 1;\n\n  } else {\n\n    return 0;\n  }\n}\n]]>\n<p>okay</p>\n",
    "example": 182,
    "start_line": 2940,
    "end_line": 2968,
    "section": "HTML blocks"
  },
  {
    "markdown": "  <!-- foo -->\n\n    <!-- foo -->\n",
    "html": "  <!-- foo -->\n<pre><code>&lt;!-- foo --&gt;\n</code></pre>\n",
    "example": 183,
    "start_line": 2974,
    "end_line": 2982,
    "section": "HTML blocks"
  },
  {
    "markdown": "  <div>\n\n    <div>\n",
    "html": "  <div>\n<pre><code>&lt;div&gt;\n</code></pre>\n",
    "example": 184,
    "start_line": 2985,
    "end_line": 2993,
    "section": "HTML blocks"
  },
  {
    "markdown": "Foo\n<div>\nbar\n</div>\n",
    "html": "<p>Foo</p>\n<div>\nbar\n</div>\n",
    "example": 185,
    "start_line": 2999,
    "end_line": 3009,
    "section": "HTML blocks"
  },
  {
    "markdown": "<div>\nbar\n</div>\n*foo*\n",
    "html": "<div>\nbar\n</div>\n*foo*\n",
    "example": 186,
    "start_line": 3016,
    "end_line": 3026,
    "section": "HTML blocks"
  },
  {
    "markdown": "Foo\n<a href=\"bar\">\nbaz\n",
    "html": "<p>Foo\n<a href=\"bar\">\nbaz</p>\n",
    "example": 187,
    "start_line": 3031,
    "end_line": 3039,
    "section": "HTML blocks"
  },
  {
    "markdown": "<div>\n\n*Emphasized* text.\n\n</div>\n",
    "html": "<div>\n<p><em>Emphasized</em> text.</p>\n</div>\n",
    "example": 188,
    "start_line": 3072,
    "end_line": 3082,
    "section": "HTML blocks"
  },
  {
    "markdown": "<div>\n*Emphasized* text.\n</div>\n",
    "html": "<div>\n*Emphasized* text.\n</div>\n",
    "example": 189,
    "start_line": 3085,
    "end_line": 3093,
    "section": "HTML blocks"
  },
  {
    "markdown": "<table>\n\n<tr>\n\n<td>\nHi\n</td>\n\n</tr>\n\n</table>\n",
    "html": "<table>\n<tr>\n<td>\nHi\n</td>\n</tr>\n</table>\n",
    "example": 190,
    "start_line": 3107,
    "end_line": 3127,
    "section": "HTML blocks"
  },
  {
    "markdown": "<table>\n\n  <tr>\n\n    <td>\n      Hi\n    </td>\n\n  </tr>\n\n</table>\n",
    "html": "<table>\n  <tr>\n<pre><code>&lt;td&gt;\n  Hi\n&lt;/td&gt;\n</code></pre>\n  </tr>\n</table>\n",
    "example": 191,
    "start_line": 3134,
    "end_line": 3155,
    "section": "HTML blocks"
  },
  {
    "markdown": "[foo]: /url \"title\"\n\n[foo]\n",
    "html": "<p><a href=\"/url\" title=\"title\">foo</a></p>\n",
    "example": 192,
    "start_line": 3183,
    "end_line": 3189,
    "section": "Link reference definitions"
  },
  {
    "markdown": "   [foo]: \n      /url  \n           'the title'  \n\n[foo]\n",
    "html": "<p><a href=\"/url\" title=\"the title\">foo</a></p>\n",
    "example": 193,
    "start_line": 3192,
    "end_line": 3200,
    "section": "Link reference definitions"
  },
  {
    "markdown": "[Foo*bar\\]]:my_(url) 'title (with parens)'\n\n[Foo*bar\\]]\n",
    "html": "<p><a href=\"my_(url)\" title=\"title (with parens)\">Foo*bar]</a></p>\n",
    "example": 194,
    "start_line": 3203,
    "end_line": 3209,
    "section": "Link reference definitions"
  },
  {
    "markdown": "[Foo bar]:\n<my url>\n'title'\n\n[Foo bar]\n",
    "html": "<p><a href=\"my%20url\" title=\"title\">Foo bar</a></p>\n",
    "example": 195,
    "start_line": 3212,
    "end_line": 3220,
    "section": "Link reference definitions"
  },
  {
    "markdown": "[foo]: /url '\ntitle\nline1\nline2\n'\n\n[foo]\n",
    "html": "<p><a href=\"/url\" title=\"\ntitle\nline1\nline2\n\">foo</a></p>\n",
    "example": 196,
    "start_line": 3225,
    "end_line": 3239,
    "section": "Link reference definitions"
  },
  {
    "markdown": "[foo]: /url 'title\n\nwith blank line'\n\n[foo]\n",
    "html": "<p>[foo]: /url 'title</p>\n<p>with blank line'</p>\n<p>[foo]</p>\n",
    "example": 197,
    "start_line": 3244,
    "end_line": 3254,
    "section": "Link reference definitions"
  },
  {
    "markdown": "[foo]:\n/url\n\n[foo]\n",
    "html": "<p><a href=\"/url\">foo</a></p>\n",
    "example": 198,
    "start_line": 3259,
    "end_line": 3266,
    "section": "Link reference definitions"
  },
  {
    "markdown": "[foo]:\n\n[foo]\n",
    "html": "<p>[foo]:</p>\n<p>[foo]</p>\n",
    "example": 199,
    "start_line": 3271,
    "end_line": 3278,
    "section": "Link reference definitions"
  },
  {
    "markdown": "[foo]: <>\n\n[foo]\n",
    "html": "<p><a href=\"\">foo</a></p>\n",
    "example": 200,
    "start_line": 3283,
    "end_line": 3289,
    "section": "Link reference definitions"
  },
  {
    "markdown": "[foo]: <bar>(baz)\n\n[foo]\n",
    "html": "<p>[foo]: <bar>(baz)</p>\n<p>[foo]</p>\n",
    "example": 201,
    "start_line": 3294,
    "end_line": 3301,
    "section": "Link reference definitions"
  },
  {
    "markdown": "[foo]: /url\\bar\\*baz \"foo\\\"bar\\baz\"\n\n[foo]\n",
    "html": "<p><a href=\"/url%5Cbar*baz\" title=\"foo&quot;bar\\baz\">foo</a></p>\n",
    "example": 202,
    "start_line": 3307,
    "end_line": 3313,
    "section": "Link reference definitions"
  },
  {
    "markdown": "[foo]\n\n[foo]: url\n",
    "html": "<p><a href=\"url\">foo</a></p>\n",
    "example": 203,
    "start_line": 3318,
    "end_line": 3324,
    "section": "Link reference definitions"
  },
  {
    "markdown": "[foo]\n\n[foo]: first\n[foo]: second\n",
    "html": "<p><a href=\"first\">foo</a></p>\n",
    "example": 204,
    "start_line": 3330,
    "end_line": 3337,
    "section": "Link reference definitions"
  },
  {
    "markdown": "[FOO]: /url\n\n[Foo]\n",
    "html": "<p><a href=\"/url\">Foo</a></p>\n",
    "example": 205,
    "start_line": 3343,
    "end_line": 3349,
    "section": "Link reference definitions"
  },
  {
    "markdown": "[ΑΓΩ]: /φου\n\n[αγω]\n",
    "html": "<p><a href=\"/%CF%86%CE%BF%CF%85\">αγω</a></p>\n",
    "example": 206,
    "start_line": 3352,
    "end_line": 3358,
    "section": "Link reference definitions"
  },
  {
    "markdown": "[foo]: /url\n",
    "html": "",
    "example": 207,
    "start_line": 3367,
    "end_line": 3370,
    "section": "Link reference definitions"
  },
  {
    "markdown": "[\nfoo\n]: /url\nbar\n",
    "html": "<p>bar</p>\n",
    "example": 208,
    "start_line": 3375,
    "end_line": 3382,
    "section": "Link reference definitions"
  },
  {
    "markdown": "[foo]: /url \"title\" ok\n",
    "html": "<p>[foo]: /url &quot;title&quot; ok</p>\n",
    "example": 209,
    "start_line": 3388,
    "end_line": 3392,
    "section": "Link reference definitions"
  },
  {
    "markdown": "[foo]: /url\n\"title\" ok\n",
    "html": "<p>&quot;title&quot; ok</p>\n",
    "example": 210,
    "start_line": 3397,
    "end_line": 3402,
    "section": "Link reference definitions"
  },
  {
    "markdown": "    [foo]: /url \"title\"\n\n[foo]\n",
    "html": "<pre><code>[foo]: /url &quot;title&quot;\n</code></pre>\n<p>[foo]</p>\n",
    "example": 211,
    "start_line": 3408,
    "end_line": 3416,
    "section": "Link reference definitions"
  },
  {
    "markdown": "```\n[foo]: /url\n```\n\n[foo]\n",
    "html": "<pre><code>[foo]: /url\n</code></pre>\n<p>[foo]</p>\n",
    "example": 212,
    "start_line": 3422,
    "end_line": 3432,
    "section": "Link reference definitions"
  },
  {
    "markdown": "Foo\n[bar]: /baz\n\n[bar]\n",
    "html": "<p>Foo\n[bar]: /baz</p>\n<p>[bar]</p>\n",
    "example": 213,
    "start_line": 3437,
    "end_line": 3446,
    "section": "Link reference definitions"
  },
  {
    "markdown": "# [Foo]\n[foo]: /url\n> bar\n",
    "html": "<h1><a href=\"/url\">Foo</a></h1>\n<blockquote>\n<p>bar</p>\n</blockquote>\n",
    "example": 214,
    "start_line": 3452,
    "end_line": 3461,
    "section": "Link reference definitions"
  },
  {
    "markdown": "[foo]: /url\nbar\n===\n[foo]\n",
    "html": "<h1>bar</h1>\n<p><a href=\"/url\">foo</a></p>\n",
    "example": 215,
    "start_line": 3463,
    "end_line": 3471,
    "section": "Link reference definitions"
  },
  {
    "markdown": "[foo]: /url\n===\n[foo]\n",
    "html": "<p>===\n<a href=\"/url\">foo</a></p>\n",
    "example": 216,
    "start_line": 3473,
    "end_line": 3480,
    "section": "Link reference definitions"
  },
  {
    "markdown": "[foo]: /foo-url \"foo\"\n[bar]: /bar-url\n  \"bar\"\n[baz]: /baz-url\n\n[foo],\n[bar],\n[baz]\n",
    "html": "<p><a href=\"/foo-url\" title=\"foo\">foo</a>,\n<a href=\"/bar-url\" title=\"bar\">bar</a>,\n<a href=\"/baz-url\">baz</a></p>\n",
    "example": 217,
    "start_line": 3486,
    "end_line": 3499,
    "section": "Link reference definitions"
  },
  {
    "markdown": "[foo]\n\n> [foo]: /url\n",
    "html": "<p><a href=\"/url\">foo</a></p>\n<blockquote>\n</blockquote>\n",
    "example": 218,
    "start_line": 3507,
    "end_line": 3515,
    "section": "Link reference definitions"
  },
  {
    "markdown": "aaa\n\nbbb\n",
    "html": "<p>aaa</p>\n<p>bbb</p>\n",
    "example": 219,
    "start_line": 3529,
    "end_line": 3536,
    "section": "Paragraphs"
  },
  {
    "markdown": "aaa\nbbb\n\nccc\nddd\n",
    "html": "<p>aaa\nbbb</p>\n<p>ccc\nddd</p>\n",
    "example": 220,
    "start_line": 3541,
    "end_line": 3552,
    "section": "Paragraphs"
  },
  {
    "markdown": "aaa\n\n\nbbb\n",
    "html": "<p>aaa</p>\n<p>bbb</p>\n",
    "example": 221,
    "start_line": 3557,
    "end_line": 3565,
    "section": "Paragraphs"
  },
  {
    "markdown": "  aaa\n bbb\n",
    "html": "<p>aaa\nbbb</p>\n",
    "example": 222,
    "start_line": 3570,
    "end_line": 3576,
    "section": "Paragraphs"
  },
  {
    "markdown": "aaa\n             bbb\n                                       ccc\n",
    "html": "<p>aaa\nbbb\nccc</p>\n",
    "example": 223,
    "start_line": 3582,
    "end_line": 3590,
    "section": "Paragraphs"
  },
  {
    "markdown": "   aaa\nbbb\n",
    "html": "<p>aaa\nbbb</p>\n",
    "example": 224,
    "start_line": 3596,
    "end_line": 3602,
    "section": "Paragraphs"
  },
  {
    "markdown": "    aaa\nbbb\n",
    "html": "<pre><code>aaa\n</code></pre>\n<p>bbb</p>\n",
    "example": 225,
    "start_line": 3605,
    "end_line": 3612,
    "section": "Paragraphs"
  },
  {
    "markdown": "aaa     \nbbb     \n",
    "html": "<p>aaa<br />\nbbb</p>\n",
    "example": 226,
    "start_line": 3619,
    "end_line": 3625,
    "section": "Paragraphs"
  },
  {
    "markdown": "  \n\naaa\n  \n\n# aaa\n\n  \n",
    "html": "<p>aaa</p>\n<h1>aaa</h1>\n",
    "example": 227,
    "start_line": 3636,
    "end_line": 3648,
    "section": "Blank lines"
  },
  {
    "markdown": "> # Foo\n> bar\n> baz\n",
    "html": "<blockquote>\n<h1>Foo</h1>\n<p>bar\nbaz</p>\n</blockquote>\n",
    "example": 228,
    "start_line": 3704,
    "end_line": 3714,
    "section": "Block quotes"
  },
  {
    "markdown": "># Foo\n>bar\n> baz\n",
    "html": "<blockquote>\n<h1>Foo</h1>\n<p>bar\nbaz</p>\n</blockquote>\n",
    "example": 229,
    "start_line": 3719,
    "end_line": 3729,
    "section": "Block quotes"
  },
  {
    "markdown": "   > # Foo\n   > bar\n > baz\n",
    "html": "<blockquote>\n<h1>Foo</h1>\n<p>bar\nbaz</p>\n</blockquote>\n",
    "example": 230,
    "start_line": 3734,
    "end_line": 3744,
    "section": "Block quotes"
  },
  {
    "markdown": "    > # Foo\n    > bar\n    > baz\n",
    "html": "<pre><code>&gt; # Foo\n&gt; bar\n&gt; baz\n</code></pre>\n",
    "example": 231,
    "start_line": 3749,
    "end_line": 3758,
    "section": "Block quotes"
  },
  {
    "markdown": "> # Foo\n> bar\nbaz\n",
    "html": "<blockquote>\n<h1>Foo</h1>\n<p>bar\nbaz</p>\n</blockquote>\n",
    "example": 232,
    "start_line": 3764,
    "end_line": 3774,
    "section": "Block quotes"
  },
  {
    "markdown": "> bar\nbaz\n> foo\n",
    "html": "<blockquote>\n<p>bar\nbaz\nfoo</p>\n</blockquote>\n",
    "example": 233,
    "start_line": 3780,
    "end_line": 3790,
    "section": "Block quotes"
  },
  {
    "markdown": "> foo\n---\n",
    "html": "<blockquote>\n<p>foo</p>\n</blockquote>\n<hr />\n",
    "example": 234,
    "start_line": 3804,
    "end_line": 3812,
    "section": "Block quotes"
  },
  {
    "markdown": "> - foo\n- bar\n",
    "html": "<blockquote>\n<ul>\n<li>foo</li>\n</ul>\n</blockquote>\n<ul>\n<li>bar</li>\n</ul>\n",
    "example": 235,
    "start_line": 3824,
    "end_line": 3836,
    "section": "Block quotes"
  },
  {
    "markdown": ">     foo\n    bar\n",
    "html": "<blockquote>\n<pre><code>foo\n</code></pre>\n</blockquote>\n<pre><code>bar\n</code></pre>\n",
    "example": 236,
    "start_line": 3842,
    "end_line": 3852,
    "section": "Block quotes"
  },
  {
    "markdown": "> ```\nfoo\n```\n",
    "html": "<blockquote>\n<pre><code></code></pre>\n</blockquote>\n<p>foo</p>\n<pre><code></code></pre>\n",
    "example": 237,
    "start_line": 3855,
    "end_line": 3865,
    "section": "Block quotes"
  },
  {
    "markdown": "> foo\n    - bar\n",
    "html": "<blockquote>\n<p>foo\n- bar</p>\n</blockquote>\n",
    "example": 238,
    "start_line": 3871,
    "end_line": 3879,
    "section": "Block quotes"
  },
  {
    "markdown": ">\n",
    "html": "<blockquote>\n</blockquote>\n",
    "example": 239,
    "start_line": 3895,
    "end_line": 3900,
    "section": "Block quotes"
  },
  {
    "markdown": ">\n>  \n> \n",
    "html": "<blockquote>\n</blockquote>\n",
    "example": 240,
    "start_line": 3903,
    "end_line": 3910,
    "section": "Block quotes"
  },
  {
    "markdown": ">\n> foo\n>  \n",
    "html": "<blockquote>\n<p>foo</p>\n</blockquote>\n",
    "example": 241,
    "start_line": 3915,
    "end_line": 3923,
    "section": "Block quotes"
  },
  {
    "markdown": "> foo\n\n> bar\n",
    "html": "<blockquote>\n<p>foo</p>\n</blockquote>\n<blockquote>\n<p>bar</p>\n</blockquote>\n",
    "example": 242,
    "start_line": 3928,
    "end_line": 3939,
    "section": "Block quotes"
  },
  {
    "markdown": "> foo\n> bar\n",
    "html": "<blockquote>\n<p>foo\nbar</p>\n</blockquote>\n",
    "example": 243,
    "start_line": 3950,
    "end_line": 3958,
    "section": "Block quotes"
  },
  {
    "markdown": "> foo\n>\n> bar\n",
    "html": "<blockquote>\n<p>foo</p>\n<p>bar</p>\n</blockquote>\n",
    "example": 244,
    "start_line": 3963,
    "end_line": 3972,
    "section": "Block quotes"
  },
  {
    "markdown": "foo\n> bar\n",
    "html": "<p>foo</p>\n<blockquote>\n<p>bar</p>\n</blockquote>\n",
    "example": 245,
    "start_line": 3977,
    "end_line": 3985,
    "section": "Block quotes"
  },
  {
    "markdown": "> aaa\n***\n> bbb\n",
    "html": "<blockquote>\n<p>aaa</p>\n</blockquote>\n<hr />\n<blockquote>\n<p>bbb</p>\n</blockquote>\n",
    "example": 246,
    "start_line": 3991,
    "end_line": 4003,
    "section": "Block quotes"
  },
  {
    "markdown": "> bar\nbaz\n",
    "html": "<blockquote>\n<p>bar\nbaz</p>\n</blockquote>\n",
    "example": 247,
    "start_line": 4009,
    "end_line": 4017,
    "section": "Block quotes"
  },
  {
    "markdown": "> bar\n\nbaz\n",
    "html": "<blockquote>\n<p>bar</p>\n</blockquote>\n<p>baz</p>\n",
    "example": 248,
    "start_line": 4020,
    "end_line": 4029,
    "section": "Block quotes"
  },
  {
    "markdown": "> bar\n>\nbaz\n",
    "html": "<blockquote>\n<p>bar</p>\n</blockquote>\n<p>baz</p>\n",
    "example": 249,
    "start_line": 4032,
    "end_line": 4041,
    "section": "Block quotes"
  },
  {
    "markdown": "> > > foo\nbar\n",
    "html": "<blockquote>\n<blockquote>\n<blockquote>\n<p>foo\nbar</p>\n</blockquote>\n</blockquote>\n</blockquote>\n",
    "example": 250,
    "start_line": 4048,
    "end_line": 4060,
    "section": "Block quotes"
  },
  {
    "markdown": ">>> foo\n> bar\n>>baz\n",
    "html": "<blockquote>\n<blockquote>\n<blockquote>\n<p>foo\nbar\nbaz</p>\n</blockquote>\n</blockquote>\n</blockquote>\n",
    "example": 251,
    "start_line": 4063,
    "end_line": 4077,
    "section": "Block quotes"
  },
  {
    "markdown": ">     code\n\n>    not code\n",
    "html": "<blockquote>\n<pre><code>code\n</code></pre>\n</blockquote>\n<blockquote>\n<p>not code</p>\n</blockquote>\n",
    "example": 252,
    "start_line": 4085,
    "end_line": 4097,
    "section": "Block quotes"
  },
  {
    "markdown": "A paragraph\nwith two lines.\n\n    indented code\n\n> A block quote.\n",
    "html": "<p>A paragraph\nwith two lines.</p>\n<pre><code>indented code\n</code></pre>\n<blockquote>\n<p>A block quote.</p>\n</blockquote>\n",
    "example": 253,
    "start_line": 4139,
    "end_line": 4154,
    "section": "List items"
  },
  {
    "markdown": "1.  A paragraph\n    with two lines.\n\n        indented code\n\n    > A block quote.\n",
    "html": "<ol>\n<li>\n<p>A paragraph\nwith two lines.</p>\n<pre><code>indented code\n</code></pre>\n<blockquote>\n<p>A block quote.</p>\n</blockquote>\n</li>\n</ol>\n",
    "example": 254,
    "start_line": 4161,
    "end_line": 4180,
    "section": "List items"
  },
  {
    "markdown": "- one\n\n two\n",
    "html": "<ul>\n<li>one</li>\n</ul>\n<p>two</p>\n",
    "example": 255,
    "start_line": 4194,
    "end_line": 4203,
    "section": "List items"
  },
  {
    "markdown": "- one\n\n  two\n",
    "html": "<ul>\n<li>\n<p>one</p>\n<p>two</p>\n</li>\n</ul>\n",
    "example": 256,
    "start_line": 4206,
    "end_line": 4217,
    "section": "List items"
  },
  {
    "markdown": " -    one\n\n     two\n",
    "html": "<ul>\n<li>one</li>\n</ul>\n<pre><code> two\n</code></pre>\n",
    "example": 257,
    "start_line": 4220,
    "end_line": 4230,
    "section": "List items"
  },
  {
    "markdown": " -    one\n\n      two\n",
    "html": "<ul>\n<li>\n<p>one</p>\n<p>two</p>\n</li>\n</ul>\n",
    "example": 258,
    "start_line": 4233,
    "end_line": 4244,
    "section": "List items"
  },
  {
    "markdown": "   > > 1.  one\n>>\n>>     two\n",
    "html": "<blockquote>\n<blockquote>\n<ol>\n<li>\n<p>one</p>\n<p>two</p>\n</li>\n</ol>\n</blockquote>\n</blockquote>\n",
    "example": 259,
    "start_line": 4255,
    "end_line": 4270,
    "section": "List items"
  },
  {
    "markdown": ">>- one\n>>\n  >  > two\n",
    "html": "<blockquote>\n<blockquote>\n<ul>\n<li>one</li>\n</ul>\n<p>two</p>\n</blockquote>\n</blockquote>\n",
    "example": 260,
    "start_line": 4282,
    "end_line": 4295,
    "section": "List items"
  },
  {
    "markdown": "-one\n\n2.two\n",
    "html": "<p>-one</p>\n<p>2.two</p>\n",
    "example": 261,
    "start_line": 4301,
    "end_line": 4308,
    "section": "List items"
  },
  {
    "markdown": "- foo\n\n\n  bar\n",
    "html": "<ul>\n<li>\n<p>foo</p>\n<p>bar</p>\n</li>\n</ul>\n",
    "example": 262,
    "start_line": 4314,
    "end_line": 4326,
    "section": "List items"
  },
  {
    "markdown": "1.  foo\n\n    ```\n    bar\n    ```\n\n    baz\n\n    > bam\n",
    "html": "<ol>\n<li>\n<p>foo</p>\n<pre><code>bar\n</code></pre>\n<p>baz</p>\n<blockquote>\n<p>bam</p>\n</blockquote>\n</li>\n</ol>\n",
    "example": 263,
    "start_line": 4331,
    "end_line": 4353,
    "section": "List items"
  },
  {
    "markdown": "- Foo\n\n      bar\n\n\n      baz\n",
    "html": "<ul>\n<li>\n<p>Foo</p>\n<pre><code>bar\n\n\nbaz\n</code></pre>\n</li>\n</ul>\n",
    "example": 264,
    "start_line": 4359,
    "end_line": 4377,
    "section": "List items"
  },
  {
    "markdown": "123456789. ok\n",
    "html": "<ol start=\"123456789\">\n<li>ok</li>\n</ol>\n",
    "example": 265,
    "start_line": 4381,
    "end_line": 4387,
    "section": "List items"
  },
  {
    "markdown": "1234567890. not ok\n",
    "html": "<p>1234567890. not ok</p>\n",
    "example": 266,
    "start_line": 4390,
    "end_line": 4394,
    "section": "List items"
  },
  {
    "markdown": "0. ok\n",
    "html": "<ol start=\"0\">\n<li>ok</li>\n</ol>\n",
    "example": 267,
    "start_line": 4399,
    "end_line": 4405,
    "section": "List items"
  },
  {
    "markdown": "003. ok\n",
    "html": "<ol start=\"3\">\n<li>ok</li>\n</ol>\n",
    "example": 268,
    "start_line": 4408,
    "end_line": 4414,
    "section": "List items"
  },
  {
    "markdown": "-1. not ok\n",
    "html": "<p>-1. not ok</p>\n",
    "example": 269,
    "start_line": 4419,
    "end_line": 4423,
    "section": "List items"
  },
  {
    "markdown": "- foo\n\n      bar\n",
    "html": "<ul>\n<li>\n<p>foo</p>\n<pre><code>bar\n</code></pre>\n</li>\n</ul>\n",
    "example": 270,
    "start_line": 4442,
    "end_line": 4454,
    "section": "List items"
  },
  {
    "markdown": "  10.  foo\n\n           bar\n",
    "html": "<ol start=\"10\">\n<li>\n<p>foo</p>\n<pre><code>bar\n</code></pre>\n</li>\n</ol>\n",
    "example": 271,
    "start_line": 4459,
    "end_line": 4471,
    "section": "List items"
  },
  {
    "markdown": "    indented code\n\nparagraph\n\n    more code\n",
    "html": "<pre><code>indented code\n</code></pre>\n<p>paragraph</p>\n<pre><code>more code\n</code></pre>\n",
    "example": 272,
    "start_line": 4478,
    "end_line": 4490,
    "section": "List items"
  },
  {
    "markdown": "1.     indented code\n\n   paragraph\n\n       more code\n",
    "html": "<ol>\n<li>\n<pre><code>indented code\n</code></pre>\n<p>paragraph</p>\n<pre><code>more code\n</code></pre>\n</li>\n</ol>\n",
    "example": 273,
    "start_line": 4493,
    "end_line": 4509,
    "section": "List items"
  },
  {
    "markdown": "1.      indented code\n\n   paragraph\n\n       more code\n",
    "html": "<ol>\n<li>\n<pre><code> indented code\n</code></pre>\n<p>paragraph</p>\n<pre><code>more code\n</code></pre>\n</li>\n</ol>\n",
    "example": 274,
    "start_line": 4515,
    "end_line": 4531,
    "section": "List items"
  },
  {
    "markdown": "   foo\n\nbar\n",
    "html": "<p>foo</p>\n<p>bar</p>\n",
    "example": 275,
    "start_line": 4542,
    "end_line": 4549,
    "section": "List items"
  },
  {
    "markdown": "-    foo\n\n  bar\n",
    "html": "<ul>\n<li>foo</li>\n</ul>\n<p>bar</p>\n",
    "example": 276,
    "start_line": 4552,
    "end_line": 4561,
    "section": "List items"
  },
  {
    "markdown": "-  foo\n\n   bar\n",
    "html": "<ul>\n<li>\n<p>foo</p>\n<p>bar</p>\n</li>\n</ul>\n",
    "example": 277,
    "start_line": 4569,
    "end_line": 4580,
    "section": "List items"
  },
  {
    "markdown": "-\n  foo\n-\n  ```\n  bar\n  ```\n-\n      baz\n",
    "html": "<ul>\n<li>foo</li>\n<li>\n<pre><code>bar\n</code></pre>\n</li>\n<li>\n<pre><code>baz\n</code></pre>\n</li>\n</ul>\n",
    "example": 278,
    "start_line": 4596,
    "end_line": 4617,
    "section": "List items"
  },
  {
    "markdown": "-   \n  foo\n",
    "html": "<ul>\n<li>foo</li>\n</ul>\n",
    "example": 279,
    "start_line": 4622,
    "end_line": 4629,
    "section": "List items"
  },
  {
    "markdown": "-\n\n  foo\n",
    "html": "<ul>\n<li></li>\n</ul>\n<p>foo</p>\n",
    "example": 280,
    "start_line": 4636,
    "end_line": 4645,
    "section": "List items"
  },
  {
    "markdown": "- foo\n-\n- bar\n",
    "html": "<ul>\n<li>foo</li>\n<li></li>\n<li>bar</li>\n</ul>\n",
    "example": 281,
    "start_line": 4650,
    "end_line": 4660,
    "section": "List items"
  },
  {
    "markdown": "- foo\n-   \n- bar\n",
    "html": "<ul>\n<li>foo</li>\n<li></li>\n<li>bar</li>\n</ul>\n",
    "example": 282,
    "start_line": 4665,
    "end_line": 4675,
    "section": "List items"
  },
  {
    "markdown": "1. foo\n2.\n3. bar\n",
    "html": "<ol>\n<li>foo</li>\n<li></li>\n<li>bar</li>\n</ol>\n",
    "example": 283,
    "start_line": 4680,
    "end_line": 4690,
    "section": "List items"
  },
  {
    "markdown": "*\n",
    "html": "<ul>\n<li></li>\n</ul>\n",
    "example": 284,
    "start_line": 4695,
    "end_line": 4701,
    "section": "List items"
  },
  {
    "markdown": "foo\n*\n\nfoo\n1.\n",
    "html": "<p>foo\n*</p>\n<p>foo\n1.</p>\n",
    "example": 285,
    "start_line": 4705,
    "end_line": 4716,
    "section": "List items"
  },
  {
    "markdown": " 1.  A paragraph\n     with two lines.\n\n         indented code\n\n     > A block quote.\n",
    "html": "<ol>\n<li>\n<p>A paragraph\nwith two lines.</p>\n<pre><code>indented code\n</code></pre>\n<blockquote>\n<p>A block quote.</p>\n</blockquote>\n</li>\n</ol>\n",
    "example": 286,
    "start_line": 4727,
    "end_line": 4746,
    "section": "List items"
  },
  {
    "markdown": "  1.  A paragraph\n      with two lines.\n\n          indented code\n\n      > A block quote.\n",
    "html": "<ol>\n<li>\n<p>A paragraph\nwith two lines.</p>\n<pre><code>indented code\n</code></pre>\n<blockquote>\n<p>A block quote.</p>\n</blockquote>\n</li>\n</ol>\n",
    "example": 287,
    "start_line": 4751,
    "end_line": 4770,
    "section": "List items"
  },
  {
    "markdown": "   1.  A paragraph\n       with two lines.\n\n           indented code\n\n       > A block quote.\n",
    "html": "<ol>\n<li>\n<p>A paragraph\nwith two lines.</p>\n<pre><code>indented code\n</code></pre>\n<blockquote>\n<p>A block quote.</p>\n</blockquote>\n</li>\n</ol>\n",
    "example": 288,
    "start_line": 4775,
    "end_line": 4794,
    "section": "List items"
  },
  {
    "markdown": "    1.  A paragraph\n        with two lines.\n\n            indented code\n\n        > A block quote.\n",
    "html": "<pre><code>1.  A paragraph\n    with two lines.\n\n        indented code\n\n    &gt; A block quote.\n</code></pre>\n",
    "example": 289,
    "start_line": 4799,
    "end_line": 4814,
    "section": "List items"
  },
  {
    "markdown": "  1.  A paragraph\nwith two lines.\n\n          indented code\n\n      > A block quote.\n",
    "html": "<ol>\n<li>\n<p>A paragraph\nwith two lines.</p>\n<pre><code>indented code\n</code></pre>\n<blockquote>\n<p>A block quote.</p>\n</blockquote>\n</li>\n</ol>\n",
    "example": 290,
    "start_line": 4829,
    "end_line": 4848,
    "section": "List items"
  },
  {
    "markdown": "  1.  A paragraph\n    with two lines.\n",
    "html": "<ol>\n<li>A paragraph\nwith two lines.</li>\n</ol>\n",
    "example": 291,
    "start_line": 4853,
    "end_line": 4861,
    "section": "List items"
  },
  {
    "markdown": "> 1. > Blockquote\ncontinued here.\n",
    "html": "<blockquote>\n<ol>\n<li>\n<blockquote>\n<p>Blockquote\ncontinued here.</p>\n</blockquote>\n</li>\n</ol>\n</blockquote>\n",
    "example": 292,
    "start_line": 4866,
    "end_line": 4880,
    "section": "List items"
  },
  {
    "markdown": "> 1. > Blockquote\n> continued here.\n",
    "html": "<blockquote>\n<ol>\n<li>\n<blockquote>\n<p>Blockquote\ncontinued here.</p>\n</blockquote>\n</li>\n</ol>\n</blockquote>\n",
    "example": 293,
    "start_line": 4883,
    "end_line": 4897,
    "section": "List items"
  },
  {
    "markdown": "- foo\n  - bar\n    - baz\n      - boo\n",
    "html": "<ul>\n<li>foo\n<ul>\n<li>bar\n<ul>\n<li>baz\n<ul>\n<li>boo</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n",
    "example": 294,
    "start_line": 4911,
    "end_line": 4932,
    "section": "List items"
  },
  {
    "markdown": "- foo\n - bar\n  - baz\n   - boo\n",
    "html": "<ul>\n<li>foo</li>\n<li>bar</li>\n<li>baz</li>\n<li>boo</li>\n</ul>\n",
    "example": 295,
    "start_line": 4937,
    "end_line": 4949,
    "section": "List items"
  },
  {
    "markdown": "10) foo\n    - bar\n",
    "html": "<ol start=\"10\">\n<li>foo\n<ul>\n<li>bar</li>\n</ul>\n</li>\n</ol>\n",
    "example": 296,
    "start_line": 4954,
    "end_line": 4965,
    "section": "List items"
  },
  {
    "markdown": "10) foo\n   - bar\n",
    "html": "<ol start=\"10\">\n<li>foo</li>\n</ol>\n<ul>\n<li>bar</li>\n</ul>\n",
    "example": 297,
    "start_line": 4970,
    "end_line": 4980,
    "section": "List items"
  },
  {
    "markdown": "- - foo\n",
    "html": "<ul>\n<li>\n<ul>\n<li>foo</li>\n</ul>\n</li>\n</ul>\n",
    "example": 298,
    "start_line": 4985,
    "end_line": 4995,
    "section": "List items"
  },
  {
    "markdown": "1. - 2. foo\n",
    "html": "<ol>\n<li>\n<ul>\n<li>\n<ol start=\"2\">\n<li>foo</li>\n</ol>\n</li>\n</ul>\n</li>\n</ol>\n",
    "example": 299,
    "start_line": 4998,
    "end_line": 5012,
    "section": "List items"
  },
  {
    "markdown": "- # Foo\n- Bar\n  ---\n  baz\n",
    "html": "<ul>\n<li>\n<h1>Foo</h1>\n</li>\n<li>\n<h2>Bar</h2>\nbaz</li>\n</ul>\n",
    "example": 300,
    "start_line": 5017,
    "end_line": 5031,
    "section": "List items"
  },
  {
    "markdown": "- foo\n- bar\n+ baz\n",
    "html": "<ul>\n<li>foo</li>\n<li>bar</li>\n</ul>\n<ul>\n<li>baz</li>\n</ul>\n",
    "example": 301,
    "start_line": 5253,
    "end_line": 5265,
    "section": "Lists"
  },
  {
    "markdown": "1. foo\n2. bar\n3) baz\n",
    "html": "<ol>\n<li>foo</li>\n<li>bar</li>\n</ol>\n<ol start=\"3\">\n<li>baz</li>\n</ol>\n",
    "example": 302,
    "start_line": 5268,
    "end_line": 5280,
    "section": "Lists"
  },
  {
    "markdown": "Foo\n- bar\n- baz\n",
    "html": "<p>Foo</p>\n<ul>\n<li>bar</li>\n<li>baz</li>\n</ul>\n",
    "example": 303,
    "start_line": 5287,
    "end_line": 5297,
    "section": "Lists"
  },
  {
    "markdown": "The number of windows in my house is\n14.  The number of doors is 6.\n",
    "html": "<p>The number of windows in my house is\n14.  The number of doors is 6.</p>\n",
    "example": 304,
    "start_line": 5364,
    "end_line": 5370,
    "section": "Lists"
  },
  {
    "markdown": "The number of windows in my house is\n1.  The number of doors is 6.\n",
    "html": "<p>The number of windows in my house is</p>\n<ol>\n<li>The number of doors is 6.</li>\n</ol>\n",
    "example": 305,
    "start_line": 5374,
    "end_line": 5382,
    "section": "Lists"
  },
  {
    "markdown": "- foo\n\n- bar\n\n\n- baz\n",
    "html": "<ul>\n<li>\n<p>foo</p>\n</li>\n<li>\n<p>bar</p>\n</li>\n<li>\n<p>baz</p>\n</li>\n</ul>\n",
    "example": 306,
    "start_line": 5388,
    "end_line": 5407,
    "section": "Lists"
  },
  {
    "markdown": "- foo\n  - bar\n    - baz\n\n\n      bim\n",
    "html": "<ul>\n<li>foo\n<ul>\n<li>bar\n<ul>\n<li>\n<p>baz</p>\n<p>bim</p>\n</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n",
    "example": 307,
    "start_line": 5409,
    "end_line": 5431,
    "section": "Lists"
  },
  {
    "markdown": "- foo\n- bar\n\n<!-- -->\n\n- baz\n- bim\n",
    "html": "<ul>\n<li>foo</li>\n<li>bar</li>\n</ul>\n<!-- -->\n<ul>\n<li>baz</li>\n<li>bim</li>\n</ul>\n",
    "example": 308,
    "start_line": 5439,
    "end_line": 5457,
    "section": "Lists"
  },
  {
    "markdown": "-   foo\n\n    notcode\n\n-   foo\n\n<!-- -->\n\n    code\n",
    "html": "<ul>\n<li>\n<p>foo</p>\n<p>notcode</p>\n</li>\n<li>\n<p>foo</p>\n</li>\n</ul>\n<!-- -->\n<pre><code>code\n</code></pre>\n",
    "example": 309,
    "start_line": 5460,
    "end_line": 5483,
    "section": "Lists"
  },
  {
    "markdown": "- a\n - b\n  - c\n   - d\n  - e\n - f\n- g\n",
    "html": "<ul>\n<li>a</li>\n<li>b</li>\n<li>c</li>\n<li>d</li>\n<li>e</li>\n<li>f</li>\n<li>g</li>\n</ul>\n",
    "example": 310,
    "start_line": 5491,
    "end_line": 5509,
    "section": "Lists"
  },
  {
    "markdown": "1. a\n\n  2. b\n\n   3. c\n",
    "html": "<ol>\n<li>\n<p>a</p>\n</li>\n<li>\n<p>b</p>\n</li>\n<li>\n<p>c</p>\n</li>\n</ol>\n",
    "example": 311,
    "start_line": 5512,
    "end_line": 5530,
    "section": "Lists"
  },
  {
    "markdown": "- a\n - b\n  - c\n   - d\n    - e\n",
    "html": "<ul>\n<li>a</li>\n<li>b</li>\n<li>c</li>\n<li>d\n- e</li>\n</ul>\n",
    "example": 312,
    "start_line": 5536,
    "end_line": 5550,
    "section": "Lists"
  },
  {
    "markdown": "1. a\n\n  2. b\n\n    3. c\n",
    "html": "<ol>\n<li>\n<p>a</p>\n</li>\n<li>\n<p>b</p>\n</li>\n</ol>\n<pre><code>3. c\n</code></pre>\n",
    "example": 313,
    "start_line": 5556,
    "end_line": 5573,
    "section": "Lists"
  },
  {
    "markdown": "- a\n- b\n\n- c\n",
    "html": "<ul>\n<li>\n<p>a</p>\n</li>\n<li>\n<p>b</p>\n</li>\n<li>\n<p>c</p>\n</li>\n</ul>\n",
    "example": 314,
    "start_line": 5579,
    "end_line": 5596,
    "section": "Lists"
  },
  {
    "markdown": "* a\n*\n\n* c\n",
    "html": "<ul>\n<li>\n<p>a</p>\n</li>\n<li></li>\n<li>\n<p>c</p>\n</li>\n</ul>\n",
    "example": 315,
    "start_line": 5601,
    "end_line": 5616,
    "section": "Lists"
  },
  {
    "markdown": "- a\n- b\n\n  c\n- d\n",
    "html": "<ul>\n<li>\n<p>a</p>\n</li>\n<li>\n<p>b</p>\n<p>c</p>\n</li>\n<li>\n<p>d</p>\n</li>\n</ul>\n",
    "example": 316,
    "start_line": 5623,
    "end_line": 5642,
    "section": "Lists"
  },
  {
    "markdown": "- a\n- b\n\n  [ref]: /url\n- d\n",
    "html": "<ul>\n<li>\n<p>a</p>\n</li>\n<li>\n<p>b</p>\n</li>\n<li>\n<p>d</p>\n</li>\n</ul>\n",
    "example": 317,
    "start_line": 5645,
    "end_line": 5663,
    "section": "Lists"
  },
  {
    "markdown": "- a\n- ```\n  b\n\n\n  ```\n- c\n",
    "html": "<ul>\n<li>a</li>\n<li>\n<pre><code>b\n\n\n</code></pre>\n</li>\n<li>c</li>\n</ul>\n",
    "example": 318,
    "start_line": 5668,
    "end_line": 5687,
    "section": "Lists"
  },
  {
    "markdown": "- a\n  - b\n\n    c\n- d\n",
    "html": "<ul>\n<li>a\n<ul>\n<li>\n<p>b</p>\n<p>c</p>\n</li>\n</ul>\n</li>\n<li>d</li>\n</ul>\n",
    "example": 319,
    "start_line": 5694,
    "end_line": 5712,
    "section": "Lists"
  },
  {
    "markdown": "* a\n  > b\n  >\n* c\n",
    "html": "<ul>\n<li>a\n<blockquote>\n<p>b</p>\n</blockquote>\n</li>\n<li>c</li>\n</ul>\n",
    "example": 320,
    "start_line": 5718,
    "end_line": 5732,
    "section": "Lists"
  },
  {
    "markdown": "- a\n  > b\n  ```\n  c\n  ```\n- d\n",
    "html": "<ul>\n<li>a\n<blockquote>\n<p>b</p>\n</blockquote>\n<pre><code>c\n</code></pre>\n</li>\n<li>d</li>\n</ul>\n",
    "example": 321,
    "start_line": 5738,
    "end_line": 5756,
    "section": "Lists"
  },
  {
    "markdown": "- a\n",
    "html": "<ul>\n<li>a</li>\n</ul>\n",
    "example": 322,
    "start_line": 5761,
    "end_line": 5767,
    "section": "Lists"
  },
  {
    "markdown": "- a\n  - b\n",
    "html": "<ul>\n<li>a\n<ul>\n<li>b</li>\n</ul>\n</li>\n</ul>\n",
    "example": 323,
    "start_line": 5770,
    "end_line": 5781,
    "section": "Lists"
  },
  {
    "markdown": "1. ```\n   foo\n   ```\n\n   bar\n",
    "html": "<ol>\n<li>\n<pre><code>foo\n</code></pre>\n<p>bar</p>\n</li>\n</ol>\n",
    "example": 324,
    "start_line": 5787,
    "end_line": 5801,
    "section": "Lists"
  },
  {
    "markdown": "* foo\n  * bar\n\n  baz\n",
    "html": "<ul>\n<li>\n<p>foo</p>\n<ul>\n<li>bar</li>\n</ul>\n<p>baz</p>\n</li>\n</ul>\n",
    "example": 325,
    "start_line": 5806,
    "end_line": 5821,
    "section": "Lists"
  },
  {
    "markdown": "- a\n  - b\n  - c\n\n- d\n  - e\n  - f\n",
    "html": "<ul>\n<li>\n<p>a</p>\n<ul>\n<li>b</li>\n<li>c</li>\n</ul>\n</li>\n<li>\n<p>d</p>\n<ul>\n<li>e</li>\n<li>f</li>\n</ul>\n</li>\n</ul>\n",
    "example": 326,
    "start_line": 5824,
    "end_line": 5849,
    "section": "Lists"
  },
  {
    "markdown": "`hi`lo`\n",
    "html": "<p><code>hi</code>lo`</p>\n",
    "example": 327,
    "start_line": 5858,
    "end_line": 5862,
    "section": "Inlines"
  },
  {
    "markdown": "`foo`\n",
    "html": "<p><code>foo</code></p>\n",
    "example": 328,
    "start_line": 5890,
    "end_line": 5894,
    "section": "Code spans"
  },
  {
    "markdown": "`` foo ` bar ``\n",
    "html": "<p><code>foo ` bar</code></p>\n",
    "example": 329,
    "start_line": 5901,
    "end_line": 5905,
    "section": "Code spans"
  },
  {
    "markdown": "` `` `\n",
    "html": "<p><code>``</code></p>\n",
    "example": 330,
    "start_line": 5911,
    "end_line": 5915,
    "section": "Code spans"
  },
  {
    "markdown": "`  ``  `\n",
    "html": "<p><code> `` </code></p>\n",
    "example": 331,
    "start_line": 5919,
    "end_line": 5923,
    "section": "Code spans"
  },
  {
    "markdown": "` a`\n",
    "html": "<p><code> a</code></p>\n",
    "example": 332,
    "start_line": 5928,
    "end_line": 5932,
    "section": "Code spans"
  },
  {
    "markdown": "` b `\n",
    "html": "<p><code> b </code></p>\n",
    "example": 333,
    "start_line": 5937,
    "end_line": 5941,
    "section": "Code spans"
  },
  {
    "markdown": "` `\n`  `\n",
    "html": "<p><code> </code>\n<code>  </code></p>\n",
    "example": 334,
    "start_line": 5945,
    "end_line": 5951,
    "section": "Code spans"
  },
  {
    "markdown": "``\nfoo\nbar  \nbaz\n``\n",
    "html": "<p><code>foo bar   baz</code></p>\n",
    "example": 335,
    "start_line": 5956,
    "end_line": 5964,
    "section": "Code spans"
  },
  {
    "markdown": "``\nfoo \n``\n",
    "html": "<p><code>foo </code></p>\n",
    "example": 336,
    "start_line": 5966,
    "end_line": 5972,
    "section": "Code spans"
  },
  {
    "markdown": "`foo   bar \nbaz`\n",
    "html": "<p><code>foo   bar  baz</code></p>\n",
    "example": 337,
    "start_line": 5977,
    "end_line": 5982,
    "section": "Code spans"
  },
  {
    "markdown": "`foo\\`bar`\n",
    "html": "<p><code>foo\\</code>bar`</p>\n",
    "example": 338,
    "start_line": 5994,
    "end_line": 5998,
    "section": "Code spans"
  },
  {
    "markdown": "``foo`bar``\n",
    "html": "<p><code>foo`bar</code></p>\n",
    "example": 339,
    "start_line": 6005,
    "end_line": 6009,
    "section": "Code spans"
  },
  {
    "markdown": "` foo `` bar `\n",
    "html": "<p><code>foo `` bar</code></p>\n",
    "example": 340,
    "start_line": 6011,
    "end_line": 6015,
    "section": "Code spans"
  },
  {
    "markdown": "*foo`*`\n",
    "html": "<p>*foo<code>*</code></p>\n",
    "example": 341,
    "start_line": 6023,
    "end_line": 6027,
    "section": "Code spans"
  },
  {
    "markdown": "[not a `link](/foo`)\n",
    "html": "<p>[not a <code>link](/foo</code>)</p>\n",
    "example": 342,
    "start_line": 6032,
    "end_line": 6036,
    "section": "Code spans"
  },
  {
    "markdown": "`<a href=\"`\">`\n",
    "html": "<p><code>&lt;a href=&quot;</code>&quot;&gt;`</p>\n",
    "example": 343,
    "start_line": 6042,
    "end_line": 6046,
    "section": "Code spans"
  },
  {
    "markdown": "<a href=\"`\">`\n",
    "html": "<p><a href=\"`\">`</p>\n",
    "example": 344,
    "start_line": 6051,
    "end_line": 6055,
    "section": "Code spans"
  },
  {
    "markdown": "`<http://foo.bar.`baz>`\n",
    "html": "<p><code>&lt;http://foo.bar.</code>baz&gt;`</p>\n",
    "example": 345,
    "start_line": 6060,
    "end_line": 6064,
    "section": "Code spans"
  },
  {
    "markdown": "<http://foo.bar.`baz>`\n",
    "html": "<p><a href=\"http://foo.bar.%60baz\">http://foo.bar.`baz</a>`</p>\n",
    "example": 346,
    "start_line": 6069,
    "end_line": 6073,
    "section": "Code spans"
  },
  {
    "markdown": "```foo``\n",
    "html": "<p>```foo``</p>\n",
    "example": 347,
    "start_line": 6079,
    "end_line": 6083,
    "section": "Code spans"
  },
  {
    "markdown": "`foo\n",
    "html": "<p>`foo</p>\n",
    "example": 348,
    "start_line": 6086,
    "end_line": 6090,
    "section": "Code spans"
  },
  {
    "markdown": "`foo``bar``\n",
    "html": "<p>`foo<code>bar</code></p>\n",
    "example": 349,
    "start_line": 6095,
    "end_line": 6099,
    "section": "Code spans"
  },
  {
    "markdown": "*foo bar*\n",
    "html": "<p><em>foo bar</em></p>\n",
    "example": 350,
    "start_line": 6312,
    "end_line": 6316,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "a * foo bar*\n",
    "html": "<p>a * foo bar*</p>\n",
    "example": 351,
    "start_line": 6322,
    "end_line": 6326,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "a*\"foo\"*\n",
    "html": "<p>a*&quot;foo&quot;*</p>\n",
    "example": 352,
    "start_line": 6333,
    "end_line": 6337,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "* a *\n",
    "html": "<p>* a *</p>\n",
    "example": 353,
    "start_line": 6342,
    "end_line": 6346,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "foo*bar*\n",
    "html": "<p>foo<em>bar</em></p>\n",
    "example": 354,
    "start_line": 6351,
    "end_line": 6355,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "5*6*78\n",
    "html": "<p>5<em>6</em>78</p>\n",
    "example": 355,
    "start_line": 6358,
    "end_line": 6362,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "_foo bar_\n",
    "html": "<p><em>foo bar</em></p>\n",
    "example": 356,
    "start_line": 6367,
    "end_line": 6371,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "_ foo bar_\n",
    "html": "<p>_ foo bar_</p>\n",
    "example": 357,
    "start_line": 6377,
    "end_line": 6381,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "a_\"foo\"_\n",
    "html": "<p>a_&quot;foo&quot;_</p>\n",
    "example": 358,
    "start_line": 6387,
    "end_line": 6391,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "foo_bar_\n",
    "html": "<p>foo_bar_</p>\n",
    "example": 359,
    "start_line": 6396,
    "end_line": 6400,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "5_6_78\n",
    "html": "<p>5_6_78</p>\n",
    "example": 360,
    "start_line": 6403,
    "end_line": 6407,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "пристаням_стремятся_\n",
    "html": "<p>пристаням_стремятся_</p>\n",
    "example": 361,
    "start_line": 6410,
    "end_line": 6414,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "aa_\"bb\"_cc\n",
    "html": "<p>aa_&quot;bb&quot;_cc</p>\n",
    "example": 362,
    "start_line": 6420,
    "end_line": 6424,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "foo-_(bar)_\n",
    "html": "<p>foo-<em>(bar)</em></p>\n",
    "example": 363,
    "start_line": 6431,
    "end_line": 6435,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "_foo*\n",
    "html": "<p>_foo*</p>\n",
    "example": 364,
    "start_line": 6443,
    "end_line": 6447,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "*foo bar *\n",
    "html": "<p>*foo bar *</p>\n",
    "example": 365,
    "start_line": 6453,
    "end_line": 6457,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "*foo bar\n*\n",
    "html": "<p>*foo bar\n*</p>\n",
    "example": 366,
    "start_line": 6462,
    "end_line": 6468,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "*(*foo)\n",
    "html": "<p>*(*foo)</p>\n",
    "example": 367,
    "start_line": 6475,
    "end_line": 6479,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "*(*foo*)*\n",
    "html": "<p><em>(<em>foo</em>)</em></p>\n",
    "example": 368,
    "start_line": 6485,
    "end_line": 6489,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "*foo*bar\n",
    "html": "<p><em>foo</em>bar</p>\n",
    "example": 369,
    "start_line": 6494,
    "end_line": 6498,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "_foo bar _\n",
    "html": "<p>_foo bar _</p>\n",
    "example": 370,
    "start_line": 6507,
    "end_line": 6511,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "_(_foo)\n",
    "html": "<p>_(_foo)</p>\n",
    "example": 371,
    "start_line": 6517,
    "end_line": 6521,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "_(_foo_)_\n",
    "html": "<p><em>(<em>foo</em>)</em></p>\n",
    "example": 372,
    "start_line": 6526,
    "end_line": 6530,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "_foo_bar\n",
    "html": "<p>_foo_bar</p>\n",
    "example": 373,
    "start_line": 6535,
    "end_line": 6539,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "_пристаням_стремятся\n",
    "html": "<p>_пристаням_стремятся</p>\n",
    "example": 374,
    "start_line": 6542,
    "end_line": 6546,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "_foo_bar_baz_\n",
    "html": "<p><em>foo_bar_baz</em></p>\n",
    "example": 375,
    "start_line": 6549,
    "end_line": 6553,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "_(bar)_.\n",
    "html": "<p><em>(bar)</em>.</p>\n",
    "example": 376,
    "start_line": 6560,
    "end_line": 6564,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "**foo bar**\n",
    "html": "<p><strong>foo bar</strong></p>\n",
    "example": 377,
    "start_line": 6569,
    "end_line": 6573,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "** foo bar**\n",
    "html": "<p>** foo bar**</p>\n",
    "example": 378,
    "start_line": 6579,
    "end_line": 6583,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "a**\"foo\"**\n",
    "html": "<p>a**&quot;foo&quot;**</p>\n",
    "example": 379,
    "start_line": 6590,
    "end_line": 6594,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "foo**bar**\n",
    "html": "<p>foo<strong>bar</strong></p>\n",
    "example": 380,
    "start_line": 6599,
    "end_line": 6603,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "__foo bar__\n",
    "html": "<p><strong>foo bar</strong></p>\n",
    "example": 381,
    "start_line": 6608,
    "end_line": 6612,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "__ foo bar__\n",
    "html": "<p>__ foo bar__</p>\n",
    "example": 382,
    "start_line": 6618,
    "end_line": 6622,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "__\nfoo bar__\n",
    "html": "<p>__\nfoo bar__</p>\n",
    "example": 383,
    "start_line": 6626,
    "end_line": 6632,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "a__\"foo\"__\n",
    "html": "<p>a__&quot;foo&quot;__</p>\n",
    "example": 384,
    "start_line": 6638,
    "end_line": 6642,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "foo__bar__\n",
    "html": "<p>foo__bar__</p>\n",
    "example": 385,
    "start_line": 6647,
    "end_line": 6651,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "5__6__78\n",
    "html": "<p>5__6__78</p>\n",
    "example": 386,
    "start_line": 6654,
    "end_line": 6658,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "пристаням__стремятся__\n",
    "html": "<p>пристаням__стремятся__</p>\n",
    "example": 387,
    "start_line": 6661,
    "end_line": 6665,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "__foo, __bar__, baz__\n",
    "html": "<p><strong>foo, <strong>bar</strong>, baz</strong></p>\n",
    "example": 388,
    "start_line": 6668,
    "end_line": 6672,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "foo-__(bar)__\n",
    "html": "<p>foo-<strong>(bar)</strong></p>\n",
    "example": 389,
    "start_line": 6679,
    "end_line": 6683,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "**foo bar **\n",
    "html": "<p>**foo bar **</p>\n",
    "example": 390,
    "start_line": 6692,
    "end_line": 6696,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "**(**foo)\n",
    "html": "<p>**(**foo)</p>\n",
    "example": 391,
    "start_line": 6705,
    "end_line": 6709,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "*(**foo**)*\n",
    "html": "<p><em>(<strong>foo</strong>)</em></p>\n",
    "example": 392,
    "start_line": 6715,
    "end_line": 6719,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "**Gomphocarpus (*Gomphocarpus physocarpus*, syn.\n*Asclepias physocarpa*)**\n",
    "html": "<p><strong>Gomphocarpus (<em>Gomphocarpus physocarpus</em>, syn.\n<em>Asclepias physocarpa</em>)</strong></p>\n",
    "example": 393,
    "start_line": 6722,
    "end_line": 6728,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "**foo \"*bar*\" foo**\n",
    "html": "<p><strong>foo &quot;<em>bar</em>&quot; foo</strong></p>\n",
    "example": 394,
    "start_line": 6731,
    "end_line": 6735,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "**foo**bar\n",
    "html": "<p><strong>foo</strong>bar</p>\n",
    "example": 395,
    "start_line": 6740,
    "end_line": 6744,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "__foo bar __\n",
    "html": "<p>__foo bar __</p>\n",
    "example": 396,
    "start_line": 6752,
    "end_line": 6756,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "__(__foo)\n",
    "html": "<p>__(__foo)</p>\n",
    "example": 397,
    "start_line": 6762,
    "end_line": 6766,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "_(__foo__)_\n",
    "html": "<p><em>(<strong>foo</strong>)</em></p>\n",
    "example": 398,
    "start_line": 6772,
    "end_line": 6776,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "__foo__bar\n",
    "html": "<p>__foo__bar</p>\n",
    "example": 399,
    "start_line": 6781,
    "end_line": 6785,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "__пристаням__стремятся\n",
    "html": "<p>__пристаням__стремятся</p>\n",
    "example": 400,
    "start_line": 6788,
    "end_line": 6792,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "__foo__bar__baz__\n",
    "html": "<p><strong>foo__bar__baz</strong></p>\n",
    "example": 401,
    "start_line": 6795,
    "end_line": 6799,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "__(bar)__.\n",
    "html": "<p><strong>(bar)</strong>.</p>\n",
    "example": 402,
    "start_line": 6806,
    "end_line": 6810,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "*foo [bar](/url)*\n",
    "html": "<p><em>foo <a href=\"/url\">bar</a></em></p>\n",
    "example": 403,
    "start_line": 6818,
    "end_line": 6822,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "*foo\nbar*\n",
    "html": "<p><em>foo\nbar</em></p>\n",
    "example": 404,
    "start_line": 6825,
    "end_line": 6831,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "_foo __bar__ baz_\n",
    "html": "<p><em>foo <strong>bar</strong> baz</em></p>\n",
    "example": 405,
    "start_line": 6837,
    "end_line": 6841,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "_foo _bar_ baz_\n",
    "html": "<p><em>foo <em>bar</em> baz</em></p>\n",
    "example": 406,
    "start_line": 6844,
    "end_line": 6848,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "__foo_ bar_\n",
    "html": "<p><em><em>foo</em> bar</em></p>\n",
    "example": 407,
    "start_line": 6851,
    "end_line": 6855,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "*foo *bar**\n",
    "html": "<p><em>foo <em>bar</em></em></p>\n",
    "example": 408,
    "start_line": 6858,
    "end_line": 6862,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "*foo **bar** baz*\n",
    "html": "<p><em>foo <strong>bar</strong> baz</em></p>\n",
    "example": 409,
    "start_line": 6865,
    "end_line": 6869,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "*foo**bar**baz*\n",
    "html": "<p><em>foo<strong>bar</strong>baz</em></p>\n",
    "example": 410,
    "start_line": 6871,
    "end_line": 6875,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "*foo**bar*\n",
    "html": "<p><em>foo**bar</em></p>\n",
    "example": 411,
    "start_line": 6895,
    "end_line": 6899,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "***foo** bar*\n",
    "html": "<p><em><strong>foo</strong> bar</em></p>\n",
    "example": 412,
    "start_line": 6908,
    "end_line": 6912,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "*foo **bar***\n",
    "html": "<p><em>foo <strong>bar</strong></em></p>\n",
    "example": 413,
    "start_line": 6915,
    "end_line": 6919,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "*foo**bar***\n",
    "html": "<p><em>foo<strong>bar</strong></em></p>\n",
    "example": 414,
    "start_line": 6922,
    "end_line": 6926,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "foo***bar***baz\n",
    "html": "<p>foo<em><strong>bar</strong></em>baz</p>\n",
    "example": 415,
    "start_line": 6933,
    "end_line": 6937,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "foo******bar*********baz\n",
    "html": "<p>foo<strong><strong><strong>bar</strong></strong></strong>***baz</p>\n",
    "example": 416,
    "start_line": 6939,
    "end_line": 6943,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "*foo **bar *baz* bim** bop*\n",
    "html": "<p><em>foo <strong>bar <em>baz</em> bim</strong> bop</em></p>\n",
    "example": 417,
    "start_line": 6948,
    "end_line": 6952,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "*foo [*bar*](/url)*\n",
    "html": "<p><em>foo <a href=\"/url\"><em>bar</em></a></em></p>\n",
    "example": 418,
    "start_line": 6955,
    "end_line": 6959,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "** is not an empty emphasis\n",
    "html": "<p>** is not an empty emphasis</p>\n",
    "example": 419,
    "start_line": 6964,
    "end_line": 6968,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "**** is not an empty strong emphasis\n",
    "html": "<p>**** is not an empty strong emphasis</p>\n",
    "example": 420,
    "start_line": 6971,
    "end_line": 6975,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "**foo [bar](/url)**\n",
    "html": "<p><strong>foo <a href=\"/url\">bar</a></strong></p>\n",
    "example": 421,
    "start_line": 6984,
    "end_line": 6988,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "**foo\nbar**\n",
    "html": "<p><strong>foo\nbar</strong></p>\n",
    "example": 422,
    "start_line": 6991,
    "end_line": 6997,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "__foo _bar_ baz__\n",
    "html": "<p><strong>foo <em>bar</em> baz</strong></p>\n",
    "example": 423,
    "start_line": 7003,
    "end_line": 7007,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "__foo __bar__ baz__\n",
    "html": "<p><strong>foo <strong>bar</strong> baz</strong></p>\n",
    "example": 424,
    "start_line": 7010,
    "end_line": 7014,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "____foo__ bar__\n",
    "html": "<p><strong><strong>foo</strong> bar</strong></p>\n",
    "example": 425,
    "start_line": 7017,
    "end_line": 7021,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "**foo **bar****\n",
    "html": "<p><strong>foo <strong>bar</strong></strong></p>\n",
    "example": 426,
    "start_line": 7024,
    "end_line": 7028,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "**foo *bar* baz**\n",
    "html": "<p><strong>foo <em>bar</em> baz</strong></p>\n",
    "example": 427,
    "start_line": 7031,
    "end_line": 7035,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "**foo*bar*baz**\n",
    "html": "<p><strong>foo<em>bar</em>baz</strong></p>\n",
    "example": 428,
    "start_line": 7038,
    "end_line": 7042,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "***foo* bar**\n",
    "html": "<p><strong><em>foo</em> bar</strong></p>\n",
    "example": 429,
    "start_line": 7045,
    "end_line": 7049,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "**foo *bar***\n",
    "html": "<p><strong>foo <em>bar</em></strong></p>\n",
    "example": 430,
    "start_line": 7052,
    "end_line": 7056,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "**foo *bar **baz**\nbim* bop**\n",
    "html": "<p><strong>foo <em>bar <strong>baz</strong>\nbim</em> bop</strong></p>\n",
    "example": 431,
    "start_line": 7061,
    "end_line": 7067,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "**foo [*bar*](/url)**\n",
    "html": "<p><strong>foo <a href=\"/url\"><em>bar</em></a></strong></p>\n",
    "example": 432,
    "start_line": 7070,
    "end_line": 7074,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "__ is not an empty emphasis\n",
    "html": "<p>__ is not an empty emphasis</p>\n",
    "example": 433,
    "start_line": 7079,
    "end_line": 7083,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "____ is not an empty strong emphasis\n",
    "html": "<p>____ is not an empty strong emphasis</p>\n",
    "example": 434,
    "start_line": 7086,
    "end_line": 7090,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "foo ***\n",
    "html": "<p>foo ***</p>\n",
    "example": 435,
    "start_line": 7096,
    "end_line": 7100,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "foo *\\**\n",
    "html": "<p>foo <em>*</em></p>\n",
    "example": 436,
    "start_line": 7103,
    "end_line": 7107,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "foo *_*\n",
    "html": "<p>foo <em>_</em></p>\n",
    "example": 437,
    "start_line": 7110,
    "end_line": 7114,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "foo *****\n",
    "html": "<p>foo *****</p>\n",
    "example": 438,
    "start_line": 7117,
    "end_line": 7121,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "foo **\\***\n",
    "html": "<p>foo <strong>*</strong></p>\n",
    "example": 439,
    "start_line": 7124,
    "end_line": 7128,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "foo **_**\n",
    "html": "<p>foo <strong>_</strong></p>\n",
    "example": 440,
    "start_line": 7131,
    "end_line": 7135,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "**foo*\n",
    "html": "<p>*<em>foo</em></p>\n",
    "example": 441,
    "start_line": 7142,
    "end_line": 7146,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "*foo**\n",
    "html": "<p><em>foo</em>*</p>\n",
    "example": 442,
    "start_line": 7149,
    "end_line": 7153,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "***foo**\n",
    "html": "<p>*<strong>foo</strong></p>\n",
    "example": 443,
    "start_line": 7156,
    "end_line": 7160,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "****foo*\n",
    "html": "<p>***<em>foo</em></p>\n",
    "example": 444,
    "start_line": 7163,
    "end_line": 7167,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "**foo***\n",
    "html": "<p><strong>foo</strong>*</p>\n",
    "example": 445,
    "start_line": 7170,
    "end_line": 7174,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "*foo****\n",
    "html": "<p><em>foo</em>***</p>\n",
    "example": 446,
    "start_line": 7177,
    "end_line": 7181,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "foo ___\n",
    "html": "<p>foo ___</p>\n",
    "example": 447,
    "start_line": 7187,
    "end_line": 7191,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "foo _\\__\n",
    "html": "<p>foo <em>_</em></p>\n",
    "example": 448,
    "start_line": 7194,
    "end_line": 7198,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "foo _*_\n",
    "html": "<p>foo <em>*</em></p>\n",
    "example": 449,
    "start_line": 7201,
    "end_line": 7205,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "foo _____\n",
    "html": "<p>foo _____</p>\n",
    "example": 450,
    "start_line": 7208,
    "end_line": 7212,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "foo __\\___\n",
    "html": "<p>foo <strong>_</strong></p>\n",
    "example": 451,
    "start_line": 7215,
    "end_line": 7219,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "foo __*__\n",
    "html": "<p>foo <strong>*</strong></p>\n",
    "example": 452,
    "start_line": 7222,
    "end_line": 7226,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "__foo_\n",
    "html": "<p>_<em>foo</em></p>\n",
    "example": 453,
    "start_line": 7229,
    "end_line": 7233,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "_foo__\n",
    "html": "<p><em>foo</em>_</p>\n",
    "example": 454,
    "start_line": 7240,
    "end_line": 7244,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "___foo__\n",
    "html": "<p>_<strong>foo</strong></p>\n",
    "example": 455,
    "start_line": 7247,
    "end_line": 7251,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "____foo_\n",
    "html": "<p>___<em>foo</em></p>\n",
    "example": 456,
    "start_line": 7254,
    "end_line": 7258,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "__foo___\n",
    "html": "<p><strong>foo</strong>_</p>\n",
    "example": 457,
    "start_line": 7261,
    "end_line": 7265,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "_foo____\n",
    "html": "<p><em>foo</em>___</p>\n",
    "example": 458,
    "start_line": 7268,
    "end_line": 7272,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "**foo**\n",
    "html": "<p><strong>foo</strong></p>\n",
    "example": 459,
    "start_line": 7278,
    "end_line": 7282,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "*_foo_*\n",
    "html": "<p><em><em>foo</em></em></p>\n",
    "example": 460,
    "start_line": 7285,
    "end_line": 7289,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "__foo__\n",
    "html": "<p><strong>foo</strong></p>\n",
    "example": 461,
    "start_line": 7292,
    "end_line": 7296,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "_*foo*_\n",
    "html": "<p><em><em>foo</em></em></p>\n",
    "example": 462,
    "start_line": 7299,
    "end_line": 7303,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "****foo****\n",
    "html": "<p><strong><strong>foo</strong></strong></p>\n",
    "example": 463,
    "start_line": 7309,
    "end_line": 7313,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "____foo____\n",
    "html": "<p><strong><strong>foo</strong></strong></p>\n",
    "example": 464,
    "start_line": 7316,
    "end_line": 7320,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "******foo******\n",
    "html": "<p><strong><strong><strong>foo</strong></strong></strong></p>\n",
    "example": 465,
    "start_line": 7327,
    "end_line": 7331,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "***foo***\n",
    "html": "<p><em><strong>foo</strong></em></p>\n",
    "example": 466,
    "start_line": 7336,
    "end_line": 7340,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "_____foo_____\n",
    "html": "<p><em><strong><strong>foo</strong></strong></em></p>\n",
    "example": 467,
    "start_line": 7343,
    "end_line": 7347,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "*foo _bar* baz_\n",
    "html": "<p><em>foo _bar</em> baz_</p>\n",
    "example": 468,
    "start_line": 7352,
    "end_line": 7356,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "*foo __bar *baz bim__ bam*\n",
    "html": "<p><em>foo <strong>bar *baz bim</strong> bam</em></p>\n",
    "example": 469,
    "start_line": 7359,
    "end_line": 7363,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "**foo **bar baz**\n",
    "html": "<p>**foo <strong>bar baz</strong></p>\n",
    "example": 470,
    "start_line": 7368,
    "end_line": 7372,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "*foo *bar baz*\n",
    "html": "<p>*foo <em>bar baz</em></p>\n",
    "example": 471,
    "start_line": 7375,
    "end_line": 7379,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "*[bar*](/url)\n",
    "html": "<p>*<a href=\"/url\">bar*</a></p>\n",
    "example": 472,
    "start_line": 7384,
    "end_line": 7388,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "_foo [bar_](/url)\n",
    "html": "<p>_foo <a href=\"/url\">bar_</a></p>\n",
    "example": 473,
    "start_line": 7391,
    "end_line": 7395,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "*<img src=\"foo\" title=\"*\"/>\n",
    "html": "<p>*<img src=\"foo\" title=\"*\"/></p>\n",
    "example": 474,
    "start_line": 7398,
    "end_line": 7402,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "**<a href=\"**\">\n",
    "html": "<p>**<a href=\"**\"></p>\n",
    "example": 475,
    "start_line": 7405,
    "end_line": 7409,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "__<a href=\"__\">\n",
    "html": "<p>__<a href=\"__\"></p>\n",
    "example": 476,
    "start_line": 7412,
    "end_line": 7416,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "*a `*`*\n",
    "html": "<p><em>a <code>*</code></em></p>\n",
    "example": 477,
    "start_line": 7419,
    "end_line": 7423,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "_a `_`_\n",
    "html": "<p><em>a <code>_</code></em></p>\n",
    "example": 478,
    "start_line": 7426,
    "end_line": 7430,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "**a<http://foo.bar/?q=**>\n",
    "html": "<p>**a<a href=\"http://foo.bar/?q=**\">http://foo.bar/?q=**</a></p>\n",
    "example": 479,
    "start_line": 7433,
    "end_line": 7437,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "__a<http://foo.bar/?q=__>\n",
    "html": "<p>__a<a href=\"http://foo.bar/?q=__\">http://foo.bar/?q=__</a></p>\n",
    "example": 480,
    "start_line": 7440,
    "end_line": 7444,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "[link](/uri \"title\")\n",
    "html": "<p><a href=\"/uri\" title=\"title\">link</a></p>\n",
    "example": 481,
    "start_line": 7528,
    "end_line": 7532,
    "section": "Links"
  },
  {
    "markdown": "[link](/uri)\n",
    "html": "<p><a href=\"/uri\">link</a></p>\n",
    "example": 482,
    "start_line": 7538,
    "end_line": 7542,
    "section": "Links"
  },
  {
    "markdown": "[](./target.md)\n",
    "html": "<p><a href=\"./target.md\"></a></p>\n",
    "example": 483,
    "start_line": 7544,
    "end_line": 7548,
    "section": "Links"
  },
  {
    "markdown": "[link]()\n",
    "html": "<p><a href=\"\">link</a></p>\n",
    "example": 484,
    "start_line": 7551,
    "end_line": 7555,
    "section": "Links"
  },
  {
    "markdown": "[link](<>)\n",
    "html": "<p><a href=\"\">link</a></p>\n",
    "example": 485,
    "start_line": 7558,
    "end_line": 7562,
    "section": "Links"
  },
  {
    "markdown": "[]()\n",
    "html": "<p><a href=\"\"></a></p>\n",
    "example": 486,
    "start_line": 7565,
    "end_line": 7569,
    "section": "Links"
  },
  {
    "markdown": "[link](/my uri)\n",
    "html": "<p>[link](/my uri)</p>\n",
    "example": 487,
    "start_line": 7574,
    "end_line": 7578,
    "section": "Links"
  },
  {
    "markdown": "[link](</my uri>)\n",
    "html": "<p><a href=\"/my%20uri\">link</a></p>\n",
    "example": 488,
    "start_line": 7580,
    "end_line": 7584,
    "section": "Links"
  },
  {
    "markdown": "[link](foo\nbar)\n",
    "html": "<p>[link](foo\nbar)</p>\n",
    "example": 489,
    "start_line": 7589,
    "end_line": 7595,
    "section": "Links"
  },
  {
    "markdown": "[link](<foo\nbar>)\n",
    "html": "<p>[link](<foo\nbar>)</p>\n",
    "example": 490,
    "start_line": 7597,
    "end_line": 7603,
    "section": "Links"
  },
  {
    "markdown": "[a](<b)c>)\n",
    "html": "<p><a href=\"b)c\">a</a></p>\n",
    "example": 491,
    "start_line": 7608,
    "end_line": 7612,
    "section": "Links"
  },
  {
    "markdown": "[link](<foo\\>)\n",
    "html": "<p>[link](&lt;foo&gt;)</p>\n",
    "example": 492,
    "start_line": 7616,
    "end_line": 7620,
    "section": "Links"
  },
  {
    "markdown": "[a](<b)c\n[a](<b)c>\n[a](<b>c)\n",
    "html": "<p>[a](&lt;b)c\n[a](&lt;b)c&gt;\n[a](<b>c)</p>\n",
    "example": 493,
    "start_line": 7625,
    "end_line": 7633,
    "section": "Links"
  },
  {
    "markdown": "[link](\\(foo\\))\n",
    "html": "<p><a href=\"(foo)\">link</a></p>\n",
    "example": 494,
    "start_line": 7637,
    "end_line": 7641,
    "section": "Links"
  },
  {
    "markdown": "[link](foo(and(bar)))\n",
    "html": "<p><a href=\"foo(and(bar))\">link</a></p>\n",
    "example": 495,
    "start_line": 7646,
    "end_line": 7650,
    "section": "Links"
  },
  {
    "markdown": "[link](foo(and(bar))\n",
    "html": "<p>[link](foo(and(bar))</p>\n",
    "example": 496,
    "start_line": 7655,
    "end_line": 7659,
    "section": "Links"
  },
  {
    "markdown": "[link](foo\\(and\\(bar\\))\n",
    "html": "<p><a href=\"foo(and(bar)\">link</a></p>\n",
    "example": 497,
    "start_line": 7662,
    "end_line": 7666,
    "section": "Links"
  },
  {
    "markdown": "[link](<foo(and(bar)>)\n",
    "html": "<p><a href=\"foo(and(bar)\">link</a></p>\n",
    "example": 498,
    "start_line": 7669,
    "end_line": 7673,
    "section": "Links"
  },
  {
    "markdown": "[link](foo\\)\\:)\n",
    "html": "<p><a href=\"foo):\">link</a></p>\n",
    "example": 499,
    "start_line": 7679,
    "end_line": 7683,
    "section": "Links"
  },
  {
    "markdown": "[link](#fragment)\n\n[link](http://example.com#fragment)\n\n[link](http://example.com?foo=3#frag)\n",
    "html": "<p><a href=\"#fragment\">link</a></p>\n<p><a href=\"http://example.com#fragment\">link</a></p>\n<p><a href=\"http://example.com?foo=3#frag\">link</a></p>\n",
    "example": 500,
    "start_line": 7688,
    "end_line": 7698,
    "section": "Links"
  },
  {
    "markdown": "[link](foo\\bar)\n",
    "html": "<p><a href=\"foo%5Cbar\">link</a></p>\n",
    "example": 501,
    "start_line": 7704,
    "end_line": 7708,
    "section": "Links"
  },
  {
    "markdown": "[link](foo%20b&auml;)\n",
    "html": "<p><a href=\"foo%20b%C3%A4\">link</a></p>\n",
    "example": 502,
    "start_line": 7720,
    "end_line": 7724,
    "section": "Links"
  },
  {
    "markdown": "[link](\"title\")\n",
    "html": "<p><a href=\"%22title%22\">link</a></p>\n",
    "example": 503,
    "start_line": 7731,
    "end_line": 7735,
    "section": "Links"
  },
  {
    "markdown": "[link](/url \"title\")\n[link](/url 'title')\n[link](/url (title))\n",
    "html": "<p><a href=\"/url\" title=\"title\">link</a>\n<a href=\"/url\" title=\"title\">link</a>\n<a href=\"/url\" title=\"title\">link</a></p>\n",
    "example": 504,
    "start_line": 7740,
    "end_line": 7748,
    "section": "Links"
  },
  {
    "markdown": "[link](/url \"title \\\"&quot;\")\n",
    "html": "<p><a href=\"/url\" title=\"title &quot;&quot;\">link</a></p>\n",
    "example": 505,
    "start_line": 7754,
    "end_line": 7758,
    "section": "Links"
  },
  {
    "markdown": "[link](/url \"title\")\n",
    "html": "<p><a href=\"/url%C2%A0%22title%22\">link</a></p>\n",
    "example": 506,
    "start_line": 7765,
    "end_line": 7769,
    "section": "Links"
  },
  {
    "markdown": "[link](/url \"title \"and\" title\")\n",
    "html": "<p>[link](/url &quot;title &quot;and&quot; title&quot;)</p>\n",
    "example": 507,
    "start_line": 7774,
    "end_line": 7778,
    "section": "Links"
  },
  {
    "markdown": "[link](/url 'title \"and\" title')\n",
    "html": "<p><a href=\"/url\" title=\"title &quot;and&quot; title\">link</a></p>\n",
    "example": 508,
    "start_line": 7783,
    "end_line": 7787,
    "section": "Links"
  },
  {
    "markdown": "[link](   /uri\n  \"title\"  )\n",
    "html": "<p><a href=\"/uri\" title=\"title\">link</a></p>\n",
    "example": 509,
    "start_line": 7808,
    "end_line": 7813,
    "section": "Links"
  },
  {
    "markdown": "[link] (/uri)\n",
    "html": "<p>[link] (/uri)</p>\n",
    "example": 510,
    "start_line": 7819,
    "end_line": 7823,
    "section": "Links"
  },
  {
    "markdown": "[link [foo [bar]]](/uri)\n",
    "html": "<p><a href=\"/uri\">link [foo [bar]]</a></p>\n",
    "example": 511,
    "start_line": 7829,
    "end_line": 7833,
    "section": "Links"
  },
  {
    "markdown": "[link] bar](/uri)\n",
    "html": "<p>[link] bar](/uri)</p>\n",
    "example": 512,
    "start_line": 7836,
    "end_line": 7840,
    "section": "Links"
  },
  {
    "markdown": "[link [bar](/uri)\n",
    "html": "<p>[link <a href=\"/uri\">bar</a></p>\n",
    "example": 513,
    "start_line": 7843,
    "end_line": 7847,
    "section": "Links"
  },
  {
    "markdown": "[link \\[bar](/uri)\n",
    "html": "<p><a href=\"/uri\">link [bar</a></p>\n",
    "example": 514,
    "start_line": 7850,
    "end_line": 7854,
    "section": "Links"
  },
  {
    "markdown": "[link *foo **bar** `#`*](/uri)\n",
    "html": "<p><a href=\"/uri\">link <em>foo <strong>bar</strong> <code>#</code></em></a></p>\n",
    "example": 515,
    "start_line": 7859,
    "end_line": 7863,
    "section": "Links"
  },
  {
    "markdown": "[![moon](moon.jpg)](/uri)\n",
    "html": "<p><a href=\"/uri\"><img src=\"moon.jpg\" alt=\"moon\" /></a></p>\n",
    "example": 516,
    "start_line": 7866,
    "end_line": 7870,
    "section": "Links"
  },
  {
    "markdown": "[foo [bar](/uri)](/uri)\n",
    "html": "<p>[foo <a href=\"/uri\">bar</a>](/uri)</p>\n",
    "example": 517,
    "start_line": 7875,
    "end_line": 7879,
    "section": "Links"
  },
  {
    "markdown": "[foo *[bar [baz](/uri)](/uri)*](/uri)\n",
    "html": "<p>[foo <em>[bar <a href=\"/uri\">baz</a>](/uri)</em>](/uri)</p>\n",
    "example": 518,
    "start_line": 7882,
    "end_line": 7886,
    "section": "Links"
  },
  {
    "markdown": "![[[foo](uri1)](uri2)](uri3)\n",
    "html": "<p><img src=\"uri3\" alt=\"[foo](uri2)\" /></p>\n",
    "example": 519,
    "start_line": 7889,
    "end_line": 7893,
    "section": "Links"
  },
  {
    "markdown": "*[foo*](/uri)\n",
    "html": "<p>*<a href=\"/uri\">foo*</a></p>\n",
    "example": 520,
    "start_line": 7899,
    "end_line": 7903,
    "section": "Links"
  },
  {
    "markdown": "[foo *bar](baz*)\n",
    "html": "<p><a href=\"baz*\">foo *bar</a></p>\n",
    "example": 521,
    "start_line": 7906,
    "end_line": 7910,
    "section": "Links"
  },
  {
    "markdown": "*foo [bar* baz]\n",
    "html": "<p><em>foo [bar</em> baz]</p>\n",
    "example": 522,
    "start_line": 7916,
    "end_line": 7920,
    "section": "Links"
  },
  {
    "markdown": "[foo <bar attr=\"](baz)\">\n",
    "html": "<p>[foo <bar attr=\"](baz)\"></p>\n",
    "example": 523,
    "start_line": 7926,
    "end_line": 7930,
    "section": "Links"
  },
  {
    "markdown": "[foo`](/uri)`\n",
    "html": "<p>[foo<code>](/uri)</code></p>\n",
    "example": 524,
    "start_line": 7933,
    "end_line": 7937,
    "section": "Links"
  },
  {
    "markdown": "[foo<http://example.com/?search=](uri)>\n",
    "html": "<p>[foo<a href=\"http://example.com/?search=%5D(uri)\">http://example.com/?search=](uri)</a></p>\n",
    "example": 525,
    "start_line": 7940,
    "end_line": 7944,
    "section": "Links"
  },
  {
    "markdown": "[foo][bar]\n\n[bar]: /url \"title\"\n",
    "html": "<p><a href=\"/url\" title=\"title\">foo</a></p>\n",
    "example": 526,
    "start_line": 7978,
    "end_line": 7984,
    "section": "Links"
  },
  {
    "markdown": "[link [foo [bar]]][ref]\n\n[ref]: /uri\n",
    "html": "<p><a href=\"/uri\">link [foo [bar]]</a></p>\n",
    "example": 527,
    "start_line": 7993,
    "end_line": 7999,
    "section": "Links"
  },
  {
    "markdown": "[link \\[bar][ref]\n\n[ref]: /uri\n",
    "html": "<p><a href=\"/uri\">link [bar</a></p>\n",
    "example": 528,
    "start_line": 8002,
    "end_line": 8008,
    "section": "Links"
  },
  {
    "markdown": "[link *foo **bar** `#`*][ref]\n\n[ref]: /uri\n",
    "html": "<p><a href=\"/uri\">link <em>foo <strong>bar</strong> <code>#</code></em></a></p>\n",
    "example": 529,
    "start_line": 8013,
    "end_line": 8019,
    "section": "Links"
  },
  {
    "markdown": "[![moon](moon.jpg)][ref]\n\n[ref]: /uri\n",
    "html": "<p><a href=\"/uri\"><img src=\"moon.jpg\" alt=\"moon\" /></a></p>\n",
    "example": 530,
    "start_line": 8022,
    "end_line": 8028,
    "section": "Links"
  },
  {
    "markdown": "[foo [bar](/uri)][ref]\n\n[ref]: /uri\n",
    "html": "<p>[foo <a href=\"/uri\">bar</a>]<a href=\"/uri\">ref</a></p>\n",
    "example": 531,
    "start_line": 8033,
    "end_line": 8039,
    "section": "Links"
  },
  {
    "markdown": "[foo *bar [baz][ref]*][ref]\n\n[ref]: /uri\n",
    "html": "<p>[foo <em>bar <a href=\"/uri\">baz</a></em>]<a href=\"/uri\">ref</a></p>\n",
    "example": 532,
    "start_line": 8042,
    "end_line": 8048,
    "section": "Links"
  },
  {
    "markdown": "*[foo*][ref]\n\n[ref]: /uri\n",
    "html": "<p>*<a href=\"/uri\">foo*</a></p>\n",
    "example": 533,
    "start_line": 8057,
    "end_line": 8063,
    "section": "Links"
  },
  {
    "markdown": "[foo *bar][ref]*\n\n[ref]: /uri\n",
    "html": "<p><a href=\"/uri\">foo *bar</a>*</p>\n",
    "example": 534,
    "start_line": 8066,
    "end_line": 8072,
    "section": "Links"
  },
  {
    "markdown": "[foo <bar attr=\"][ref]\">\n\n[ref]: /uri\n",
    "html": "<p>[foo <bar attr=\"][ref]\"></p>\n",
    "example": 535,
    "start_line": 8078,
    "end_line": 8084,
    "section": "Links"
  },
  {
    "markdown": "[foo`][ref]`\n\n[ref]: /uri\n",
    "html": "<p>[foo<code>][ref]</code></p>\n",
    "example": 536,
    "start_line": 8087,
    "end_line": 8093,
    "section": "Links"
  },
  {
    "markdown": "[foo<http://example.com/?search=][ref]>\n\n[ref]: /uri\n",
    "html": "<p>[foo<a href=\"http://example.com/?search=%5D%5Bref%5D\">http://example.com/?search=][ref]</a></p>\n",
    "example": 537,
    "start_line": 8096,
    "end_line": 8102,
    "section": "Links"
  },
  {
    "markdown": "[foo][BaR]\n\n[bar]: /url \"title\"\n",
    "html": "<p><a href=\"/url\" title=\"title\">foo</a></p>\n",
    "example": 538,
    "start_line": 8107,
    "end_line": 8113,
    "section": "Links"
  },
  {
    "markdown": "[ẞ]\n\n[SS]: /url\n",
    "html": "<p><a href=\"/url\">ẞ</a></p>\n",
    "example": 539,
    "start_line": 8118,
    "end_line": 8124,
    "section": "Links"
  },
  {
    "markdown": "[Foo\n  bar]: /url\n\n[Baz][Foo bar]\n",
    "html": "<p><a href=\"/url\">Baz</a></p>\n",
    "example": 540,
    "start_line": 8130,
    "end_line": 8137,
    "section": "Links"
  },
  {
    "markdown": "[foo] [bar]\n\n[bar]: /url \"title\"\n",
    "html": "<p>[foo] <a href=\"/url\" title=\"title\">bar</a></p>\n",
    "example": 541,
    "start_line": 8143,
    "end_line": 8149,
    "section": "Links"
  },
  {
    "markdown": "[foo]\n[bar]\n\n[bar]: /url \"title\"\n",
    "html": "<p>[foo]\n<a href=\"/url\" title=\"title\">bar</a></p>\n",
    "example": 542,
    "start_line": 8152,
    "end_line": 8160,
    "section": "Links"
  },
  {
    "markdown": "[foo]: /url1\n\n[foo]: /url2\n\n[bar][foo]\n",
    "html": "<p><a href=\"/url1\">bar</a></p>\n",
    "example": 543,
    "start_line": 8193,
    "end_line": 8201,
    "section": "Links"
  },
  {
    "markdown": "[bar][foo\\!]\n\n[foo!]: /url\n",
    "html": "<p>[bar][foo!]</p>\n",
    "example": 544,
    "start_line": 8208,
    "end_line": 8214,
    "section": "Links"
  },
  {
    "markdown": "[foo][ref[]\n\n[ref[]: /uri\n",
    "html": "<p>[foo][ref[]</p>\n<p>[ref[]: /uri</p>\n",
    "example": 545,
    "start_line": 8220,
    "end_line": 8227,
    "section": "Links"
  },
  {
    "markdown": "[foo][ref[bar]]\n\n[ref[bar]]: /uri\n",
    "html": "<p>[foo][ref[bar]]</p>\n<p>[ref[bar]]: /uri</p>\n",
    "example": 546,
    "start_line": 8230,
    "end_line": 8237,
    "section": "Links"
  },
  {
    "markdown": "[[[foo]]]\n\n[[[foo]]]: /url\n",
    "html": "<p>[[[foo]]]</p>\n<p>[[[foo]]]: /url</p>\n",
    "example": 547,
    "start_line": 8240,
    "end_line": 8247,
    "section": "Links"
  },
  {
    "markdown": "[foo][ref\\[]\n\n[ref\\[]: /uri\n",
    "html": "<p><a href=\"/uri\">foo</a></p>\n",
    "example": 548,
    "start_line": 8250,
    "end_line": 8256,
    "section": "Links"
  },
  {
    "markdown": "[bar\\\\]: /uri\n\n[bar\\\\]\n",
    "html": "<p><a href=\"/uri\">bar\\</a></p>\n",
    "example": 549,
    "start_line": 8261,
    "end_line": 8267,
    "section": "Links"
  },
  {
    "markdown": "[]\n\n[]: /uri\n",
    "html": "<p>[]</p>\n<p>[]: /uri</p>\n",
    "example": 550,
    "start_line": 8273,
    "end_line": 8280,
    "section": "Links"
  },
  {
    "markdown": "[\n ]\n\n[\n ]: /uri\n",
    "html": "<p>[\n]</p>\n<p>[\n]: /uri</p>\n",
    "example": 551,
    "start_line": 8283,
    "end_line": 8294,
    "section": "Links"
  },
  {
    "markdown": "[foo][]\n\n[foo]: /url \"title\"\n",
    "html": "<p><a href=\"/url\" title=\"title\">foo</a></p>\n",
    "example": 552,
    "start_line": 8306,
    "end_line": 8312,
    "section": "Links"
  },
  {
    "markdown": "[*foo* bar][]\n\n[*foo* bar]: /url \"title\"\n",
    "html": "<p><a href=\"/url\" title=\"title\"><em>foo</em> bar</a></p>\n",
    "example": 553,
    "start_line": 8315,
    "end_line": 8321,
    "section": "Links"
  },
  {
    "markdown": "[Foo][]\n\n[foo]: /url \"title\"\n",
    "html": "<p><a href=\"/url\" title=\"title\">Foo</a></p>\n",
    "example": 554,
    "start_line": 8326,
    "end_line": 8332,
    "section": "Links"
  },
  {
    "markdown": "[foo] \n[]\n\n[foo]: /url \"title\"\n",
    "html": "<p><a href=\"/url\" title=\"title\">foo</a>\n[]</p>\n",
    "example": 555,
    "start_line": 8339,
    "end_line": 8347,
    "section": "Links"
  },
  {
    "markdown": "[foo]\n\n[foo]: /url \"title\"\n",
    "html": "<p><a href=\"/url\" title=\"title\">foo</a></p>\n",
    "example": 556,
    "start_line": 8359,
    "end_line": 8365,
    "section": "Links"
  },
  {
    "markdown": "[*foo* bar]\n\n[*foo* bar]: /url \"title\"\n",
    "html": "<p><a href=\"/url\" title=\"title\"><em>foo</em> bar</a></p>\n",
    "example": 557,
    "start_line": 8368,
    "end_line": 8374,
    "section": "Links"
  },
  {
    "markdown": "[[*foo* bar]]\n\n[*foo* bar]: /url \"title\"\n",
    "html": "<p>[<a href=\"/url\" title=\"title\"><em>foo</em> bar</a>]</p>\n",
    "example": 558,
    "start_line": 8377,
    "end_line": 8383,
    "section": "Links"
  },
  {
    "markdown": "[[bar [foo]\n\n[foo]: /url\n",
    "html": "<p>[[bar <a href=\"/url\">foo</a></p>\n",
    "example": 559,
    "start_line": 8386,
    "end_line": 8392,
    "section": "Links"
  },
  {
    "markdown": "[Foo]\n\n[foo]: /url \"title\"\n",
    "html": "<p><a href=\"/url\" title=\"title\">Foo</a></p>\n",
    "example": 560,
    "start_line": 8397,
    "end_line": 8403,
    "section": "Links"
  },
  {
    "markdown": "[foo] bar\n\n[foo]: /url\n",
    "html": "<p><a href=\"/url\">foo</a> bar</p>\n",
    "example": 561,
    "start_line": 8408,
    "end_line": 8414,
    "section": "Links"
  },
  {
    "markdown": "\\[foo]\n\n[foo]: /url \"title\"\n",
    "html": "<p>[foo]</p>\n",
    "example": 562,
    "start_line": 8420,
    "end_line": 8426,
    "section": "Links"
  },
  {
    "markdown": "[foo*]: /url\n\n*[foo*]\n",
    "html": "<p>*<a href=\"/url\">foo*</a></p>\n",
    "example": 563,
    "start_line": 8432,
    "end_line": 8438,
    "section": "Links"
  },
  {
    "markdown": "[foo][bar]\n\n[foo]: /url1\n[bar]: /url2\n",
    "html": "<p><a href=\"/url2\">foo</a></p>\n",
    "example": 564,
    "start_line": 8444,
    "end_line": 8451,
    "section": "Links"
  },
  {
    "markdown": "[foo][]\n\n[foo]: /url1\n",
    "html": "<p><a href=\"/url1\">foo</a></p>\n",
    "example": 565,
    "start_line": 8453,
    "end_line": 8459,
    "section": "Links"
  },
  {
    "markdown": "[foo]()\n\n[foo]: /url1\n",
    "html": "<p><a href=\"\">foo</a></p>\n",
    "example": 566,
    "start_line": 8463,
    "end_line": 8469,
    "section": "Links"
  },
  {
    "markdown": "[foo](not a link)\n\n[foo]: /url1\n",
    "html": "<p><a href=\"/url1\">foo</a>(not a link)</p>\n",
    "example": 567,
    "start_line": 8471,
    "end_line": 8477,
    "section": "Links"
  },
  {
    "markdown": "[foo][bar][baz]\n\n[baz]: /url\n",
    "html": "<p>[foo]<a href=\"/url\">bar</a></p>\n",
    "example": 568,
    "start_line": 8482,
    "end_line": 8488,
    "section": "Links"
  },
  {
    "markdown": "[foo][bar][baz]\n\n[baz]: /url1\n[bar]: /url2\n",
    "html": "<p><a href=\"/url2\">foo</a><a href=\"/url1\">baz</a></p>\n",
    "example": 569,
    "start_line": 8494,
    "end_line": 8501,
    "section": "Links"
  },
  {
    "markdown": "[foo][bar][baz]\n\n[baz]: /url1\n[foo]: /url2\n",
    "html": "<p>[foo]<a href=\"/url1\">bar</a></p>\n",
    "example": 570,
    "start_line": 8507,
    "end_line": 8514,
    "section": "Links"
  },
  {
    "markdown": "![foo](/url \"title\")\n",
    "html": "<p><img src=\"/url\" alt=\"foo\" title=\"title\" /></p>\n",
    "example": 571,
    "start_line": 8530,
    "end_line": 8534,
    "section": "Images"
  },
  {
    "markdown": "![foo *bar*]\n\n[foo *bar*]: train.jpg \"train & tracks\"\n",
    "html": "<p><img src=\"train.jpg\" alt=\"foo bar\" title=\"train &amp; tracks\" /></p>\n",
    "example": 572,
    "start_line": 8537,
    "end_line": 8543,
    "section": "Images"
  },
  {
    "markdown": "![foo ![bar](/url)](/url2)\n",
    "html": "<p><img src=\"/url2\" alt=\"foo bar\" /></p>\n",
    "example": 573,
    "start_line": 8546,
    "end_line": 8550,
    "section": "Images"
  },
  {
    "markdown": "![foo [bar](/url)](/url2)\n",
    "html": "<p><img src=\"/url2\" alt=\"foo bar\" /></p>\n",
    "example": 574,
    "start_line": 8553,
    "end_line": 8557,
    "section": "Images"
  },
  {
    "markdown": "![foo *bar*][]\n\n[foo *bar*]: train.jpg \"train & tracks\"\n",
    "html": "<p><img src=\"train.jpg\" alt=\"foo bar\" title=\"train &amp; tracks\" /></p>\n",
    "example": 575,
    "start_line": 8567,
    "end_line": 8573,
    "section": "Images"
  },
  {
    "markdown": "![foo *bar*][foobar]\n\n[FOOBAR]: train.jpg \"train & tracks\"\n",
    "html": "<p><img src=\"train.jpg\" alt=\"foo bar\" title=\"train &amp; tracks\" /></p>\n",
    "example": 576,
    "start_line": 8576,
    "end_line": 8582,
    "section": "Images"
  },
  {
    "markdown": "![foo](train.jpg)\n",
    "html": "<p><img src=\"train.jpg\" alt=\"foo\" /></p>\n",
    "example": 577,
    "start_line": 8585,
    "end_line": 8589,
    "section": "Images"
  },
  {
    "markdown": "My ![foo bar](/path/to/train.jpg  \"title\"   )\n",
    "html": "<p>My <img src=\"/path/to/train.jpg\" alt=\"foo bar\" title=\"title\" /></p>\n",
    "example": 578,
    "start_line": 8592,
    "end_line": 8596,
    "section": "Images"
  },
  {
    "markdown": "![foo](<url>)\n",
    "html": "<p><img src=\"url\" alt=\"foo\" /></p>\n",
    "example": 579,
    "start_line": 8599,
    "end_line": 8603,
    "section": "Images"
  },
  {
    "markdown": "![](/url)\n",
    "html": "<p><img src=\"/url\" alt=\"\" /></p>\n",
    "example": 580,
    "start_line": 8606,
    "end_line": 8610,
    "section": "Images"
  },
  {
    "markdown": "![foo][bar]\n\n[bar]: /url\n",
    "html": "<p><img src=\"/url\" alt=\"foo\" /></p>\n",
    "example": 581,
    "start_line": 8615,
    "end_line": 8621,
    "section": "Images"
  },
  {
    "markdown": "![foo][bar]\n\n[BAR]: /url\n",
    "html": "<p><img src=\"/url\" alt=\"foo\" /></p>\n",
    "example": 582,
    "start_line": 8624,
    "end_line": 8630,
    "section": "Images"
  },
  {
    "markdown": "![foo][]\n\n[foo]: /url \"title\"\n",
    "html": "<p><img src=\"/url\" alt=\"foo\" title=\"title\" /></p>\n",
    "example": 583,
    "start_line": 8635,
    "end_line": 8641,
    "section": "Images"
  },
  {
    "markdown": "![*foo* bar][]\n\n[*foo* bar]: /url \"title\"\n",
    "html": "<p><img src=\"/url\" alt=\"foo bar\" title=\"title\" /></p>\n",
    "example": 584,
    "start_line": 8644,
    "end_line": 8650,
    "section": "Images"
  },
  {
    "markdown": "![Foo][]\n\n[foo]: /url \"title\"\n",
    "html": "<p><img src=\"/url\" alt=\"Foo\" title=\"title\" /></p>\n",
    "example": 585,
    "start_line": 8655,
    "end_line": 8661,
    "section": "Images"
  },
  {
    "markdown": "![foo] \n[]\n\n[foo]: /url \"title\"\n",
    "html": "<p><img src=\"/url\" alt=\"foo\" title=\"title\" />\n[]</p>\n",
    "example": 586,
    "start_line": 8667,
    "end_line": 8675,
    "section": "Images"
  },
  {
    "markdown": "![foo]\n\n[foo]: /url \"title\"\n",
    "html": "<p><img src=\"/url\" alt=\"foo\" title=\"title\" /></p>\n",
    "example": 587,
    "start_line": 8680,
    "end_line": 8686,
    "section": "Images"
  },
  {
    "markdown": "![*foo* bar]\n\n[*foo* bar]: /url \"title\"\n",
    "html": "<p><img src=\"/url\" alt=\"foo bar\" title=\"title\" /></p>\n",
    "example": 588,
    "start_line": 8689,
    "end_line": 8695,
    "section": "Images"
  },
  {
    "markdown": "![[foo]]\n\n[[foo]]: /url \"title\"\n",
    "html": "<p>![[foo]]</p>\n<p>[[foo]]: /url &quot;title&quot;</p>\n",
    "example": 589,
    "start_line": 8700,
    "end_line": 8707,
    "section": "Images"
  },
  {
    "markdown": "![Foo]\n\n[foo]: /url \"title\"\n",
    "html": "<p><img src=\"/url\" alt=\"Foo\" title=\"title\" /></p>\n",
    "example": 590,
    "start_line": 8712,
    "end_line": 8718,
    "section": "Images"
  },
  {
    "markdown": "!\\[foo]\n\n[foo]: /url \"title\"\n",
    "html": "<p>![foo]</p>\n",
    "example": 591,
    "start_line": 8724,
    "end_line": 8730,
    "section": "Images"
  },
  {
    "markdown": "\\![foo]\n\n[foo]: /url \"title\"\n",
    "html": "<p>!<a href=\"/url\" title=\"title\">foo</a></p>\n",
    "example": 592,
    "start_line": 8736,
    "end_line": 8742,
    "section": "Images"
  },
  {
    "markdown": "<http://foo.bar.baz>\n",
    "html": "<p><a href=\"http://foo.bar.baz\">http://foo.bar.baz</a></p>\n",
    "example": 593,
    "start_line": 8769,
    "end_line": 8773,
    "section": "Autolinks"
  },
  {
    "markdown": "<http://foo.bar.baz/test?q=hello&id=22&boolean>\n",
    "html": "<p><a href=\"http://foo.bar.baz/test?q=hello&amp;id=22&amp;boolean\">http://foo.bar.baz/test?q=hello&amp;id=22&amp;boolean</a></p>\n",
    "example": 594,
    "start_line": 8776,
    "end_line": 8780,
    "section": "Autolinks"
  },
  {
    "markdown": "<irc://foo.bar:2233/baz>\n",
    "html": "<p><a href=\"irc://foo.bar:2233/baz\">irc://foo.bar:2233/baz</a></p>\n",
    "example": 595,
    "start_line": 8783,
    "end_line": 8787,
    "section": "Autolinks"
  },
  {
    "markdown": "<MAILTO:FOO@BAR.BAZ>\n",
    "html": "<p><a href=\"MAILTO:FOO@BAR.BAZ\">MAILTO:FOO@BAR.BAZ</a></p>\n",
    "example": 596,
    "start_line": 8792,
    "end_line": 8796,
    "section": "Autolinks"
  },
  {
    "markdown": "<a+b+c:d>\n",
    "html": "<p><a href=\"a+b+c:d\">a+b+c:d</a></p>\n",
    "example": 597,
    "start_line": 8804,
    "end_line": 8808,
    "section": "Autolinks"
  },
  {
    "markdown": "<made-up-scheme://foo,bar>\n",
    "html": "<p><a href=\"made-up-scheme://foo,bar\">made-up-scheme://foo,bar</a></p>\n",
    "example": 598,
    "start_line": 8811,
    "end_line": 8815,
    "section": "Autolinks"
  },
  {
    "markdown": "<http://../>\n",
    "html": "<p><a href=\"http://../\">http://../</a></p>\n",
    "example": 599,
    "start_line": 8818,
    "end_line": 8822,
    "section": "Autolinks"
  },
  {
    "markdown": "<localhost:5001/foo>\n",
    "html": "<p><a href=\"localhost:5001/foo\">localhost:5001/foo</a></p>\n",
    "example": 600,
    "start_line": 8825,
    "end_line": 8829,
    "section": "Autolinks"
  },
  {
    "markdown": "<http://foo.bar/baz bim>\n",
    "html": "<p>&lt;http://foo.bar/baz bim&gt;</p>\n",
    "example": 601,
    "start_line": 8834,
    "end_line": 8838,
    "section": "Autolinks"
  },
  {
    "markdown": "<http://example.com/\\[\\>\n",
    "html": "<p><a href=\"http://example.com/%5C%5B%5C\">http://example.com/\\[\\</a></p>\n",
    "example": 602,
    "start_line": 8843,
    "end_line": 8847,
    "section": "Autolinks"
  },
  {
    "markdown": "<foo@bar.example.com>\n",
    "html": "<p><a href=\"mailto:foo@bar.example.com\">foo@bar.example.com</a></p>\n",
    "example": 603,
    "start_line": 8865,
    "end_line": 8869,
    "section": "Autolinks"
  },
  {
    "markdown": "<foo+special@Bar.baz-bar0.com>\n",
    "html": "<p><a href=\"mailto:foo+special@Bar.baz-bar0.com\">foo+special@Bar.baz-bar0.com</a></p>\n",
    "example": 604,
    "start_line": 8872,
    "end_line": 8876,
    "section": "Autolinks"
  },
  {
    "markdown": "<foo\\+@bar.example.com>\n",
    "html": "<p>&lt;foo+@bar.example.com&gt;</p>\n",
    "example": 605,
    "start_line": 8881,
    "end_line": 8885,
    "section": "Autolinks"
  },
  {
    "markdown": "<>\n",
    "html": "<p>&lt;&gt;</p>\n",
    "example": 606,
    "start_line": 8890,
    "end_line": 8894,
    "section": "Autolinks"
  },
  {
    "markdown": "< http://foo.bar >\n",
    "html": "<p>&lt; http://foo.bar &gt;</p>\n",
    "example": 607,
    "start_line": 8897,
    "end_line": 8901,
    "section": "Autolinks"
  },
  {
    "markdown": "<m:abc>\n",
    "html": "<p>&lt;m:abc&gt;</p>\n",
    "example": 608,
    "start_line": 8904,
    "end_line": 8908,
    "section": "Autolinks"
  },
  {
    "markdown": "<foo.bar.baz>\n",
    "html": "<p>&lt;foo.bar.baz&gt;</p>\n",
    "example": 609,
    "start_line": 8911,
    "end_line": 8915,
    "section": "Autolinks"
  },
  {
    "markdown": "http://example.com\n",
    "html": "<p>http://example.com</p>\n",
    "example": 610,
    "start_line": 8918,
    "end_line": 8922,
    "section": "Autolinks"
  },
  {
    "markdown": "foo@bar.example.com\n",
    "html": "<p>foo@bar.example.com</p>\n",
    "example": 611,
    "start_line": 8925,
    "end_line": 8929,
    "section": "Autolinks"
  },
  {
    "markdown": "<a><bab><c2c>\n",
    "html": "<p><a><bab><c2c></p>\n",
    "example": 612,
    "start_line": 9006,
    "end_line": 9010,
    "section": "Raw HTML"
  },
  {
    "markdown": "<a/><b2/>\n",
    "html": "<p><a/><b2/></p>\n",
    "example": 613,
    "start_line": 9015,
    "end_line": 9019,
    "section": "Raw HTML"
  },
  {
    "markdown": "<a  /><b2\ndata=\"foo\" >\n",
    "html": "<p><a  /><b2\ndata=\"foo\" ></p>\n",
    "example": 614,
    "start_line": 9024,
    "end_line": 9030,
    "section": "Raw HTML"
  },
  {
    "markdown": "<a foo=\"bar\" bam = 'baz <em>\"</em>'\n_boolean zoop:33=zoop:33 />\n",
    "html": "<p><a foo=\"bar\" bam = 'baz <em>\"</em>'\n_boolean zoop:33=zoop:33 /></p>\n",
    "example": 615,
    "start_line": 9035,
    "end_line": 9041,
    "section": "Raw HTML"
  },
  {
    "markdown": "Foo <responsive-image src=\"foo.jpg\" />\n",
    "html": "<p>Foo <responsive-image src=\"foo.jpg\" /></p>\n",
    "example": 616,
    "start_line": 9046,
    "end_line": 9050,
    "section": "Raw HTML"
  },
  {
    "markdown": "<33> <__>\n",
    "html": "<p>&lt;33&gt; &lt;__&gt;</p>\n",
    "example": 617,
    "start_line": 9055,
    "end_line": 9059,
    "section": "Raw HTML"
  },
  {
    "markdown": "<a h*#ref=\"hi\">\n",
    "html": "<p>&lt;a h*#ref=&quot;hi&quot;&gt;</p>\n",
    "example": 618,
    "start_line": 9064,
    "end_line": 9068,
    "section": "Raw HTML"
  },
  {
    "markdown": "<a href=\"hi'> <a href=hi'>\n",
    "html": "<p>&lt;a href=&quot;hi'&gt; &lt;a href=hi'&gt;</p>\n",
    "example": 619,
    "start_line": 9073,
    "end_line": 9077,
    "section": "Raw HTML"
  },
  {
    "markdown": "< a><\nfoo><bar/ >\n<foo bar=baz\nbim!bop />\n",
    "html": "<p>&lt; a&gt;&lt;\nfoo&gt;&lt;bar/ &gt;\n&lt;foo bar=baz\nbim!bop /&gt;</p>\n",
    "example": 620,
    "start_line": 9082,
    "end_line": 9092,
    "section": "Raw HTML"
  },
  {
    "markdown": "<a href='bar'title=title>\n",
    "html": "<p>&lt;a href='bar'title=title&gt;</p>\n",
    "example": 621,
    "start_line": 9097,
    "end_line": 9101,
    "section": "Raw HTML"
  },
  {
    "markdown": "</a></foo >\n",
    "html": "<p></a></foo ></p>\n",
    "example": 622,
    "start_line": 9106,
    "end_line": 9110,
    "section": "Raw HTML"
  },
  {
    "markdown": "</a href=\"foo\">\n",
    "html": "<p>&lt;/a href=&quot;foo&quot;&gt;</p>\n",
    "example": 623,
    "start_line": 9115,
    "end_line": 9119,
    "section": "Raw HTML"
  },
  {
    "markdown": "foo <!-- this is a\ncomment - with hyphen -->\n",
    "html": "<p>foo <!-- this is a\ncomment - with hyphen --></p>\n",
    "example": 624,
    "start_line": 9124,
    "end_line": 9130,
    "section": "Raw HTML"
  },
  {
    "markdown": "foo <!-- not a comment -- two hyphens -->\n",
    "html": "<p>foo &lt;!-- not a comment -- two hyphens --&gt;</p>\n",
    "example": 625,
    "start_line": 9133,
    "end_line": 9137,
    "section": "Raw HTML"
  },
  {
    "markdown": "foo <!--> foo -->\n\nfoo <!-- foo--->\n",
    "html": "<p>foo &lt;!--&gt; foo --&gt;</p>\n<p>foo &lt;!-- foo---&gt;</p>\n",
    "example": 626,
    "start_line": 9142,
    "end_line": 9149,
    "section": "Raw HTML"
  },
  {
    "markdown": "foo <?php echo $a; ?>\n",
    "html": "<p>foo <?php echo $a; ?></p>\n",
    "example": 627,
    "start_line": 9154,
    "end_line": 9158,
    "section": "Raw HTML"
  },
  {
    "markdown": "foo <!ELEMENT br EMPTY>\n",
    "html": "<p>foo <!ELEMENT br EMPTY></p>\n",
    "example": 628,
    "start_line": 9163,
    "end_line": 9167,
    "section": "Raw HTML"
  },
  {
    "markdown": "foo <![CDATA[>&<]]>\n",
    "html": "<p>foo <![CDATA[>&<]]></p>\n",
    "example": 629,
    "start_line": 9172,
    "end_line": 9176,
    "section": "Raw HTML"
  },
  {
    "markdown": "foo <a href=\"&ouml;\">\n",
    "html": "<p>foo <a href=\"&ouml;\"></p>\n",
    "example": 630,
    "start_line": 9182,
    "end_line": 9186,
    "section": "Raw HTML"
  },
  {
    "markdown": "foo <a href=\"\\*\">\n",
    "html": "<p>foo <a href=\"\\*\"></p>\n",
    "example": 631,
    "start_line": 9191,
    "end_line": 9195,
    "section": "Raw HTML"
  },
  {
    "markdown": "<a href=\"\\\"\">\n",
    "html": "<p>&lt;a href=&quot;&quot;&quot;&gt;</p>\n",
    "example": 632,
    "start_line": 9198,
    "end_line": 9202,
    "section": "Raw HTML"
  },
  {
    "markdown": "foo  \nbaz\n",
    "html": "<p>foo<br />\nbaz</p>\n",
    "example": 633,
    "start_line": 9212,
    "end_line": 9218,
    "section": "Hard line breaks"
  },
  {
    "markdown": "foo\\\nbaz\n",
    "html": "<p>foo<br />\nbaz</p>\n",
    "example": 634,
    "start_line": 9224,
    "end_line": 9230,
    "section": "Hard line breaks"
  },
  {
    "markdown": "foo       \nbaz\n",
    "html": "<p>foo<br />\nbaz</p>\n",
    "example": 635,
    "start_line": 9235,
    "end_line": 9241,
    "section": "Hard line breaks"
  },
  {
    "markdown": "foo  \n     bar\n",
    "html": "<p>foo<br />\nbar</p>\n",
    "example": 636,
    "start_line": 9246,
    "end_line": 9252,
    "section": "Hard line breaks"
  },
  {
    "markdown": "foo\\\n     bar\n",
    "html": "<p>foo<br />\nbar</p>\n",
    "example": 637,
    "start_line": 9255,
    "end_line": 9261,
    "section": "Hard line breaks"
  },
  {
    "markdown": "*foo  \nbar*\n",
    "html": "<p><em>foo<br />\nbar</em></p>\n",
    "example": 638,
    "start_line": 9267,
    "end_line": 9273,
    "section": "Hard line breaks"
  },
  {
    "markdown": "*foo\\\nbar*\n",
    "html": "<p><em>foo<br />\nbar</em></p>\n",
    "example": 639,
    "start_line": 9276,
    "end_line": 9282,
    "section": "Hard line breaks"
  },
  {
    "markdown": "`code  \nspan`\n",
    "html": "<p><code>code   span</code></p>\n",
    "example": 640,
    "start_line": 9287,
    "end_line": 9292,
    "section": "Hard line breaks"
  },
  {
    "markdown": "`code\\\nspan`\n",
    "html": "<p><code>code\\ span</code></p>\n",
    "example": 641,
    "start_line": 9295,
    "end_line": 9300,
    "section": "Hard line breaks"
  },
  {
    "markdown": "<a href=\"foo  \nbar\">\n",
    "html": "<p><a href=\"foo  \nbar\"></p>\n",
    "example": 642,
    "start_line": 9305,
    "end_line": 9311,
    "section": "Hard line breaks"
  },
  {
    "markdown": "<a href=\"foo\\\nbar\">\n",
    "html": "<p><a href=\"foo\\\nbar\"></p>\n",
    "example": 643,
    "start_line": 9314,
    "end_line": 9320,
    "section": "Hard line breaks"
  },
  {
    "markdown": "foo\\\n",
    "html": "<p>foo\\</p>\n",
    "example": 644,
    "start_line": 9327,
    "end_line": 9331,
    "section": "Hard line breaks"
  },
  {
    "markdown": "foo  \n",
    "html": "<p>foo</p>\n",
    "example": 645,
    "start_line": 9334,
    "end_line": 9338,
    "section": "Hard line breaks"
  },
  {
    "markdown": "### foo\\\n",
    "html": "<h3>foo\\</h3>\n",
    "example": 646,
    "start_line": 9341,
    "end_line": 9345,
    "section": "Hard line breaks"
  },
  {
    "markdown": "### foo  \n",
    "html": "<h3>foo</h3>\n",
    "example": 647,
    "start_line": 9348,
    "end_line": 9352,
    "section": "Hard line breaks"
  },
  {
    "markdown": "foo\nbaz\n",
    "html": "<p>foo\nbaz</p>\n",
    "example": 648,
    "start_line": 9363,
    "end_line": 9369,
    "section": "Soft line breaks"
  },
  {
    "markdown": "foo \n baz\n",
    "html": "<p>foo\nbaz</p>\n",
    "example": 649,
    "start_line": 9375,
    "end_line": 9381,
    "section": "Soft line breaks"
  },
  {
    "markdown": "hello $.;'there\n",
    "html": "<p>hello $.;'there</p>\n",
    "example": 650,
    "start_line": 9395,
    "end_line": 9399,
    "section": "Textual content"
  },
  {
    "markdown": "Foo χρῆν\n",
    "html": "<p>Foo χρῆν</p>\n",
    "example": 651,
    "start_line": 9402,
    "end_line": 9406,
    "section": "Textual content"
  },
  {
    "markdown": "Multiple     spaces\n",
    "html": "<p>Multiple     spaces</p>\n",
    "example": 652,
    "start_line": 9411,
    "end_line": 9415,
    "section": "Textual content"
  }
]
