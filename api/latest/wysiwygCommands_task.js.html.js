tui.util.defineNamespace("fedoc.content", {});
fedoc.content["wysiwygCommands_task.js.html"] = "      <div id=\"main\" class=\"main\">\n\n\n\n    \n    <section>\n        <article>\n            <pre class=\"prettyprint source linenums\"><code>/**\n * @fileoverview Implements Task WysiwygCommand\n * @author Sungho Kim(sungho-kim@nhnent.com) FE Development Team/NHN Ent.\n */\n\n'use strict';\n\nvar CommandManager = require('../commandManager');\n\n/**\n * Task\n * Add Task to selected wysiwyg editor content\n * @exports Task\n * @augments Command\n * @augments WysiwygCommand\n */\nvar Task = CommandManager.command('wysiwyg', /** @lends Task */{\n    name: 'Task',\n    keyMap: ['CTRL+T', 'META+T'],\n    /**\n     *  커맨드 핸들러\n     *  @param {WysiwygEditor} wwe WYsiwygEditor instance\n     */\n    exec: function(wwe) {\n        var range,\n            sq = wwe.getEditor();\n\n        range = sq.getSelection().cloneRange();\n\n        if (range.collapsed &amp;&amp; !sq.hasFormat('TABLE') &amp;&amp; !sq.hasFormat('PRE')) {\n            if (!sq.hasFormat('li')) {\n                wwe.unwrapBlockTag();\n                sq.makeUnorderedList();\n                range = sq.getSelection().cloneRange();\n            }\n\n            range = wwe.insertSelectionMarker(range);\n            wwe.getManager('task').formatTask(range.startContainer);\n            wwe.restoreSelectionMarker();\n        }\n\n        sq.focus();\n    }\n});\n\nmodule.exports = Task;\n</code></pre>\n        </article>\n    </section>\n\n\n\n</div>\n\n"