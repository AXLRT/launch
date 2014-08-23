(function() {
  var InlineEditor;

  InlineEditor = (function() {
    function InlineEditor() {}

    InlineEditor.prototype.initialize = function() {
      var editor;
      return editor = new MediumEditor(".inline-editor", {
        buttonLabels: "fontawesome",
        buttons: ['bold', 'italic', 'underline', 'anchor', 'unorderedlist', 'header1', 'header2', 'quote']
      });
    };

    return InlineEditor;

  })();

  $(function() {
    var inlineEditor;
    inlineEditor = new InlineEditor;
    return inlineEditor.initialize();
  });

}).call(this);
